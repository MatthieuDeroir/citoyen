import { z } from "zod";

const API_URL = "https://api.mistral.ai/v1/chat/completions";
const MODEL = "mistral-small-latest";
const TIMEOUT_MS = 15_000;

export const ouverteVerdictSchema = z.object({
  verdict: z.enum(["correct", "partial", "incorrect"]),
  score: z.number().int().min(0).max(100),
  feedback: z.string().min(1),
});
export type OuverteVerdict = z.infer<typeof ouverteVerdictSchema>;

export const trousVerdictSchema = z.object({
  blanks: z.array(
    z.object({
      index: z.number().int(),
      correct: z.boolean(),
      comment: z.string().optional(),
    }),
  ),
});
export type TrousVerdict = z.infer<typeof trousVerdictSchema>;

class MistralError extends Error {
  constructor(
    message: string,
    public retryable: boolean,
  ) {
    super(message);
  }
}

async function callMistral(messages: { role: string; content: string }[]): Promise<string> {
  const apiKey = process.env.MISTRAL_API_KEY;
  if (!apiKey) throw new MistralError("MISTRAL_API_KEY manquante", false);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        temperature: 0.2,
        max_tokens: 500,
        response_format: { type: "json_object" },
      }),
      signal: controller.signal,
    });
    if (!res.ok) {
      throw new MistralError(
        `Mistral HTTP ${res.status}`,
        res.status === 429 || res.status >= 500,
      );
    }
    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content;
    if (typeof content !== "string") throw new MistralError("réponse vide", true);
    return content;
  } finally {
    clearTimeout(timer);
  }
}

/** Appel avec 1 retry sur erreur transitoire, et 1 retry si le JSON est invalide. */
async function callWithRetries<T>(
  messages: { role: string; content: string }[],
  schema: z.ZodType<T>,
): Promise<T> {
  let raw: string;
  try {
    raw = await callMistral(messages);
  } catch (e) {
    if (e instanceof MistralError && e.retryable) {
      await new Promise((r) => setTimeout(r, 2000));
      raw = await callMistral(messages);
    } else {
      throw e;
    }
  }

  const first = safeParseJson(raw, schema);
  if (first.ok) return first.value;

  // le modèle a renvoyé un JSON invalide : on lui redemande une fois
  const retryRaw = await callMistral([
    ...messages,
    { role: "assistant", content: raw },
    {
      role: "user",
      content: "Ton JSON était invalide. Renvoie UNIQUEMENT le JSON demandé, sans autre texte.",
    },
  ]);
  const second = safeParseJson(retryRaw, schema);
  if (second.ok) return second.value;
  throw new MistralError("JSON invalide après retry", false);
}

function safeParseJson<T>(
  raw: string,
  schema: z.ZodType<T>,
): { ok: true; value: T } | { ok: false } {
  try {
    const parsed = schema.safeParse(JSON.parse(raw));
    return parsed.success ? { ok: true, value: parsed.data } : { ok: false };
  } catch {
    return { ok: false };
  }
}

const MAX_ANSWER_LENGTH = 1500;

export async function gradeOuverte(input: {
  question: string;
  expectedAnswer: string;
  keyPoints: string[];
  userAnswer: string;
}): Promise<OuverteVerdict> {
  const messages = [
    {
      role: "system",
      content: `Tu es correcteur pour l'examen civique de naturalisation française. Tu évalues la réponse d'un candidat en te basant UNIQUEMENT sur la réponse attendue et les points-clés fournis. Sois bienveillant sur la forme (fautes d'orthographe, formulation simple) mais strict sur le fond (faits, dates, noms). Une réponse qui couvre une partie des points-clés mérite "partial". Une réponse vide, hors-sujet ou factuellement fausse mérite "incorrect".
Réponds UNIQUEMENT en JSON valide avec exactement ces clés :
{"verdict": "correct" | "partial" | "incorrect", "score": <entier 0-100>, "feedback": "<2-3 phrases en français, en tutoyant le candidat : ce qui est juste, ce qui manque ou est faux>"}`,
    },
    {
      role: "user",
      content: `Question : ${input.question}
Réponse attendue : ${input.expectedAnswer}
Points-clés à vérifier : ${input.keyPoints.join(" ; ")}
Réponse du candidat : """${input.userAnswer.slice(0, MAX_ANSWER_LENGTH)}"""`,
    },
  ];
  return callWithRetries(messages, ouverteVerdictSchema);
}

export async function gradeTrousRemainder(input: {
  /** template avec les trous déjà validés remplacés par leur réponse */
  filledTemplate: string;
  /** trous restants à juger */
  toJudge: { index: number; accepted: string[]; candidat: string }[];
}): Promise<TrousVerdict> {
  const messages = [
    {
      role: "system",
      content: `Tu vérifies des réponses à un texte à trous sur le civisme français. Pour chaque trou, juge si la réponse du candidat est équivalente à l'une des réponses acceptées : synonyme, reformulation ou faute d'orthographe mineure = correct ; sens différent, fait faux ou réponse vide = incorrect.
Réponds UNIQUEMENT en JSON valide : {"blanks": [{"index": <n>, "correct": true|false, "comment": "<très courte explication si faux>"}]}`,
    },
    {
      role: "user",
      content: `Texte : ${input.filledTemplate}
Trous à juger : ${JSON.stringify(
        input.toJudge.map((t) => ({
          index: t.index,
          accepted: t.accepted,
          candidat: t.candidat.slice(0, 200),
        })),
      )}`,
    },
  ];
  return callWithRetries(messages, trousVerdictSchema);
}

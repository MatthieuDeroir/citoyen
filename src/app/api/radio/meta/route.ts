import { NextRequest, NextResponse } from "next/server";
import { connect as tlsConnect } from "node:tls";
import { getStation } from "@/lib/radio";

export const dynamic = "force-dynamic";
export const maxDuration = 15;

/**
 * Morceau en cours d'une webradio : lecture du bloc de métadonnées ICY du
 * flux Icecast (StreamTitle='ARTISTE - TITRE'), pochette via l'API de
 * recherche iTunes. Le client interroge cette route toutes les ~20 s.
 */

function readIcyTitle(host: string, mount: string): Promise<string | null> {
  return new Promise((resolve) => {
    const socket = tlsConnect({ host, port: 443, servername: host, timeout: 8000 });
    let buffer = Buffer.alloc(0);
    let metaint = -1;
    let headerEnd = -1;

    const finish = (value: string | null) => {
      socket.destroy();
      resolve(value);
    };

    socket.on("secureConnect", () => {
      socket.write(
        `GET /${mount} HTTP/1.0\r\nHost: ${host}\r\nIcy-MetaData: 1\r\nUser-Agent: Mozilla/5.0\r\n\r\n`,
      );
    });
    socket.on("timeout", () => finish(null));
    socket.on("error", () => finish(null));
    socket.on("data", (chunk: Buffer) => {
      buffer = Buffer.concat([buffer, chunk]);
      if (headerEnd < 0) {
        headerEnd = buffer.indexOf("\r\n\r\n");
        if (headerEnd < 0) return;
        const head = buffer.subarray(0, headerEnd).toString("latin1");
        const m = head.match(/icy-metaint:\s*(\d+)/i);
        if (!m) return finish(null);
        metaint = Number(m[1]);
      }
      const body = buffer.subarray(headerEnd + 4);
      if (body.length <= metaint) return;
      const metaLen = body[metaint] * 16;
      if (body.length < metaint + 1 + metaLen) return;
      const meta = body
        .subarray(metaint + 1, metaint + 1 + metaLen)
        .toString("utf8")
        .replace(/\0+$/, "");
      const title = meta.match(/StreamTitle='([^;]*)';/)?.[1] ?? null;
      finish(title);
    });
  });
}

async function findCover(query: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=1&country=FR`,
      { next: { revalidate: 3600 } },
    );
    const data = (await res.json()) as {
      results?: { artworkUrl100?: string }[];
    };
    const art = data.results?.[0]?.artworkUrl100;
    return art ? art.replace("100x100", "300x300") : null;
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const station = getStation(request.nextUrl.searchParams.get("station") ?? "");
  if (!station) {
    return NextResponse.json({ error: "station inconnue" }, { status: 404 });
  }

  const raw = await readIcyTitle(station.host, station.mount);
  if (!raw) return NextResponse.json({ artist: null, title: null, cover: null });

  const [artist, ...rest] = raw.split(" - ");
  const title = rest.join(" - ") || null;
  const cover = await findCover(raw);

  return NextResponse.json(
    { artist: artist?.trim() || null, title: title?.trim() || null, cover },
    { headers: { "Cache-Control": "no-store" } },
  );
}

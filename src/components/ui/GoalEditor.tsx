"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Pencil } from "lucide-react";
import { setDailyGoal } from "@/actions/stats";

const GOALS = [20, 50, 80, 120];

/** Objectif XP quotidien paramétrable, affiché sur la carte objectif. */
export function GoalEditor({ current }: { current: number }) {
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  function choose(goal: number) {
    if (goal === current) {
      setOpen(false);
      return;
    }
    startTransition(async () => {
      await setDailyGoal(goal);
      router.refresh();
      setOpen(false);
    });
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary"
      >
        <Pencil className="size-3.5" />
        Objectif : {current} XP / jour
      </button>
    );
  }

  return (
    <div className={`flex flex-wrap gap-2 ${pending ? "opacity-50" : ""}`}>
      {GOALS.map((goal) => (
        <button
          key={goal}
          onClick={() => choose(goal)}
          disabled={pending}
          className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
            goal === current
              ? "bg-primary text-on-primary"
              : "bg-primary-soft text-primary"
          }`}
        >
          {goal} XP
        </button>
      ))}
    </div>
  );
}

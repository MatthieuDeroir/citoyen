"use client";

import { useEffect, useState } from "react";
import { Bell, BellOff } from "lucide-react";
import { savePushSubscription, deletePushSubscription } from "@/actions/push";

function urlBase64ToUint8Array(base64: string) {
  const padding = "=".repeat((4 - (base64.length % 4)) % 4);
  const raw = atob((base64 + padding).replace(/-/g, "+").replace(/_/g, "/"));
  return Uint8Array.from([...raw].map((c) => c.charCodeAt(0)));
}

type State = "unsupported" | "loading" | "off" | "on" | "denied";

/** Active/désactive les rappels quotidiens de streak (Web Push). */
export function ReminderSettings() {
  const [state, setState] = useState<State>("loading");

  useEffect(() => {
    if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
      setState("unsupported");
      return;
    }
    if (Notification.permission === "denied") {
      setState("denied");
      return;
    }
    navigator.serviceWorker.ready
      .then((reg) => reg.pushManager.getSubscription())
      .then((sub) => setState(sub ? "on" : "off"))
      .catch(() => setState("unsupported"));
  }, []);

  async function enable() {
    setState("loading");
    try {
      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        setState(permission === "denied" ? "denied" : "off");
        return;
      }
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
        ),
      });
      await savePushSubscription(sub.toJSON() as {
        endpoint: string;
        keys: { p256dh: string; auth: string };
      });
      setState("on");
    } catch {
      setState("off");
    }
  }

  async function disable() {
    setState("loading");
    try {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.getSubscription();
      if (sub) {
        await deletePushSubscription(sub.endpoint);
        await sub.unsubscribe();
      }
      setState("off");
    } catch {
      setState("on");
    }
  }

  if (state === "unsupported") return null;

  return (
    <section className="flex items-center gap-4 rounded-card border border-border bg-surface p-4 shadow-sm">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
        {state === "on" ? <Bell className="size-5" /> : <BellOff className="size-5" />}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-semibold">Rappels quotidiens</p>
        <p className="text-sm text-muted">
          {state === "denied"
            ? "Notifications bloquées — autorise-les dans les réglages du navigateur."
            : "Une notification si ta série est en jeu et que l'objectif du jour n'est pas atteint."}
        </p>
      </div>
      {state !== "denied" && (
        <button
          onClick={state === "on" ? disable : enable}
          disabled={state === "loading"}
          role="switch"
          aria-checked={state === "on"}
          aria-label="Rappels quotidiens"
          className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
            state === "on" ? "bg-primary" : "bg-border"
          } ${state === "loading" ? "opacity-50" : ""}`}
        >
          <span
            className={`absolute top-0.5 size-6 rounded-full bg-white shadow transition-[left] ${
              state === "on" ? "left-[calc(100%-1.625rem)]" : "left-0.5"
            }`}
          />
        </button>
      )}
    </section>
  );
}

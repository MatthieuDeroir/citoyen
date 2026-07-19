"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { Pause } from "lucide-react";

interface MarseillaiseContextValue {
  playing: boolean;
  time: number;
  duration: number;
  toggle: () => void;
  seek: (t: number) => void;
}

const Ctx = createContext<MarseillaiseContextValue | null>(null);

export function useMarseillaise(): MarseillaiseContextValue {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useMarseillaise hors du MarseillaiseProvider");
  return ctx;
}

/**
 * Héberge l'élément audio de La Marseillaise au niveau du layout : la lecture
 * survit à la navigation. Hors de l'accueil, un petit bouton flottant permet
 * de couper la musique pendant l'entraînement.
 */
export function MarseillaiseProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const pathname = usePathname();

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) audio.play();
    else audio.pause();
  }

  function seek(t: number) {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = t;
    audio.play();
  }

  const showMini = playing && pathname !== "/dashboard";

  return (
    <Ctx.Provider value={{ playing, time, duration, toggle, seek }}>
      {children}
      <audio
        ref={audioRef}
        src="/marseillaise.mp3"
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          setTime(0);
        }}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />
      {showMini && (
        <button
          onClick={toggle}
          aria-label="Couper La Marseillaise"
          title="Couper La Marseillaise"
          className="tricolore fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 z-40 rounded-full p-[2.5px] shadow-lg shadow-primary/30 transition-transform active:scale-90"
        >
          <span className="flex size-11 items-center justify-center rounded-full bg-primary text-on-primary">
            <Pause className="size-5" />
          </span>
        </button>
      )}
    </Ctx.Provider>
  );
}

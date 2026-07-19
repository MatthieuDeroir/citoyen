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

export interface AmbianceSource {
  title: string;
  artist: string;
  src: string;
  cover: string;
}

interface AmbianceContextValue {
  playing: boolean;
  current: AmbianceSource | null;
  /** Lance cette source (change de station si besoin). */
  select: (source: AmbianceSource) => void;
  /** Pause/reprise de la source en cours. */
  toggle: () => void;
}

const MarseillaiseCtx = createContext<MarseillaiseContextValue | null>(null);
const AmbianceCtx = createContext<AmbianceContextValue | null>(null);

export function useMarseillaise(): MarseillaiseContextValue {
  const ctx = useContext(MarseillaiseCtx);
  if (!ctx) throw new Error("useMarseillaise hors du MarseillaiseProvider");
  return ctx;
}

export function useAmbiance(): AmbianceContextValue {
  const ctx = useContext(AmbianceCtx);
  if (!ctx) throw new Error("useAmbiance hors du MarseillaiseProvider");
  return ctx;
}

/**
 * Héberge les éléments audio (Marseillaise + radio chanson française) au
 * niveau du layout : la lecture survit à la navigation. Hors de l'accueil, un
 * petit bouton flottant coupe la musique en cours. Une seule source joue à la
 * fois.
 */
export function MarseillaiseProvider({ children }: { children: ReactNode }) {
  const anthemRef = useRef<HTMLAudioElement>(null);
  const ambianceRef = useRef<HTMLAudioElement>(null);
  const [anthemPlaying, setAnthemPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [ambPlaying, setAmbPlaying] = useState(false);
  const [current, setCurrent] = useState<AmbianceSource | null>(null);
  const pathname = usePathname();

  function toggleAnthem() {
    const audio = anthemRef.current;
    if (!audio) return;
    if (audio.paused) {
      ambianceRef.current?.pause();
      audio.play();
    } else {
      audio.pause();
    }
  }

  function seekAnthem(t: number) {
    const audio = anthemRef.current;
    if (!audio) return;
    ambianceRef.current?.pause();
    audio.currentTime = t;
    audio.play();
  }

  function selectAmbiance(source: AmbianceSource) {
    const audio = ambianceRef.current;
    if (!audio) return;
    anthemRef.current?.pause();
    setCurrent(source);
    audio.src = source.src;
    audio.play();
  }

  function toggleAmbiance() {
    const audio = ambianceRef.current;
    if (!audio || !current) return;
    if (audio.paused) {
      anthemRef.current?.pause();
      // flux en direct : on recharge pour reprendre au direct, pas au buffer
      audio.src = current.src;
      audio.play();
    } else {
      audio.pause();
    }
  }

  const showMini = (anthemPlaying || ambPlaying) && pathname !== "/dashboard";

  return (
    <MarseillaiseCtx.Provider
      value={{
        playing: anthemPlaying,
        time,
        duration,
        toggle: toggleAnthem,
        seek: seekAnthem,
      }}
    >
      <AmbianceCtx.Provider
        value={{
          playing: ambPlaying,
          current,
          select: selectAmbiance,
          toggle: toggleAmbiance,
        }}
      >
        {children}
        <audio
          ref={anthemRef}
          src="/marseillaise.mp3"
          preload="none"
          onPlay={() => setAnthemPlaying(true)}
          onPause={() => setAnthemPlaying(false)}
          onEnded={() => {
            setAnthemPlaying(false);
            setTime(0);
          }}
          onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        />
        <audio
          ref={ambianceRef}
          preload="none"
          onPlay={() => setAmbPlaying(true)}
          onPause={() => setAmbPlaying(false)}
        />
        {showMini && (
          <button
            onClick={() => {
              anthemRef.current?.pause();
              ambianceRef.current?.pause();
            }}
            aria-label="Couper la musique"
            title="Couper la musique"
            className="tricolore fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 z-40 rounded-full p-[2.5px] shadow-lg shadow-primary/30 transition-transform active:scale-90"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-primary text-on-primary">
              <Pause className="size-5" />
            </span>
          </button>
        )}
      </AmbianceCtx.Provider>
    </MarseillaiseCtx.Provider>
  );
}

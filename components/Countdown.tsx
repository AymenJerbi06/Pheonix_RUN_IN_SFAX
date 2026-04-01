"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null;

const EVENT_DATE = new Date("2026-03-28T08:00:00");

function calcTimeLeft(): TimeLeft {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | "loading">("loading");

  useEffect(() => {
    setTimeLeft(calcTimeLeft());
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (timeLeft === "loading") return null;

  if (timeLeft === null) {
    return (
      <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(242,106,46,0.4)] bg-[rgba(242,106,46,0.08)] px-5 py-3">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-orange)]" />
        <span className="site-display text-sm tracking-[0.22em] text-[var(--color-orange)]">
          Résultats disponibles
        </span>
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: "Jours" },
    { value: timeLeft.hours, label: "Heures" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {units.map(({ value, label }, i) => (
        <div key={label} className="flex items-center gap-2 sm:gap-3">
          <div className="flex min-w-[3.2rem] flex-col items-center rounded-[0.9rem] border border-white/12 bg-white/[0.06] px-2.5 py-2.5 backdrop-blur-md">
            <span className="tabular-nums font-sora text-[1.55rem] font-black leading-none text-white sm:text-[1.8rem]">
              {String(value).padStart(2, "0")}
            </span>
            <span className="mt-1 text-[0.52rem] font-bold uppercase tracking-[0.22em] text-white/40">
              {label}
            </span>
          </div>
          {i < 3 && (
            <span className="mb-4 font-sora text-xl font-black text-[var(--color-orange)]/50">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

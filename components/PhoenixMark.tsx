type PhoenixMarkProps = {
  tone?: "light" | "dark";
  compact?: boolean;
};

export default function PhoenixMark({
  tone = "light",
  compact = false,
}: PhoenixMarkProps) {
  const textTone =
    tone === "light" ? "text-white" : "text-[var(--color-text-light)]";
  const subTone =
    tone === "light" ? "text-white/60" : "text-[var(--color-muted)]";

  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={compact ? "h-10 w-10" : "h-12 w-12"}
      >
        <defs>
          <linearGradient id="phoenix-mark" x1="10" y1="8" x2="54" y2="54">
            <stop offset="0%" stopColor="#F26A2E" />
            <stop offset="55%" stopColor="#FF8A3D" />
            <stop offset="100%" stopColor="#D9A441" />
          </linearGradient>
        </defs>
        <path
          d="M16 44c10-5 18-14 22-28 2 8 1 16-4 23 8-2 15-8 20-18-1 14-8 24-21 31-4 2-10 4-17 5 5-3 8-7 10-13-4 1-8 1-10 0Z"
          fill="url(#phoenix-mark)"
        />
        <path
          d="M24 28c2 3 3 6 3 10-4 0-7-1-10-4 2-2 4-4 7-6Z"
          fill="rgba(255,255,255,0.28)"
        />
      </svg>

      <div className="leading-none">
        <div className={`font-sora text-[1.05rem] font-black uppercase tracking-[0.32em] ${textTone}`}>
          Phoenix
        </div>
        <div className={`mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.36em] ${subTone}`}>
          Running Challenge
        </div>
      </div>
    </div>
  );
}

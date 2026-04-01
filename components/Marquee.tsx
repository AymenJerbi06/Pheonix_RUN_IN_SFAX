"use client";

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-black/10 bg-white shadow-[0_4px_32px_rgba(0,0,0,0.08)]">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-[linear-gradient(to_right,white_60%,transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-[linear-gradient(to_left,white_60%,transparent)]" />

      {/*
        4 identical copies placed directly side by side.
        Animation moves by -25% of the total container width = exactly 1 copy width.
        When it snaps back from -25% to 0%, copy 2 is now where copy 1 started → seamless.
      */}
      <div className="sponsors-slide">
        {[0, 1, 2, 3].map((i) => (
          <img
            key={i}
            src="/images/sponsors.png"
            alt={i === 0 ? "Sponsors Phoenix Running Challenge" : ""}
            aria-hidden={i !== 0}
            style={{ height: "110px", width: "auto", flexShrink: 0, display: "block" }}
          />
        ))}
      </div>
    </div>
  );
}

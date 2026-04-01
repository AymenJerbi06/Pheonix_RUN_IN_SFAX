"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { media, registrationUrl } from "@/components/siteConfig";
import Countdown from "@/components/Countdown";

const EMBERS = [
  { left: "8%",  duration: "3.2s", delay: "0s",    drift: "-14px" },
  { left: "15%", duration: "2.6s", delay: "0.8s",  drift: "10px" },
  { left: "23%", duration: "3.8s", delay: "0.3s",  drift: "-8px" },
  { left: "31%", duration: "2.9s", delay: "1.4s",  drift: "18px" },
  { left: "40%", duration: "3.5s", delay: "0.6s",  drift: "-20px" },
  { left: "48%", duration: "2.7s", delay: "1.9s",  drift: "12px" },
  { left: "56%", duration: "3.1s", delay: "0.4s",  drift: "-16px" },
  { left: "64%", duration: "2.5s", delay: "1.1s",  drift: "8px" },
  { left: "72%", duration: "3.6s", delay: "0.2s",  drift: "-10px" },
  { left: "80%", duration: "2.8s", delay: "1.6s",  drift: "14px" },
  { left: "88%", duration: "3.3s", delay: "0.9s",  drift: "-6px" },
  { left: "94%", duration: "2.4s", delay: "1.3s",  drift: "20px" },
];

export default function Hero() {
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="accueil"
      className="relative isolate min-h-screen overflow-hidden pt-28"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={media.hero}
          alt="Participants levant les bras a la ligne d'arrivee du Phoenix Running Challenge"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,14,0.96)_0%,rgba(8,10,14,0.80)_50%,rgba(8,10,14,0.45)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(242,106,46,0.28),transparent_32%),radial-gradient(circle_at_76%_16%,rgba(217,164,65,0.16),transparent_26%),linear-gradient(180deg,transparent_60%,rgba(8,10,14,0.92))]" />
        <div className="site-mesh absolute inset-0 opacity-[0.06]" />
      </div>

      {/* Ember particles */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-64">
        {EMBERS.map((e, i) => (
          <div
            key={i}
            className="ember"
            style={{
              left: e.left,
              bottom: `${Math.random() * 20}px`,
              "--ember-duration": e.duration,
              "--ember-drift": e.drift,
              animationDelay: e.delay,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Content */}
      <div className="site-shell relative z-10 grid min-h-[calc(100vh-7rem)] items-end gap-10 pb-14 pt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.7fr)] lg:items-center lg:pb-24">
        {/* Left */}
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="site-eyebrow border-white/12 bg-white/[0.04] text-[var(--color-orange)]"
          >
            Phoenix Running Challenge 2026
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="site-display mt-6 text-sm tracking-[0.36em] text-white/36"
          >
            Rise. Resist. Repeat.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="site-display mt-4 text-[clamp(4.8rem,12vw,9.5rem)] font-extrabold leading-[0.86] tracking-[-0.03em] text-white"
          >
            Rise Beyond
            <span className="gradient-text block">Your Limits</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/60"
          >
            <span className="flex items-center gap-2">
              <CalendarDays size={15} className="text-[var(--color-orange)]" />
              28 mars 2026
            </span>
            <span className="h-4 w-px bg-white/20" />
            <span className="flex items-center gap-2">
              <MapPin size={15} className="text-[var(--color-orange)]" />
              Chaffar, Sfax
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={registrationUrl}
              target="_blank"
              rel="noreferrer"
              className="site-button-primary px-7 py-4"
            >
              S&apos;inscrire maintenant
              <ArrowRight size={18} />
            </a>
            <button
              type="button"
              onClick={() => scrollToSection("#courses")}
              className="site-button-secondary px-7 py-4"
            >
              Voir les formats
            </button>
          </motion.div>
        </div>

        {/* Right — Countdown card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="site-card-dark site-corner-frame overflow-hidden rounded-[2.2rem_2.2rem_2.2rem_0.6rem] p-6"
        >
          {/* Image preview */}
          <div className="relative overflow-hidden rounded-[1.6rem_1.6rem_1.6rem_0.4rem]">
            <Image
              src={media.runners}
              alt="Coureurs Phoenix Running Challenge"
              width={680}
              height={440}
              className="h-[15rem] w-full object-cover sm:h-[18rem]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,14,0.04),rgba(8,10,14,0.72))]" />
            <div className="absolute right-3 top-3 rounded-[0.9rem_0.9rem_0.9rem_0.25rem] border border-white/10 bg-black/26 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.26em] text-white/72 backdrop-blur">
              Trail Running
            </div>
          </div>

          {/* Countdown */}
          <div className="mt-5">
            <p className="site-display mb-3 text-[0.7rem] tracking-[0.3em] text-white/40">
              Compte à rebours
            </p>
            <Countdown />
          </div>

          {/* Stats strip */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { value: "1500+", label: "Participants" },
              { value: "12", label: "Boucles max" },
              { value: "3", label: "Formats" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-[1.2rem_1.2rem_1.2rem_0.3rem] border border-white/8 bg-white/[0.03] p-3 text-center"
              >
                <p className="site-display text-[1.6rem] font-extrabold leading-none text-white">{s.value}</p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-white/48">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <button
        type="button"
        onClick={() => scrollToSection("#apropos")}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-3 text-xs font-bold uppercase tracking-[0.24em] text-white/54 backdrop-blur-md transition-all duration-200 hover:text-white md:inline-flex"
      >
        Scroll
        <ArrowDown size={14} />
      </button>
    </section>
  );
}

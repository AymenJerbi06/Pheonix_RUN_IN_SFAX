"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, Flame, Mountain, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { registrationUrl, rules } from "@/components/siteConfig";

const formats = [
  {
    icon: Flame,
    name: "Phoenix",
    loopCount: 12,
    tagline: "Le format signature. L'effort total.",
    description: "Le grand test mental et physique. Une course competitive pour celles et ceux qui veulent tenir la cadence jusqu'au bout.",
    facts: ["18+ ans", "Competitif", "Epic endurance"],
    featured: true,
  },
  {
    icon: Compass,
    name: "Discovery",
    loopCount: 3,
    tagline: "Une premiere aventure trail ambitieuse.",
    description: "Ideal pour vivre l'atmosphere Phoenix avec un effort plus accessible, sans perdre la sensation d'aventure.",
    facts: ["Accessible", "Tous niveaux", "Progressive"],
    featured: false,
  },
  {
    icon: Mountain,
    name: "Randonnée",
    loopCount: 1,
    tagline: "L'experience partagee, sans pression.",
    description: "Une boucle ouverte aux familles, groupes et participants qui veulent l'ambiance sans la competition.",
    facts: ["Familial", "Convivial", "Grand public"],
    featured: false,
  },
];

function LoopDots({ active, total = 12 }: { active: number; total?: number }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.3 + i * 0.04 }}
          className={`h-2 w-2 rounded-full transition-all duration-300 ${
            i < active
              ? "bg-[var(--color-orange)] shadow-[0_0_8px_rgba(242,106,46,0.55)]"
              : "bg-white/14"
          }`}
        />
      ))}
    </div>
  );
}

export default function RaceFormats() {
  return (
    <section id="courses" className="site-section relative bg-[var(--color-bg-dark)]">
      <div className="site-noise" />
      <div className="site-track-lines absolute inset-0 opacity-[0.07]" />

      <div className="site-shell relative z-10">
        <SectionHeading
          eyebrow="Formats de course"
          title="Choisissez votre feu intérieur."
          description="Trois formats, une meme philosophie: des boucles, un cutoff, un effort qui se merite."
          tone="dark"
          align="center"
          className="max-w-3xl"
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {formats.map((format, index) => (
            <motion.article
              key={format.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={[
                "site-corner-frame group relative flex h-full flex-col overflow-hidden rounded-[2.1rem_2.1rem_2.1rem_0.55rem] p-7 transition-transform duration-300 hover:-translate-y-1",
                format.featured
                  ? "border border-[rgba(242,106,46,0.45)] bg-[linear-gradient(180deg,rgba(242,106,46,0.15),rgba(255,255,255,0.04))] shadow-[0_28px_80px_rgba(242,106,46,0.14)]"
                  : "site-card-dark",
              ].join(" ")}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(242,106,46,0),rgba(242,106,46,0.82),rgba(217,164,65,0.5),rgba(242,106,46,0))]" />

              <div className="flex items-center justify-between gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.1rem_1.1rem_1.1rem_0.25rem] bg-white/8 text-[var(--color-orange)]">
                  <format.icon size={24} />
                </div>
                {format.featured && (
                  <span className="rounded-[1rem_1rem_1rem_0.25rem] border border-[rgba(242,106,46,0.35)] bg-[rgba(242,106,46,0.14)] px-3 py-1.5 text-[0.64rem] font-bold uppercase tracking-[0.24em] text-[var(--color-orange)]">
                    Signature
                  </span>
                )}
              </div>

              <div className="mt-7">
                <h3 className="font-sora text-[2rem] font-black text-white">{format.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--color-gold)]">
                  {format.tagline}
                </p>
              </div>

              {/* Loop dots */}
              <div className="mt-6">
                <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-white/36">
                  {format.loopCount} boucle{format.loopCount > 1 ? "s" : ""}
                </p>
                <LoopDots active={format.loopCount} total={12} />
              </div>

              <div className="mt-6 rounded-[1.4rem_1.4rem_1.4rem_0.35rem] border border-white/8 bg-black/14 p-4">
                <p className="text-sm leading-7 text-white/68">{format.description}</p>
              </div>

              <div className="mt-5 grid gap-2">
                {format.facts.map((fact) => (
                  <div
                    key={fact}
                    className="flex items-center justify-between rounded-[1rem_1rem_1rem_0.28rem] border border-white/8 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white/80"
                  >
                    <span>{fact}</span>
                    <span className="h-1.5 w-7 rounded-full bg-[linear-gradient(90deg,var(--color-orange),rgba(217,164,65,0.3))]" />
                  </div>
                ))}
              </div>

              <a
                href={registrationUrl}
                target="_blank"
                rel="noreferrer"
                className={[
                  "mt-7 inline-flex items-center justify-center gap-2 rounded-[1.1rem_1.1rem_1.1rem_0.28rem] px-5 py-4 text-sm font-bold transition-all duration-200",
                  format.featured
                    ? "bg-white text-[var(--color-text-light)] hover:bg-[var(--color-bg-light)]"
                    : "border border-white/12 bg-white/4 text-white hover:bg-white/9",
                ].join(" ")}
              >
                S&apos;inscrire
                <ArrowRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 rounded-[2rem_2rem_2rem_0.55rem] border border-white/8 bg-white/[0.03] p-5 lg:grid-cols-[1fr_auto_auto] lg:items-center">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem_1rem_1rem_0.25rem] bg-[var(--color-orange)]/12 text-[var(--color-orange)]">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="font-sora text-lg font-bold text-white">Règlements officiels</p>
              <p className="mt-1 text-sm leading-7 text-white/56">
                Conditions de participation, logique de course et exigences medicales.
              </p>
            </div>
          </div>
          <a href={rules.fr} target="_blank" rel="noreferrer" className="site-button-secondary px-5 py-3 text-sm">
            Règlement FR
          </a>
          <a href={rules.ar} target="_blank" rel="noreferrer" className="site-button-secondary px-5 py-3 text-sm">
            Règlement AR
          </a>
        </div>
      </div>
    </section>
  );
}

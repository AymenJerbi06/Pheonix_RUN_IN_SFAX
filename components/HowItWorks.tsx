"use client";

import { motion } from "framer-motion";
import { Flag, Hourglass, Repeat2 } from "lucide-react";

const steps = [
  {
    icon: Repeat2,
    number: "01",
    title: "Boucle après boucle",
    description: "Chaque boucle est un nouveau depart. Vous choisissez: continuer ou conclure.",
  },
  {
    icon: Hourglass,
    number: "02",
    title: "Le cutoff decide",
    description: "Terminez dans le temps imparti pour repartir. La regle qui cree le suspense.",
  },
  {
    icon: Flag,
    number: "03",
    title: "Votre finish, votre victoire",
    description: "Chaque loop complete compte. Le challenge s'arrete quand vous vous arretez.",
  },
];

export default function HowItWorks() {
  return (
    <section className="site-section relative overflow-hidden bg-[var(--color-bg-dark)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,106,46,0.1),transparent_55%)]" />
      <div className="site-mesh absolute inset-0 opacity-[0.05]" />

      <div className="site-shell relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="site-eyebrow border-white/12 bg-white/[0.04] text-[var(--color-orange)]">
            Comment ça fonctionne
          </span>
          <h2 className="site-title mt-5 text-white">
            Simple à comprendre. Fort à vivre.
          </h2>
          <p className="site-copy mx-auto mt-5 text-white/62">
            Le coeur de Phoenix, c&apos;est le rythme. Des boucles, un cutoff, une tension qui ne lache pas.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="site-card-dark rounded-[2rem_2rem_2rem_0.55rem] p-7"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem_1.2rem_1.2rem_0.3rem] bg-[var(--color-orange)]/12 text-[var(--color-orange)]">
                  <step.icon size={24} />
                </div>
                <span className="site-display text-[3.5rem] font-extrabold leading-none text-white/[0.06]">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-6 font-sora text-[1.3rem] font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Visual loop bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="mt-14 overflow-hidden rounded-full"
          style={{ originX: 0 }}
        >
          <div className="flex h-2 w-full gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.07 }}
                className="h-full flex-1 rounded-full bg-[linear-gradient(90deg,var(--color-orange),var(--color-gold))]"
                style={{ opacity: 0.25 + i * 0.065 }}
              />
            ))}
          </div>
          <p className="mt-3 text-center text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white/34">
            12 boucles · Format Phoenix
          </p>
        </motion.div>
      </div>
    </section>
  );
}

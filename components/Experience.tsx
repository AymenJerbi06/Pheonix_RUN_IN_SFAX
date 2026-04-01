"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { media } from "@/components/siteConfig";

const highlights = [
  {
    value: "12 loops max",
    label: "endurance format",
    description: "Une progression qui rend chaque passage plus intense que le precedent.",
  },
  {
    value: "Chaffar",
    label: "terrain signature",
    description: "Un decor naturel qui participe a l'identite visuelle et mentale du challenge.",
  },
  {
    value: "Phoenix crowd",
    label: "community pulse",
    description: "Une energie collective qui transforme l'evenement en vrai moment partage.",
  },
];

export default function Experience() {
  return (
    <section className="site-section bg-[var(--color-bg-light)]">
      <div className="site-shell grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="site-corner-frame relative overflow-hidden rounded-[2.1rem_2.1rem_2.1rem_0.55rem] bg-[var(--color-text-light)] p-4 text-white shadow-[0_28px_90px_rgba(15,17,21,0.18)]"
        >
          <div className="relative overflow-hidden rounded-[1.7rem_1.7rem_1.7rem_0.35rem]">
            <Image
              src={media.crowd}
              alt="Ambiance collective du Phoenix Running Challenge"
              width={1200}
              height={900}
              className="h-[28rem] w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,16,0.1),rgba(10,12,16,0.78))]" />
          </div>

          <div className="absolute inset-x-8 bottom-8 rounded-[1.45rem_1.45rem_1.45rem_0.35rem] border border-white/10 bg-[#0d1015]/72 p-5 backdrop-blur-xl">
            <p className="site-display text-[0.86rem] tracking-[0.28em] text-[var(--color-orange)]">
              Experience layer
            </p>
            <p className="mt-3 max-w-xl text-lg font-semibold text-white">
              Phoenix doit faire ressentir quelque chose avant meme qu'on arrive
              aux details pratiques.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.06 }}
        >
          <SectionHeading
            eyebrow="Experience"
            title="Une experience, pas juste une course."
            description="Cette section sert a vendre l'atmosphere: la fatigue, le decor, l'attente, les encouragements, le retour de boucle, et ce sentiment d'avoir vraiment traverse quelque chose."
            tone="light"
          />

          <div className="mt-8 rounded-[1.7rem_1.7rem_1.7rem_0.45rem] border border-[var(--color-card-border-light)] bg-white p-6 shadow-[0_18px_44px_rgba(15,17,21,0.06)]">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-[1rem_1rem_1rem_0.25rem] bg-[var(--color-orange)]/10 text-[var(--color-orange)]">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="site-display text-[0.86rem] tracking-[0.26em] text-[var(--color-orange)]">
                  Storytelling block
                </p>
                <p className="mt-3 text-base leading-8 text-[var(--color-muted)]">
                  Le Phoenix Running Challenge ne se resume pas a une ligne de depart
                  et un classement final. C'est un format qui cree du suspense, des
                  visages marques par l'effort, des pauses de recuperation, et cette
                  sensation rare d'etre encore dans la course meme quand on s'arrete.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-4">
            {highlights.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="site-card-light rounded-[1.7rem_1.7rem_1.7rem_0.45rem] p-5"
              >
                <div className="grid gap-3 sm:grid-cols-[0.8fr_1.2fr] sm:items-start">
                  <div>
                    <p className="site-display text-[1.8rem] font-extrabold leading-none text-[var(--color-text-light)]">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {item.label}
                    </p>
                  </div>
                  <p className="text-sm leading-7 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

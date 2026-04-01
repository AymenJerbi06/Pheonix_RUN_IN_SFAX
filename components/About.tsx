"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Mountain, Trees, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { media } from "@/components/siteConfig";

const features = [
  {
    icon: Trees,
    title: "Nature brute",
    description: "Terrain vivant entre mer, sable et paysage rural pour une experience trail authentiquement tunisienne.",
  },
  {
    icon: Mountain,
    title: "Challenge progressif",
    description: "Trois formats distincts pour chaque niveau d'engagement, de la decouverte a l'effort total.",
  },
  {
    icon: Users,
    title: "Energie collective",
    description: "Une communaute de coureurs ou performance, soutien et celebration avancent ensemble.",
  },
];

const stats = [
  { end: 3, suffix: "e", label: "Edition" },
  { end: 1500, suffix: "+", label: "Participants" },
  { end: 12, suffix: "", label: "Boucles max" },
];

function AnimatedStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, end, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return controls.stop;
  }, [inView, end, suffix]);

  return (
    <div className="rounded-[1.7rem_1.7rem_1.7rem_0.45rem] border border-[var(--color-card-border-light)] bg-white p-5 shadow-[0_12px_32px_rgba(15,17,21,0.06)]">
      <div className="site-display text-[2.4rem] font-extrabold leading-none text-[var(--color-text-light)]">
        <span ref={ref}>0{suffix}</span>
      </div>
      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="apropos"
      className="site-section bg-[var(--color-bg-light)] text-[var(--color-text-light)]"
    >
      <div className="site-shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.94fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="A propos"
            title="Ce qui rend Phoenix unique."
            description="Un systeme de boucles, un terrain naturel exceptionnel, et une energie collective qui transforme chaque edition en experience memorable."
            tone="light"
          />

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <AnimatedStat key={s.label} {...s} />
            ))}
          </div>

          <div className="mt-8 grid gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="site-card-light rounded-[1.7rem_1.7rem_1.7rem_0.45rem] p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.9rem_0.9rem_0.9rem_0.25rem] bg-[var(--color-orange)]/10 text-[var(--color-orange)]">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-sora text-[1.05rem] font-bold text-[var(--color-text-light)]">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-7 text-[var(--color-muted)]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="space-y-5"
        >
          <div className="site-card-light site-corner-frame overflow-hidden rounded-[2rem_2rem_2rem_0.55rem] p-4">
            <div className="relative overflow-hidden rounded-[1.6rem_1.6rem_1.6rem_0.35rem]">
              <Image
                src={media.mural}
                alt="Paysage de Chaffar"
                width={900}
                height={900}
                className="h-[22rem] w-full object-cover sm:h-[28rem]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(15,17,21,0.42))]" />
              <div className="absolute bottom-4 left-4 right-4 rounded-[1.4rem_1.4rem_1.4rem_0.4rem] border border-white/12 bg-[#0f1115]/78 p-4 backdrop-blur-xl">
                <p className="site-display text-[0.8rem] tracking-[0.28em] text-[var(--color-orange)]">
                  Terrain signature
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  Chaffar — un decor naturel qui fait partie de l&apos;identite meme du challenge.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[1.6rem_1.6rem_1.6rem_0.4rem] border border-[var(--color-card-border-light)] bg-white p-5 shadow-sm">
              <p className="site-display text-[0.76rem] tracking-[0.24em] text-[var(--color-orange)]">
                Depuis
              </p>
              <p className="mt-2 font-sora text-[2rem] font-black leading-none text-[var(--color-text-light)]">
                2023
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">Edition fondatrice</p>
            </div>
            <div className="rounded-[1.6rem_1.6rem_1.6rem_0.4rem] bg-[linear-gradient(135deg,rgba(242,106,46,0.14),rgba(217,164,65,0.2))] p-5">
              <p className="site-display text-[0.76rem] tracking-[0.24em] text-[var(--color-text-light)]">
                Distance ref.
              </p>
              <p className="mt-2 font-sora text-[2rem] font-black leading-none text-[var(--color-text-light)]">
                ~60km
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">Format Phoenix complet</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

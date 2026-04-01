"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Handshake, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { media, socials } from "@/components/siteConfig";

const partnerTypes = [
  "Event support",
  "Nutrition",
  "Media",
  "Sport equipment",
  "Health",
  "Local ecosystem",
];

export default function Partners() {
  return (
    <section className="site-section bg-[var(--color-bg-light)] pt-0">
      <div className="site-shell relative overflow-hidden rounded-[2.2rem_2.2rem_2.2rem_0.65rem] bg-[var(--color-text-light)] px-5 py-10 text-white shadow-[0_30px_100px_rgba(15,17,21,0.22)] sm:px-8 lg:px-10 lg:py-12">
        <div className="site-track-lines absolute inset-0 opacity-[0.05]" />
        <div className="relative z-10 grid gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Partenaires"
              title="Ils nous font confiance."
              description="Phoenix Running Challenge reunit des partenaires locaux et regionaux engages dans le sport, la sante et l'ecosysteme de Sfax."
              tone="dark"
            />

            <div className="mt-8 flex flex-wrap gap-3">
              {partnerTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-[1rem_1rem_1rem_0.28rem] border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/74 transition-colors duration-200 hover:text-white"
                >
                  {type}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem_1.6rem_1.6rem_0.35rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-[1rem_1rem_1rem_0.25rem] bg-[var(--color-orange)]/12 text-[var(--color-orange)]">
                  <Handshake size={20} />
                </div>
                <p className="mt-4 font-sora text-lg font-bold text-white">
                  Une confiance visible des le debut
                </p>
                <p className="mt-2 text-sm leading-7 text-white/62">
                  Une presence visible des le debut de l&apos;evenement, autour d&apos;un challenge qui grandit chaque edition.
                </p>
              </div>

              <a
                href={socials.email}
                className="rounded-[1.6rem_1.6rem_1.6rem_0.35rem] border border-white/10 bg-white/[0.04] p-5 transition-colors duration-200 hover:bg-white/[0.06]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-[1rem_1rem_1rem_0.25rem] bg-white/8 text-white">
                  <Mail size={20} />
                </div>
                <p className="mt-4 font-sora text-lg font-bold text-white">
                  Devenir partenaire
                </p>
                <p className="mt-2 text-sm leading-7 text-white/62">
                  Contactez l'organisation pour les activations, les visibilites et les
                  collaborations autour de l'edition 2026.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-orange)]">
                  contact@runinsfax.com
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="site-corner-frame overflow-hidden rounded-[2rem_2rem_2rem_0.5rem] border border-white/10 bg-black/16 p-4"
          >
            <div className="relative overflow-hidden rounded-[1.7rem_1.7rem_1.7rem_0.35rem]">
              <Image
                src={media.partners}
                alt="Tableau des partenaires du Phoenix Running Challenge"
                width={1200}
                height={900}
                className="h-[22rem] w-full object-cover grayscale transition duration-500 hover:grayscale-0 sm:h-[28rem]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,16,0.02),rgba(10,12,16,0.46))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem_1.4rem_1.4rem_0.35rem] border border-white/10 bg-[#0d1015]/68 p-5 backdrop-blur-xl">
                <p className="site-display text-[0.86rem] tracking-[0.26em] text-[var(--color-orange)]">
                  Ils nous soutiennent
                </p>
                <p className="mt-2 text-lg font-bold text-white">
                  Un vrai rendez-vous sportif, reconnu et soutenu localement depuis sa premiere edition.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

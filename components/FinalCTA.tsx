"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { media, registrationUrl } from "@/components/siteConfig";

export default function FinalCTA() {
  return (
    <section className="site-section overflow-hidden bg-[var(--color-bg-dark)] pt-0">
      <div className="site-shell">
        <div className="site-corner-frame relative overflow-hidden rounded-[2.3rem_2.3rem_2.3rem_0.6rem] border border-white/10 bg-[#0c0f14] shadow-[0_32px_100px_rgba(0,0,0,0.3)]">
          <div className="absolute inset-0">
            <Image
              src={media.crowd}
              alt="Ambiance collective du Phoenix Running Challenge"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,16,0.94)_0%,rgba(10,12,16,0.82)_45%,rgba(10,12,16,0.48)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(242,106,46,0.22),transparent_24%)]" />
          </div>

          <div className="relative z-10 grid gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(240px,0.46fr)] lg:px-12 lg:py-14">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="site-display text-[0.88rem] tracking-[0.3em] text-[var(--color-orange)]">
                Rejoignez l&apos;aventure
              </p>
              <h2 className="site-display mt-4 text-[clamp(3.5rem,6.2vw,6.3rem)] font-extrabold leading-[0.88] tracking-[-0.02em] text-white">
                Ready to test your limits?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                Rejoignez Phoenix Running Challenge 2026 et vivez une experience
                trail plus lisible, plus forte et plus memorable dans un decor naturel
                unique a Chaffar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="self-end rounded-[1.8rem_1.8rem_1.8rem_0.4rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl"
            >
              <div className="space-y-3">
                <p className="site-display text-[0.82rem] tracking-[0.24em] text-white/48">
                  Event snapshot
                </p>
                <p className="site-display text-[2rem] font-extrabold leading-none text-white">28 mars 2026</p>
                <p className="text-sm leading-7 text-white/66">
                  Chaffar, Sfax. Trois formats. Une seule promesse: se depasser.
                </p>
              </div>
              <a
                href={registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="site-button-primary mt-6 w-full px-6 py-4 text-sm"
              >
                S&apos;inscrire maintenant
                <ArrowRight size={17} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

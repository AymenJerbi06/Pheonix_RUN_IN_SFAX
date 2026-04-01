"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { media } from "@/components/siteConfig";

const galleryItems = [
  {
    title: "Finish line energy",
    image: media.hero,
    caption: "Des arrives fortes, lisibles, memorables.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Road to the challenge",
    image: media.runners,
    caption: "Le mouvement, le rythme, le collectif.",
    span: "",
  },
  {
    title: "Community atmosphere",
    image: media.crowd,
    caption: "Un evenement qui rassemble autant qu'il pousse.",
    span: "",
  },
  {
    title: "Podium moments",
    image: media.podium,
    caption: "La preuve sociale qui ancre l'evenement dans le reel.",
    span: "",
  },
  {
    title: "Chaffar setting",
    image: media.mural,
    caption: "Le territoire devient partie integrante de l'identite visuelle.",
    span: "",
  },
];

export default function Gallery() {
  const [activeItem, setActiveItem] = useState<(typeof galleryItems)[number] | null>(null);

  return (
    <>
      <section id="galerie" className="site-section bg-[var(--color-bg-dark)]">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Gallery"
            title="Des images reelles, mieux selectionnees, mieux cadrees."
            description="La galerie ne repose plus sur des placeholders abstraits. Elle utilise les visuels du vrai evenement pour renforcer l'authenticite et l'envie de participer."
            tone="dark"
            align="center"
            className="max-w-4xl"
          />

          <div className="mt-14 grid auto-rows-[220px] gap-4 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <motion.button
                key={item.title}
                type="button"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.14 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                onClick={() => setActiveItem(item)}
                className={[
                  "site-corner-frame group relative overflow-hidden rounded-[2rem_2rem_2rem_0.45rem] border border-white/8 text-left",
                  item.span,
                ].join(" ")}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,16,0.04),rgba(10,12,16,0.78))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,106,46,0.18),transparent_28%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute left-5 right-5 top-5 flex items-start justify-between">
                  <span className="rounded-[1rem_1rem_1rem_0.28rem] border border-white/12 bg-black/22 px-3 py-2 text-[0.66rem] font-bold uppercase tracking-[0.25em] text-white/76 backdrop-blur">
                    Phoenix
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/18 text-white/78 backdrop-blur transition-colors duration-200 group-hover:text-white">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="site-display text-[0.86rem] tracking-[0.28em] text-[var(--color-orange)]">
                    Phoenix archive
                  </p>
                  <h3 className="mt-2 font-sora text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-7 text-white/66">{item.caption}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {activeItem ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/88 p-4 backdrop-blur-md"
          onClick={() => setActiveItem(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-[2rem_2rem_2rem_0.55rem] border border-white/10 bg-[#0f1115]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[72vh] min-h-[360px]">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,16,0.12),rgba(10,12,16,0.82))]" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-orange)]">
                Phoenix gallery
              </p>
              <h3 className="mt-3 font-sora text-[2rem] font-black text-white">
                {activeItem.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68">
                {activeItem.caption}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/28 text-white backdrop-blur"
              aria-label="Fermer la galerie"
            >
              <X size={18} />
            </button>
          </motion.div>
        </div>
      ) : null}
    </>
  );
}

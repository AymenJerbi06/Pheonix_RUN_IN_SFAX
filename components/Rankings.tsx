"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Medal, Trophy } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { media, rankingArchive } from "@/components/siteConfig";

type RankingYear = keyof typeof rankingArchive;

const years = Object.keys(rankingArchive).sort((a, b) => Number(b) - Number(a)) as RankingYear[];

export default function Rankings() {
  const [activeYear, setActiveYear] = useState<RankingYear>(years[0]);

  const activeResults = useMemo(() => rankingArchive[activeYear], [activeYear]);
  const featuredEntry = activeResults[0];
  const featuredWinner = featuredEntry.results[0];

  const sideCards = [
    ...featuredEntry.results.slice(1).map((result) => ({
      name: result.name,
      label: `${result.rank}e place`,
      format: featuredEntry.format,
      pdf: featuredEntry.pdf,
      accent: result.rank === 2 ? "silver" : "bronze",
    })),
    ...(activeResults[1]
      ? [
          {
            name: activeResults[1].results[0].name,
            label: "1ere place",
            format: activeResults[1].format,
            pdf: activeResults[1].pdf,
            accent: "orange",
          },
        ]
      : []),
  ];

  return (
    <section id="classements" className="site-section bg-[var(--color-bg-light)]">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Featured athletes"
          title="Ils ont marque Phoenix."
          description="Le palmares devient ici une preuve humaine: des noms, des annees, des formats, et une mise en avant plus aspirante que de simples listes."
          tone="light"
          align="center"
          className="max-w-4xl"
        />

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-[1.4rem_1.4rem_1.4rem_0.35rem] border border-[var(--color-card-border-light)] bg-white p-1.5 shadow-[0_12px_34px_rgba(15,17,21,0.06)]">
            {years.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setActiveYear(year)}
                className={[
                  "rounded-[1rem_1rem_1rem_0.25rem] px-5 py-3 text-sm font-bold transition-all duration-200",
                  activeYear === year
                    ? "bg-[var(--color-text-light)] text-white"
                    : "text-[var(--color-muted)] hover:text-[var(--color-text-light)]",
                ].join(" ")}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeYear}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,0.98fr)_minmax(340px,0.82fr)]"
        >
          <article className="site-corner-frame relative overflow-hidden rounded-[2.1rem_2.1rem_2.1rem_0.55rem] bg-[var(--color-text-light)] text-white shadow-[0_30px_90px_rgba(15,17,21,0.2)]">
            <div className="relative h-[24rem] overflow-hidden">
              <Image
                src={media.podium}
                alt="Podium et vainqueurs du Phoenix Running Challenge"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,16,0.12),rgba(10,12,16,0.86))]" />
            </div>

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-[1rem_1rem_1rem_0.28rem] border border-white/12 bg-black/26 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-white/78 backdrop-blur">
              <Trophy size={15} className="text-[var(--color-orange)]" />
              Winner spotlight
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
              <p className="site-display text-[0.86rem] tracking-[0.28em] text-[var(--color-orange)]">
                {activeYear} · {featuredEntry.format}
              </p>
              <h3 className="mt-3 font-sora text-[2.2rem] font-black leading-tight text-white">
                {featuredWinner.name}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/68">
                Une performance qui incarne l'intensite du format {featuredEntry.format}
                et donne un visage concret au niveau d'engagement que Phoenix attire.
              </p>
              <a
                href={featuredEntry.pdf}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-[1rem_1rem_1rem_0.28rem] border border-white/12 bg-white/8 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/12"
              >
                Voir le classement PDF
                <ArrowUpRight size={16} />
              </a>
            </div>
          </article>

          <div className="grid gap-4">
            {sideCards.map((card) => (
              <article
                key={`${card.name}-${card.label}-${card.format}`}
                className="site-card-light rounded-[1.7rem_1.7rem_1.7rem_0.45rem] p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[1rem_1rem_1rem_0.25rem] bg-[var(--color-text-light)] text-white">
                      <Medal size={19} />
                    </div>
                    <div>
                      <p className="site-display text-[0.78rem] tracking-[0.24em] text-[var(--color-orange)]">
                        {card.label}
                      </p>
                      <h3 className="mt-1 font-sora text-[1.15rem] font-bold text-[var(--color-text-light)]">
                        {card.name}
                      </h3>
                      <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">
                        {activeYear} · {card.format}
                      </p>
                    </div>
                  </div>

                  <a
                    href={card.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-card-border-light)] text-[var(--color-text-light)] transition-colors duration-200 hover:bg-[var(--color-bg-light)]"
                    aria-label={`Voir le classement ${card.format} ${activeYear}`}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}

            <div className="rounded-[1.7rem_1.7rem_1.7rem_0.45rem] bg-[var(--color-text-light)] p-5 text-white">
              <p className="site-display text-[0.82rem] tracking-[0.24em] text-[var(--color-orange)]">
                Archive links
              </p>
              <div className="mt-4 grid gap-3">
                {activeResults.map((entry) => (
                  <a
                    key={`${activeYear}-${entry.format}-archive`}
                    href={entry.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-[1rem_1rem_1rem_0.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white/82 transition-colors duration-200 hover:bg-white/9"
                  >
                    <span>
                      {entry.format} · {activeYear}
                    </span>
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

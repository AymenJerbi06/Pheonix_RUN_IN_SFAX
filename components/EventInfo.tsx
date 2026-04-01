"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  ClipboardList,
  Coffee,
  FileCheck2,
  Medal,
  Route,
  Timer,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { mainEventUrl, registrationUrl, rules } from "@/components/siteConfig";

const practicalItems = [
  {
    icon: CalendarDays,
    title: "Date et lieu",
    description: "28 mars 2026 a Chaffar, pres de Sfax, dans un cadre naturel deja associe a l'identite Phoenix.",
  },
  {
    icon: FileCheck2,
    title: "Age et conditions",
    description: "Le format Phoenix est reserve aux adultes. Discovery et Randonnee s'adressent a des profils plus larges selon les conditions du reglement.",
  },
  {
    icon: ClipboardList,
    title: "Inscription",
    description: "L'inscription se fait en ligne sur la plateforme Phoenix avec les informations participant et le mode de paiement associe.",
  },
  {
    icon: Timer,
    title: "Cutoff et boucles",
    description: "Le principe reste base sur des boucles et un temps de reference pour continuer l'effort d'une boucle a l'autre.",
  },
  {
    icon: Coffee,
    title: "Repos et ravitaillement",
    description: "La logique de course laisse place a la recuperation, au ravitaillement et a la gestion strategique entre les passages.",
  },
  {
    icon: Medal,
    title: "Finish et recompenses",
    description: "L'arrivee reste un moment fort de l'experience avec medailles, classement et reconnaissance des finishers.",
  },
];

export default function EventInfo() {
  return (
    <section id="infos" className="site-section bg-[var(--color-bg-light)]">
      <div className="site-shell grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <SectionHeading
            eyebrow="Event details"
            title="Les details utiles, une fois l'envie deja la."
            description="Ici, l'information devient une confirmation rassurante: date, modalites, documents et acces rapides, presentes de maniere claire et facile a scanner."
            tone="light"
          />

          <div className="mt-8 space-y-4">
            <div className="site-card-light rounded-[1.9rem] p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.4rem] bg-[var(--color-orange)]/10 text-[var(--color-orange)]">
                  <Route size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-orange)]">
                    Focus evenement
                  </p>
                  <p className="mt-2 font-sora text-[1.45rem] font-black text-[var(--color-text-light)]">
                    Chaffar, Sfax
                  </p>
                  <p className="mt-1 text-sm leading-7 text-[var(--color-muted)]">
                    Un terrain propice a une lecture plus premium du parcours et de
                    l'experience coureur.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.9rem] bg-[var(--color-text-light)] p-6 text-white shadow-[0_24px_60px_rgba(15,17,21,0.16)]">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-orange)]">
                Liens utiles
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a
                  href={registrationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="site-button-primary px-5 py-4 text-sm"
                >
                  Inscription
                </a>
                <a
                  href={mainEventUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="site-button-secondary px-5 py-4 text-sm"
                >
                  Voir la page source
                </a>
                <a
                  href={rules.fr}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/12 px-5 py-4 text-center text-sm font-semibold text-white/78 transition-colors duration-200 hover:bg-white/7 hover:text-white"
                >
                  Reglement FR
                </a>
                <a
                  href={rules.ar}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/12 px-5 py-4 text-center text-sm font-semibold text-white/78 transition-colors duration-200 hover:bg-white/7 hover:text-white"
                >
                  Reglement AR
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {practicalItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="site-card-light rounded-[1.7rem] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-orange)]/10 text-[var(--color-orange)]">
                <item.icon size={21} />
              </div>
              <h3 className="mt-5 font-sora text-[1.2rem] font-bold text-[var(--color-text-light)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { registrationUrl, socials } from "@/components/siteConfig";

const faqs = [
  {
    question: "Qui peut participer ?",
    answer:
      "Le format Phoenix s'adresse aux adultes capables d'assumer un effort exigeant. Discovery ouvre la porte a une experience plus accessible. La Randonnee est pensee pour un public plus large et une participation plus conviviale.",
  },
  {
    question: "Un certificat medical est-il requis ?",
    answer:
      "Oui, un certificat medical de non contre-indication a la pratique du sport en competition est requis pour les formats competitifs. Consultez le reglement pour les details complets.",
  },
  {
    question: "Que se passe-t-il si je depasse le temps limite ?",
    answer:
      "La logique du challenge repose sur le cutoff. Si une boucle n'est pas terminee dans le delai prevu, la course s'arrete a la derniere boucle validee.",
  },
  {
    question: "Quelle course choisir ?",
    answer:
      "Phoenix pour l'engagement maximal, Discovery pour une premiere aventure trail plus accessible, Randonnee pour l'ambiance et la decouverte sans l'intensite competitive complete.",
  },
  {
    question: "Y a-t-il des ravitaillements ?",
    answer:
      "Oui. Le concept Phoenix s'appuie aussi sur les phases de recupération et de ravitaillement entre les passages, ce qui fait partie de la gestion globale de l'effort.",
  },
  {
    question: "Peut-on s'inscrire le jour meme ?",
    answer:
      "L'inscription en ligne est fortement recommandee. Contactez l'organisation pour verifier les disponibilites de derniere minute avant l'evenement.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="site-section bg-[var(--color-bg-light)]">
      <div className="site-shell grid gap-10 lg:grid-cols-[minmax(320px,0.86fr)_minmax(0,1.14fr)] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="FAQ"
            title="Les reponses essentielles, presentees plus clairement."
            description="Toutes les reponses aux questions les plus frequentes. Besoin d'autre chose ? Ecrivez-nous directement."
            tone="light"
          />

          <div className="mt-8 space-y-4">
            <a
              href={registrationUrl}
              target="_blank"
              rel="noreferrer"
              className="site-button-primary w-full px-6 py-4 text-sm sm:w-auto"
            >
              Aller a l&apos;inscription
            </a>
            <a
              href={socials.email}
              className="block text-sm font-semibold text-[var(--color-text-light)] underline decoration-[var(--color-orange)] underline-offset-4"
            >
              Une autre question ? Ecrivez a contact@runinsfax.com
            </a>
          </div>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.article
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={[
                  "overflow-hidden rounded-[1.6rem] border transition-colors duration-200",
                  isOpen
                    ? "border-[rgba(242,106,46,0.28)] bg-white shadow-[0_18px_40px_rgba(15,17,21,0.06)]"
                    : "border-[var(--color-card-border-light)] bg-white/70",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-sora text-[1.06rem] font-bold text-[var(--color-text-light)]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={[
                      "shrink-0 transition-transform duration-300",
                      isOpen ? "rotate-180 text-[var(--color-orange)]" : "text-[var(--color-muted)]",
                    ].join(" ")}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="mb-4 h-px bg-[var(--color-card-border-light)]" />
                        <p className="text-sm leading-7 text-[var(--color-muted)]">{faq.answer}</p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

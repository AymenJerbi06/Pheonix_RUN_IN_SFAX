"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import PhoenixMark from "@/components/PhoenixMark";
import { navLinks, registrationUrl } from "@/components/siteConfig";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div
          className={[
            "site-shell transition-all duration-300",
            scrolled ? "translate-y-0" : "",
          ].join(" ")}
        >
          <div
            className={[
              "site-corner-frame flex items-center justify-between overflow-hidden rounded-[1.6rem_1.9rem_1.6rem_0.45rem] border px-4 py-3 sm:px-5",
              scrolled
                ? "border-white/10 bg-[#0f1115]/82 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
                : "border-white/8 bg-black/18 backdrop-blur-md",
            ].join(" ")}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(242,106,46,0),rgba(242,106,46,0.82),rgba(217,164,65,0.82),rgba(242,106,46,0))]" />
            <button
              type="button"
              onClick={() => scrollToSection("#accueil")}
              className="rounded-full text-left transition-transform duration-200 hover:scale-[1.01]"
              aria-label="Retour en haut de page"
            >
              <div className="flex items-center gap-4">
                <PhoenixMark compact />
                <div className="hidden border-l border-white/10 pl-4 md:block">
                  <p className="site-display text-[0.72rem] leading-none text-[var(--color-orange)]">
                    Edition 2026
                  </p>
                  <p className="mt-1 text-[0.72rem] uppercase tracking-[0.22em] text-white/46">
                    Chaffar, Sfax
                  </p>
                </div>
              </div>
            </button>

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className="group px-4 py-2 text-sm font-semibold text-white/72 transition-colors duration-200 hover:text-white"
                >
                  <span>{link.label}</span>
                  <span className="mt-2 block h-px w-0 bg-[linear-gradient(90deg,rgba(242,106,46,0),rgba(242,106,46,0.95),rgba(217,164,65,0.65))] transition-all duration-200 group-hover:w-full" />
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="site-button-primary hidden px-5 py-3 text-sm sm:inline-flex"
              >
                S&apos;inscrire
                <ArrowRight size={16} />
              </a>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 lg:hidden"
                aria-label="Ouvrir le menu"
              >
                <Menu size={19} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={[
          "fixed inset-0 z-[60] transition-all duration-300 lg:hidden",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div
          className="absolute inset-0 bg-[#07090c]/96 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />

        <div className="relative flex h-full flex-col justify-between px-6 pb-8 pt-5">
          <div className="flex items-center justify-between">
            <PhoenixMark compact />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
              aria-label="Fermer le menu"
            >
              <X size={19} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="flex items-center justify-between border-b border-white/8 py-5 text-left font-sora text-[1.45rem] font-bold text-white transition-colors duration-200 hover:text-[var(--color-orange)]"
              >
                <span>{link.label}</span>
                <ArrowRight size={18} />
              </button>
            ))}
          </nav>

          <div className="space-y-4">
            <a
              href={registrationUrl}
              target="_blank"
              rel="noreferrer"
              className="site-button-primary w-full px-6 py-4 text-base"
            >
              S&apos;inscrire maintenant
              <ArrowRight size={18} />
            </a>
            <p className="text-center text-xs uppercase tracking-[0.28em] text-white/40">
              Phoenix Running Challenge 2026
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

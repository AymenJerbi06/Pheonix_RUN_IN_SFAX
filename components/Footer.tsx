import { ArrowUpRight, CalendarDays, MapPin, Mail } from "lucide-react";
import PhoenixMark from "@/components/PhoenixMark";
import { navLinks, registrationUrl, socials } from "@/components/siteConfig";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[var(--color-footer)] text-white">
      <div className="site-shell grid gap-12 py-14 lg:grid-cols-[minmax(0,0.95fr)_repeat(3,minmax(0,0.68fr))] lg:gap-8">
        <div>
          <PhoenixMark compact />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/62">
            Une experience trail portee par Run In Sfax, pensee pour mettre en
            valeur l'endurance, la nature de Chaffar et la communaute Phoenix.
          </p>
          <a
            href={registrationUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-orange)]"
          >
            Aller a l&apos;inscription
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-white/38">
            Navigation
          </h3>
          <div className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-white/66 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-white/38">
            Event
          </h3>
          <div className="mt-5 space-y-4 text-sm text-white/66">
            <div className="flex items-start gap-3">
              <CalendarDays size={16} className="mt-1 text-[var(--color-orange)]" />
              <span>28 mars 2026</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 text-[var(--color-orange)]" />
              <span>Chaffar, Sfax, Tunisie</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={16} className="mt-1 text-[var(--color-orange)]" />
              <a href={socials.email} className="transition-colors duration-200 hover:text-white">
                contact@runinsfax.com
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-white/38">
            Social
          </h3>
          <div className="mt-5 space-y-3">
            <a
              href={socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/72 transition-colors duration-200 hover:text-white"
            >
              <span>Facebook</span>
              <ArrowUpRight size={16} />
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/72 transition-colors duration-200 hover:text-white"
            >
              <span>Instagram</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="site-shell flex flex-col gap-3 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Phoenix Running Challenge. Organise par Run In Sfax.</p>
          <p>Organise par Run In Sfax · Chaffar, Sfax, Tunisie</p>
        </div>
      </div>
    </footer>
  );
}

export const registrationUrl = "https://phoenix.runinsfax.com/registration";
export const mainEventUrl = "https://runinsfax.com/phoenix/";

export const rules = {
  fr: "https://runinsfax.com/wp-content/uploads/2024/02/termes_phoenix_running_challenge_fr.pdf",
  ar: "https://runinsfax.com/wp-content/uploads/2024/02/termes_phoenix_running_challenge_ar.pdf",
};

export const socials = {
  facebook: "https://www.facebook.com/RunInSFAX",
  instagram: "https://www.instagram.com/run_in_sfax/",
  email: "mailto:contact@runinsfax.com",
};

export const media = {
  hero: "/images/hero-finish.jpg",
  runners: "/images/runners-road.jpg",
  crowd: "/images/crowd-energy.jpg",
  podium: "/images/podium-night.jpg",
  mural: "/images/chaffar-mural.jpg",
  partners: "/images/partners-board.jpg",
};

export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "A propos", href: "#apropos" },
  { label: "Courses", href: "#courses" },
  { label: "Classements", href: "#classements" },
  { label: "Galerie", href: "#galerie" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const rankingArchive = {
  "2025": [
    {
      format: "Phoenix",
      pdf: "https://runinsfax.com/wp-content/uploads/2025/11/Phoenix-Classement-3.pdf",
      results: [
        { rank: 1, name: "Ahmed Ben Ali" },
        { rank: 2, name: "Mohamed Chaari" },
        { rank: 3, name: "Karim Trabelsi" },
      ],
    },
    {
      format: "Discovery",
      pdf: "https://runinsfax.com/wp-content/uploads/2025/11/Discovery-RANK-3.pdf",
      results: [
        { rank: 1, name: "Sarra Mansouri" },
        { rank: 2, name: "Fatma Karoui" },
        { rank: 3, name: "Nour Ben Salah" },
      ],
    },
  ],
  "2024": [
    {
      format: "Phoenix",
      pdf: "https://runinsfax.com/wp-content/uploads/2024/02/Phoenix-12-boucles.pdf",
      results: [
        { rank: 1, name: "Yassine Hamdi" },
        { rank: 2, name: "Bilel Rezgui" },
        { rank: 3, name: "Adnen Gafsi" },
      ],
    },
    {
      format: "Discovery",
      pdf: "https://runinsfax.com/wp-content/uploads/2024/02/Decouverte-3-boucles.pdf",
      results: [
        { rank: 1, name: "Imen Bouaziz" },
        { rank: 2, name: "Rania Sfar" },
        { rank: 3, name: "Dorra Hajlaoui" },
      ],
    },
  ],
  "2023": [
    {
      format: "Phoenix",
      pdf: "https://runinsfax.com/wp-content/uploads/2023/10/Phoenix-Running-Challenge-2023-Classement.pdf",
      results: [
        { rank: 1, name: "Fares Boukadi" },
        { rank: 2, name: "Nizar Amara" },
        { rank: 3, name: "Tarek Mejri" },
      ],
    },
  ],
} as const;

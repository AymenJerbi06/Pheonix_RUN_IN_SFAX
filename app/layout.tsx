import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phoenix Running Challenge | Run In Sfax",
  description:
    "Phoenix Running Challenge - Discover Your Power. Un evenement trail organise par Run In Sfax a Chaffar, Sfax, Tunisie. 28 mars 2026. Trois formats : Phoenix, Discovery et Randonnee.",
  keywords: [
    "Phoenix Running Challenge",
    "trail running",
    "Sfax",
    "Tunisie",
    "Run In Sfax",
    "course a pied",
    "Chaffar",
  ],
  openGraph: {
    title: "Phoenix Running Challenge | Run In Sfax",
    description:
      "Un appel au depassement de soi au coeur de la nature de Chaffar. 28 mars 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const titleTone =
    tone === "dark" ? "text-white" : "text-[var(--color-text-light)]";
  const copyTone =
    tone === "dark" ? "text-white/68" : "text-[var(--color-muted)]";
  const eyebrowTone =
    tone === "dark"
      ? "border-white/12 bg-white/[0.04] text-[var(--color-orange)]"
      : "border-[var(--color-card-border-light)] bg-white text-[var(--color-orange)]";

  return (
    <div
      className={[
        align === "center" ? "mx-auto text-center" : "",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "site-accent-rule",
          align === "center" ? "justify-center" : "",
        ].join(" ")}
      >
        <span className={`site-eyebrow ${eyebrowTone}`}>{eyebrow}</span>
      </div>
      <h2 className={`site-title ${titleTone}`}>{title}</h2>
      {description ? (
        <p className={`site-copy ${copyTone}`}>{description}</p>
      ) : null}
    </div>
  );
}

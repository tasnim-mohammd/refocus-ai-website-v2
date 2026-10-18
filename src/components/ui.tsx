import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonVariant = "dark" | "accent" | "light";

const buttonStyles: Record<ButtonVariant, { root: string; circle: string }> = {
  dark: { root: "bg-navy text-white hover:bg-[#13234a]", circle: "bg-white text-navy" },
  accent: {
    root: "bg-accent text-white shadow-[0_12px_32px_rgb(37_99_235/0.32)] hover:bg-[#1d4fd8]",
    circle: "bg-white text-accent",
  },
  light: { root: "bg-white text-ink border border-line hover:border-[#cfd8e6]", circle: "bg-navy text-white" },
};

export function Button({
  href,
  children,
  variant = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const s = buttonStyles[variant];
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-between gap-4 rounded-full py-1.5 pr-1.5 pl-6 text-[15px] font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${s.root} ${className}`}
    >
      <span>{children}</span>
      <span
        className={`grid size-10 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${s.circle}`}
      >
        <ArrowUpRight className="size-[18px]" strokeWidth={2.2} />
      </span>
    </a>
  );
}

export function SectionLabel({
  number,
  children,
  tone = "dark",
  className = "",
}: {
  number: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <div
      className={`flex items-center gap-3 text-[13px] font-semibold tracking-[0.14em] uppercase ${className}`}
    >
      <span className={light ? "text-white/70" : "text-accent"}>{number}</span>
      <span className={`h-px w-8 ${light ? "bg-white/50" : "bg-accent"}`} />
      <span className={light ? "text-white/70" : "text-ink"}>{children}</span>
    </div>
  );
}

export function SectionHeading({
  number,
  label,
  title,
  aside,
  action,
}: {
  number: string;
  label: string;
  title: string;
  aside: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="flex max-w-[640px] flex-col gap-5">
        <SectionLabel number={number}>{label}</SectionLabel>
        <h2 className="font-display text-[36px] leading-[1.05] font-semibold tracking-[-0.03em] text-ink md:text-[56px]">
          {title}
        </h2>
      </div>
      <div className="flex max-w-[400px] flex-col items-start gap-6">
        <p className="text-[17px] leading-relaxed text-muted md:text-[19px]">{aside}</p>
        {action}
      </div>
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 md:px-8 xl:px-0 ${className}`}>{children}</div>;
}

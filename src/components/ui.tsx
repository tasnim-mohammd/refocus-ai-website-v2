import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonVariant = "dark" | "accent" | "light";

const buttonStyles: Record<ButtonVariant, { root: string; circle: string }> = {
  // Navy body with a blue→violet gradient outline and a soft inner highlight.
  dark: {
    root: "border border-transparent text-white [background:linear-gradient(#0A1630,#0A1630)_padding-box,linear-gradient(135deg,#60A5FA,#4F46E5_50%,#A78BFA)_border-box] shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_12px_30px_-10px_rgb(10_22_48/0.55)] hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_16px_40px_-10px_rgb(79_70_229/0.55)]",
    circle: "bg-white/10 text-white ring-1 ring-white/20 group-hover:bg-white group-hover:text-navy group-hover:ring-white",
  },
  // Brand gradient with a glassy top highlight and coloured glow.
  accent: {
    root: "text-white bg-[linear-gradient(135deg,#2563EB,#4F46E5_55%,#7C3AED)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_14px_32px_-10px_rgb(79_70_229/0.6)] hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_20px_44px_-10px_rgb(79_70_229/0.75)]",
    circle: "bg-white/15 text-white ring-1 ring-white/30 group-hover:bg-white group-hover:text-[#4F46E5] group-hover:ring-white",
  },
  // Frosted glass.
  light: {
    root: "text-ink border border-white/80 bg-white/60 backdrop-blur-xl shadow-[inset_0_1px_0_rgb(255_255_255/0.9),0_10px_30px_-14px_rgb(10_22_48/0.25)] hover:bg-white/80",
    circle: "bg-ink/[0.05] text-ink ring-1 ring-ink/10 group-hover:bg-navy group-hover:text-white group-hover:ring-navy",
  },
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
      className={`group relative isolate inline-flex items-center justify-between gap-4 overflow-hidden rounded-full py-1.5 pr-1.5 pl-6 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${s.root} ${className}`}
    >
      {/* light sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-1/3 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[400%]"
      />
      <span>{children}</span>
      {/* arrow slides out top-right while a new one slides in */}
      <span
        className={`relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-full transition-colors duration-300 ${s.circle}`}
      >
        <ArrowUpRight
          className="absolute size-[18px] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-x-6 group-hover:-translate-y-6"
          strokeWidth={2.2}
        />
        <ArrowUpRight
          aria-hidden
          className="absolute size-[18px] -translate-x-6 translate-y-6 transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-x-0 group-hover:translate-y-0"
          strokeWidth={2.2}
        />
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

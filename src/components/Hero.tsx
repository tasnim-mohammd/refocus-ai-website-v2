import { TrendingUp } from "lucide-react";
import heroBg from "../assets/images/hero-bg.webp";
import { CLIENTS, CONTACT } from "../content";
import { Button, Container } from "./ui";

const BARS = [36, 52, 42, 64, 48, 70, 58, 80];
const KPIS = [
  ["99.8%", "Accuracy"],
  ["4.2B", "Nodes"],
  ["12ms", "Latency"],
];

/** Solid white floating card shared by the hero widgets. */
const CARD = "rounded-[22px] bg-white/95 backdrop-blur-xl ring-1 ring-white/60 shadow-[0_30px_70px_-20px_rgb(0_0_0/0.45)]";

function LiveDot() {
  return (
    <span className="relative flex size-2">
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#22c55e] opacity-60" />
      <span className="relative inline-flex size-2 rounded-full bg-[#22c55e]" />
    </span>
  );
}

function StatusChip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex w-fit items-center gap-2.5 rounded-full border border-white/25 bg-white/15 py-2 pr-4 pl-3 text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.25)] backdrop-blur-xl ${className}`}
    >
      <LiveDot />
      <span className="text-[13px] font-medium">
        System Status: <span className="text-[#86efac]">Optimized</span>
      </span>
    </div>
  );
}

function ProjectsCard({ className = "" }: { className?: string }) {
  return (
    <div className={`${CARD} flex w-fit items-center gap-4 py-4 pr-6 pl-4 ${className}`}>
      <span className="grid size-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-[0_8px_20px_-6px_rgb(37_99_235/0.6)]">
        <TrendingUp className="size-[22px]" strokeWidth={2} />
      </span>
      <div>
        <p className="font-display text-[32px] leading-none font-semibold tracking-[-0.04em] text-ink">25+</p>
        <p className="mt-1 text-[13px] text-muted">Successful Projects</p>
      </div>
    </div>
  );
}

function PredictiveEngine({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={`${CARD} p-5 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[15px] font-semibold text-ink">Predictive Engine</p>
          <p className="text-[13px] text-muted">Live AI Processing</p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-[#f0fdf4] px-2.5 py-1 text-xs font-medium text-[#15803d] ring-1 ring-[#bbf7d0]">
          <LiveDot />
          Live
        </span>
      </div>
      {!compact && (
        <div className="mt-5 flex h-16 items-end gap-1.5" aria-hidden>
          {BARS.map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%`, animationDelay: `${i * -0.35}s` }}
              className={`flex-1 origin-bottom rounded-[5px] motion-safe:animate-[bar_2.8s_ease-in-out_infinite_alternate] ${
                i === BARS.length - 1 ? "bg-brand-gradient" : "bg-accent-soft"
              }`}
            />
          ))}
        </div>
      )}
      <dl className="mt-4 grid grid-cols-3 border-t border-line pt-4">
        {KPIS.map(([v, l], i) => (
          <div key={l} className={i ? "border-l border-line pl-4" : ""}>
            <dt className="sr-only">{l}</dt>
            <dd className="font-display text-lg font-semibold tracking-tight text-ink">{v}</dd>
            <dd className="text-xs text-muted">{l}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home">
      {/* full-bleed photo stage */}
      <div
        id="hero-stage"
        className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-navy pt-32 pb-20 md:min-h-[min(940px,100svh)] md:pt-40 md:pb-28"
      >
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 -z-20 size-full object-cover object-[86%_center] lg:object-[center_38%] motion-safe:animate-[heroZoom_18s_ease-out_both]"
        />
        {/* legibility overlays: dark on the text side, opening up towards the people */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(10_22_48/0.8)_0%,rgb(10_22_48/0.72)_45%,rgb(10_22_48/0.94)_100%)] lg:bg-[linear-gradient(90deg,rgb(10_22_48/0.94)_0%,rgb(10_22_48/0.8)_38%,rgb(10_22_48/0.35)_70%,rgb(10_22_48/0.2)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-b from-transparent to-[rgb(10_22_48/0.7)]"
        />
        <div aria-hidden className="glow -bottom-40 -left-20 -z-10 h-[420px] w-[520px] bg-[#4f46e5]/45" />

        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,600px)_1fr]">
            {/* copy */}
            <div className="flex flex-col gap-6 md:gap-7">
              <p className="flex items-center gap-4 motion-safe:animate-[fadeUp_.7s_ease_both]">
                <span aria-hidden className="h-px w-12 bg-gradient-to-r from-[#7db4ff] to-[#b69cff]" />
                <span className="font-serif text-[24px] leading-none text-white/75 italic md:text-[28px]">
                  Hello, welcome to
                </span>
              </p>
              <h1 className="font-display text-[60px] leading-[0.96] font-semibold tracking-[-0.04em] text-white motion-safe:animate-[fadeUp_.7s_.08s_ease_both] sm:text-[80px] xl:text-[104px]">
                Refocus{" "}
                <span className="bg-gradient-to-r from-[#7db4ff] to-[#b69cff] bg-clip-text text-transparent">AI</span>
              </h1>
              <p className="font-display text-[22px] leading-[1.35] font-medium tracking-[-0.01em] text-white motion-safe:animate-[fadeUp_.7s_.16s_ease_both] md:text-[28px]">
                Turn your data into smarter decisions with AI-driven solutions.
              </p>
              <p className="max-w-[520px] text-base leading-relaxed text-white/70 motion-safe:animate-[fadeUp_.7s_.24s_ease_both] md:text-[19px]">
                We help businesses unlock the power of data, automate workflows, and reduce operational costs
                through advanced AI and analytics.
              </p>
              <div className="flex flex-col gap-2.5 pt-1 motion-safe:animate-[fadeUp_.7s_.32s_ease_both] sm:flex-row sm:gap-3">
                <Button href={`mailto:${CONTACT.bookingEmail}`} variant="accent">
                  Book Consultation
                </Button>
                <Button href={`mailto:${CONTACT.bookingEmail}`} variant="glass">
                  Talk to an AI Expert
                </Button>
              </div>
            </div>

            {/* floating widgets — desktop */}
            <div className="relative hidden h-[480px] lg:block">
              <div className="absolute top-0 right-[40px] motion-safe:animate-[fadeUp_.9s_.4s_ease_both]">
                <StatusChip className="motion-safe:animate-[float_7s_ease-in-out_-2s_infinite]" />
              </div>
              <div className="absolute top-[70px] left-0 motion-safe:animate-[fadeUp_.9s_.55s_ease_both]">
                <ProjectsCard className="motion-safe:animate-[float_6s_ease-in-out_infinite]" />
              </div>
              <div className="absolute bottom-0 left-[40px] w-[300px] motion-safe:animate-[fadeUp_.9s_.7s_ease_both]">
                <PredictiveEngine className="motion-safe:animate-[float_8s_ease-in-out_-1s_infinite]" />
              </div>
            </div>

            {/* widgets — mobile/tablet */}
            <div className="flex flex-col gap-3 lg:hidden">
              <StatusChip />
              <PredictiveEngine compact />
            </div>
          </div>
        </Container>
      </div>

      {/* clients */}
      <Container>
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:gap-12 md:py-12">
          <div className="shrink-0 text-center md:text-left">
            <p className="text-[12px] font-semibold tracking-[0.14em] text-subtle uppercase">Our clients</p>
            <p className="text-[15px] font-medium text-ink">Trusted by Industry Leaders</p>
          </div>
          <ul className="grid flex-1 gap-3 sm:grid-cols-3 md:gap-6">
            {CLIENTS.map((c) => (
              <li
                key={c.name}
                className="flex h-16 items-center justify-center rounded-2xl bg-ink/[0.035] px-6 transition-colors hover:bg-ink/[0.06]"
              >
                <img src={c.logo} alt={c.name} className={`${c.height} w-auto max-w-full opacity-80`} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

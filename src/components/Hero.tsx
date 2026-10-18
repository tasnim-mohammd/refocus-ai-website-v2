import { TrendingUp } from "lucide-react";
import heroImg from "../assets/images/hero.webp";
import strategyImg from "../assets/images/strategy.webp";
import { CLIENTS, CONTACT } from "../content";
import { Button, Container } from "./ui";

const BARS = [36, 52, 42, 64, 48, 70, 58, 80];
const KPIS = [
  ["99.8%", "Accuracy"],
  ["4.2B", "Nodes"],
  ["12ms", "Latency"],
];

/** Solid white floating card shared by the hero widgets. */
const CARD =
  "rounded-[22px] bg-white ring-1 ring-ink/[0.06] shadow-[0_24px_60px_-16px_rgb(10_22_48/0.22)]";

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
      className={`flex items-center gap-2.5 rounded-full bg-white/95 py-2 pr-4 pl-3 shadow-[0_10px_30px_-8px_rgb(10_22_48/0.25)] backdrop-blur ${className}`}
    >
      <LiveDot />
      <span className="text-[13px] font-medium text-ink">
        System Status: <span className="text-[#15803d]">Optimized</span>
      </span>
    </div>
  );
}

function ProjectsCard({ className = "" }: { className?: string }) {
  return (
    <div className={`${CARD} flex items-center gap-4 py-4 pr-6 pl-4 ${className}`}>
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
    <section id="home" className="relative overflow-hidden pt-28 md:pt-40">
      {/* backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="glow -top-40 right-[-80px] h-[620px] w-[720px] bg-[#93c5fd]/55" />
        <div className="glow top-[360px] left-[30%] h-[520px] w-[520px] bg-[#c4b5fd]/40" />
        <div className="glow top-[520px] -right-20 h-[360px] w-[360px] bg-[#7dd3fc]/35" />
        <div className="absolute inset-x-0 top-0 mx-auto hidden h-full max-w-[1200px] justify-between opacity-50 xl:flex">
          {Array.from({ length: 11 }).map((_, i) => (
            <span key={i} className="h-full w-px bg-line/60" />
          ))}
        </div>
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,560px)_1fr] lg:gap-6">
          {/* copy */}
          <div className="flex flex-col gap-6 md:gap-7">
            <p className="flex items-center gap-4 motion-safe:animate-[fadeUp_.7s_ease_both]">
              <span aria-hidden className="h-px w-12 bg-gradient-to-r from-accent to-violet" />
              <span className="font-serif text-[24px] leading-none text-muted italic md:text-[28px]">
                Hello, welcome to
              </span>
            </p>
            <h1 className="font-display text-[60px] leading-[0.96] font-semibold tracking-[-0.04em] text-ink motion-safe:animate-[fadeUp_.7s_.08s_ease_both] sm:text-[80px] xl:text-[104px]">
              Refocus <span className="text-brand-gradient">AI</span>
            </h1>
            <p className="font-display text-[22px] leading-[1.35] font-medium tracking-[-0.01em] text-ink motion-safe:animate-[fadeUp_.7s_.16s_ease_both] md:text-[28px]">
              Turn your data into smarter decisions with AI-driven solutions.
            </p>
            <p className="max-w-[520px] text-base leading-relaxed text-muted motion-safe:animate-[fadeUp_.7s_.24s_ease_both] md:text-[19px]">
              We help businesses unlock the power of data, automate workflows, and reduce operational costs
              through advanced AI and analytics.
            </p>
            <div className="flex flex-col gap-2.5 pt-1 motion-safe:animate-[fadeUp_.7s_.32s_ease_both] sm:flex-row sm:gap-3">
              <Button href={`mailto:${CONTACT.bookingEmail}`} variant="accent">
                Book Consultation
              </Button>
              <Button href={`mailto:${CONTACT.bookingEmail}`} variant="light">
                Talk to an AI Expert
              </Button>
            </div>
          </div>

          {/* collage — desktop */}
          <div className="relative hidden h-[640px] lg:block">
            <div className="absolute top-0 right-[56px] h-[560px] w-[430px] motion-safe:animate-[fadeUp_.9s_.1s_ease_both]">
              <img
                src={heroImg}
                alt="Refocus AI team in a strategy session"
                className="size-full rounded-[36px] object-cover shadow-[0_40px_80px_-20px_rgb(10_22_48/0.35)]"
              />
              <StatusChip className="absolute top-5 left-5" />
            </div>

            <div className="absolute bottom-0 left-0 motion-safe:animate-[fadeUp_.9s_.3s_ease_both]">
              <img
                src={strategyImg}
                alt=""
                className="h-[260px] w-[220px] rounded-[28px] object-cover shadow-[0_30px_60px_-16px_rgb(10_22_48/0.35)] ring-[6px] ring-white motion-safe:animate-[float_8s_ease-in-out_-3s_infinite]"
              />
            </div>

            <div className="absolute top-[110px] left-[-8px] motion-safe:animate-[fadeUp_.9s_.45s_ease_both]">
              <ProjectsCard className="motion-safe:animate-[float_6s_ease-in-out_infinite]" />
            </div>

            <div className="absolute right-0 bottom-[36px] w-[300px] motion-safe:animate-[fadeUp_.9s_.6s_ease_both]">
              <PredictiveEngine className="motion-safe:animate-[float_7s_ease-in-out_-1.5s_infinite]" />
            </div>
          </div>

          {/* collage — mobile/tablet */}
          <div className="relative lg:hidden">
            <img
              src={heroImg}
              alt="Refocus AI team in a strategy session"
              className="h-[420px] w-full rounded-[28px] object-cover shadow-[0_30px_60px_-20px_rgb(10_22_48/0.35)] sm:h-[480px]"
            />
            <StatusChip className="absolute top-4 left-4" />
            <PredictiveEngine compact className="absolute inset-x-4 bottom-4" />
          </div>
        </div>

        {/* clients */}
        <div className="mt-16 flex flex-col gap-6 border-t border-line py-8 md:mt-20 md:flex-row md:items-center md:gap-12">
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

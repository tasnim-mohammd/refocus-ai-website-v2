import heroImg from "../assets/images/hero.webp";
import strategyImg from "../assets/images/strategy.webp";
import { CLIENTS, CONTACT } from "../content";
import { Button, Container } from "./ui";

const BARS = [28, 40, 32, 48, 36, 52, 44, 56];

function PredictiveEngine({ className = "" }: { className?: string }) {
  return (
    <div className={`glass rounded-[22px] p-5 md:rounded-3xl md:p-[22px] ${className}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[15px] font-medium text-ink">Predictive Engine</p>
          <p className="text-[13px] text-muted md:text-sm">Live AI Processing</p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-[#dcfce7] px-2.5 py-1 text-xs font-medium text-[#15803d]">
          <span className="relative flex size-[7px]">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#16a34a] opacity-60" />
            <span className="relative inline-flex size-[7px] rounded-full bg-[#16a34a]" />
          </span>
          Live
        </span>
      </div>
      <div className="mt-4 hidden h-14 items-end gap-1.5 md:flex" aria-hidden>
        {BARS.map((h, i) => (
          <span
            key={i}
            style={{ height: h }}
            className={`flex-1 rounded-md ${i === BARS.length - 1 ? "bg-brand-gradient" : "bg-accent-soft"}`}
          />
        ))}
      </div>
      <dl className="mt-4 flex justify-between">
        {[
          ["99.8%", "Accuracy"],
          ["4.2B", "Nodes"],
          ["12ms", "Latency"],
        ].map(([v, l]) => (
          <div key={l}>
            <dt className="sr-only">{l}</dt>
            <dd className="font-display text-lg font-semibold tracking-tight text-ink md:text-xl">{v}</dd>
            <dd className="text-xs text-muted md:text-sm">{l}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function StatusChip({ className = "" }: { className?: string }) {
  return (
    <div className={`glass flex items-center gap-2.5 rounded-full py-2.5 pr-4 pl-3.5 ${className}`}>
      <span className="size-2 rounded-full bg-[#22c55e] shadow-[0_0_0_4px_rgb(34_197_94/0.15)]" />
      <span className="text-[13px] font-medium text-ink md:text-[15px]">System Status: Optimized</span>
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
            <div className="flex w-fit items-center gap-2.5 rounded-full border border-line bg-white py-1.5 pr-4 pl-1.5">
              <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent">
                AI
              </span>
              <span className="text-[14px] font-medium text-ink md:text-[15px]">Hello, welcome to</span>
            </div>
            <h1 className="font-display text-[60px] leading-[0.96] font-semibold tracking-[-0.04em] text-ink sm:text-[80px] xl:text-[104px]">
              Refocus <span className="text-brand-gradient">AI</span>
            </h1>
            <p className="font-display text-[22px] leading-[1.35] font-medium tracking-[-0.01em] text-ink md:text-[28px]">
              Turn your data into smarter decisions with AI-driven solutions.
            </p>
            <p className="max-w-[520px] text-base leading-relaxed text-muted md:text-[19px]">
              We help businesses unlock the power of data, automate workflows, and reduce operational costs
              through advanced AI and analytics.
            </p>
            <div className="flex flex-col gap-2.5 pt-1 sm:flex-row sm:gap-3">
              <Button href={`mailto:${CONTACT.bookingEmail}`} variant="accent">
                Book Consultation
              </Button>
              <Button href={`mailto:${CONTACT.bookingEmail}`} variant="light">
                Talk to an AI Expert
              </Button>
            </div>
          </div>

          {/* collage — desktop */}
          <div className="relative hidden h-[660px] lg:block">
            <img
              src={heroImg}
              alt="Refocus AI team in a strategy session"
              className="absolute top-0 right-[80px] h-[580px] w-[440px] rounded-[36px] object-cover shadow-[0_40px_80px_rgb(10_22_48/0.16)]"
            />
            <img
              src={strategyImg}
              alt=""
              className="absolute top-[350px] left-0 h-[300px] w-[250px] rounded-[28px] object-cover shadow-[0_30px_60px_rgb(10_22_48/0.18)] outline-8 outline-white"
            />
            <div className="glass absolute top-[180px] left-[10px] rounded-[22px] px-[22px] py-[18px]">
              <p className="font-display text-[44px] leading-none font-semibold tracking-[-0.04em] text-brand-gradient">
                25+
              </p>
              <p className="mt-1 text-sm text-muted">Successful Projects</p>
            </div>
            <StatusChip className="absolute top-[30px] right-[40px]" />
            <PredictiveEngine className="absolute top-[410px] right-0 w-[320px]" />
          </div>

          {/* collage — mobile/tablet */}
          <div className="relative lg:hidden">
            <img
              src={heroImg}
              alt="Refocus AI team in a strategy session"
              className="h-[400px] w-full rounded-[28px] object-cover shadow-[0_30px_60px_rgb(10_22_48/0.14)] sm:h-[480px]"
            />
            <StatusChip className="absolute top-4 left-4" />
            <PredictiveEngine className="absolute inset-x-4 bottom-4" />
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

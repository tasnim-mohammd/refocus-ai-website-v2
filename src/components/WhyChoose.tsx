import { ChartLine, ShieldCheck, Sparkles, Zap } from "lucide-react";
import buildImg from "../assets/images/build.webp";
import { Container, SectionHeading } from "./ui";

export function WhyChoose() {
  return (
    <section className="py-20 md:py-32">
      <Container className="flex flex-col gap-12 md:gap-16">
        <SectionHeading
          number="01"
          label="Why choose us"
          title="Why Businesses Choose Refocus AI?"
          aside="We help you turn AI into real business results faster, smarter, and with less risk."
        />

        <div className="grid gap-3 md:gap-6 lg:grid-cols-[1fr_476px]">
          {/* Instant Automation */}
          <article className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[28px] bg-navy p-7 md:min-h-[360px] md:rounded-[32px] md:p-10">
            <div aria-hidden className="glow -top-40 right-[-60px] h-[420px] w-[420px] bg-accent/55" />
            <div aria-hidden className="absolute top-[120px] right-[140px] hidden md:block">
              {[120, 190, 260, 330].map((r, i) => (
                <span
                  key={r}
                  style={{ width: r * 2, height: r * 2, opacity: 0.08 - i * 0.012 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"
                />
              ))}
            </div>
            <div className="relative flex items-start justify-between">
              <span className="grid size-[52px] place-items-center rounded-[18px] border border-white/15 bg-white/10 text-white md:size-16 md:rounded-[20px]">
                <Zap className="size-6 md:size-7" strokeWidth={1.8} />
              </span>
              <span className="text-[13px] font-semibold tracking-[0.14em] text-white/50">01</span>
            </div>
            <div className="relative">
              <h3 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-white md:text-[36px]">
                Instant Automation
              </h3>
              <p className="mt-2 text-base text-white/70 md:text-[19px]">Deploy multi-step agents in seconds.</p>
            </div>
          </article>

          {/* Photo */}
          <figure className="relative min-h-[240px] overflow-hidden rounded-[28px] md:min-h-[360px] md:rounded-[32px]">
            <img
              src={buildImg}
              alt="Refocus AI presenting AI solutions to a client team"
              className="absolute inset-0 size-full object-cover"
            />
            <figcaption className="absolute inset-x-4 bottom-4 flex items-center gap-3.5 rounded-[20px] bg-white/80 p-4 backdrop-blur-xl md:inset-x-6 md:bottom-6">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                <Sparkles className="size-[18px]" strokeWidth={1.8} />
              </span>
              <span className="text-[15px] font-medium text-ink">
                Real business results, delivered faster, smarter and with less risk.
              </span>
            </figcaption>
          </figure>

          {/* Deep Insights */}
          <article className="flex flex-col justify-between gap-8 overflow-hidden rounded-[28px] border border-line bg-white p-7 md:min-h-[300px] md:flex-row md:items-center md:rounded-[32px] md:p-10">
            <div className="flex flex-col gap-10 md:h-full md:justify-between">
              <span className="grid size-[52px] place-items-center rounded-[18px] bg-accent-soft text-accent md:size-14">
                <ChartLine className="size-6" strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[28px]">
                  Deep Insights
                </h3>
                <p className="mt-2 text-base text-muted">Unlock hidden patterns in your data.</p>
              </div>
            </div>
            <svg
              aria-hidden
              viewBox="0 0 300 200"
              className="w-full max-w-[300px] shrink-0 self-center md:self-auto"
              fill="none"
            >
              <defs>
                <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#2563EB" stopOpacity="0.28" />
                  <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 133.5H300M0 66.5H300" stroke="#E4E9F2" strokeDasharray="4 6" />
              <path d="M0 199.5H300" stroke="#E4E9F2" />
              <path d="M0 170 C40 160 60 120 100 128 S160 70 200 84 S260 30 300 22 V200 H0 Z" fill="url(#area)" />
              <path d="M0 170 C40 160 60 120 100 128 S160 70 200 84 S260 30 300 22" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
              <circle cx="293" cy="24" r="6" fill="#fff" stroke="#2563EB" strokeWidth="3" />
            </svg>
          </article>

          {/* Enterprise Security */}
          <article className="relative isolate flex min-h-[260px] flex-col justify-between gap-10 overflow-hidden rounded-[28px] bg-brand-gradient p-7 md:min-h-[300px] md:rounded-[32px] md:p-10">
            {/* emblem: shield with pulsing rings */}
            <div aria-hidden className="pointer-events-none absolute top-1/2 right-[-40px] -z-10 -translate-y-[72%] md:right-[-30px] md:-translate-y-[62%]">
              <div className="relative grid size-[220px] place-items-center md:size-[260px]">
                {[1, 0.78, 0.56].map((scale, i) => (
                  <span
                    key={scale}
                    style={{ transform: `scale(${scale})`, animationDelay: `${i * 0.6}s` }}
                    className="absolute inset-0 rounded-full border border-white/25 motion-safe:animate-[ringPulse_3.6s_ease-in-out_infinite]"
                  />
                ))}
                <span className="absolute inset-[34%] rounded-full bg-white/15 shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_20px_40px_-10px_rgb(30_20_90/0.5)] backdrop-blur-sm" />
                <ShieldCheck className="relative size-12 text-white md:size-14" strokeWidth={1.4} />
                <span className="absolute top-[18%] right-[22%] size-2 rounded-full bg-white/80 shadow-[0_0_12px_rgb(255_255_255/0.9)]" />
                <span className="absolute bottom-[24%] left-[16%] size-1.5 rounded-full bg-white/60" />
              </div>
            </div>
            <div
              aria-hidden
              className="absolute inset-0 -z-20 opacity-30 [background-image:radial-gradient(rgb(255_255_255/0.35)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:linear-gradient(to_left,black,transparent_70%)]"
            />
            <span aria-hidden />
            <div>
              <h3 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-white md:text-[28px]">
                Enterprise Security
              </h3>
              <p className="mt-2 text-base text-white/80">Bank-grade protection by default.</p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}

import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "../content";
import { Container, SectionLabel } from "./ui";

function QuoteMark() {
  return (
    <svg aria-hidden width="56" height="42" viewBox="0 0 64 48" className="h-[30px] w-10 md:h-[42px] md:w-14">
      <defs>
        <linearGradient id="qm" x1="0" y1="0" x2="64" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <path
        d="M0 48V28C0 12 8 2 26 0l3 7C19 10 15 16 15 24h12v24H0Zm35 0V28C35 12 43 2 61 0l3 7c-10 3-14 9-14 17h12v24H35Z"
        fill="url(#qm)"
      />
    </svg>
  );
}

function ArrowButton({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  const next = dir === "next";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={next ? "Next testimonial" : "Previous testimonial"}
      className={`grid size-11 shrink-0 place-items-center rounded-full transition-all duration-300 hover:scale-105 md:size-14 ${
        next ? "bg-navy text-white" : "border border-line bg-white text-ink hover:border-[#cfd8e6]"
      }`}
    >
      {next ? <ArrowRight className="size-5" /> : <ArrowLeft className="size-5" />}
    </button>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;
  const go = useCallback((d: number) => setActive((a) => (a + d + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [paused, go, active]);

  const t = TESTIMONIALS[active];

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <Container className="flex flex-col items-center gap-12 md:gap-14">
        <div className="flex flex-col items-center gap-5 text-center">
          <SectionLabel number="04">Our impact: client voices</SectionLabel>
          <h2 className="font-display text-[36px] leading-[1.05] font-semibold tracking-[-0.03em] text-ink md:text-[56px]">
            Testimonials
          </h2>
        </div>

        <div
          className="flex w-full items-center gap-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="hidden md:block">
            <ArrowButton dir="prev" onClick={() => go(-1)} />
          </div>

          <figure className="flex flex-1 flex-col items-center gap-6 rounded-[28px] border border-line bg-white px-6 pt-10 pb-8 text-center shadow-[0_40px_80px_rgb(38_64_153/0.08)] md:gap-9 md:rounded-[40px] md:px-20 md:pt-[72px] md:pb-14">
            <QuoteMark />
            <blockquote
              key={active}
              aria-live="polite"
              className="flex min-h-[220px] items-center font-display text-[21px] leading-[1.4] font-medium tracking-[-0.015em] text-ink motion-safe:animate-[fadeUp_.5s_ease] md:min-h-[200px] md:text-[34px]"
            >
              <p>{t.quote}</p>
            </blockquote>
            <figcaption className="flex flex-col items-center gap-1">
              <span className="font-display text-lg font-semibold text-ink md:text-xl">{t.name}</span>
              <span className="text-sm text-muted">{t.role}</span>
            </figcaption>

            <div className="flex w-full items-center justify-between gap-3 md:w-auto md:justify-center">
              <div className="md:hidden">
                <ArrowButton dir="prev" onClick={() => go(-1)} />
              </div>
              <div className="flex items-center gap-2 md:gap-3" role="tablist" aria-label="Choose testimonial">
                {TESTIMONIALS.map((p, i) => {
                  const on = i === active;
                  return (
                    <button
                      key={p.name}
                      type="button"
                      role="tab"
                      aria-selected={on}
                      aria-label={`Testimonial from ${p.name}`}
                      onClick={() => setActive(i)}
                      className={`grid place-items-center rounded-full transition-all duration-300 ${
                        on ? "size-12 bg-brand-gradient p-[3px] md:size-16" : "size-9 opacity-55 hover:opacity-90 md:size-[52px]"
                      }`}
                    >
                      <img
                        src={p.image}
                        alt=""
                        className={`size-full rounded-full ${p.isLogo ? "bg-white object-contain p-1" : "object-cover"} ${
                          on ? "border-[3px] border-white" : ""
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
              <div className="md:hidden">
                <ArrowButton dir="next" onClick={() => go(1)} />
              </div>
            </div>
          </figure>

          <div className="hidden md:block">
            <ArrowButton dir="next" onClick={() => go(1)} />
          </div>
        </div>
      </Container>
    </section>
  );
}

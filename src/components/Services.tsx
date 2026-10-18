import { Check, Sparkles } from "lucide-react";
import { SERVICES } from "../content";
import { Container, SectionHeading } from "./ui";

export function Services() {
  return (
    <section id="services" className="bg-tint py-20 md:py-32">
      <Container className="flex flex-col gap-12 md:gap-16">
        <SectionHeading
          number="02"
          label="What we do"
          title="Our AI Services"
          aside="Comprehensive services tailored to drive measurable business value."
        />

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {SERVICES.map((s, i) => {
            const dark = !!s.featured;
            return (
              <article
                key={s.title}
                className={`group flex flex-col gap-7 overflow-hidden rounded-[32px] p-2.5 pb-8 transition-transform duration-300 hover:-translate-y-1.5 ${
                  dark ? "bg-navy shadow-[0_40px_80px_rgb(10_22_48/0.28)]" : "border border-line bg-white"
                }`}
              >
                <div className="relative h-[220px] overflow-hidden rounded-3xl md:h-[260px]">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white/85 px-3 py-1.5 text-[13px] font-semibold tracking-[0.14em] text-ink backdrop-blur">
                    0{i + 1}
                  </span>
                  {dark && (
                    <span className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-brand-gradient px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white uppercase">
                      <Sparkles className="size-3.5" />
                      Most Popular
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-3 px-[22px]">
                  <h3
                    className={`font-display text-2xl font-semibold tracking-[-0.01em] ${dark ? "text-white" : "text-ink"}`}
                  >
                    {s.title}
                  </h3>
                  <p className={`text-base leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>
                    {s.description}
                  </p>
                  <ul className={`mt-3 flex flex-col gap-3 border-t pt-5 ${dark ? "border-white/12" : "border-line"}`}>
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-3">
                        <span
                          className={`grid size-6 place-items-center rounded-full ${
                            dark ? "bg-accent text-white" : "bg-accent-soft text-accent"
                          }`}
                        >
                          <Check className="size-3.5" strokeWidth={2.6} />
                        </span>
                        <span className={`text-[15px] font-medium ${dark ? "text-white" : "text-ink"}`}>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

import { STATS } from "../content";
import { Container, SectionLabel } from "./ui";

export function Capabilities() {
  return (
    <section id="capabilities" className="py-10 md:py-16">
      <Container>
        <div data-header-dark className="relative overflow-hidden rounded-[28px] bg-navy px-6 py-10 md:rounded-[40px] md:p-[72px]">
          <div aria-hidden className="glow -top-56 right-[-80px] h-[520px] w-[640px] bg-accent/60" />
          <div aria-hidden className="glow -bottom-40 -left-32 h-[420px] w-[480px] bg-violet/45" />
          <div aria-hidden className="absolute inset-0 hidden justify-around md:flex">
            {Array.from({ length: 11 }).map((_, i) => (
              <span key={i} className="h-full w-px bg-white/[0.04]" />
            ))}
          </div>

          <div className="relative flex flex-col gap-10 md:gap-[72px]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex flex-col gap-5">
                <SectionLabel number="03" tone="light">
                  By the numbers
                </SectionLabel>
                <h2 className="font-display text-[36px] leading-[1.05] font-semibold tracking-[-0.03em] text-white md:text-[56px]">
                  Our Capabilities
                </h2>
              </div>
              <p className="max-w-[380px] text-base leading-relaxed text-white/70 md:text-[19px]">
                Delivering compounding value through scale and precision.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-x-4 gap-y-7 lg:grid-cols-4 lg:gap-0">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col-reverse gap-2 border-t border-white/14 pt-4 lg:gap-3 lg:border-t-0 lg:pt-0 ${
                    i ? "lg:border-l lg:pl-8" : ""
                  }`}
                >
                  <dt className="text-sm text-white/65 lg:text-[15px] lg:font-medium">{s.label}</dt>
                  <dd className="bg-gradient-to-b from-white to-[#a5c4ff] bg-clip-text font-display text-[44px] leading-none font-semibold tracking-[-0.04em] text-transparent lg:text-[80px]">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

import heroBg from "../assets/images/hero-bg.webp";
import { CLIENTS, CONTACT } from "../content";
import { Button, Container } from "./ui";

export function Hero() {
  return (
    <section id="home">
      {/* full-bleed photo stage */}
      <div
        id="hero-stage"
        className="relative isolate flex min-h-[860px] flex-col overflow-hidden bg-navy pt-32 md:min-h-[max(860px,100svh)] md:pt-40"
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

        <Container className="flex flex-1 items-center pb-16 md:pb-20">
          <div className="max-w-[640px]">
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
              <p className="max-w-[560px] font-display text-[22px] leading-[1.35] font-medium tracking-[-0.01em] text-white motion-safe:animate-[fadeUp_.7s_.16s_ease_both] md:text-[28px]">
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
          </div>
        </Container>

        {/* clients — trusted-by band at the foot of the hero */}
        <div className="border-t border-white/10 bg-[rgb(10_22_48/0.45)] backdrop-blur-md">
          <Container className="flex flex-col gap-6 py-7 md:flex-row md:items-center md:gap-10 md:py-9">
            <div className="flex shrink-0 flex-col gap-1.5 md:w-[230px]">
              <p className="text-[12px] font-semibold tracking-[0.14em] text-[#9ec5ff] uppercase">Our clients</p>
              <p className="text-[15px] leading-snug font-medium text-white/85 md:text-base">
                Trusted by industry leaders across the GCC
              </p>
            </div>
            <ul className="grid flex-1 divide-y divide-white/10 border-y border-white/10 md:grid-cols-3 md:divide-x md:divide-y-0 md:border-x md:border-y-0">
              {CLIENTS.map((c, i) => (
                <li
                  key={c.name}
                  style={{ animationDelay: `${0.5 + i * 0.12}s` }}
                  className="group flex items-center justify-between gap-4 py-5 motion-safe:animate-[fadeUp_.8s_ease_both] md:flex-col md:justify-center md:gap-4 md:px-6 md:py-2"
                >
                  <img
                    src={c.logo}
                    alt={c.name}
                    className={`${c.height} w-auto max-w-[60%] object-contain opacity-70 transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-100 md:max-w-[85%]`}
                  />
                  <span className="text-right text-[11px] font-semibold tracking-[0.16em] whitespace-nowrap text-white/45 uppercase md:text-center transition-colors duration-500 group-hover:text-white/80">
                    {c.sector}
                  </span>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </div>
    </section>
  );
}

import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/logos/refocus-logo.png";
import { CONTACT } from "../content";
import { Button, Container } from "./ui";

const SERVICES = ["AI Training", "Automation", "Analytics", "Consulting"];
const COMPANY = [
  { label: "About", href: "#home" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export function ContactCta() {
  return (
    <section id="contact" className="pb-16 md:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-navy px-6 py-10 md:rounded-[40px] md:p-20">
          <div aria-hidden className="glow top-[-60px] right-[-120px] h-[460px] w-[560px] bg-accent/70" />
          <div aria-hidden className="glow -bottom-40 right-10 h-[380px] w-[420px] bg-violet/50" />
          <div aria-hidden className="absolute top-1/2 right-[200px] hidden md:block">
            {[160, 240, 320, 400].map((r, i) => (
              <span
                key={r}
                style={{ width: r * 2, height: r * 2, opacity: 0.1 - i * 0.018 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"
              />
            ))}
          </div>
          <div className="relative flex max-w-[640px] flex-col gap-5 md:gap-6">
            <h2 className="font-display text-[36px] leading-[1.05] font-semibold tracking-[-0.03em] text-white md:text-[64px]">
              Ready to Transform Your Business?
            </h2>
            <p className="max-w-[520px] text-base leading-relaxed text-white/72 md:text-[19px]">
              Let's discuss how AI can drive growth, efficiency and better decisions.
            </p>
            <div className="flex flex-col gap-2.5 pt-2 sm:flex-row sm:gap-3">
              <Button href={`mailto:${CONTACT.bookingEmail}`} variant="accent">
                Book Consultation
              </Button>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="pb-8 md:pb-10">
      <Container className="flex flex-col gap-10 md:gap-14">
        <div className="grid gap-10 md:grid-cols-[1fr_180px_180px] md:gap-16">
          <div className="flex flex-col gap-5">
            <a href="#home" aria-label="Refocus AI home">
              <img src={logo} alt="Refocus AI" className="h-[18px] w-auto md:h-[22px]" />
            </a>
            <p className="max-w-[360px] text-base leading-relaxed text-muted">
              Turning data into smarter decisions through AI, automation and advanced analytics.
            </p>
            <ul className="flex flex-col gap-3 text-sm text-ink">
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 text-accent" /> {CONTACT.location}
              </li>
              <li>
                <a href={CONTACT.phoneHref} className="flex items-center gap-2.5 hover:text-accent">
                  <Phone className="size-4 text-accent" /> {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 hover:text-accent">
                  <Mail className="size-4 text-accent" /> {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6 md:contents">
            <div className="flex flex-col gap-3.5">
              <p className="text-[12px] font-semibold tracking-[0.14em] text-subtle uppercase">Services</p>
              {SERVICES.map((s) => (
                <a key={s} href="#services" className="text-[15px] font-medium text-ink hover:text-accent">
                  {s}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3.5">
              <p className="text-[12px] font-semibold tracking-[0.14em] text-subtle uppercase">Company</p>
              {COMPANY.map((c) => (
                <a key={c.label} href={c.href} className="text-[15px] font-medium text-ink hover:text-accent">
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-line pt-7 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-muted">© {new Date().getFullYear()} Refocus AI. All rights reserved.</p>
          <div className="flex gap-6 text-ink">
            <a href={CONTACT.linkedin} className="hover:text-accent">
              LinkedIn
            </a>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-accent">
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

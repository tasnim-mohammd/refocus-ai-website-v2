import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import logo from "../assets/logos/refocus-logo.png";
import logoWhite from "../assets/logos/refocus-logo-white.png";
import { CONTACT, NAV_LINKS } from "../content";
import { Button } from "./ui";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

/** Which section is under the header right now (scroll-spy). */
function useActiveSection() {
  const [active, setActive] = useState(SECTION_IDS[0]);
  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = SECTION_IDS[SECTION_IDS.length - 1];
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return active;
}

function useScroll() {
  const [state, setState] = useState({ scrolled: false, progress: 0, overDark: true });
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      // The header sits on the dark photo hero until the hero's bottom edge passes under it.
      // Dark mode whenever the header's vertical centre sits over a dark block
      // (hero photo, capabilities band, closing CTA), marked with data-header-dark.
      const probe = window.innerWidth >= 768 ? 52 : 46;
      const overDark = [...document.querySelectorAll<HTMLElement>("[data-header-dark]")].some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= probe && r.bottom >= probe;
      });
      setState({ scrolled: window.scrollY > 24, progress: max > 0 ? Math.min(1, window.scrollY / max) : 0, overDark });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
}

/**
 * Frosted-glass island. Heavy blur + saturation keep text readable over any content,
 * while the tint stays light so the page shows through softly.
 */
const glassIsland = (scrolled: boolean, dark = false) =>
  dark
    ? `relative rounded-full border border-white/20 backdrop-blur-[40px] backdrop-saturate-[1.6] transition-all duration-500 shadow-[inset_0_1px_0_rgb(255_255_255/0.25),0_12px_32px_-16px_rgb(0_0_0/0.4)] ${
        scrolled ? "bg-[rgb(10_22_48/0.6)]" : "bg-white/10"
      }`
    : `relative rounded-full border border-white/70 backdrop-blur-[40px] backdrop-saturate-[1.8] transition-all duration-500 shadow-[inset_0_1px_0_rgb(255_255_255/0.95),inset_0_-1px_0_rgb(255_255_255/0.35)] ${
    scrolled
      ? "bg-white/65 shadow-[inset_0_1px_0_rgb(255_255_255/0.95),inset_0_-1px_0_rgb(255_255_255/0.35),0_16px_40px_-14px_rgb(10_22_48/0.28)]"
      : "bg-white/35 shadow-[inset_0_1px_0_rgb(255_255_255/0.95),inset_0_-1px_0_rgb(255_255_255/0.35),0_12px_32px_-16px_rgb(10_22_48/0.14)]"
  }`;

/** Glossy sheen across the top half of a glass island. */
function Sheen({ dark = false }: { dark?: boolean }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b to-transparent ${
        dark ? "from-white/15 via-white/[0.03]" : "from-white/60 via-white/10"
      }`}
    />
  );
}

function DesktopNav({
  active,
  scrolled,
  progress,
  dark,
}: {
  active: string;
  scrolled: boolean;
  progress: number;
  dark: boolean;
}) {
  const listRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [hovered, setHovered] = useState<string | null>(null);
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });
  const target = hovered ?? active;

  const measure = useCallback(() => {
    const el = linkRefs.current[target];
    const list = listRef.current;
    if (!el || !list) return;
    setPill({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
  }, [target]);

  useLayoutEffect(measure, [measure]);
  useEffect(() => {
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <nav aria-label="Main" className={`hidden p-1.5 lg:block ${glassIsland(scrolled, dark)}`}>
      <Sheen dark={dark} />
      <ul ref={listRef} className="relative flex items-center" onMouseLeave={() => setHovered(null)}>
        <span
          aria-hidden
          className={`absolute inset-y-0 rounded-full transition-[left,width,opacity,background-color] duration-500 ${
            dark
              ? "bg-white shadow-[0_8px_20px_-8px_rgb(0_0_0/0.5)]"
              : "bg-[linear-gradient(180deg,#1B2B57,#0A1630)] shadow-[inset_0_1px_0_rgb(255_255_255/0.18),0_8px_20px_-8px_rgb(10_22_48/0.7)]"
          } ease-[cubic-bezier(.2,.8,.2,1)] ${
            pill.ready ? "opacity-100" : "opacity-0"
          }`}
          style={{ left: pill.left, width: pill.width }}
        />
        {NAV_LINKS.map((l) => {
          const id = l.href.slice(1);
          const on = id === target;
          return (
            <li key={id}>
              <a
                ref={(el) => {
                  linkRefs.current[id] = el;
                }}
                href={l.href}
                onMouseEnter={() => setHovered(id)}
                onFocus={() => setHovered(id)}
                onBlur={() => setHovered(null)}
                aria-current={id === active ? "true" : undefined}
                className={`relative block rounded-full px-5 py-2.5 text-[14.5px] font-medium transition-colors duration-300 ${
                  dark
                    ? on
                      ? "text-navy"
                      : "text-white/80 hover:text-white"
                    : on
                      ? "text-white"
                      : "text-ink/70 hover:text-ink"
                }`}
              >
                {l.label}
              </a>
            </li>
          );
        })}
      </ul>
      {/* scroll progress */}
      <span aria-hidden className="absolute inset-x-6 -bottom-px h-[2px] overflow-hidden rounded-full">
        <span
          className="block h-full origin-left bg-gradient-to-r from-accent to-violet transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </span>
    </nav>
  );
}

function MobileMenu({ open, active, onClose }: { open: boolean; active: string; onClose: () => void }) {
  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      className={`fixed inset-0 z-40 flex flex-col bg-bg/95 px-6 pt-28 pb-8 backdrop-blur-2xl transition-[opacity,visibility] duration-500 lg:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div aria-hidden className="glow -top-20 -right-24 h-[360px] w-[360px] bg-[#93c5fd]/50" />
      <div aria-hidden className="glow bottom-10 -left-24 h-[300px] w-[300px] bg-[#c4b5fd]/40" />

      <p className="relative mb-4 text-[12px] font-semibold tracking-[0.14em] text-subtle uppercase">Menu</p>
      <nav aria-label="Mobile" className="relative">
        <ul className="flex flex-col">
          {NAV_LINKS.map((l, i) => {
            const id = l.href.slice(1);
            const on = id === active;
            return (
              <li
                key={id}
                style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
                className={`border-b border-line transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <a
                  href={l.href}
                  tabIndex={open ? 0 : -1}
                  onClick={onClose}
                  className="group flex items-center gap-4 py-4"
                >
                  <span className={`w-6 text-[12px] font-semibold tracking-[0.14em] ${on ? "text-accent" : "text-subtle"}`}>
                    0{i + 1}
                  </span>
                  <span
                    className={`flex-1 font-display text-[38px] leading-none font-semibold tracking-[-0.03em] ${
                      on ? "text-brand-gradient" : "text-ink"
                    }`}
                  >
                    {l.label}
                  </span>
                  <ArrowUpRight className="size-6 text-subtle transition-transform group-hover:rotate-45" />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        className={`relative mt-auto flex flex-col gap-5 transition-all delay-300 duration-500 ${
          open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 text-[15px] text-ink">
          <a href={`mailto:${CONTACT.email}`} tabIndex={open ? 0 : -1} className="flex items-center gap-2.5">
            <Mail className="size-4 text-accent" /> {CONTACT.email}
          </a>
          <a href={CONTACT.phoneHref} tabIndex={open ? 0 : -1} className="flex items-center gap-2.5">
            <Phone className="size-4 text-accent" /> {CONTACT.phone}
          </a>
        </div>
        <Button href={`mailto:${CONTACT.bookingEmail}`} variant="accent" className="w-full">
          Book Consultation
        </Button>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { scrolled, progress, overDark } = useScroll();
  const dark = overDark && !open;
  const active = useActiveSection();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);


  return (
    <>
      <MobileMenu open={open} active={active} onClose={() => setOpen(false)} />
      <header className="fixed inset-x-0 top-4 z-50 px-4 md:top-6">
        <div className="mx-auto grid max-w-[1200px] grid-cols-[1fr_auto] items-center gap-3 lg:grid-cols-[1fr_auto_1fr]">
          {/* logo island */}
          <a
            href="#home"
            aria-label="Refocus AI home"
            onClick={() => setOpen(false)}
            className="flex h-[52px] w-fit items-center px-1 md:h-14"
          >
            <img src={dark ? logoWhite : logo} alt="Refocus AI" className="relative h-[18px] w-auto md:h-[22px]" />
          </a>

          <DesktopNav active={active} scrolled={scrolled} progress={progress} dark={dark} />

          {/* CTA island (desktop) */}
          <div className="hidden justify-self-end lg:block">
            <Button href={`mailto:${CONTACT.bookingEmail}`}>Book Consultation</Button>
          </div>

          {/* menu toggle (mobile) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-[52px] items-center gap-3 justify-self-end rounded-full border border-transparent pr-1.5 pl-5 text-[14px] font-semibold text-white [background:linear-gradient(#0A1630,#0A1630)_padding-box,linear-gradient(135deg,#60A5FA,#4F46E5_50%,#A78BFA)_border-box] shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_12px_32px_-12px_rgb(10_22_48/0.55)] lg:hidden"
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span className="relative grid size-9 place-items-center rounded-full bg-white">
              <span
                className={`absolute h-[2px] w-4 rounded-full bg-navy transition-transform duration-300 ${
                  open ? "rotate-45" : "-translate-y-[3px]"
                }`}
              />
              <span
                className={`absolute h-[2px] rounded-full bg-navy transition-all duration-300 ${
                  open ? "w-4 -rotate-45" : "w-2.5 translate-x-[-3px] translate-y-[3px]"
                }`}
              />
            </span>
          </button>
        </div>
      </header>
    </>
  );
}

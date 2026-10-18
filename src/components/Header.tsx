import { useEffect, useState } from "react";
import { X } from "lucide-react";
import logo from "../assets/logos/refocus-logo.png";
import { CONTACT, NAV_LINKS } from "../content";
import { Button } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 md:top-7">
      <div
        className={`mx-auto flex h-[60px] max-w-[1200px] items-center justify-between rounded-full border pr-2 pl-5 backdrop-blur-2xl transition-all duration-300 md:h-[72px] md:pl-7 ${
          scrolled
            ? "border-line bg-white/[0.97] shadow-[0_16px_40px_-12px_rgb(10_22_48/0.22)]"
            : "border-white/90 bg-white/70 shadow-[0_20px_48px_rgb(10_22_48/0.1)]"
        }`}
      >
        <a href="#home" aria-label="Refocus AI home" className="shrink-0">
          <img src={logo} alt="Refocus AI" className="h-[18px] w-auto md:h-[22px]" />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={`mailto:${CONTACT.bookingEmail}`}>Book Consultation</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-11 place-items-center rounded-full bg-navy text-white lg:hidden"
        >
          {open ? (
            <X className="size-5" />
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 9h14M5 15h10" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`glass mx-auto mt-3 max-w-[1200px] overflow-hidden rounded-[28px] transition-all duration-300 lg:hidden ${
          open ? "max-h-[480px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col p-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3.5 text-[16px] font-medium text-ink transition-colors hover:bg-white"
            >
              {l.label}
            </a>
          ))}
          <div className="p-2 pt-3">
            <Button href={`mailto:${CONTACT.bookingEmail}`} variant="accent" className="w-full">
              Book Consultation
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

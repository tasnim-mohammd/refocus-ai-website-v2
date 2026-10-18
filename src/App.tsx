import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhyChoose } from "./components/WhyChoose";
import { Services } from "./components/Services";
import { Capabilities } from "./components/Capabilities";
import { Testimonials } from "./components/Testimonials";
import { ContactCta, Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <WhyChoose />
        <Services />
        <Capabilities />
        <Testimonials />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}

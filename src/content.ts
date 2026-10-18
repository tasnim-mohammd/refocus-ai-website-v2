import strategyImg from "./assets/images/strategy.webp";
import buildImg from "./assets/images/build.webp";
import trainingImg from "./assets/images/training.webp";
import nealImg from "./assets/images/neal.webp";
import sheebaImg from "./assets/images/sheeba.webp";
import damianImg from "./assets/images/damian.webp";
import propertyFinderImg from "./assets/images/property-finder.webp";
import propertyFinderLogo from "./assets/logos/property-finder-white.svg";
import mubadalaLogo from "./assets/logos/mubadala-white.svg";
import nationalFinanceLogo from "./assets/logos/national-finance-white.svg";

export const CONTACT = {
  email: "contact@refocus-ai.com",
  bookingEmail: "bart.pietruszka@refocus-ai.com",
  phone: "+971 56 955 3558",
  phoneHref: "tel:+971569553558",
  location: "Dubai, UAE",
  linkedin: "#",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const CLIENTS = [
  { name: "Property Finder", logo: propertyFinderLogo, height: "h-9 md:h-11", sector: "Real Estate Tech" },
  { name: "Mubadala", logo: mubadalaLogo, height: "h-6 md:h-7", sector: "Investment" },
  { name: "National Finance", logo: nationalFinanceLogo, height: "h-7 md:h-9", sector: "Financial Services" },
];

export const SERVICES = [
  {
    title: "Strategy & Advisory",
    description: "Strategic roadmaps and expert guidance for your AI journey.",
    items: ["Advisory & Consulting", "Strategic Partnerships"],
    image: strategyImg,
  },
  {
    title: "Build & Implement",
    description: "Scalable, production-ready AI software engineered for impact.",
    items: ["Custom Software Solutions", "Delivery Engagements"],
    image: buildImg,
    featured: true,
  },
  {
    title: "Talent & Training",
    description: "Top-tier AI expertise and enablement for your workforce.",
    items: ["Contracting & Placements", "Specialized Training"],
    image: trainingImg,
  },
];

export const STATS = [
  { value: "25+", label: "Successful Projects" },
  { value: "10B+", label: "Data Points Analyzed" },
  { value: "40+", label: "Clients & Partners" },
  { value: "+5", label: "GCC Markets Served" },
];

export const TESTIMONIALS = [
  {
    name: "Neal",
    role: "Managing Director, Big 4",
    image: nealImg,
    quote:
      "Bart combines his 20 years worth of experience in the banking and technology space with professionalism and a deep understanding of how data analytics and AI can drive greater efficiencies across your business.",
  },
  {
    name: "Sheeba",
    role: "Senior Production Manager, B2B Professional",
    image: sheebaImg,
    quote:
      "Bart brings a wealth of insights, experience and industry expertise instrumental in the field of AI, Data and Advanced Analytics.",
  },
  {
    name: "Damian",
    role: "Data Governance Head, Global Bank",
    image: damianImg,
    quote:
      "Bart's strategic approach to data management and utilization consistently adds significant value.",
  },
  {
    name: "Property Finder",
    role: "AI Training",
    image: propertyFinderImg,
    isLogo: true,
    quote: "Achieved 95%+ positive feedback from participants following AI training sessions.",
  },
];

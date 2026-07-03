export type Locale = "ru" | "en" | "es";

export type PortfolioCategory = "women" | "couples" | "family";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: PortfolioCategory;
  title: string;
  price: string;
  includes: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  category: PortfolioCategory;
  alt: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    portfolio: string;
    services: string;
    process: string;
    about: string;
    faq: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaInstagram: string;
    ctaViber: string;
    ctaPortfolio: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    empty: string;
    categories: Record<PortfolioCategory, string>;
  };
  services: {
    title: string;
    subtitle: string;
    from: string;
    cta: string;
    items: ServiceItem[];
  };
  process: {
    title: string;
    steps: ProcessStep[];
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    instagram: string;
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    instagram: string;
    viber: string;
  };
  footer: {
    rights: string;
  };
  lang: {
    label: string;
  };
}

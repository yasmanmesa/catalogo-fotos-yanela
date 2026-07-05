"use client";

import type { PortfolioItem } from "@/lib/types";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Portfolio } from "./Portfolio";
import { Services } from "./Services";
import { Process } from "./Process";
import { About } from "./About";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function LandingPage({ portfolioItems }: { portfolioItems: PortfolioItem[] }) {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio items={portfolioItems} />
        <Services />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

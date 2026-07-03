"use client";

import { Header } from "./Header";
import { Hero } from "./Hero";
import { Portfolio } from "./Portfolio";
import { Services } from "./Services";
import { Process } from "./Process";
import { About } from "./About";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
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

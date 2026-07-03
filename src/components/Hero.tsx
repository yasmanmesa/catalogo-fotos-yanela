"use client";

import { useLocale } from "@/context/LocaleContext";
import { INSTAGRAM_URL, VIBER_URL } from "@/lib/i18n";
import { ScrollParallax } from "./ScrollParallax";
import styles from "./Hero.module.css";

export function Hero() {
  const { t } = useLocale();

  return (
    <div id="motion-zone" className={styles.motionZone}>
      <ScrollParallax />

      <section id="hero" className={styles.hero}>
        <div className={`section-inner ${styles.content}`}>
          <p className="eyebrow">Yanela Hernández · Photo</p>
          <h1>{t.hero.title}</h1>
          <p className={styles.subtitle}>{t.hero.subtitle}</p>

          <div className={styles.ctas}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t.hero.ctaInstagram}
            </a>
            <a href={VIBER_URL} className="btn btn-outline">
              {t.hero.ctaViber}
            </a>
            <a href="#portfolio" className="btn btn-ghost">
              {t.hero.ctaPortfolio} →
            </a>
          </div>
        </div>
      </section>

      <div className={styles.spacer} aria-hidden="true" />
    </div>
  );
}

"use client";

import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
import { HERO_PHOTO_SRC } from "@/lib/constants";
import { INSTAGRAM_URL, VIBER_URL } from "@/lib/i18n";
import styles from "./Hero.module.css";

export function Hero() {
  const { t } = useLocale();

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.gradient} />
        <div className={styles.grain} />
        <div className={styles.vignette} />
      </div>

      <div className={`section-inner ${styles.layout}`}>
        <div className={styles.content}>
          <p className="eyebrow">Yanela Hernández · Photography</p>
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

        <div className={styles.photo}>
          <Image
            src={HERO_PHOTO_SRC}
            alt="Yanela Hernández"
            width={640}
            height={853}
            sizes="(max-width: 768px) 14rem, 20rem"
            className={styles.photoImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useLocale } from "@/context/LocaleContext";
import { INSTAGRAM_URL } from "@/lib/i18n";
import styles from "./About.module.css";

export function About() {
  const { t } = useLocale();

  return (
    <section id="sobre-mi" className={styles.section}>
      <div className={`section-inner ${styles.layout}`}>
        <div className={styles.photo} aria-hidden="true">
          <div className={styles.photoPlaceholder} />
        </div>

        <div className={styles.text}>
          <header className="section-header">
            <span className="eyebrow">{t.nav.about}</span>
            <h2>{t.about.title}</h2>
          </header>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-outline ${styles.insta}`}
          >
            {t.about.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}

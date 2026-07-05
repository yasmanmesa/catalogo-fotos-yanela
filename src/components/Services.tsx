"use client";

import { useLocale } from "@/context/LocaleContext";
import styles from "./Services.module.css";

export function Services() {
  const { t } = useLocale();

  return (
    <section id="servicios" className={styles.section}>
      <div className="section-inner">
        <header className="section-header">
          <span className="eyebrow">{t.nav.services}</span>
          <h2>{t.services.title}</h2>
          <p>{t.services.subtitle}</p>
        </header>

        <ul className={styles.grid}>
          {t.services.items.map((item, index) => (
            <li
              key={item.id}
              className={`${styles.card} ${index === 0 ? styles.featured : ""}`}
            >
              <div className={styles.cardHead}>
                <h3>{item.title}</h3>
                <p className={styles.price}>
                  <span className={styles.from}>{t.services.from}</span> {item.price}
                </p>
              </div>
              <ul className={styles.includes}>
                {item.includes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <a href="#contacto" className={`btn btn-primary ${styles.cta}`}>
                {t.services.cta}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

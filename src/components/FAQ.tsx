"use client";

import { useLocale } from "@/context/LocaleContext";
import styles from "./FAQ.module.css";

export function FAQ() {
  const { t } = useLocale();

  return (
    <section id="faq" className={styles.section}>
      <div className="section-inner">
        <header className="section-header">
          <span className="eyebrow">FAQ</span>
          <h2>{t.faq.title}</h2>
        </header>

        <div className={styles.list}>
          {t.faq.items.map((item) => (
            <details key={item.question} className={styles.item}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

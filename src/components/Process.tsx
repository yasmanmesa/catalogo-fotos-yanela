"use client";

import { useLocale } from "@/context/LocaleContext";
import styles from "./Process.module.css";

export function Process() {
  const { t } = useLocale();

  return (
    <section id="proceso" className={styles.section}>
      <div className="section-inner">
        <header className="section-header">
          <span className="eyebrow">{t.nav.process}</span>
          <h2>{t.process.title}</h2>
        </header>

        <div className={styles.stepsWrap}>
          <ol className={styles.steps}>
          {t.process.steps.map((step, index) => (
            <li key={step.title}>
              <span className={styles.num} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

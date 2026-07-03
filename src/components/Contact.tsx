"use client";

import { useLocale } from "@/context/LocaleContext";
import { ContactLinks } from "./Header";
import styles from "./Contact.module.css";

export function Contact() {
  const { t } = useLocale();

  return (
    <section id="contacto" className={styles.section}>
      <div className={`section-inner ${styles.inner}`}>
        <header className="section-header">
          <span className="eyebrow">{t.nav.contact}</span>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.subtitle}</p>
        </header>

        <ContactLinks className={styles.links} />
      </div>
    </section>
  );
}

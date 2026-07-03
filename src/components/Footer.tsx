"use client";

import { useLocale } from "@/context/LocaleContext";
import { INSTAGRAM_URL, VIBER_URL } from "@/lib/i18n";
import styles from "./Footer.module.css";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.brand}>Yanela Hernández</p>
        <div className={styles.links}>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={VIBER_URL}>Viber</a>
        </div>
        <p className={styles.rights}>{t.footer.rights}</p>
      </div>
    </footer>
  );
}

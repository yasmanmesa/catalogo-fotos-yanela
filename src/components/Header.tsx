"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { INSTAGRAM_URL, VIBER_URL } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import styles from "./Header.module.css";

const NAV = [
  { href: "#portfolio", key: "portfolio" as const },
  { href: "#servicios", key: "services" as const },
  { href: "#proceso", key: "process" as const },
  { href: "#sobre-mi", key: "about" as const },
  { href: "#faq", key: "faq" as const },
  { href: "#contacto", key: "contact" as const },
];

const LANG_LABELS: Record<Locale, string> = { ru: "RU", en: "EN", es: "ES" };

function LangSwitcher({
  locale,
  setLocale,
  label,
  className = "",
  showLabel = false,
}: {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  label: string;
  className?: string;
  showLabel?: boolean;
}) {
  return (
    <div className={className}>
      {showLabel && <p className={styles.langLabel}>{label}</p>}
      <div className={styles.lang} role="group" aria-label={label}>
        {(["ru", "en", "es"] as Locale[]).map((code) => (
          <button
            key={code}
            type="button"
            className={`${styles.langBtn} ${locale === code ? styles.langActive : ""}`}
            onClick={() => setLocale(code)}
            aria-pressed={locale === code}
          >
            {LANG_LABELS[code]}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${menuOpen ? styles.menuOpen : ""}`}
    >
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          Yanela_her.ph
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-label="Main">
          {NAV.map(({ href, key }) => (
            <a key={key} href={href} onClick={() => setMenuOpen(false)}>
              {t.nav[key]}
            </a>
          ))}

          <LangSwitcher
            locale={locale}
            setLocale={setLocale}
            label={t.lang.label}
            className={styles.langMobile}
            showLabel
          />
        </nav>

        <div className={styles.actions}>
          <LangSwitcher
            locale={locale}
            setLocale={setLocale}
            label={t.lang.label}
            className={styles.langDesktop}
          />

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.cta}`}
          >
            {t.hero.ctaInstagram}
          </a>

          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={menuOpen}
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export function ContactLinks({ className = "" }: { className?: string }) {
  const { t } = useLocale();

  return (
    <div className={className}>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        {t.contact.instagram}
      </a>
      <a href={VIBER_URL} className="btn btn-outline">
        {t.contact.viber}
      </a>
    </div>
  );
}

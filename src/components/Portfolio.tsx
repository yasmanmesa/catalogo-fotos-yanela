"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import type { PortfolioCategory } from "@/lib/types";
import styles from "./Portfolio.module.css";

const CATEGORIES: PortfolioCategory[] = ["women", "couples", "family"];

const AVAILABLE_CATEGORIES = CATEGORIES.filter((cat) =>
  PORTFOLIO_ITEMS.some((item) => item.category === cat),
);

export function Portfolio() {
  const { t } = useLocale();
  const [active, setActive] = useState<PortfolioCategory>(
    AVAILABLE_CATEGORIES[0] ?? "women",
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = PORTFOLIO_ITEMS.filter((p) => p.category === active);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % items.length));
  }, [items.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + items.length) % items.length,
    );
  }, [items.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, goNext, goPrev]);

  return (
    <section id="portfolio" className={styles.section}>
      <div className="section-inner">
        <header className="section-header">
          <span className="eyebrow">Portfolio</span>
          <h2>{t.portfolio.title}</h2>
          <p>{t.portfolio.subtitle}</p>
        </header>

        {AVAILABLE_CATEGORIES.length > 1 && (
          <div className={styles.tabs} role="tablist">
            {AVAILABLE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active === cat}
                className={`${styles.tab} ${active === cat ? styles.tabActive : ""}`}
                onClick={() => {
                  setActive(cat);
                  setLightboxIndex(null);
                }}
              >
                {t.portfolio.categories[cat]}
              </button>
            ))}
          </div>
        )}

        {items.length === 0 ? (
          <p className={styles.empty}>{t.portfolio.empty}</p>
        ) : (
          <ul className={styles.grid}>
            {items.map((item, index) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={styles.thumb}
                  onClick={() => openLightbox(index)}
                  aria-label={item.alt}
                >
                  <span className={styles.thumbFrame}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 14rem"
                      className={styles.image}
                    />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {lightboxIndex !== null && items[lightboxIndex] && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={items[lightboxIndex].alt}
          onClick={closeLightbox}
        >
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={styles.close} onClick={closeLightbox} aria-label="Close">
              ×
            </button>
            <button type="button" className={styles.navBtn} onClick={goPrev} aria-label="Previous">
              ‹
            </button>
            <div className={styles.lightboxImage}>
              <Image
                src={items[lightboxIndex].src}
                alt={items[lightboxIndex].alt}
                fill
                sizes="85vw"
                className={styles.lightboxPhoto}
                priority
              />
            </div>
            <button type="button" className={`${styles.navBtn} ${styles.navNext}`} onClick={goNext} aria-label="Next">
              ›
            </button>
            <p className={styles.counter}>
              {lightboxIndex + 1} / {items.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

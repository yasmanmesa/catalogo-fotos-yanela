"use client";

import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
import { ABOUT_PHOTO_SRC } from "@/lib/constants";
import { INSTAGRAM_URL } from "@/lib/i18n";
import styles from "./About.module.css";

export function About() {
  const { t } = useLocale();

  return (
    <section id="sobre-mi" className={styles.section}>
      <div className={`section-inner ${styles.layout}`}>
        <div className={styles.photo}>
          <Image
            src={ABOUT_PHOTO_SRC}
            alt="Yanela Hernández"
            width={640}
            height={853}
            sizes="(max-width: 640px) 14rem, 16rem"
            className={styles.photoImage}
          />
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

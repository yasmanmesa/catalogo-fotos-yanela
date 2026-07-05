"use client";

import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
import { CONTACT_PHOTO_SRC } from "@/lib/constants";
import { ContactLinks } from "./Header";
import { Footer } from "./Footer";
import styles from "./Contact.module.css";

export function Contact() {
  const { t } = useLocale();

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.media} aria-hidden="true">
        <Image
          src={CONTACT_PHOTO_SRC}
          alt=""
          fill
          sizes="100vw"
          priority
          className={styles.photoImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`section-inner ${styles.shell}`}>
        <div className={styles.main}>
          <div className={styles.content}>
            <header className="section-header">
              <span className="eyebrow">{t.nav.contact}</span>
              <h2>{t.contact.title}</h2>
              <p>{t.contact.subtitle}</p>
            </header>

            <ContactLinks className={styles.links} />
          </div>
        </div>

        <div className={styles.footerWrap}>
          <Footer embedded />
        </div>
      </div>
    </section>
  );
}

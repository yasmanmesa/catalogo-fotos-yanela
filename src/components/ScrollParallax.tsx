"use client";

import { useEffect, useState } from "react";
import { FRAME_COUNT } from "@/lib/constants";
import styles from "./ScrollParallax.module.css";

export function ScrollParallax() {
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const onMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onMotionChange);

    if (mq.matches) return () => mq.removeEventListener("change", onMotionChange);

    const onScroll = () => {
      const zone = document.getElementById("motion-zone");
      if (!zone) return;
      const rect = zone.getBoundingClientRect();
      const total = zone.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(scrolled / total);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", onMotionChange);
    };
  }, []);

  const frameIndex = reducedMotion
    ? 0
    : Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT));

  const layerBack = reducedMotion ? 0 : progress * 18;
  const layerMid = reducedMotion ? 0 : progress * 36;
  const layerFront = reducedMotion ? 0 : progress * 54;

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.layerBack} style={{ transform: `translateY(${layerBack}px)` }}>
        <div className={styles.grain} />
      </div>

      <div className={styles.layerMid} style={{ transform: `translateY(${layerMid}px)` }}>
        <div className={styles.frameGrid}>
          {Array.from({ length: FRAME_COUNT }, (_, i) => (
            <div
              key={i}
              className={`${styles.frameCell} ${i === frameIndex ? styles.frameActive : ""}`}
              style={{ opacity: i === frameIndex ? 1 : 0.15 + (i % 3) * 0.05 }}
            />
          ))}
        </div>
      </div>

      <div className={styles.layerFront} style={{ transform: `translateY(${layerFront}px)` }}>
        <div className={styles.vignette} />
      </div>
    </div>
  );
}

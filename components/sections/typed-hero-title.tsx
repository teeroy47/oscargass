"use client";

import { useEffect, useState } from "react";

const STATIC_TEXT = "Reliable LPG supply, delivered with premium ";
const GLOW_WORD = "service.";

export function TypedHeroTitle() {
  const [visibleText, setVisibleText] = useState("");
  const [showGlowWord, setShowGlowWord] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setVisibleText(STATIC_TEXT);
      setShowGlowWord(true);
      return;
    }

    setVisibleText("");
    setShowGlowWord(false);

    let index = 0;
    const startDelay = window.setTimeout(() => {
      const interval = window.setInterval(() => {
        index += 1;
        setVisibleText(STATIC_TEXT.slice(0, index));

        if (index >= STATIC_TEXT.length) {
          window.clearInterval(interval);
          window.setTimeout(() => setShowGlowWord(true), 120);
        }
      }, 38);
    }, 220);

    return () => {
      window.clearTimeout(startDelay);
    };
  }, []);

  return (
    <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-none tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
      <span>{visibleText}</span>
      <span
        className={`inline-block transition-all duration-500 ${
          showGlowWord
            ? "opacity-100 text-white [text-shadow:0_0_18px_rgba(180,220,255,0.95),0_0_42px_rgba(93,140,255,0.75)]"
            : "opacity-0"
        }`}
      >
        {GLOW_WORD}
      </span>
      <span
        aria-hidden="true"
        className={`ml-1 inline-block h-[0.9em] w-[0.08em] translate-y-[0.08em] bg-white/85 ${
          showGlowWord ? "animate-pulse opacity-0" : "opacity-100"
        }`}
      />
    </h1>
  );
}

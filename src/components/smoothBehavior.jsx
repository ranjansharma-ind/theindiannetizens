'use client'

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothBehavior() {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const scroller = new Lenis();
    lenisRef.current = scroller;

    const raf = (time) => {
      scroller.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return <section></section>;
}
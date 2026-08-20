"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const loadingSteps = ["INITIALIZING", "SYNCHRONIZING", "READY"];

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 2000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          aria-label="Loading portfolio"
          aria-live="polite"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#07070a] px-6"
        >
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7c3aed28_0%,transparent_42%)]" />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(#ffffff08_1px,transparent_1px),linear-gradient(90deg,#ffffff08_1px,transparent_1px)] bg-size-[52px_52px] [mask-image:radial-gradient(ellipse_at_center,black_5%,transparent_70%)]" />

          <div className="relative w-full max-w-sm">
            <div className="mb-8 flex items-center justify-between text-[10px] font-medium tracking-[0.28em] text-white/40">
              <span>HA.SYSTEM</span>
              <span>01 / 01</span>
            </div>

            <div className="relative mx-auto flex h-30 w-30 items-center justify-center">
              <motion.div
                animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-[#8b5cf6]/45 border-t-[#c4b5fd]"
              />
              <motion.div
                animate={shouldReduceMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full border border-white/10 border-b-[#7c3aed]"
              />
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#a78bfa]/35 bg-[#7c3aed]/10 font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-[-0.08em] text-white shadow-[0_0_35px_#7c3aed55]">
                HA<span className="text-[#a78bfa]">.</span>
              </div>
            </div>

            <div className="mt-10 overflow-hidden">
              <motion.div
                initial={{ y: 0 }}
                animate={shouldReduceMotion ? { y: 0 } : { y: [0, -20, -40] }}
                transition={{ duration: 2, times: [0, 0.55, 1], ease: "easeInOut" }}
                className="text-center text-[11px] font-semibold tracking-[0.34em] text-[#d8ccff]"
              >
                {loadingSteps.map((step) => (
                  <div key={step} className="h-5">{step}</div>
                ))}
              </motion.div>
            </div>

            <div className="mt-5 h-px overflow-hidden bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: shouldReduceMotion ? 0 : 2, ease: [0.65, 0, 0.35, 1] }}
                className="h-full w-full bg-gradient-to-r from-[#7c3aed] via-[#c4b5fd] to-[#7c3aed] shadow-[0_0_12px_#a78bfa]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

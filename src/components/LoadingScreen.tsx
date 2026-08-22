"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          aria-label="Loading portfolio"
          aria-live="polite"
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#07070A]
            px-6
          "
        >
          <div className="flex w-full max-w-xs flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{
                opacity: 0,
                y: 8,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-[family-name:var(--font-space-grotesk)]
                text-5xl
                font-semibold
                tracking-[-0.08em]
                text-white
              "
            >
              HA<span className="text-[#A78BFA]">.</span>
            </motion.div>

            {/* Small label */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.25,
              }}
              className="
                mt-4
                text-[9px]
                font-medium
                uppercase
                tracking-[0.38em]
                text-white/35
              "
            >
              Helmy Akrim
            </motion.p>

            {/* Loading line */}
            <div className="mt-12 h-px w-full overflow-hidden bg-white/[0.08]">
              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "0%",
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 1.5,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="
                  h-full
                  w-full
                  bg-[#8B5CF6]
                "
              />
            </div>

            {/* Bottom information */}
            <div className="mt-3 flex w-full items-center justify-between">
              <span
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-white/20
                "
              >
                Portfolio
              </span>

              <motion.span
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: [0.25, 0.7, 0.25],
                      }
                }
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[#A78BFA]/60
                "
              >
                Loading
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
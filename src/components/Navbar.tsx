"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const navContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const navItem = {
  hidden: {
    opacity: 0,
    y: -8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease,
    },
  },
};

const mobileNavItem = {
  hidden: {
    opacity: 0,
    x: -14,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease,
    },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        ease,
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* Main navbar */}
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between rounded-2xl border border-white/[0.06] bg-[#0A0A0A]/80 px-4 py-3 backdrop-blur-xl sm:px-5">
          {/* Subtle violet glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7C3AED]/[0.03] via-transparent to-[#7C3AED]/[0.03]"
          />

          {/* Logo */}
          <motion.a
            href="#home"
            initial={{
              opacity: 0,
              x: -12,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
              ease,
            }}
            whileHover={{
              scale: 1.04,
            }}
            className="relative z-10 font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-tight text-[#F5F5F5]"
          >
            HA<span className="text-[#7C3AED]">.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            variants={navContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 hidden items-center gap-7 md:flex lg:gap-8"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                variants={navItem}
                whileHover={{
                  y: -1,
                }}
                className="group relative py-2 text-sm text-[#737373] transition-colors duration-300 hover:text-[#F5F5F5]"
              >
                {item.label}

                {/* Hover line */}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#7C3AED] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}

            {/* CV */}
            <motion.a
              href="/cv.pdf"
              variants={navItem}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="ml-1 inline-flex items-center gap-2 rounded-full border border-[#292929] bg-[#111111] px-4 py-2 text-xs font-semibold text-[#D4D4D4] transition-all duration-300 hover:border-[#7C3AED]/60 hover:bg-[#7C3AED] hover:text-white"
            >
              <span>CV</span>

              <span className="text-[#525252] transition-colors duration-300 group-hover:text-white">
                ↓
              </span>
            </motion.a>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            whileTap={{
              scale: 0.9,
            }}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#292929] bg-[#111111] text-[#D4D4D4] transition-all duration-300 hover:border-[#7C3AED]/60 hover:text-white md:hidden"
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              className="flex h-4 w-5 flex-col justify-center gap-[5px]"
            >
              <motion.span
                variants={{
                  closed: {
                    rotate: 0,
                    y: 0,
                  },
                  open: {
                    rotate: 45,
                    y: 5,
                  },
                }}
                transition={{
                  duration: 0.25,
                  ease,
                }}
                className="block h-px w-5 origin-center bg-current"
              />

              <motion.span
                variants={{
                  closed: {
                    opacity: 1,
                  },
                  open: {
                    opacity: 0,
                  },
                }}
                transition={{
                  duration: 0.15,
                }}
                className="block h-px w-5 bg-current"
              />

              <motion.span
                variants={{
                  closed: {
                    rotate: 0,
                    y: 0,
                  },
                  open: {
                    rotate: -45,
                    y: -5,
                  },
                }}
                transition={{
                  duration: 0.25,
                  ease,
                }}
                className="block h-px w-5 origin-center bg-current"
              />
            </motion.div>
          </motion.button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
                height: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                y: -10,
                height: 0,
              }}
              transition={{
                duration: 0.35,
                ease,
              }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-2 overflow-hidden rounded-2xl border border-[#242424] bg-[#0C0C0C]/95 p-2 backdrop-blur-xl">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        delayChildren: 0.08,
                        staggerChildren: 0.055,
                      },
                    },
                  }}
                  className="flex flex-col"
                >
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      variants={mobileNavItem}
                      className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm text-[#737373] transition-all duration-300 hover:bg-[#141414] hover:text-[#F5F5F5]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-medium text-[#3F3F3F] transition-colors duration-300 group-hover:text-[#7C3AED]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>{item.label}</span>
                      </div>

                      <span className="text-[#3F3F3F] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#7C3AED]">
                        →
                      </span>
                    </motion.a>
                  ))}

                  {/* Mobile CV */}
                  <motion.a
                    href="/cv.pdf"
                    onClick={closeMenu}
                    variants={mobileNavItem}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="mt-2 flex items-center justify-between rounded-xl bg-[#F5F5F5] px-4 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-[#7C3AED] hover:text-white"
                  >
                    <span>Download CV</span>

                    <span>↓</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
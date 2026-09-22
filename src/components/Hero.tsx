"use client";

import Image from "next/image";
import { motion } from "motion/react";

const roles = [
  "Information Systems",
  "Web Development",
  "Data Analytics",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 md:pb-24 md:pt-36"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Base ambient glow */}
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/5 blur-[140px]" />

        {/* Soft moving light wave 1 */}
        <motion.div
          initial={{
            x: "-25%",
            y: "10%",
            opacity: 0,
          }}
          animate={{
            x: ["-25%", "15%", "-10%", "-25%"],
            y: ["10%", "-5%", "8%", "10%"],
            opacity: [0, 0.45, 0.3, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-15%] top-[15%] h-32 w-[70%] rotate-[-8deg] rounded-full bg-[#7C3AED]/10 blur-[70px]"
        />

        {/* Soft moving light wave 2 */}
        <motion.div
          initial={{
            x: "20%",
            y: "0%",
            opacity: 0,
          }}
          animate={{
            x: ["20%", "-15%", "10%", "20%"],
            y: ["0%", "12%", "-4%", "0%"],
            opacity: [0, 0.3, 0.2, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute right-[-20%] top-[40%] h-40 w-[75%] rotate-[10deg] rounded-full bg-[#8B5CF6]/8 blur-[90px]"
        />

        {/* Thin horizontal light wave */}
        <motion.div
          animate={{
            x: ["-10%", "15%", "-5%", "-10%"],
            y: [0, -18, 8, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[55%] h-16 w-[120%] rotate-[-3deg] rounded-full bg-[#7C3AED]/6 blur-[45px]"
        />

        {/* Subtle grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.8,
            delay: 0.2,
          }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-20">
        {/* Left content */}
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease,
            }}
            className="mb-8 flex items-center gap-3"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease,
              }}
              className="h-px bg-[#7C3AED]"
            />

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A1A1A1]">
              Hello, I&apos;m
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.25,
                },
              },
            }}
            className="font-[family-name:var(--font-space-grotesk)] text-[clamp(3.5rem,11vw,9rem)] font-bold leading-[0.85] tracking-[-0.06em]"
          >
            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease,
                  },
                },
              }}
              className="block"
            >
              HELMY
            </motion.span>

            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease,
                  },
                },
              }}
              className="block"
            >
              AKRIM
              <span className="text-[#7C3AED]">.</span>
            </motion.span>
          </motion.h1>

          {/* Mobile profile image */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.55,
              ease,
            }}
            className="relative mt-10 w-full sm:mt-12 lg:hidden"
          >
            {/* Static violet glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[2rem] bg-[#7C3AED]/8 blur-3xl"
            />

            <div className="group relative mx-auto aspect-[4/5] w-full max-w-85 overflow-hidden rounded-[2rem] border border-[#262626] bg-[#111111]">
              <Image
                src="/images/profile.jpg"
                alt="Helmy Akrim"
                fill
                priority
                sizes="(max-width: 640px) 85vw, 340px"
                className="object-cover object-[50%_32%] transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1,
                  ease,
                }}
                className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/70 backdrop-blur-md"
              >
                HELMY AKRIM
              </motion.div>
            </div>
          </motion.div>

          {/* Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.7,
              ease,
            }}
            className="mt-10 max-w-3xl md:mt-12"
          >
            <p className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium leading-tight text-[#F5F5F5] md:text-3xl">
              Information Systems × Technology × Data
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#A1A1A1] md:text-lg">
              I build digital solutions and explore the intersection of
              technology, data, and people.
            </p>
          </motion.div>

          {/* Role tags */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.85,
                },
              },
            }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {roles.map((role) => (
              <motion.span
                key={role}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 10,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      ease,
                    },
                  },
                }}
                whileHover={{
                  y: -2,
                  borderColor: "rgba(124, 58, 237, 0.6)",
                  color: "var(--foreground)",
                }}
                className="cursor-default rounded-full border border-[#262626] bg-[#111111]/80 px-3 py-1.5 text-xs text-[#A1A1A1] backdrop-blur-sm transition-colors"
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.05,
              ease,
            }}
            className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group inline-flex items-center gap-3 rounded-full bg-[#F5F5F5] px-6 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-[#7C3AED] hover:text-white"
            >
              View Projects

              <motion.span
                whileHover={{ x: 4 }}
                className="transition-transform duration-300"
              >
                →
              </motion.span>
            </motion.a>

            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="inline-flex items-center gap-3 rounded-full border border-[#262626] px-6 py-3.5 text-sm font-semibold text-[#F5F5F5] transition-all duration-300 hover:border-[#7C3AED] hover:text-[#7C3AED]"
            >
              Download CV

              <span>↓</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Desktop profile image */}
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.45,
            ease,
          }}
          className="relative mx-auto hidden w-full max-w-105 lg:mx-0 lg:block"
        >
          {/* Static violet glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[2rem] bg-[#7C3AED]/8 blur-3xl"
          />

          {/* Image frame */}
          <motion.div
            whileHover={{
              y: -4,
            }}
            transition={{
              duration: 0.4,
              ease,
            }}
            className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#262626] bg-[#111111]"
          >
            <Image
              src="/images/profile.jpg"
              alt="Helmy Akrim"
              fill
              priority
              sizes="420px"
              className="object-cover object-[50%_35%] transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Subtle overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent" />

            {/* Image label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1,
                ease,
              }}
              className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/70 backdrop-blur-md"
            >
              HELMY AKRIM
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
        }}
        className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#525252] transition-colors hover:text-[#A1A1A1] lg:flex"
      >
        Scroll to explore

        <motion.span
          animate={{
            scaleY: [1, 1.35, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-10 w-px origin-top bg-[#262626]"
        />
      </motion.a>
    </section>
  );
}

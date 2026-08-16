"use client";

import Image from "next/image";
import { motion } from "motion/react";

const highlights = [
  {
    number: "01",
    title: "Information Systems",
    description:
      "Understanding systems, business processes, databases, and how technology can solve real-world problems.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
      >
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3M7 8h4M7 11h7" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Designing and developing modern web applications with attention to usability, structure, and maintainability.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
      >
        <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Data Analytics",
    description:
      "Exploring data to discover patterns, generate insights, and support better decisions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
      >
        <path d="M4 19V5M4 19h17" />
        <path d="m7 15 4-4 3 2 5-6" />
        <circle cx="7" cy="15" r="1" />
        <circle cx="11" cy="11" r="1" />
        <circle cx="14" cy="13" r="1" />
        <circle cx="19" cy="7" r="1" />
      </svg>
    ),
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[#1A1A1A] px-6 py-24 md:py-32"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Violet ambient glow */}
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#7C3AED]/5 blur-[140px]" />

        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#7C3AED]/5 blur-[150px]" />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[80px_80px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_80%,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mb-16 md:mb-20"
        >
          {/* Label */}
          <motion.div
            variants={reveal}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#7C3AED]" />

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A1A1A1]">
              About Me
            </p>
          </motion.div>

          {/* Heading */}
          <motion.div variants={reveal}>
            <h2 className="max-w-5xl font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-[0.95] tracking-[-0.045em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
              Building with technology.
              <br />
              <span className="text-[#737373]">
                Thinking with{" "}
                <span className="text-[#A78BFA]">data.</span>
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={reveal}
            className="mt-6 max-w-xl text-sm leading-6 text-[#737373] md:ml-auto md:-mt-8 md:text-right"
          >
            A personal space to understand who I am, what I build, and where
            I&apos;m heading.
          </motion.p>
        </motion.div>

        {/* Main visual + story */}
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-24">
          {/* Visual */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease,
            }}
            className="relative mx-auto w-full max-w-lg lg:mx-0"
          >
            {/* Decorative number */}
            <div
              aria-hidden="true"
              className="absolute -left-5 -top-10 z-0 font-[family-name:var(--font-space-grotesk)] text-[9rem] font-bold leading-none tracking-[-0.08em] text-white/[0.025] md:-left-8 md:-top-14 md:text-[12rem]"
            >
              01
            </div>

            {/* Violet glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2rem] bg-[#7C3AED]/10 blur-3xl"
            />

            {/* Image frame */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#292929] bg-[#111111]">
              <Image
                src="/images/about.jpg"
                alt="Helmy Akrim surrounded by artwork"
                fill
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover object-[50%_42%] grayscale transition-all duration-700 group-hover:scale-[1.025] group-hover:grayscale-[20%]"
              />

              {/* Dark overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/10 to-[#7C3AED]/10" />

              {/* Violet tint */}
              <div className="pointer-events-none absolute inset-0 bg-[#7C3AED]/5 mix-blend-color" />

              {/* Image border detail */}
              <div className="pointer-events-none absolute inset-4 rounded-[1.5rem] border border-white/10" />

              {/* Bottom label */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                    Beyond the code
                  </p>

                  <p className="mt-1 font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-white/90">
                    Creative process.
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/60 backdrop-blur-md">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-4 w-4"
                  >
                    <path d="M12 3v18M3 12h18" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Small floating badge */}
            <motion.div
              initial={{
                opacity: 0,
                x: -10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease,
              }}
              className="absolute -bottom-5 -right-3 rounded-full border border-[#292929] bg-[#0D0D0D]/90 px-4 py-2.5 backdrop-blur-md md:-right-5"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />

                <span className="text-[10px] uppercase tracking-[0.18em] text-[#A1A1A1]">
                  S.Kom · 2026
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            <motion.p
              variants={reveal}
              className="max-w-3xl font-[family-name:var(--font-space-grotesk)] text-xl font-medium leading-8 text-[#E5E5E5] md:text-2xl md:leading-9"
            >
              I&apos;m Helmy Akrim, an Information Systems graduate interested
              in building digital products and turning{" "}
              <span className="text-[#A78BFA]">data</span> into meaningful
              insights.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-8 max-w-2xl space-y-5 text-base leading-7 text-[#737373]"
            >
              <p>
                My journey in technology started with curiosity about how
                software can solve real-world problems. Through academic
                projects and personal experiments, I&apos;ve explored web
                development, information systems, databases, and data
                analytics.
              </p>

              <p>
                I enjoy working across different parts of a project — from
                understanding a problem and designing a solution to building
                the system and analyzing the data behind it.
              </p>

              <p>
                Currently, I&apos;m focused on strengthening my skills in
                software development and data analytics while building
                projects that demonstrate how technology can create practical
                value.
              </p>
            </motion.div>

{/* Quick information */}
<motion.div
  variants={reveal}
  className="mt-10"
>
  {/* Mobile */}
  <div className="overflow-hidden rounded-2xl border border-[#242424] bg-[#0D0D0D] sm:hidden">
    {/* Education */}
    <div className="flex items-center gap-4 border-b border-[#1F1F1F] px-5 py-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#292929] bg-[#111111] text-[#A78BFA]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-4 w-4"
        >
          <path d="M3 9.5 12 5l9 4.5-9 4.5L3 9.5Z" />
          <path d="M7 12v5c2.5 2 7.5 2 10 0v-5M21 10v6" />
        </svg>
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-[#525252]">
          Education
        </p>

        <p className="mt-1 text-sm font-medium text-[#D4D4D4]">
          Information Systems
        </p>
      </div>
    </div>

    {/* Focus */}
    <div className="flex items-center gap-4 border-b border-[#1F1F1F] px-5 py-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#292929] bg-[#111111] text-[#A78BFA]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-4 w-4"
        >
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M12 4V2M12 22v-2M20 12h2M2 12h2" />
        </svg>
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-[#525252]">
          Focus
        </p>

        <p className="mt-1 text-sm font-medium text-[#D4D4D4]">
          Technology &amp; Data
        </p>
      </div>
    </div>

    {/* Location */}
    <div className="flex items-center gap-4 px-5 py-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#292929] bg-[#111111] text-[#A78BFA]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-4 w-4"
        >
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-[#525252]">
          Location
        </p>

        <p className="mt-1 text-sm font-medium text-[#D4D4D4]">
          Indonesia
        </p>
      </div>
    </div>
  </div>

  {/* Desktop */}
  <div className="hidden grid-cols-3 border-y border-[#1F1F1F] sm:grid">
    {/* Education */}
    <div className="group border-r border-[#1F1F1F] px-5 py-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#292929] bg-[#111111] text-[#A78BFA] transition-colors duration-300 group-hover:border-[#7C3AED]/40">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4"
          >
            <path d="M3 9.5 12 5l9 4.5-9 4.5L3 9.5Z" />
            <path d="M7 12v5c2.5 2 7.5 2 10 0v-5M21 10v6" />
          </svg>
        </div>

        <p className="text-[10px] uppercase tracking-[0.18em] text-[#525252]">
          Education
        </p>
      </div>

      <p className="text-sm font-medium text-[#D4D4D4]">
        Information Systems
      </p>
    </div>

    {/* Focus */}
    <div className="group border-r border-[#1F1F1F] px-5 py-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#292929] bg-[#111111] text-[#A78BFA] transition-colors duration-300 group-hover:border-[#7C3AED]/40">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4"
          >
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="2.5" />
            <path d="M12 4V2M12 22v-2M20 12h2M2 12H4" />
          </svg>
        </div>

        <p className="text-[10px] uppercase tracking-[0.18em] text-[#525252]">
          Focus
        </p>
      </div>

      <p className="text-sm font-medium text-[#D4D4D4]">
        Technology &amp; Data
      </p>
    </div>

    {/* Location */}
    <div className="group px-5 py-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#292929] bg-[#111111] text-[#A78BFA] transition-colors duration-300 group-hover:border-[#7C3AED]/40">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4"
          >
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
        </div>

        <p className="text-[10px] uppercase tracking-[0.18em] text-[#525252]">
          Location
        </p>
      </div>

      <p className="text-sm font-medium text-[#D4D4D4]">
        Indonesia
      </p>
    </div>
  </div>
</motion.div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mt-20 border-t border-[#1F1F1F] pt-8 md:mt-28"
        >
          {/* Highlights heading */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.22em] text-[#525252]">
              What I do
            </p>

            <span className="text-xs text-[#3F3F3F]">01 — 03</span>
          </div>

          {/* Cards */}
          <div className="grid gap-3 md:grid-cols-3">
            {highlights.map((item) => (
              <motion.div
                key={item.number}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.65,
                      ease,
                    },
                  },
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative overflow-hidden rounded-2xl border border-[#242424] bg-[#0D0D0D] p-6 transition-colors duration-300 hover:border-[#7C3AED]/30"
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#7C3AED]/0 blur-3xl transition-all duration-500 group-hover:bg-[#7C3AED]/10" />

                <div className="relative">
                  {/* Icon + number */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#292929] bg-[#111111] text-[#A78BFA] transition-all duration-300 group-hover:border-[#7C3AED]/40 group-hover:bg-[#7C3AED]/10">
                      {item.icon}
                    </div>

                    <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-[#3F3F3F] transition-colors duration-300 group-hover:text-[#7C3AED]/60">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-8 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#737373]">
                    {item.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-8 h-px w-8 bg-[#292929] transition-all duration-500 group-hover:w-full group-hover:bg-[#7C3AED]/50" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-20 border-t border-[#1F1F1F] pt-8 md:mt-28 md:flex md:items-center md:justify-between"
        >
          <motion.p
            variants={reveal}
            className="max-w-2xl font-[family-name:var(--font-space-grotesk)] text-2xl font-medium leading-tight text-[#D4D4D4] md:text-3xl"
          >
            Curious about problems.
            <br />
            <span className="text-[#737373]">
              Serious about building solutions.
            </span>
          </motion.p>

          <motion.span
            variants={reveal}
            className="mt-6 inline-block text-sm text-[#525252] md:mt-0"
          >
            01 — About
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
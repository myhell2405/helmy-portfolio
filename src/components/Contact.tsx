"use client";

import { motion } from "motion/react";

const socials = [
  {
    name: "GitHub",
    handle: "@myhell2405",
    href: "https://github.com/myhell2405",
    accent: "#A78BFA",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .7Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "Connect professionally",
    href: "https://www.linkedin.com/in/myhell2405",
    accent: "#60A5FA",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.25 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 13.41c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.84 0 1.87 1.72 1.87 3.05V20h3.69v-6.59Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@hlmy.akrim",
    href: "https://www.instagram.com/hlmy.akrim/",
    accent: "#F472B6",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-5 w-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
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

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-10 md:py-24"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Main violet glow */}
        <div className="absolute left-1/2 top-[30%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#7C3AED]/[0.07] blur-[150px]" />

        {/* Secondary glow */}
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#7C3AED]/[0.05] blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-size-[80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />

        {/* Decorative typography */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-[family-name:var(--font-space-grotesk)] text-[18vw] font-bold leading-none tracking-[-0.08em] text-white/[0.018]">
          CONNECT
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
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
          className="max-w-5xl"
        >
          {/* Label */}
          <motion.div
            variants={reveal}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#7C3AED]" />

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A1A1A1]">
              Contact
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={reveal}
            className="font-[family-name:var(--font-space-grotesk)] text-[clamp(3.5rem,9vw,8rem)] font-bold leading-[0.85] tracking-[-0.06em] text-[#F5F5F5]"
          >
            Let&apos;s
            <br />
            <span className="bg-gradient-to-r from-[#737373] via-[#A78BFA] to-[#7C3AED] bg-clip-text text-transparent">
              connect.
            </span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mt-5 max-w-2xl text-base leading-7 text-[#737373] md:text-lg"
          >
            Have an idea, opportunity, or simply want to discuss technology
            and data? My inbox is always open.
          </motion.p>
        </motion.div>

        {/* Main contact area */}
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Email card */}
          <motion.a
            href="mailto:helmyakrim@gmail.com"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            whileHover={{
              y: -5,
            }}
            className="group relative overflow-hidden rounded-[2rem] border border-[#292929] bg-[#0D0D0D] p-7 transition-colors duration-500 hover:border-[#7C3AED]/40 md:p-10"
          >
            {/* Card glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#7C3AED]/0 blur-[100px] transition-all duration-700 group-hover:bg-[#7C3AED]/15" />

            {/* Top row */}
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#292929] bg-[#111111] text-[#A78BFA] transition-all duration-300 group-hover:border-[#7C3AED]/40 group-hover:bg-[#7C3AED]/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#525252]">
                    Email
                  </p>

                  <p className="mt-1 text-xs text-[#737373]">
                    Best way to reach me
                  </p>
                </div>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#292929] text-[#525252] transition-all duration-300 group-hover:border-[#7C3AED]/40 group-hover:text-[#A78BFA]">
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="relative mt-14">
              <p className="break-all font-[family-name:var(--font-space-grotesk)] text-2xl font-medium tracking-[-0.03em] text-[#F5F5F5] transition-colors duration-300 group-hover:text-[#A78BFA] md:text-4xl">
                helmyakrim@gmail.com
              </p>

              <p className="mt-4 max-w-md text-sm leading-6 text-[#737373]">
                Collaboration, opportunities, projects, or professional
                conversations.
              </p>
            </div>

            {/* Bottom accent */}
            <div className="relative mt-10 flex items-center gap-3">
              <div className="h-px w-10 bg-[#7C3AED] transition-all duration-500 group-hover:w-20" />

              <span className="text-[10px] uppercase tracking-[0.2em] text-[#525252]">
                Send a message
              </span>
            </div>
          </motion.a>

          {/* Social cards */}
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
            className="flex flex-col gap-3"
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target={
                  social.href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 20,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                      ease,
                    },
                  },
                }}
                whileHover={{
                  x: 5,
                }}
                className="group relative overflow-hidden rounded-2xl border border-[#242424] bg-[#0D0D0D] px-5 py-5 transition-colors duration-300 hover:border-[#7C3AED]/30"
              >
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#292929] bg-[#111111] text-[#737373] transition-all duration-300 group-hover:text-[var(--social-accent)]"
                      style={
                        {
                          "--social-accent": social.accent,
                        } as React.CSSProperties
                      }
                    >
                      {social.icon}
                    </div>

                    {/* Text */}
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-[#D4D4D4] transition-colors duration-300 group-hover:text-[#F5F5F5]">
                          {social.name}
                        </p>

                        <span className="text-[9px] uppercase tracking-[0.15em] text-[#3F3F3F]">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-[#525252]">
                        {social.handle}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <span className="text-lg text-[#3F3F3F] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#A78BFA]">
                    ↗
                  </span>
                </div>

                {/* Hover line */}
                <div
                  className="absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                  style={{
                    backgroundColor: social.accent,
                  }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.7,
            ease,
          }}
          className="relative mt-5 overflow-hidden rounded-[2rem] border border-[#292929] bg-gradient-to-br from-[#111111] via-[#0D0D0D] to-[#120D1D] p-7 md:p-10"
        >
          {/* CTA glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-[#7C3AED]/10 blur-[100px]"
          />

          <div className="relative md:flex md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#7C3AED]" />

                <p className="text-[10px] uppercase tracking-[0.22em] text-[#737373]">
                  Open to opportunities
                </p>
              </div>

              <h3 className="mt-5 max-w-xl font-[family-name:var(--font-space-grotesk)] text-2xl font-medium leading-tight !text-[#F5F5F5] md:text-3xl">
                Let&apos;s build something{" "}
                <span className="text-[#A78BFA]">meaningful.</span>
              </h3>

              <p className="mt-3 text-sm text-[#525252]">
                Always interested in interesting ideas, collaborations, and
                technology.
              </p>
            </div>

            <a
              href="mailto:helmyakrim@gmail.com"
              className="group mt-7 inline-flex shrink-0 items-center gap-3 rounded-full bg-[#F5F5F5] px-6 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-[#7C3AED] hover:text-white md:mt-0"
            >
              Get in touch

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-8 flex flex-col gap-3 text-xs text-[#3F3F3F] sm:flex-row sm:items-center sm:justify-between"
        >
          <p>06 — Contact</p>

          <div className="flex items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-[#7C3AED]" />

            <p>Helmy Akrim © 2026</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
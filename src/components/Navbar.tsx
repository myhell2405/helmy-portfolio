"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

type IconName =
  | "home"
  | "graduation"
  | "badge"
  | "sparkles"
  | "folder"
  | "mail"
  | "file";

const navItems: {
  label: string;
  href: string;
  icon: IconName;
}[] = [
  { label: "Home", href: "#home", icon: "home" },
  { label: "Skills", href: "#skills", icon: "sparkles" },
  { label: "Education", href: "#education", icon: "graduation" },
  { label: "Certificates", href: "#certificates", icon: "badge" },
  { label: "Projects", href: "#projects", icon: "folder" },
  { label: "Contact", href: "#contact", icon: "mail" },
  { label: "CV", href: "/cv.pdf", icon: "file" },
];

function DockIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    home: (
      <path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 21v-6h6v6" />
    ),

    graduation: (
      <>
        <path d="m2.5 9.5 9.5-5 9.5 5-9.5 5zM6 11.5V16c2.4 2.7 9.6 2.7 12 0v-4.5" />
        <path d="M21.5 10v5" />
      </>
    ),

    badge: (
      <>
        <circle cx="12" cy="10" r="6" />
        <path d="m8.5 15-1 6 4.5-2.5 4.5 2.5-1-6M12 7.5l.8 1.6 1.7.2-1.2 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.2 1.7-.2z" />
      </>
    ),

    sparkles: (
      <>
        <path d="m12 3-1.4 5.6L5 10l5.6 1.4L12 17l1.4-5.6L19 10l-5.6-1.4z" />
        <path d="m19 16-.7 2.3L16 19l2.3.7L19 22l.7-2.3L22 19l-2.3-.7zM5 3l-.5 1.5L3 5l1.5.5L5 7l.5-1.5L7 5l-1.5-.5z" />
      </>
    ),

    folder: (
      <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4H10l2 2h6.5A2.5 2.5 0 0 1 21 8.5v9A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z" />
    ),

    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),

    file: (
      <>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5M9 13h6M9 17h4" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      {paths[name]}
    </svg>
  );
}

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("#home");
  const [isCvOpen, setIsCvOpen] = useState(false);

  useEffect(() => {
    const sectionItems = navItems.filter((item) =>
      item.href.startsWith("#"),
    );

    const updateActiveItem = () => {
      const scrollMarker = window.innerHeight * 0.45;

      const sections = sectionItems
        .map((item) => ({
          href: item.href,
          element: document.querySelector<HTMLElement>(item.href),
        }))
        .filter(
          (
            section,
          ): section is {
            href: string;
            element: HTMLElement;
          } => section.element !== null,
        );

      const currentSection = sections.find(({ element }) => {
        const { top, bottom } = element.getBoundingClientRect();

        return top <= scrollMarker && bottom >= scrollMarker;
      });

      if (currentSection) {
        setActiveItem((current) =>
          current === currentSection.href
            ? current
            : currentSection.href,
        );

        return;
      }

      const closestSection = sections.reduce<
        (typeof sections)[number] | null
      >((closest, section) => {
        if (!closest) return section;

        const sectionDistance = Math.abs(
          section.element.getBoundingClientRect().top -
            scrollMarker,
        );

        const closestDistance = Math.abs(
          closest.element.getBoundingClientRect().top -
            scrollMarker,
        );

        return sectionDistance < closestDistance
          ? section
          : closest;
      }, null);

      if (closestSection) {
        setActiveItem((current) =>
          current === closestSection.href
            ? current
            : closestSection.href,
        );
      }
    };

    let animationFrame: number | undefined;

    const onScroll = () => {
      if (animationFrame !== undefined) return;

      animationFrame = window.requestAnimationFrame(() => {
        updateActiveItem();
        animationFrame = undefined;
      });
    };

    updateActiveItem();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  useEffect(() => {
    if (!isCvOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsCvOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isCvOpen]);

  return (
    <motion.nav
      aria-label="Main navigation"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.65,
        delay: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        inset-x-0
        bottom-5
        z-50
        flex
        justify-center
        px-3
        sm:bottom-7
        md:bottom-auto
        md:top-5
        md:px-6
      "
    >
      {/* =====================================================
          MOBILE NAVIGATION
          ===================================================== */}

      <div
        className="
          relative
          flex
          max-w-full
          items-end
          gap-1
          overflow-x-auto
          rounded-[1.45rem]
          border
          border-white/15
          bg-[#111827]/90
          p-1.5
          shadow-[0_18px_55px_rgba(0,0,0,0.5),0_0_0_1px_rgba(124,58,237,0.12)]
          backdrop-blur-2xl
          [scrollbar-width:none]

          md:hidden
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-5
            bottom-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#a78bfa]/60
            to-transparent
          "
        />

        {navItems.map((item, index) => {
          const isActive = activeItem === item.href;
          const isDocument = item.href === "/cv.pdf";

          return (
            <motion.a
              key={item.href}
              href={item.href}
              aria-label={
                isDocument ? "Open CV" : item.label
              }
              aria-current={
                isActive && !isDocument
                  ? "page"
                  : undefined
              }
              onClick={(event) => {
                if (isDocument) {
                  event.preventDefault();
                  setIsCvOpen(true);
                } else {
                  setActiveItem(item.href);
                }
              }}
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.38,
                delay:
                  0.34 + index * 0.055,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.82,
                y: -2,
              }}
              className="
                group
                relative
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                text-[#d1d5db]
                transition-colors
                duration-200
                hover:bg-white
                hover:text-[#312e81]
                focus-visible:bg-white
                focus-visible:text-[#312e81]

                sm:h-11
                sm:w-11
              "
            >
              {isActive && (
                <motion.span
                  layoutId="active-mobile-item"
                  className="
                    absolute
                    inset-0
                    rounded-xl
                    bg-[#7c3aed]
                    shadow-[0_6px_20px_rgba(124,58,237,0.42)]
                  "
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 30,
                  }}
                />
              )}

              <motion.span
                animate={
                  isActive
                    ? {
                        rotate: [
                          0,
                          -10,
                          8,
                          0,
                        ],
                        scale: [
                          1,
                          1.15,
                          1,
                        ],
                      }
                    : {
                        rotate: 0,
                        scale: 1,
                      }
                }
                transition={{
                  duration: 0.38,
                  ease: "easeOut",
                }}
                className="relative z-10"
              >
                <DockIcon
                  name={item.icon}
                />
              </motion.span>

              <span
                className="
                  pointer-events-none
                  absolute
                  -top-10
                  left-1/2
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded-md
                  border
                  border-white/10
                  bg-[#030712]
                  px-2.5
                  py-1
                  text-[10px]
                  font-semibold
                  tracking-wide
                  text-white
                  opacity-0
                  shadow-xl
                  transition-all
                  duration-200
                  group-hover:-top-11
                  group-hover:opacity-100
                  group-focus-visible:-top-11
                  group-focus-visible:opacity-100
                "
              >
                {item.label}
              </span>

              {isActive && (
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-1
                    h-1
                    w-1
                    rounded-full
                    bg-[#c4b5fd]
                  "
                />
              )}
            </motion.a>
          );
        })}
      </div>

      {/* =====================================================
          DESKTOP NAVIGATION
          ===================================================== */}
      
      <div
        className="
          hidden
          md:flex
          md:items-center
          md:gap-1
          rounded-full
          border
          border-white/10
          bg-[#0D111C]/90
          px-2
          py-2
          shadow-[0_14px_45px_rgba(0,0,0,0.4)]
          backdrop-blur-2xl
        "
      >
        {navItems.map((item, index) => {
          const isActive = activeItem === item.href;
          const isDocument = item.href === "/cv.pdf";
        
          return (
            <motion.a
              key={item.href}
              href={item.href}
              aria-label={isDocument ? "Open CV" : item.label}
              aria-current={
                isActive && !isDocument ? "page" : undefined
              }
              onClick={(event) => {
                if (isDocument) {
                  event.preventDefault();
                  setIsCvOpen(true);
                } else {
                  setActiveItem(item.href);
                }
              }}
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.045,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                group
                relative
                rounded-full
                px-3.5
                py-2
                text-[13px]
                font-medium
                tracking-[-0.01em]
                transition-all
                duration-300
                ease-out
              
                ${
                  isActive
                    ? "text-[#C4B5FD]"
                    : "text-[#D4D4D8] hover:text-white"
                }
              
                ${
                  isDocument
                    ? "ml-1 border border-[#7C3AED]/50 px-4 text-[#DDD6FE] hover:border-[#A78BFA] hover:bg-[#7C3AED]/15 hover:text-white"
                    : "hover:bg-white/[0.07]"
                }
              `}
            >
              {item.label}
              
              {/* Active indicator */}
              {isActive && !isDocument && (
                <motion.span
                  layoutId="desktop-active-indicator"
                  className="
                    absolute
                    inset-x-3
                    -bottom-0.5
                    h-px
                    rounded-full
                    bg-[#A78BFA]
                    shadow-[0_0_10px_rgba(167,139,250,0.7)]
                  "
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 32,
                  }}
                />
              )}
      
              {/* Hover indicator */}
              {!isActive && !isDocument && (
                <span
                  className="
                    absolute
                    inset-x-3
                    -bottom-0.5
                    h-px
                    scale-x-0
                    rounded-full
                    bg-[#A78BFA]/70
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />
              )}
            </motion.a>
          );
        })}
      </div>

      {isCvOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-preview-title"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setIsCvOpen(false)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0D0D0D] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
              <h2
                id="cv-preview-title"
                className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white"
              >
                Curriculum Vitae
              </h2>
              <button
                type="button"
                aria-label="Close CV preview"
                onClick={() => setIsCvOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xl text-white transition-colors hover:border-[#A78BFA] hover:bg-[#7C3AED]"
              >
                ×
              </button>
            </div>

            <iframe
              src="/cv.pdf"
              title="Curriculum Vitae preview"
              className="h-[65vh] min-h-[420px] w-full bg-white"
            />

            <div className="flex justify-end border-t border-white/10 px-5 py-4 sm:px-6">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6D28D9]"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
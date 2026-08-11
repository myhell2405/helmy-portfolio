"use client";

import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0A0A0A]/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-tight"
        >
          HA<span className="text-[#7C3AED]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#A1A1A1] transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/cv.pdf"
            className="rounded-full border border-[#262626] px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:border-[#7C3AED] hover:bg-[#7C3AED] hover:text-white"
          >
            CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#262626] text-[#F5F5F5] md:hidden"
        >
          <span className="text-lg">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-[#262626] bg-[#0A0A0A]/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-base text-[#A1A1A1] transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/cv.pdf"
              onClick={closeMenu}
              className="mt-2 inline-flex w-fit rounded-full border border-[#262626] px-5 py-2.5 text-sm font-medium transition-all hover:border-[#7C3AED] hover:bg-[#7C3AED]"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
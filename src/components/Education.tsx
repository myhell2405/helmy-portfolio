"use client";

import { useEffect, useState } from "react";

const education = [
  {
    period: "2022 — 2026",
    degree: "Bachelor of Information Systems",
    institution: "Universitas Metamedia",
    description:
      "Studied information systems with a focus on system analysis, databases, software development, and digital solutions.",
    highlights: [
      "Information Systems",
      "Database Management",
      "System Analysis & Design",
      "Web Development",
      "Data Analytics",
    ],
  },
];

export default function Education() {
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(false);

  useEffect(() => {
    if (!isTranscriptOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsTranscriptOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isTranscriptOpen]);

  return (
    <section
      id="education"
      className="relative overflow-hidden px-6 py-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 grid gap-5 md:mb-14 lg:grid-cols-[1fr_0.6fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7C3AED]" />

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A1A1A1]">
                Education
              </p>
            </div>

            <h2 className="max-w-4xl font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
              Academic foundation
              <br />
              <span className="text-[#737373]">
                that shaped how I think.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#737373] lg:justify-self-end lg:text-right">
            Education gave me the foundation to understand systems,
            technology, and the problems they are built to solve.
          </p>
        </div>

        {/* Education timeline */}
        <div className="border-t border-[#1F1F1F]">
          {education.map((item) => (
            <article
              key={item.degree}
              className="grid gap-5 border-b border-[#1F1F1F] py-7 md:py-10 lg:grid-cols-[180px_1fr] lg:gap-14"
            >
              {/* Period */}
              <div>
                <p className="text-sm font-medium text-[#737373]">
                  {item.period}
                </p>

                <div className="mt-4 hidden h-px w-12 bg-[#7C3AED] lg:block" />
              </div>

              {/* Main content */}
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#525252]">
                  Bachelor&apos;s Degree
                </p>

                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-[#F5F5F5] md:text-4xl">
                  {item.degree}
                </h3>

                <p className="mt-2 text-base text-[#A78BFA]">
                  {item.institution}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#737373] md:text-base">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <div className="rounded-2xl border border-[#7C3AED]/35 bg-[#7C3AED]/10 px-5 py-3">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#A78BFA]">
                      GPA / IPK
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[#F5F5F5]">
                      3.63 / 4.00
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsTranscriptOpen(true)}
                    className="inline-flex items-center gap-3 self-stretch rounded-2xl border border-[#262626] bg-[#111111] px-5 py-3 text-sm font-medium text-[#D4D4D4] transition-colors hover:border-[#7C3AED]/60 hover:text-[#C4B5FD]"
                  >
                    <span aria-hidden="true">↗</span>
                    View academic transcript
                  </button>
                </div>

                {/* Academic highlights */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-[#262626] bg-[#111111] px-3.5 py-2 text-xs text-[#A1A1A1]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[#1F1F1F] pt-6 sm:flex-row sm:items-center sm:justify-between md:mt-16">
          <p className="max-w-xl text-sm leading-6 text-[#737373]">
            The degree is only the foundation. Continuous learning and
            practical projects are where the real growth happens.
          </p>

          <span className="text-sm text-[#525252]">
            03 — Education
          </span>
        </div>
      </div>

      {isTranscriptOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="transcript-preview-title"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setIsTranscriptOpen(false)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0D0D0D] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
              <h2
                id="transcript-preview-title"
                className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white"
              >
                Academic Transcript
              </h2>
              <button
                type="button"
                aria-label="Close academic transcript preview"
                onClick={() => setIsTranscriptOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xl text-white transition-colors hover:border-[#A78BFA] hover:bg-[#7C3AED]"
              >
                ×
              </button>
            </div>

            <iframe
              src="/documents/transcript-sample.pdf"
              title="Academic transcript preview"
              className="h-[65vh] min-h-[420px] w-full bg-white"
            />
          </div>
        </div>
      )}
    </section>
  );
}

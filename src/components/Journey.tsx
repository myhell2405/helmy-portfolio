const journey = [
  {
    year: "2026",
    title: "Building My Professional Path",
    description:
      "Graduating in Information Systems while strengthening my portfolio across web development, data analytics, and digital solutions.",
    category: "Career",
  },
  {
    year: "2025",
    title: "Academic Information System",
    description:
      "Designed and developed a web-based academic information system for SDN 01 Durian Gadang as an academic project.",
    category: "Project",
  },
  {
    year: "2024",
    title: "Web Development & System Design",
    description:
      "Deepened my understanding of Laravel, PHP, MySQL, system analysis, database design, and modern web interfaces.",
    category: "Learning",
  },
  {
    year: "2023",
    title: "Exploring Technology",
    description:
      "Started exploring software development and discovering how technology can be used to solve practical problems.",
    category: "Beginning",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden border-t border-[#1A1A1A] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-[1fr_0.6fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7C3AED]" />

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A1A1A1]">
                Journey
              </p>
            </div>

            <h2 className="max-w-4xl font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
              A timeline of
              <br />
              <span className="text-[#737373]">
                learning & building.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#737373] lg:justify-self-end lg:text-right">
            Every project, challenge, and new skill becomes part of the
            journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-3 top-0 w-px bg-[#1F1F1F] md:left-24"
          />

          <div className="space-y-0">
            {journey.map((item, index) => (
              <article
                key={`${item.year}-${item.title}`}
                className="group relative grid gap-6 border-b border-[#1F1F1F] py-10 pl-10 md:grid-cols-[120px_1fr] md:gap-12 md:pl-0 md:py-12"
              >
                {/* Timeline dot */}
                <span className="absolute left-0 top-12 h-2.5 w-2.5 rounded-full border border-[#7C3AED] bg-[#0A0A0A] transition-all duration-300 group-hover:bg-[#7C3AED] md:left-[91px]" />

                {/* Year */}
                <div>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#D4D4D4] md:text-2xl">
                    {item.year}
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#525252]">
                    {item.category}
                  </p>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-[#F5F5F5] transition-colors duration-300 group-hover:text-[#A78BFA] md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#737373] md:text-base">
                    {item.description}
                  </p>
                </div>

                {/* Index */}
                <span className="absolute right-0 top-10 hidden text-xs text-[#3A3A3A] md:block">
                  0{index + 1}
                </span>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 flex flex-col gap-5 border-t border-[#1F1F1F] pt-8 sm:flex-row sm:items-center sm:justify-between md:mt-24">
          <p className="max-w-xl font-[family-name:var(--font-space-grotesk)] text-xl font-medium leading-tight text-[#D4D4D4] md:text-2xl">
            The journey continues.
            <br />
            There&apos;s still more to build.
          </p>

          <span className="text-sm text-[#525252]">
            05 — Journey
          </span>
        </div>
      </div>
    </section>
  );
}
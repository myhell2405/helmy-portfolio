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

const interests = [
  "Information Systems",
  "Data Analytics",
  "Web Development",
  "Digital Products",
  "Technology",
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-[#1A1A1A] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-[1fr_0.6fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
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
              className="grid gap-8 border-b border-[#1F1F1F] py-10 md:py-12 lg:grid-cols-[180px_1fr] lg:gap-16"
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

                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#737373] md:text-base">
                  {item.description}
                </p>

                {/* Academic highlights */}
                <div className="mt-8 flex flex-wrap gap-2">
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

        {/* Academic interests */}
        <div className="mt-16 grid gap-8 md:mt-20 lg:grid-cols-[0.5fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#525252]">
              Academic Interests
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {interests.map((interest, index) => (
              <div
                key={interest}
                className="flex items-center gap-3"
              >
                <span className="text-xs text-[#525252]">
                  0{index + 1}
                </span>

                <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium text-[#D4D4D4] md:text-2xl">
                  {interest}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 flex flex-col gap-5 border-t border-[#1F1F1F] pt-8 sm:flex-row sm:items-center sm:justify-between md:mt-24">
          <p className="max-w-xl text-sm leading-6 text-[#737373]">
            The degree is only the foundation. Continuous learning and
            practical projects are where the real growth happens.
          </p>

          <span className="text-sm text-[#525252]">
            03 — Education
          </span>
        </div>
      </div>
    </section>
  );
}
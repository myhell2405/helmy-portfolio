const skillGroups = [
  {
    number: "01",
    category: "Development",
    description:
      "Building structured and responsive web applications from interface to database.",
    skills: [
      "PHP",
      "Laravel",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "MySQL",
    ],
  },
  {
    number: "02",
    category: "Data & Analytics",
    description:
      "Working with data to uncover patterns, create insights, and support decisions.",
    skills: [
      "SQL",
      "Python",
      "Excel",
      "Power BI",
      "Tableau",
      "Statistics",
    ],
  },
  {
    number: "03",
    category: "Tools & Workflow",
    description:
      "Tools that support development, collaboration, analysis, and product design.",
    skills: ["Git / GitHub", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-[#1A1A1A] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#7C3AED]" />

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A1A1A1]">
              Skills
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h2 className="max-w-4xl font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
              Tools I use to turn
              <br />
              <span className="text-[#737373]">ideas into solutions.</span>
            </h2>

            <p className="max-w-md text-sm leading-6 text-[#737373] lg:justify-self-end lg:text-right">
              A growing toolkit across software development, data analytics,
              and digital product design.
            </p>
          </div>
        </div>

        {/* Skill groups */}
        <div className="border-t border-[#1F1F1F]">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="group grid gap-8 border-b border-[#1F1F1F] py-10 lg:grid-cols-[120px_0.7fr_1fr] lg:gap-12 lg:py-12"
            >
              {/* Number */}
              <div>
                <span className="text-xs font-medium tracking-[0.15em] text-[#525252]">
                  {group.number}
                </span>
              </div>

              {/* Category */}
              <div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-[#F5F5F5] transition-colors duration-300 group-hover:text-[#A78BFA] md:text-3xl">
                  {group.category}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-[#737373]">
                  {group.description}
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap content-start gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#262626] bg-[#111111] px-4 py-2 text-sm text-[#A1A1A1] transition-all duration-300 hover:border-[#7C3AED]/60 hover:bg-[#7C3AED]/10 hover:text-[#F5F5F5]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-20 flex flex-col gap-5 border-t border-[#1F1F1F] pt-8 sm:flex-row sm:items-center sm:justify-between md:mt-24">
          <p className="max-w-2xl font-[family-name:var(--font-space-grotesk)] text-xl font-medium leading-tight text-[#D4D4D4] md:text-2xl">
            Always learning.
            <br />
            Always building.
          </p>

          <span className="text-sm text-[#525252]">
            02 — Skills
          </span>
        </div>
      </div>
    </section>
  );
}

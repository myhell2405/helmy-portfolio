"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    number: "01",
    type: "Academic / Information System",
    title: "Academic Information System",
    client: "SDN 01 Durian Gadang",
    description:
      "A web-based academic information system designed to improve the management and integration of academic data, including student information, grades, attendance, class management, and report cards.",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    featured: true,
    screens: [
      "/images/projects/siakad/siakad1.png",
      "/images/projects/siakad/siakad2.png",
      "/images/projects/siakad/siakad3.png",
      "/images/projects/siakad/siakad4.png",
      "/images/projects/siakad/siakad5.png",
      "/images/projects/siakad/siakad6.png",
    ],
  },
  {
    number: "02",
    type: "Business Management System",
    title: "Broiler Management System",
    client: "Poultry Business",
    description:
      "A web-based management system concept for monitoring broiler production, inventory, harvest results, feed usage, mortality, and business-related data.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Data Analytics",
    ],
    featured: false,
    screens: [],
  },
  {
    number: "03",
    type: "Data Analytics",
    title: "Data Analytics Portfolio",
    client: "Personal Project",
    description:
      "A collection of data analysis projects focused on transforming raw data into useful insights through SQL, Python, spreadsheets, and interactive dashboards.",
    technologies: [
      "SQL",
      "Python",
      "Excel",
      "Power BI",
    ],
    featured: false,
    screens: [],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-[#1A1A1A] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-[1fr_0.6fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7C3AED]" />

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A1A1A1]">
                Selected Projects
              </p>
            </div>

            <h2 className="max-w-4xl font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
              Things I&apos;ve built
              <br />
              <span className="text-[#737373]">
                and learned from.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#737373] lg:justify-self-end lg:text-right">
            A selection of academic, technical, and personal projects that
            represent how I approach problems and build solutions.
          </p>
        </div>

        {/* Projects */}
        <div className="border-t border-[#1F1F1F]">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group border-b border-[#1F1F1F] py-10 md:py-14"
            >
              <div className="grid gap-8 lg:grid-cols-[100px_1fr_280px] lg:gap-12">
                {/* Number */}
                <div>
                  <span className="text-xs font-medium tracking-[0.15em] text-[#525252]">
                    {project.number}
                  </span>
                </div>

                {/* Main project information */}
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#525252]">
                    {project.type}
                  </p>

                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#F5F5F5] transition-colors duration-300 group-hover:text-[#A78BFA] md:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#A78BFA]">
                    {project.client}
                  </p>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-[#737373] md:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[#262626] bg-[#111111] px-3.5 py-2 text-xs text-[#A1A1A1]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action */}
                <div className="flex items-end lg:justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="group/button inline-flex items-center gap-3 text-sm font-medium text-[#D4D4D4] transition-colors duration-300 hover:text-[#A78BFA]"
                  >
                    Preview

                    <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-20 flex flex-col gap-5 border-t border-[#1F1F1F] pt-8 sm:flex-row sm:items-center sm:justify-between md:mt-24">
          <p className="max-w-xl text-sm leading-6 text-[#737373]">
            More projects will be added as I continue learning, building, and
            experimenting.
          </p>

          <span className="text-sm text-[#525252]">
            04 — Projects
          </span>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-60 flex items-end bg-black/75 p-4 backdrop-blur-sm md:items-center md:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0D0D0D] p-6 shadow-2xl md:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#A78BFA]">
                  Case study preview
                </p>

                <h3
                  id="case-study-title"
                  className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-[#F5F5F5] md:text-5xl"
                >
                  {selectedProject.title}
                </h3>

                <p className="mt-2 text-sm text-[#737373]">
                  {selectedProject.client}
                </p>
              </div>

              <button
                type="button"
                aria-label="Close case study"
                onClick={() => setSelectedProject(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#262626] text-xl text-[#D4D4D4] transition-colors hover:border-[#7C3AED] hover:text-white"
              >
                ×
              </button>
            </div>

            {/* Screenshots */}
            {selectedProject.screens.length > 0 ? (
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {selectedProject.screens.map((src, index) => (
                  <div
                    key={src}
                    className="group overflow-hidden rounded-2xl border border-[#262626] bg-[#111111]"
                  >
                    <Image
                      src={src}
                      alt={`${selectedProject.title} screenshot ${index + 1}`}
                      width={1440}
                      height={960}
                      className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-8 flex min-h-48 items-center justify-center rounded-2xl border border-dashed border-[#262626] bg-[#111111]">
                <p className="text-sm text-[#525252]">
                  Case study screenshots will be added soon.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
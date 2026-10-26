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
      "A web-based school information system for managing students, teachers, classes, subjects, grades, extracurricular activities, and academic reports.",
    technologies: ["Laravel", "PHP", "Blade", "SQLite", "Tailwind CSS"],
    featured: true,
    githubUrl: "https://github.com/myhell2405/siakad",
    previewImage: "/images/projects/siakad/siakad1.png",
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
    type: "Offline Desktop Application",
    title: "Kwitansi ARKAS BOS",
    client: "School BOS Budget Management",
    description:
      "An offline-first Windows desktop tool for creating, storing, and printing school BOS budget receipts. Voucher data stays on the user's computer, so it works without MySQL or an internet connection.",
    technologies: ["Electron", "HTML", "CSS", "JavaScript", "JSON"],
    featured: true,
    githubUrl: "https://github.com/myhell2405/Kwitansi-ARKAS-BOS",
    previewImage: "/images/projects/kwitansi-preview.png",
    screens: ["/images/projects/kwitansi-preview.png"],
  },
  {
    number: "03",
    type: "Data Science / Finance",
    title: "Finova — Financial Analytics",
    client: "Personal Project",
    description:
      "An analytics project using synthetic customer, transaction, product, and revenue data. Includes data-quality checks and business analysis with SQL and Python, with results prepared for dashboard visualization.",
    technologies: ["Python", "SQL", "Jupyter Notebook", "Pandas", "MySQL"],
    featured: false,
    githubUrl: "https://github.com/myhell2405/finova",
    previewImage: "/images/projects/finova-preview.png",
    screens: ["/images/projects/finova-preview.png"],
  },
  {
    number: "04",
    type: "Education Data Analysis",
    title: "Gaya Belajar — Student Learning Styles",
    client: "Academic Research",
    description:
      "An analysis of student questionnaire responses that groups learning styles into visual, auditory, and kinesthetic categories. Summarizes each student's dominant style and exports charts and results for further review.",
    technologies: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib"],
    featured: false,
    githubUrl: "https://github.com/myhell2405/gaya_belajar",
    previewImage: "/images/projects/gaya-belajar-preview.png",
    screens: ["/images/projects/gaya-belajar-preview.png"],
  },
  {
    number: "05",
    type: "Sales Data Analysis",
    title: "Penjualan Analisis — Sales Analysis",
    client: "Personal Project",
    description:
      "A small Python analysis of daily store sales, including total sales, best-selling products, category shares, and daily sales trends, with charts produced in a Jupyter notebook.",
    technologies: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib", "Seaborn"],
    featured: false,
    githubUrl: "https://github.com/myhell2405/Penjualan_analisis",
    previewImage: "/images/projects/penjualan-preview.png",
    screens: ["/images/projects/penjualan-preview.png"],
  },
  {
    number: "06",
    type: "Web Development / Portfolio",
    title: "Helmy Portfolio",
    client: "Personal Project",
    description:
      "A responsive personal portfolio built with Next.js, TypeScript, and Motion, featuring an animated introduction, project gallery, certificates, and contact information.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    featured: false,
    githubUrl: "https://github.com/myhell2405/helmy-portfolio",
    liveUrl: "https://helmy-portfolio-kappa.vercel.app",
    previewImage: "/images/projects/portfolio-preview.png",
    screens: ["/images/projects/portfolio-preview.png"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 grid gap-5 md:mb-14 lg:grid-cols-[1fr_0.6fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7C3AED]" />

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A1A1A1]">
                All Public GitHub Projects
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
            Every public project repository on my GitHub profile is listed
            here. Private repositories are excluded.
          </p>
        </div>

        {/* Projects */}
        <div className="border-t border-[#1F1F1F]">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group border-b border-[#1F1F1F] py-7 md:py-10"
            >
              <div className="grid gap-5 lg:grid-cols-[100px_1fr_320px] lg:gap-10">
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

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#737373] md:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
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

                {/* Action — preview thumbnail + buttons */}
                <div className="flex flex-col justify-between gap-4 lg:items-end">
                  {/* Preview thumbnail */}
                  {project.previewImage && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#262626] bg-[#111111] lg:max-w-[280px]">
                      <Image
                        src={project.previewImage}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 280px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-4 lg:justify-end">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="group/button inline-flex items-center gap-2 text-sm font-medium text-[#D4D4D4] transition-colors duration-300 hover:text-[#A78BFA]"
                    >
                      Preview
                      <span className="transition-transform duration-300 group-hover/button:translate-x-1">→</span>
                    </button>

                    {"liveUrl" in project && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} live site`}
                        className="inline-flex items-center gap-2 rounded-full border border-[#262626] bg-[#111111] px-3.5 py-1.5 text-xs text-[#A1A1A1] transition-all duration-300 hover:border-[#7C3AED] hover:text-[#A78BFA]"
                      >
                        Live site
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="inline-flex items-center gap-2 rounded-full border border-[#262626] bg-[#111111] px-3.5 py-1.5 text-xs text-[#A1A1A1] transition-all duration-300 hover:border-[#7C3AED] hover:text-[#A78BFA]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[#1F1F1F] pt-6 sm:flex-row sm:items-center sm:justify-between md:mt-16">
          <p className="max-w-xl text-sm leading-6 text-[#737373]">
            Explore the source code for each project on GitHub. Private
            repositories are not shown here.
          </p>

          <a
            href="https://github.com/myhell2405"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#262626] bg-[#111111] px-5 py-2.5 text-sm text-[#A1A1A1] transition-all duration-300 hover:border-[#7C3AED] hover:text-[#A78BFA]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm md:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="mx-auto max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0D0D0D] p-6 shadow-2xl md:p-10"
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

              <div className="flex shrink-0 items-center gap-3">
                {"liveUrl" in selectedProject && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open live site"
                    className="flex h-10 items-center gap-2 rounded-full border border-[#262626] px-4 text-xs text-[#A1A1A1] transition-colors hover:border-[#7C3AED] hover:text-[#A78BFA]"
                  >
                    Live site
                    <span aria-hidden="true">↗</span>
                  </a>
                )}

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View on GitHub"
                  className="flex h-10 items-center gap-2 rounded-full border border-[#262626] px-4 text-xs text-[#A1A1A1] transition-colors hover:border-[#7C3AED] hover:text-[#A78BFA]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                  </svg>
                  GitHub
                </a>

                <button
                  type="button"
                  aria-label="Close case study"
                  onClick={() => setSelectedProject(null)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#262626] text-xl text-[#D4D4D4] transition-colors hover:border-[#7C3AED] hover:text-white"
                >
                  ×
                </button>
              </div>
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
                  {"liveUrl" in selectedProject
                    ? "Open the live site to explore this project."
                    : "Case study screenshots will be added soon."}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
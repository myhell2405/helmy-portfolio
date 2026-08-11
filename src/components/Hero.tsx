const roles = ["Information Systems", "Web Development", "Data Analytics"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#7C3AED]" />
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A1A1A1]">
              Hello, I&apos;m
            </p>
          </div>

          {/* Main heading */}
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.85] tracking-[-0.06em]">
            HELMY
            <br />
            <span className="text-[#F5F5F5]">AKRIM</span>
            <span className="text-[#7C3AED]">.</span>
          </h1>

          {/* Description */}
          <div className="mt-10 grid max-w-3xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-medium leading-tight text-[#F5F5F5] md:text-3xl">
                Information Systems × Technology × Data
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#A1A1A1] md:text-lg">
                I build digital solutions and explore the intersection of
                technology, data, and people.
              </p>
            </div>

            {/* Role tags */}
            <div className="flex flex-wrap gap-2 md:max-w-55 md:justify-end">
              {roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-[#262626] bg-[#111111]/80 px-3 py-1.5 text-xs text-[#A1A1A1] backdrop-blur-sm"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-[#F5F5F5] px-6 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-[#7C3AED] hover:text-white"
            >
              View Projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-3 rounded-full border border-[#262626] px-6 py-3.5 text-sm font-semibold text-[#F5F5F5] transition-all duration-300 hover:border-[#7C3AED] hover:text-[#7C3AED]"
            >
              Download CV
              <span>↓</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-8 right-0 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#525252] transition-colors hover:text-[#A1A1A1] lg:flex"
        >
          Scroll to explore
          <span className="h-10 w-px bg-[#262626]" />
        </a>
      </div>
    </section>
  );
}
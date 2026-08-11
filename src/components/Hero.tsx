import Image from "next/image";

const roles = ["Information Systems", "Web Development", "Data Analytics"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 md:pb-24 md:pt-36"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-20">
        {/* Left content */}
        <div>
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#7C3AED]" />

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A1A1A1]">
              Hello, I&apos;m
            </p>
          </div>

          {/* Name */}
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(3.5rem,11vw,9rem)] font-bold leading-[0.85] tracking-[-0.06em]">
            HELMY
            <br />
            <span>AKRIM</span>
            <span className="text-[#7C3AED]">.</span>
          </h1>

          {/* Mobile profile image
              Visible only on mobile/tablet.
              Desktop uses the image on the right. */}
          <div className="relative mt-10 w-full sm:mt-12 lg:hidden">
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[2rem] bg-[#7C3AED]/10 blur-3xl"
            />

            <div className="group relative mx-auto aspect-[4/5] w-full max-w-85 overflow-hidden rounded-[2rem] border border-[#262626] bg-[#111111]">
              <Image
                src="/images/profile.jpg"
                alt="Helmy Akrim"
                fill
                priority
                sizes="(max-width: 640px) 85vw, 340px"
                className="object-cover object-[50%_32%] transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/70 backdrop-blur-md">
                HELMY AKRIM
              </div>
            </div>
          </div>

          {/* Positioning */}
          <div className="mt-10 max-w-3xl md:mt-12">
            <p className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium leading-tight text-[#F5F5F5] md:text-3xl">
              Information Systems × Technology × Data
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#A1A1A1] md:text-lg">
              I build digital solutions and explore the intersection of
              technology, data, and people.
            </p>
          </div>

          {/* Role tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-[#262626] bg-[#111111]/80 px-3 py-1.5 text-xs text-[#A1A1A1] backdrop-blur-sm"
              >
                {role}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4">
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

        {/* Desktop profile image */}
        <div className="relative mx-auto hidden w-full max-w-105 lg:block lg:mx-0">
          {/* Violet glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[2rem] bg-[#7C3AED]/10 blur-3xl"
          />

          {/* Image frame */}
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#262626] bg-[#111111]">
            <Image
              src="/images/profile.jpg"
              alt="Helmy Akrim"
              fill
              priority
              sizes="420px"
              className="object-cover object-[50%_35%] transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Subtle overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent" />

            {/* Image label */}
            <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/70 backdrop-blur-md">
              HELMY AKRIM
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#525252] transition-colors hover:text-[#A1A1A1] lg:flex"
      >
        Scroll to explore
        <span className="h-10 w-px bg-[#262626]" />
      </a>
    </section>
  );
}
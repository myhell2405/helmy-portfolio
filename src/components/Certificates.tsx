const certificateAreas = [
  "Web Development",
  "Data Analytics",
  "Information Systems",
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden border-t border-[#1A1A1A] px-6 py-24 md:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-[#7C3AED]/8 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-[1fr_0.6fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7C3AED]" />
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A1A1A1]">
                Certificates
              </p>
            </div>

            <h2 className="max-w-4xl font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-[#F5F5F5] md:text-6xl lg:text-7xl">
              Learning, backed by
              <br />
              <span className="text-[#737373]">recognized progress.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#737373] lg:justify-self-end lg:text-right">
            A dedicated space for verified courses, certifications, and the
            skills developed through continuous learning.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
          <article className="group relative overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#111111] p-7 md:p-10">
            <div aria-hidden="true" className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full border border-[#7C3AED]/30" />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#A78BFA]/35 bg-[#7C3AED]/15 text-xl text-[#C4B5FD]">✦</div>
              <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-[#A78BFA]">Credential collection</p>
              <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-[#F5F5F5] md:text-3xl">Certificates are being curated.</h3>
              <p className="mt-4 max-w-lg text-sm leading-7 text-[#A1A1A1]">Verified credentials will appear here as each learning milestone is completed.</p>
            </div>
          </article>

          <div className="rounded-3xl border border-[#262626] bg-[#0D0D0D] p-7 md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#737373]">Focus areas</p>
            <div className="mt-7 space-y-4">
              {certificateAreas.map((area, index) => (
                <div key={area} className="flex items-center gap-4 border-b border-[#202020] pb-4 last:border-0 last:pb-0">
                  <span className="text-xs text-[#7C3AED]">0{index + 1}</span>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-[#D4D4D4]">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

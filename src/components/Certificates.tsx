import Image from "next/image";

const certificates = [
  "/images/certificates/Certificate1.jpg",
  "/images/certificates/Certificate2.jpg",
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

        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((src, index) => (
            <a
              key={src}
              href={src}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-[1.414/1] overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#111111]"
            >
              <Image
                src={src}
                alt={`Certificate${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

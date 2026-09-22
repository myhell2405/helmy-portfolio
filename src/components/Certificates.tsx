"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const certificates = [
  "/images/certificates/Certificate1.jpg",
  "/images/certificates/Certificate2.jpg",
];

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null,
  );

  useEffect(() => {
    if (!selectedCertificate) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCertificate(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selectedCertificate]);

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

        <div className="flex flex-wrap justify-center gap-5">
          {certificates.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setSelectedCertificate(src)}
              aria-label={`View Certificate${index + 1}`}
              className="group relative aspect-[1.414/1] w-full max-w-[560px] overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#111111] md:w-[calc(50%-0.625rem)] xl:w-[calc(33.333%-0.833rem)]"
            >
              <Image
                src={src}
                alt={`Certificate${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-5xl items-center justify-center rounded-2xl border border-white/15 bg-[#0D0D0D] p-3 shadow-2xl sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedCertificate}
              alt="Selected certificate"
              width={1600}
              height={1131}
              className="max-h-[82vh] w-auto max-w-full rounded-lg object-contain"
            />
            <button
              type="button"
              aria-label="Close certificate preview"
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-xl text-white transition-colors hover:border-[#A78BFA] hover:bg-[#7C3AED]"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

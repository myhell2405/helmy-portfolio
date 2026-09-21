"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

type Language = "en" | "id";
type Theme = "dark" | "light";

const indonesianText: Record<string, string> = {
  "Hello, I'm": "Halo, saya",
  "Information Systems": "Sistem Informasi",
  "Web Development": "Pengembangan Web",
  "Data Analytics": "Analitik Data",
  "An Information Systems graduate focused on building thoughtful digital experiences through technology and data.": "Lulusan Sistem Informasi yang fokus membangun pengalaman digital yang bermakna melalui teknologi dan data.",
  "Explore my work": "Lihat karya saya",
  "Get in touch": "Hubungi saya",
  "Scroll to explore": "Gulir untuk menjelajah",
  "Information Systems × Technology × Data": "Sistem Informasi × Teknologi × Data",
  "I build digital solutions and explore the intersection of technology, data, and people.": "Saya membangun solusi digital dan mengeksplorasi pertemuan antara teknologi, data, dan manusia.",
  "Skills": "Keahlian",
  "Tools I use to turn": "Perangkat yang saya gunakan untuk mengubah",
  "ideas into solutions.": "ide menjadi solusi.",
  "A growing toolkit across software development, data analytics, and digital product design.": "Kumpulan kemampuan yang terus berkembang dalam pengembangan perangkat lunak, analitik data, dan desain produk digital.",
  "Development": "Pengembangan",
  "Data & Analytics": "Data & Analitik",
  "Tools & Workflow": "Alat & Alur Kerja",
  "Building structured and responsive web applications from interface to database.": "Membangun aplikasi web terstruktur dan responsif, dari antarmuka hingga basis data.",
  "Working with data to uncover patterns, create insights, and support decisions.": "Mengolah data untuk menemukan pola, menghasilkan insight, dan mendukung pengambilan keputusan.",
  "Tools that support development, collaboration, analysis, and product design.": "Perangkat yang mendukung pengembangan, kolaborasi, analisis, dan desain produk.",
  "Always learning.": "Selalu belajar.",
  "Always building.": "Selalu berkarya.",
  "02 — Skills": "02 — Keahlian",
  "Education": "Pendidikan",
  "Academic foundation": "Fondasi akademis",
  "that shaped how I think.": "yang membentuk cara saya berpikir.",
  "Education gave me the foundation to understand systems, technology, and the problems they are built to solve.": "Pendidikan memberi saya fondasi untuk memahami sistem, teknologi, dan masalah yang ingin diselesaikannya.",
  "Bachelor's Degree": "Sarjana",
  "Bachelor of Information Systems": "Sarjana Sistem Informasi",
  "Studied information systems with a focus on system analysis, databases, software development, and digital solutions.": "Mempelajari sistem informasi dengan fokus pada analisis sistem, basis data, pengembangan perangkat lunak, dan solusi digital.",
  "Database Management": "Manajemen Basis Data",
  "System Analysis & Design": "Analisis & Desain Sistem",
  "GPA / IPK": "IPK",
  "View academic transcript": "Lihat transkrip akademik",
  "Academic Interests": "Minat Akademis",
  "Digital Products": "Produk Digital",
  "Technology": "Teknologi",
  "The degree is only the foundation. Continuous learning and practical projects are where the real growth happens.": "Gelar hanyalah fondasi. Pembelajaran berkelanjutan dan proyek praktik adalah tempat pertumbuhan nyata terjadi.",
  "03 — Education": "03 — Pendidikan",
  "Certificates": "Sertifikat",
  "Learning, backed by": "Pembelajaran, didukung oleh",
  "recognized progress.": "pencapaian yang diakui.",
  "Credential collection": "Koleksi kredensial",
  "Certificates are being curated.": "Sertifikat sedang dikurasi.",
  "Verified credentials will appear here as each learning milestone is completed.": "Kredensial terverifikasi akan ditampilkan di sini setelah setiap pencapaian pembelajaran selesai.",
  "Focus areas": "Bidang fokus",
  "Selected Projects": "Proyek Pilihan",
  "Things I've built": "Hal-hal yang saya bangun",
  "and learned from.": "dan pelajari.",
  "A selection of academic, technical, and personal projects that represent how I approach problems and build solutions.": "Pilihan proyek akademis, teknis, dan pribadi yang merepresentasikan cara saya menghadapi masalah dan membangun solusi.",
  "Academic / Information System": "Akademis / Sistem Informasi",
  "Academic Information System": "Sistem Informasi Akademik",
  "A web-based academic information system designed to improve the management and integration of academic data, including student information, grades, attendance, class management, and report cards.": "Sistem informasi akademik berbasis web untuk meningkatkan pengelolaan dan integrasi data akademik, termasuk informasi siswa, nilai, absensi, manajemen kelas, dan rapor.",
  "Business Management System": "Sistem Manajemen Bisnis",
  "Broiler Management System": "Sistem Manajemen Broiler",
  "Poultry Business": "Bisnis Peternakan Unggas",
  "A web-based management system concept for monitoring broiler production, inventory, harvest results, feed usage, mortality, and business-related data.": "Konsep sistem manajemen berbasis web untuk memantau produksi broiler, inventaris, hasil panen, penggunaan pakan, mortalitas, dan data bisnis.",
  "Data Analytics Portfolio": "Portofolio Analitik Data",
  "Personal Project": "Proyek Pribadi",
  "A collection of data analysis projects focused on transforming raw data into useful insights through SQL, Python, spreadsheets, and interactive dashboards.": "Kumpulan proyek analisis data yang berfokus mengubah data mentah menjadi insight bermanfaat melalui SQL, Python, spreadsheet, dan dashboard interaktif.",
  "View project": "Lihat proyek",
  "Preview": "Pratinjau",
  "Case study preview": "Pratinjau studi kasus",
  "Each project is an opportunity to learn, solve problems, and build something useful.": "Setiap proyek adalah kesempatan untuk belajar, menyelesaikan masalah, dan membangun sesuatu yang berguna.",
  "04 — Projects": "04 — Proyek",
  "Contact": "Kontak",
  "Let's build something": "Mari membangun sesuatu",
  "meaningful.": "yang bermakna.",
  "Have a project, opportunity, or idea in mind? I'm always open to a conversation.": "Punya proyek, peluang, atau ide? Saya selalu terbuka untuk berdiskusi.",
  "Email": "Email",
  "Send me an email": "Kirim email",
  "Connect professionally": "Terhubung secara profesional",
  "CONNECT": "TERHUBUNG",
  "Let's": "Mari",
  "connect.": "terhubung.",
  "Have an idea, opportunity, or simply want to talk about technology and data? My inbox is always open.": "Punya ide, peluang, atau sekadar ingin membahas teknologi dan data? Kotak masuk saya selalu terbuka.",
  "Best way to reach me": "Cara terbaik menghubungi saya",
  "Collaboration, opportunities, projects, or professional conversations.": "Kolaborasi, peluang, proyek, atau percakapan profesional.",
  "Send a message": "Kirim pesan",
  "Open to opportunities": "Terbuka untuk peluang",
  "Always interested in interesting ideas, collaborations, and technology.": "Selalu tertarik pada ide menarik, kolaborasi, dan teknologi.",
  "06 — Contact": "06 — Kontak",
  "Home": "Beranda",
  "Projects": "Proyek",
  "CV": "CV",
};

const originalText = new WeakMap<Text, string>();

function translatePage(language: Language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let textNode = walker.nextNode() as Text | null;

  while (textNode) {
    const parent = textNode.parentElement;
    if (!parent?.closest("script, style, [data-no-translate]")) {
      const original = originalText.get(textNode) ?? textNode.data;
      originalText.set(textNode, original);
      const leading = original.match(/^\s*/)?.[0] ?? "";
      const trailing = original.match(/\s*$/)?.[0] ?? "";
      const key = original.trim();
      const translated = language === "id" && indonesianText[key]
        ? `${leading}${indonesianText[key]}${trailing}`
        : original;
      if (textNode.data !== translated) textNode.data = translated;
    }
    textNode = walker.nextNode() as Text | null;
  }
}

function SunIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className="h-4 w-4"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>;
}

function MoonIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z" /></svg>;
}

export default function LanguageThemeControls() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedLanguage = window.localStorage.getItem("portfolio-language") as Language | null;
      const savedTheme = window.localStorage.getItem("portfolio-theme") as Theme | null;

      if (savedLanguage === "en" || savedLanguage === "id") setLanguage(savedLanguage);
      if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);
      setIsReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    document.documentElement.lang = language;
    translatePage(language);
    window.localStorage.setItem("portfolio-language", language);
    const observer = new MutationObserver(() => translatePage(language));
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });

    return () => observer.disconnect();
  }, [isReady, language]);

  useEffect(() => {
    if (!isReady) return;

    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [isReady, theme]);

  const nextLanguage = language === "en" ? "id" : "en";
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <div data-no-translate className="fixed right-4 top-4 z-[60] flex flex-col gap-2 sm:right-6 sm:top-6">
      <motion.button
        type="button"
        aria-label={`Switch language to ${nextLanguage.toUpperCase()}`}
        onClick={() => setLanguage(nextLanguage)}
        whileTap={{ scale: 0.9 }}
        className="group flex h-10 min-w-10 items-center justify-center rounded-xl border border-white/15 bg-[#111827]/90 px-2 text-[10px] font-bold tracking-[0.12em] text-white shadow-lg backdrop-blur-xl transition-colors hover:border-[#A78BFA] hover:text-[#DDD6FE] focus-visible:border-[#A78BFA]"
      >
        <span className="text-[#A78BFA]">{language.toUpperCase()}</span>
      </motion.button>

      <motion.button
        type="button"
        aria-label={`Switch to ${nextTheme} theme`}
        onClick={() => setTheme(nextTheme)}
        whileTap={{ scale: 0.9, rotate: theme === "dark" ? 18 : -18 }}
        className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-[#111827]/90 text-[#FCD34D] shadow-lg backdrop-blur-xl transition-colors hover:border-[#A78BFA] focus-visible:border-[#A78BFA]"
      >
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -35, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.22 }}
        >
          {theme === "dark" ? <MoonIcon /> : <SunIcon />}
        </motion.span>
      </motion.button>
    </div>
  );
}

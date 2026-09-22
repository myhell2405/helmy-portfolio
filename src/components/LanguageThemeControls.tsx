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
  "About Me": "Tentang Saya",
  "About": "Tentang",
  "Building with technology.": "Membangun dengan teknologi.",
  "Thinking with": "Berpikir dengan",
  "A personal space to understand who I am, what I build, and where I'm heading.": "Ruang personal untuk mengenal siapa saya, apa yang saya bangun, dan arah perjalanan saya.",
  "Beyond the code": "Di balik kode",
  "Creative process.": "Proses kreatif.",
  "I'm Helmy Akrim, an Information Systems graduate interested in building digital products and turning": "Saya Helmy Akrim, lulusan Sistem Informasi yang tertarik membangun produk digital dan mengubah",
  "insights.": "menjadi insight bermakna.",
  "My journey in technology started with curiosity about how software can solve real-world problems. Through academic projects and personal experiments, I've explored web development, information systems, databases, and data analytics.": "Perjalanan saya di bidang teknologi dimulai dari rasa ingin tahu tentang bagaimana perangkat lunak dapat menyelesaikan masalah nyata. Melalui proyek akademis dan eksperimen pribadi, saya mengeksplorasi pengembangan web, sistem informasi, basis data, dan analitik data.",
  "I enjoy working across different parts of a project — from understanding a problem and designing a solution to building the system and analyzing the data behind it.": "Saya menikmati bekerja di berbagai bagian proyek — dari memahami masalah dan merancang solusi hingga membangun sistem dan menganalisis data di baliknya.",
  "Currently, I'm focused on strengthening my skills in software development and data analytics while building projects that demonstrate how technology can create practical value.": "Saat ini, saya berfokus memperkuat kemampuan dalam pengembangan perangkat lunak dan analitik data sambil membangun proyek yang menunjukkan bagaimana teknologi dapat menciptakan nilai praktis.",
  "Focus": "Fokus",
  "Technology & Data": "Teknologi & Data",
  "Location": "Lokasi",
  "What I do": "Yang saya kerjakan",
  "Understanding systems, business processes, databases, and how technology can solve real-world problems.": "Memahami sistem, proses bisnis, basis data, dan bagaimana teknologi dapat menyelesaikan masalah nyata.",
  "Designing and developing modern web applications with attention to usability, structure, and maintainability.": "Merancang dan mengembangkan aplikasi web modern dengan perhatian pada kegunaan, struktur, dan kemudahan pemeliharaan.",
  "Exploring data to discover patterns, generate insights, and support better decisions.": "Mengeksplorasi data untuk menemukan pola, menghasilkan insight, dan mendukung keputusan yang lebih baik.",
  "Curious about problems.": "Penasaran pada masalah.",
  "Serious about building solutions.": "Serius dalam membangun solusi.",
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
  "Journey": "Perjalanan",
  "A timeline of": "Linimasa perjalanan",
  "learning & building.": "belajar & berkarya.",
  "Every project, challenge, and new skill becomes part of the journey.": "Setiap proyek, tantangan, dan keahlian baru menjadi bagian dari perjalanan.",
  "Building My Professional Path": "Membangun Jalur Profesional",
  "Graduating in Information Systems while strengthening my portfolio across web development, data analytics, and digital solutions.": "Menyelesaikan studi Sistem Informasi sambil memperkuat portofolio dalam pengembangan web, analitik data, dan solusi digital.",
  "Academic project": "Proyek akademis",
  "Designed and developed a web-based academic information system for SDN 01 Durian Gadang as an academic project.": "Merancang dan mengembangkan sistem informasi akademik berbasis web untuk SDN 01 Durian Gadang sebagai proyek akademis.",
  "Web Development & System Design": "Pengembangan Web & Desain Sistem",
  "Deepened my understanding of Laravel, PHP, MySQL, system analysis, database design, and modern web interfaces.": "Memperdalam pemahaman tentang Laravel, PHP, MySQL, analisis sistem, desain basis data, dan antarmuka web modern.",
  "Exploring Technology": "Menjelajahi Teknologi",
  "Started exploring software development and discovering how technology can be used to solve practical problems.": "Mulai mengeksplorasi pengembangan perangkat lunak dan menemukan cara teknologi dapat digunakan untuk menyelesaikan masalah praktis.",
  "Beginning": "Awal Perjalanan",
  "Career": "Karier",
  "Project": "Proyek",
  "Learning": "Pembelajaran",
  "Every step is part of a bigger journey.": "Setiap langkah adalah bagian dari perjalanan yang lebih besar.",
  "05 — Journey": "05 — Perjalanan",
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

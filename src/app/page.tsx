import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import LoadingScreen from "@/components/LoadingScreen";
import LanguageThemeControls from "@/components/LanguageThemeControls";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-[#F5F5F5]">
      <LoadingScreen />
      <LanguageThemeControls />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certificates />
      <Projects />
      <Journey />
      <Contact />
    </main>
  );
}

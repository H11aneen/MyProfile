import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Index() {
  const [language, setLanguage] = useState<"ar" | "en">("ar");

  return (
    <div className="min-h-screen text-foreground" style={{ background: 'linear-gradient(135deg, rgb(147, 51, 234) 0%, rgb(75, 30, 120) 30%, rgb(20, 20, 40) 70%, rgb(10, 10, 20) 100%)' }}>
      <Header language={language} onLanguageChange={setLanguage} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <SkillsSection language={language} />
      <ProjectsSection language={language} />
      <ContactSection language={language} />
    </div>
  );
}

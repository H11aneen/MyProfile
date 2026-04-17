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
    <div className="min-h-screen text-foreground bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <SkillsSection language={language} />
      <ProjectsSection language={language} />
      <ContactSection language={language} />
    </div>
  );
}

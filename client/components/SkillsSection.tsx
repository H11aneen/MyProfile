import { Code2, Palette, Zap } from "lucide-react";

interface SkillsSectionProps {
  language: "ar" | "en";
}

const translations = {
  ar: {
    skills: "مهاراتي",
  },
  en: {
    skills: "My Skills",
  },
};

const skillsData = [
  {
    icon: "React",
    label: "REACT",
    labelAr: "ريأكت",
  },
  {
    icon: "JavaScript",
    label: "JAVASCRIPT",
    labelAr: "جافاسكريبت",
  },
  {
    icon: "CSS",
    label: "CSS",
    labelAr: "سي إس إس",
  },
  {
    icon: "HTML",
    label: "HTML",
    labelAr: "إتش تي إم إل",
  },
  {
    icon: "Design",
    label: "UI/UX DESIGN",
    labelAr: "تصميم واجهات",
  },
  {
    icon: "Performance",
    label: "WEB PERFORMANCE",
    labelAr: "الأداء والتحسين",
  },
];

const SkillIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "React":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <circle cx="12" cy="11.245" r="1.785" fill="currentColor" />
          <path d="M7.502 20.118c5.718 3.806 13.502 3.756 19.185 0M4.108 16.79c3.329 2.786 8.694 4.428 12.395 4.428 3.701 0 9.066-1.642 12.396-4.428M2.461 12.221c1.334 2.877 5.411 5.931 9.499 6.954 4.088 1.023 9.155-.408 12.779-3.394M20.067 3.507c-5.192 3.24-12.817 1.231-18.345-1.231M3.628 2.503c2.645 3.535 6.388 5.223 10.677 5.223 4.29 0 8.032-1.688 10.677-5.223" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "JavaScript":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <rect width="24" height="24" fill="none" />
          <rect x="3" y="3" width="18" height="18" rx="1" fill="currentColor" />
          <text x="12" y="17" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">JS</text>
        </svg>
      );
    case "CSS":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M 5 3 L 4 19.5 L 12 21.5 L 20 19.5 L 21 3 Z M 7 5 L 17 5 L 16.5 11 L 12 12.5 L 7.5 11 L 7 5 Z M 8 13 L 12 14.5 L 16 13 L 16.5 8 L 7.5 8 L 8 13 Z" fill="currentColor" />
        </svg>
      );
    case "HTML":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M 5 3 L 4 19.5 L 12 21.5 L 20 19.5 L 21 3 Z M 7 5 L 17 5 L 16.5 11 L 12 12.5 L 7.5 11 L 7 5 Z M 8 13 L 12 14.5 L 16 13 L 16.5 8 L 7.5 8 L 8 13 Z" fill="currentColor" />
        </svg>
      );
    case "Design":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M 12 2 C 6.48 2 2 6.48 2 12 C 2 17.52 6.48 22 12 22 C 17.52 22 22 17.52 22 12 C 22 6.48 17.52 2 12 2 Z M 12 20 C 7.59 20 4 16.41 4 12 C 4 7.59 7.59 4 12 4 C 16.41 4 20 7.59 20 12 C 20 16.41 16.41 20 12 20 Z M 12.5 7 H 11.5 V 12.5 L 16.2 15.9 L 16.8 15.1 L 12.5 12.4 Z" fill="currentColor" />
        </svg>
      );
    case "Performance":
      return <Zap className="w-8 h-8" />;
    default:
      return <Code2 className="w-8 h-8" />;
  }
};

export default function SkillsSection({
  language,
}: SkillsSectionProps) {
  const t = translations[language];
  const isArabic = language === "ar";

  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-4 md:px-0 border-t border-border/20"
    >
      <div className="container mx-auto">
        <div className="mb-12">
          <p className="text-primary text-sm mb-2">
            {isArabic ? "خدماتي" : "My Services"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold section-title">
            {t.skills}
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-lg border border-border/20 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300 group"
            >
              <div className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                <SkillIcon type={skill.icon} />
              </div>
              <h3 className="text-sm font-semibold text-center text-foreground group-hover:text-primary transition-colors">
                {skill.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

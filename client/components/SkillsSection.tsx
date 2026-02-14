import { Code2, Palette, Zap } from "lucide-react";

interface SkillsSectionProps {
  language: "ar" | "en";
}

const translations = {
  ar: {
    skills: "المهارات التقنية",
  },
  en: {
    skills: "Technical Skills",
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
      // React logo
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
        </svg>
      );
    case "JavaScript":
      // JavaScript logo (yellow square with JS)
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <rect x="3" y="3" width="18" height="18" fill="currentColor" rx="2" />
          <path d="M9 14H11V10H9V14M13 14H15V10H13V14" fill="white" />
        </svg>
      );
    case "CSS":
      // CSS logo (shield shape)
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M 6 3 L 6 10 C 6 14 12 19 12 19 C 12 19 18 14 18 10 L 18 3 L 6 3 M 12 11 L 10 15 L 14 15 L 12 11" fill="currentColor" />
        </svg>
      );
    case "HTML":
      // HTML logo (angle brackets)
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M 6 3 L 6 21 L 18 21 L 18 3 L 6 3 M 8 5 L 16 5 L 16 8 L 8 8 L 8 5 M 8 10 L 16 10 L 16 13 L 8 13 L 8 10 M 8 15 L 16 15 L 16 18 L 8 18 L 8 15" fill="currentColor" />
        </svg>
      );
    case "Design":
      // Figma-like design tool icon
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <circle cx="9" cy="9" r="3" fill="currentColor" />
          <circle cx="15" cy="15" r="3" fill="currentColor" />
          <rect x="7" y="12" width="10" height="6" rx="2" fill="currentColor" opacity="0.7" />
          <circle cx="12" cy="12" r="1" fill="white" />
        </svg>
      );
    case "Performance":
      // Lightning bolt / Performance icon
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M 13 2 L 3 14 H 10 L 11 22 L 21 10 H 14 L 13 2" fill="currentColor" />
        </svg>
      );
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
            {isArabic ? "ما أتقنه" : "What I Master"}
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

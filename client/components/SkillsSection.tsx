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
    labelAr: "REACT",
  },
  {
    icon: "JavaScript",
    label: "JAVASCRIPT",
    labelAr: "JAVASCRIPT",
  },
  {
    icon: "CSS",
    label: "CSS",
    labelAr: "CSS",
  },
  {
    icon: "HTML",
    label: "HTML",
    labelAr: "HTML",
  },
  {
    icon: "Design",
    label: "USER DESIGN",
    labelAr: "(UX) تجربة المستخدم",
  },
  {
    icon: "Performance",
    label: "USER EXPERIENCE",
    labelAr: "تصميم واجهات المستخدم",
  },
];

const SkillIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "React":
      // React official logo - accurate electron orbits
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="6" ry="2" strokeWidth="1.2" />
          <ellipse cx="12" cy="12" rx="6" ry="2" strokeWidth="1.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="6" ry="2" strokeWidth="1.2" transform="rotate(120 12 12)" />
        </svg>
      );
    case "JavaScript":
      // JavaScript official yellow logo with proper styling
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E" />
          <text x="12" y="16" fontSize="8" fontWeight="bold" fill="#000" textAnchor="middle">JS</text>
        </svg>
      );
    case "CSS":
      // CSS official shield logo with accurate colors
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M 6 3 L 6.5 19 L 12 21 L 17.5 19 L 18 3 Z M 9 9 L 15 9 L 14.5 13 L 12 14 L 9.5 13 Z" fill="currentColor" />
        </svg>
      );
    case "HTML":
      // HTML official orange shield logo
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M 6 3 L 6.5 19 L 12 21 L 17.5 19 L 18 3 Z M 8 9 L 14 9 L 14 11 L 8 11 Z M 8 13 L 14 13 L 14 15 L 8 15 Z" fill="currentColor" />
        </svg>
      );
    case "Design":
      // Design - Professional magnifying glass/search icon
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="10" cy="10" r="7" />
          <path d="M 15 15 L 20 20" />
          <circle cx="10" cy="10" r="3.5" fill="none" strokeWidth="1.5" />
        </svg>
      );
    case "Performance":
      // Performance - Colorful grid/squares representing design
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          {/* Top left - Purple */}
          <rect x="3" y="3" width="8" height="8" fill="currentColor" rx="1" />
          {/* Top right - Blue */}
          <rect x="13" y="3" width="8" height="8" fill="currentColor" opacity="0.7" rx="1" />
          {/* Bottom left - Pink */}
          <rect x="3" y="13" width="8" height="8" fill="currentColor" opacity="0.5" rx="1" />
          {/* Bottom right - Yellow */}
          <rect x="13" y="13" width="8" height="8" fill="currentColor" opacity="0.4" rx="1" />
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
          <p className="text-primary text-sm mb-2">.</p>
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
                {isArabic ? skill.labelAr : skill.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

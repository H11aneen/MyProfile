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
      // React official logo - electron orbits
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <circle cx="12" cy="12" r="3" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="7" ry="2.5" />
          <ellipse cx="12" cy="12" rx="7" ry="2.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="7" ry="2.5" transform="rotate(120 12 12)" />
        </svg>
      );
    case "JavaScript":
      // JavaScript official logo - yellow square with JS
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E" />
          <path d="M7 8H9V14H7V8M15 8H17V14H15V8" fill="#000" />
        </svg>
      );
    case "CSS":
      // CSS official logo - shield
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M6 3L6.5 19.5L12 21L17.5 19.5L18 3H6Z" fill="currentColor" />
          <path d="M9 9H15L14.5 13H12L11.5 15H15V17H9L9.5 13H12L12.5 9Z" fill="rgba(0,0,0,0.3)" />
        </svg>
      );
    case "HTML":
      // HTML official logo - angle brackets
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M6 3L6.5 19.5L12 21L17.5 19.5L18 3H6Z" fill="currentColor" />
          <path d="M9 9H15V11H9ZM9 13H15V15H9Z" fill="rgba(0,0,0,0.3)" />
        </svg>
      );
    case "Design":
      // Design/UX icon - circle with grid
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <circle cx="12" cy="7" r="2.5" fill="currentColor" />
          <circle cx="18" cy="14" r="2.5" fill="currentColor" />
          <circle cx="6" cy="14" r="2.5" fill="currentColor" />
          <circle cx="12" cy="20" r="2.5" fill="currentColor" />
          <path d="M12 9.5V18.5" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M8 11L16 17" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M16 11L8 17" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      );
    case "Performance":
      // Performance/Speed icon - gauge or speedometer
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <circle cx="12" cy="14" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 14L15 10" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="14" r="1.5" fill="currentColor" />
          <path d="M7 14L10 12M17 14L14 12" stroke="currentColor" strokeWidth="1" />
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
                {isArabic ? skill.labelAr : skill.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

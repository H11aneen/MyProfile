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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="6.5" ry="2" strokeWidth="1.2" />
          <ellipse cx="12" cy="12" rx="6.5" ry="2" transform="rotate(60 12 12)" strokeWidth="1.2" />
          <ellipse cx="12" cy="12" rx="6.5" ry="2" transform="rotate(120 12 12)" strokeWidth="1.2" />
        </svg>
      );
    case "JavaScript":
      // JavaScript official logo - yellow square with JS
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E" strokeWidth="0" />
          <path d="M7 8H9V14H7V8M15 8H17V14H15V8" fill="#000000" strokeWidth="0" />
        </svg>
      );
    case "CSS":
      // CSS official logo - shield
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M 6 3 L 7 19 L 12 21 L 17 19 L 18 3 Z" fill="currentColor" />
          <path d="M 9 8 L 15 8 L 14.5 12 L 12 13 L 9.5 12 Z" fill="rgba(255,255,255,0.2)" />
        </svg>
      );
    case "HTML":
      // HTML official logo - angle brackets
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M 6 3 L 7 19 L 12 21 L 17 19 L 18 3 Z" fill="currentColor" />
          <path d="M 9 8 L 15 8 L 15 10 L 9 10 Z M 9 12 L 15 12 L 15 14 L 9 14 Z" fill="rgba(255,255,255,0.2)" />
        </svg>
      );
    case "Design":
      // Design/UX icon - pen and circle
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M 14 2 L 20 2 L 20 8 L 14 8 Z M 14 10 L 20 10 L 20 16 L 14 16 Z M 4 10 L 10 10 L 10 16 L 4 16 Z M 4 2 L 10 2 L 10 8 L 4 8 Z" fill="currentColor" opacity="0.6" />
          <circle cx="7" cy="6" r="1.5" fill="currentColor" />
          <circle cx="17" cy="6" r="1.5" fill="currentColor" />
          <circle cx="7" cy="13" r="1.5" fill="currentColor" />
          <circle cx="17" cy="13" r="1.5" fill="currentColor" />
        </svg>
      );
    case "Performance":
      // Performance/Speed icon - lightning bolt
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M 13 2 L 3 14 L 9 14 L 7 22 L 17 10 L 11 10 Z" fill="currentColor" />
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

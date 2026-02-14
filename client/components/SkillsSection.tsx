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
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <circle cx="12" cy="11.245" r="1.785" />
          <path d="M7.502 20.118c5.718 3.806 13.502 3.756 19.185 0M4.108 16.79c3.329 2.786 8.694 4.428 12.395 4.428 3.701 0 9.066-1.642 12.396-4.428M2.461 12.221c1.334 2.877 5.411 5.931 9.499 6.954 4.088 1.023 9.155-.408 12.779-3.394M20.067 3.507c-5.192 3.affordances.841-12.817 1.231-18.345-1.231M3.628 2.503c2.645 3.535 6.388 5.223 10.677 5.223 4.29 0 8.032-1.688 10.677-5.223" />
        </svg>
      );
    case "JavaScript":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M3 3h18v18H3V3m4.73 12.04c.5 1.39 1.62 2.58 3.53 2.58 1.54 0 2.5-.77 2.5-1.85 0-1.29-.77-1.74-2.19-2.49l-.6-.37c-2.17-1.47-3.62-3.31-3.62-7.19 0-3.57 2.71-6.28 6.95-6.28 3.01 0 5.17 1.05 6.73 3.8l-3.69 2.37c-.5-.96-1.65-1.68-3.04-1.68-1.55 0-2.54.78-2.54 1.92 0 1.34.81 1.89 2.13 2.54l.6.37c2.56 1.73 4.01 3.48 4.01 7.37 0 4.24-3.34 6.63-7.81 6.63-4.38 0-7.32-2.08-8.73-4.8l3.71-2.38z" />
        </svg>
      );
    case "CSS":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M5 3l-1 16.5h16l-1-16.5H5m2 2h10l-.5 6h-9L7 5m2 8h6l-.5 5h-5l-.5-5z" />
        </svg>
      );
    case "HTML":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M12 17.577L6.02 15.896l-.616-6.89h11.192l-.616 6.89L12 17.577M19.702 4H4.298L5.702 19.5 12 21.5l6.298-2 1.404-15.5z" />
        </svg>
      );
    case "Design":
      return <Palette className="w-8 h-8" />;
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
            {isArabic ? "تخصصاتي" : "My Expertise"}
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

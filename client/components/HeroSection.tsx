import { ArrowLeft } from "lucide-react";

interface HeroSectionProps {
  language: "ar" | "en";
}

const translations = {
  ar: {
    greeting: "",
    title: "حنين العتيبي",
    subtitle: "مصممة تجربة مستخدم و واجهات المستخدم ومطورة ويب",
    description:
      "أقوم بتصميم وتطوير تطبيقات ويب حديثة وجميلة تجمع بين الإبداع والتقنية",
    contactBtn: "تواصل معي",
    projectsBtn: "عرض المشاريع",
  },
  en: {
    greeting: "Welcome to My Portfolio",
    title: "Hanin AlOtaibi",
    subtitle: "UI/UX Designer & Modern Web Developer",
    description:
      "I design and develop beautiful, modern web applications that combine creativity with cutting-edge technology",
    contactBtn: "Get in Touch",
    projectsBtn: "View Projects",
  },
};

export default function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language];
  const isArabic = language === "ar";

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-0 pt-20 pb-20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          {/* Greeting */}
          {t.greeting && (
            <p className="text-primary text-sm mb-4 animate-fade-in">
              {t.greeting}
            </p>
          )}

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">{t.title}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary mb-6 font-medium">
            {t.subtitle}
          </p>

          {/* Description */}
          <p className="text-foreground/70 text-base md:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              {t.contactBtn}
              {isArabic ? (
                <span>←</span>
              ) : (
                <ArrowLeft className="w-4 h-4" />
              )}
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {t.projectsBtn}
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 flex justify-center">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-primary/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

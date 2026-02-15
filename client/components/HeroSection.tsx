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
            <p className="text-primary text-sm mb-4 animate-slide-down">
              {t.greeting}
            </p>
          )}

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            <span className="text-foreground">{t.title}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary mb-6 font-medium animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t.subtitle}
          </p>

          {/* Description */}
          <p className="text-foreground/70 text-base md:text-lg mb-8 leading-relaxed max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
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
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
            >
              {t.projectsBtn}
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 flex justify-center">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-primary/50 animate-float"
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

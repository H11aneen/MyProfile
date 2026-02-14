import { Code2 } from "lucide-react";

interface AboutSectionProps {
  language: "ar" | "en";
}

const translations = {
  ar: {
    about: "نبذة عني",
    title: "حنين العتيبي",
    subtitle: "متخصصة في تصميم واجهات المستخدم وتطوير الويب",
    description1:
      "أنا حنين العتيبي، متخصصة في تصميم واجهات المستخدم وتطوير تطبيقات الويب الحديثة",
    description2:
      "أجمع بين المهارات التقنية والفنية لصياغة تجارب رقمية حديثة وجميلة على المستخدم",
  },
  en: {
    about: "About Me",
    title: "Hanin AlOtaibi",
    subtitle: "UI/UX Designer & Web Developer",
    description1:
      "I am Hanin AlOtaibi, a passionate UI/UX designer and web developer specializing in creating modern and user-friendly digital experiences.",
    description2:
      "I combine technical skills with creative design to craft beautiful and functional digital solutions that users love.",
  },
};

export default function AboutSection({ language }: AboutSectionProps) {
  const t = translations[language];
  const isArabic = language === "ar";

  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 md:px-0 border-t border-border/20"
    >
      <div className="container mx-auto">
        <div className="mb-12">
          <p className="text-primary text-sm mb-2">
            {isArabic ? "معلومات شخصية" : "Personal Info"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold section-title">
            {t.about}
          </h2>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Icon Card */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative w-64 h-64 rounded-lg border-2 border-primary/30 card-gradient overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
              <Code2 className="w-32 h-32 text-primary/30 relative z-10" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {t.title}
            </h3>
            <p className="text-primary text-sm mb-6">{t.subtitle}</p>

            <p className="text-foreground/80 mb-4 leading-relaxed">
              {t.description1}
            </p>
            <p className="text-foreground/70 leading-relaxed">
              {t.description2}
            </p>

            {/* Experience Counter */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-border/20">
              <div>
                <p className="text-2xl font-bold text-primary">5+</p>
                <p className="text-foreground/70 text-sm">
                  {isArabic ? "سنوات الخبرة" : "Years of Experience"}
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">30+</p>
                <p className="text-foreground/70 text-sm">
                  {isArabic ? "المشاريع المنجزة" : "Completed Projects"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

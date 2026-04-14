import { ArrowUpRight } from "lucide-react";

interface ProjectsSectionProps {
  language: "ar" | "en";
}

const translations = {
  ar: {
    projects: "المشاريع المميزة",
    viewMore: "عرض المشروع",
    browseMore: "تصفح المزيد",
  },
  en: {
    projects: "Featured Projects",
    viewMore: "View Project",
    browseMore: "Browse More",
  },
};

const projectsData = [
  {
    id: 1,
    titleAr: "تطبيق تجول",
    titleEn: "Tajawal App",
    descriptionAr: "عملت كجزء من فريق التصميم على تطوير تجربة المستخدم لتطبيق \"تجوّل\"، حيث ساهمت في إعداد تدفقات المستخدم (User Flows)، بناء هيكل المعلومات (Sitemap)، وتصميم واجهات تفاعلية تركز على الوضوح وسهولة الاستخدام",
    descriptionEn: "I worked as part of the design team to develop the user experience for the Tajawal app, contributing to user flows, information architecture, and interactive interface design focused on clarity and ease of use.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1f80866bc3374093b088755fa02d2102%2F65adb2b5336048498fd64b7992ae0525",
    link: "https://www.behance.net/gallery/209099467/Case-study-tajawwal",
    tags: ["UI Design", "UX Research", "Mobile Design"],
  },
  {
    id: 2,
    titleAr: "امتثال - نظام رقابة ذكي للامتثال الصحي",
    titleEn: "Compliance - Smart Health Compliance Monitoring",
    descriptionAr: "نظام رقابة ذكي متقدم للامتثال الصحي مع واجهات مستخدم تفاعلية",
    descriptionEn: "Advanced smart monitoring system for health compliance with interactive user interfaces",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1f80866bc3374093b088755fa02d2102%2F46ebd5a910794e48bde4e6e29c9ed22e",
    link: "https://www.behance.net/gallery/243241261/_",
    tags: ["Health Tech", "UI Design", "Monitoring System"],
  },
  {
    id: 3,
    titleAr: "تصميم واجهات لتطبيق ورد",
    titleEn: "WordPress App Interface Design",
    descriptionAr: "تطوير منصة عقارية مع واجهات متقدمة وتجربة مستخدم سلسة",
    descriptionEn: "Development of real estate platform with advanced interfaces",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1f80866bc3374093b088755fa02d2102%2Fc560181a7bcb490f90ebc9e01ab3eb59",
    link: "https://www.behance.net/gallery/210637705/UIH",
    tags: ["Web Design", "UI/UX", "Real Estate"],
  },
  {
    id: 4,
    titleAr: "تطبيق Studip - للدراسة الجماعبة",
    titleEn: "Studip - Collaborative Learning App",
    descriptionAr: "تطبيق مبتكر للطلاب يتيح الدراسة الجماعية مع الأصدقاء ويحتوي على ألعاب لزيادة التركيز. قمت بالعمل على المشروع من مرحلة تجربة المستخدم (UX) وصولاً إلى واجهة المستخدم (UI).",
    descriptionEn: "An innovative app for students enabling group study with friends and featuring focus-enhancing games. I worked on the project from UX through UI design.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1f80866bc3374093b088755fa02d2102%2Feebe741fe1754e7c8f003d9355d50104",
    link: "https://www.behance.net/gallery/231009663/Studip-App",
    tags: ["Education", "Mobile App", "UI Design"],
  },
  {
    id: 5,
    titleAr: "تطبيق سُكنى",
    titleEn: "Sukna App",
    descriptionAr: "تطبيق سكنى هو منصة رقمية تهدف إلى تسهيل تجربة البحث عن السكن المناسب بطريقة ذكية وسريعة، حيث يتيح للمستخدمين استعراض الشقق والغرف المتاحة للإيجار مع تفاصيل واضحة مثل الموقع، السعر، الخدمات المتوفرة، والصور.",
    descriptionEn: "Sukna is a digital platform designed to simplify the housing search experience in a smart and fast way, allowing users to browse available apartments and rooms for rent with clear details such as location, price, available services, and images.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1f80866bc3374093b088755fa02d2102%2Ffb8ac6b9b40b4aeaa9e8e8c8d8c8b8a8",
    link: "https://www.behance.net/gallery/246349901/Sukna-UXUUI-Case-study",
    tags: ["Housing Platform", "UI/UX Design", "Real Estate"],
  },
];

export default function ProjectsSection({
  language,
}: ProjectsSectionProps) {
  const t = translations[language];
  const isArabic = language === "ar";

  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-4 md:px-0 border-t border-border/20"
    >
      <div className="container mx-auto">
        <div className="mb-12">
          <p className="text-primary text-sm mb-2">
            {isArabic ? "آخر الأعمال" : "Latest Works"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold section-title">
            {t.projects}
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {projectsData.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video mb-4 bg-card border border-border/20 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <img
                  src={project.image}
                  alt={isArabic ? project.titleAr : project.titleEn}
                  className="mx-auto group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 300'%3E%3Crect fill='%23374151' width='500' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='%239ca3af' text-anchor='middle' dy='.3em'%3EProject Image%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 mx-auto" style={{ top: '2px' }}>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                    {t.viewMore}
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div style={{ marginTop: '-2px' }}>
                <h3 className={`text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors text-foreground ${isArabic ? 'text-right' : 'text-left'}`}>
                  {isArabic ? project.titleAr : project.titleEn}
                </h3>
                <p className={`text-foreground/70 text-sm mb-3 ${isArabic ? 'text-right' : 'text-left'}`}>
                  {isArabic ? project.descriptionAr : project.descriptionEn}
                </p>
                <div className={`flex flex-wrap gap-2 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary text-foreground/80 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Browse More Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://www.behance.net/dad86a3a"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-md font-medium flex items-center gap-2 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 animate-slide-up"
            style={{ animationDelay: '0.5s' }}
          >
            {t.browseMore}
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

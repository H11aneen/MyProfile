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
    titleAr: "دراسة حالة تطبيق تجوال المستخدم",
    titleEn: "Case Study - Tajawal App",
    descriptionAr: "تصميم واجهات تطبيق تجوال وتحسين تجربة المستخدم",
    descriptionEn: "Design and user experience improvement for Tajawal travel app",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    link: "https://www.behance.net/gallery/209099467/Case-study-tajawwal",
    tags: ["UI Design", "UX Research", "Mobile Design"],
  },
  {
    id: 2,
    titleAr: "نظام تصميم شامل",
    titleEn: "Design System",
    descriptionAr: "بناء نظام تصميم متكامل للمشاريع الكبرى",
    descriptionEn: "Building a comprehensive design system for large-scale projects",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    link: "https://www.behance.net/gallery/243241261/_",
    tags: ["Design System", "UI Kit", "Components"],
  },
  {
    id: 3,
    titleAr: "منصة عقارية تفاعلية",
    titleEn: "Real Estate Platform",
    descriptionAr: "تطوير منصة عقارية مع واجهات متقدمة وتجربة مستخدم سلسة",
    descriptionEn: "Development of real estate platform with advanced interfaces",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    link: "https://www.behance.net/gallery/210637705/UIH",
    tags: ["Web Design", "UI/UX", "Real Estate"],
  },
  {
    id: 4,
    titleAr: "تطبيق تعليمي مبتكر",
    titleEn: "Studip Educational App",
    descriptionAr: "تصميم تطبيق تعليمي مع واجهات حديثة وتفاعلية",
    descriptionEn: "Design of innovative educational app with interactive interfaces",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    link: "https://www.behance.net/gallery/231009663/Studip-App",
    tags: ["Education", "Mobile App", "UI Design"],
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
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-video mb-4 bg-card border border-border/20 hover:border-primary/30 transition-all duration-300">
                <img
                  src={project.image}
                  alt={isArabic ? project.titleAr : project.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 300'%3E%3Crect fill='%23374151' width='500' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='%239ca3af' text-anchor='middle' dy='.3em'%3EProject Image%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                    {t.viewMore}
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {isArabic ? project.titleAr : project.titleEn}
                </h3>
                <p className="text-foreground/70 text-sm mb-3">
                  {isArabic ? project.descriptionAr : project.descriptionEn}
                </p>
                <div className="flex flex-wrap gap-2">
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
            href="https://www.behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-md font-medium flex items-center gap-2"
          >
            {t.browseMore}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

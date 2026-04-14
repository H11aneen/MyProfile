import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface HeaderProps {
  language: "ar" | "en";
  onLanguageChange: (lang: "ar" | "en") => void;
}

const translations = {
  ar: {
    about: "نبذة عني",
    projects: "المشاريع",
    skills: "المهارات",
    contact: "تواصل معي",
    english: "English",
    arabic: "العربية",
  },
  en: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    english: "English",
    arabic: "العربية",
  },
};

export default function Header({
  language,
  onLanguageChange,
}: HeaderProps) {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const t = translations[language];

  const handleLanguageSelect = (lang: "ar" | "en") => {
    onLanguageChange(lang);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/20 bg-background/80 backdrop-blur-sm animate-slide-down">
      <div className="w-full px-4 md:px-6">
        <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wider order-3 md:order-1 hover:text-primary transition-colors duration-300 flex" style={{ color: 'rgb(0, 0, 0)' }}>
            <span className="text-primary" style={{ color: 'rgb(245, 199, 44)', borderColor: 'rgba(255, 255, 255, 1)', borderWidth: '1px' }}>.HANIN</span>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8 order-2">
            <a
              href="#about"
              className="text-sm text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              {t.about}
            </a>
            <a
              href="#projects"
              className="text-sm text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              {t.projects}
            </a>
            <a
              href="#skills"
              className="text-sm text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              {t.skills}
            </a>
            <a
              href="#contact"
              className="text-sm text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              {t.contact}
            </a>
          </nav>

          {/* Language Selector */}
          <div className="relative order-2 md:order-3">
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="flex items-center gap-2 px-3 py-2 border border-border/30 rounded-md hover:bg-secondary/50 transition-colors text-sm whitespace-nowrap"
            >
              {language === "en" ? t.english : t.arabic}
              <ChevronDown className="w-4 h-4" />
            </button>

            {isLanguageMenuOpen && (
              <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-md shadow-lg min-w-[120px] py-1 z-10">
                <button
                  onClick={() => handleLanguageSelect("en")}
                  className={`w-full text-right px-4 py-2 text-sm ${
                    language === "en"
                      ? "bg-primary/20 text-primary"
                      : "text-foreground/80 hover:bg-secondary/50"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageSelect("ar")}
                  className={`w-full text-right px-4 py-2 text-sm ${
                    language === "ar"
                      ? "bg-primary/20 text-primary"
                      : "text-foreground/80 hover:bg-secondary/50"
                  }`}
                >
                  العربية
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

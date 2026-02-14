import { Mail, Linkedin } from "lucide-react";

interface ContactSectionProps {
  language: "ar" | "en";
}

const translations = {
  ar: {
    contact: "معلومات الاتصال",
    contactDesc:
      "لا تتردد في التواصل معي بخصوص المشاريع الجديدة أو الاستفسارات عن خبرتي وخدماتي",
    email: "البريد الإلكتروني",
    emailAddress: "h1taneen@gmail.com",
    linkedin: "لينكد إن",
    linkedinHandle: "حنين العتيبي",
    copyright: "© 2026 حنين العتيبي، جميع الحقوق محفوظة",
  },
  en: {
    contact: "Contact Information",
    contactDesc:
      "Feel free to reach out to me for new projects or inquiries about my experience and services",
    email: "Email",
    emailAddress: "h1taneen@gmail.com",
    linkedin: "LinkedIn",
    linkedinHandle: "Hanin AlOtaibi",
    copyright: "© 2026 Hanin AlOtaibi, All rights reserved.",
  },
};

export default function ContactSection({ language }: ContactSectionProps) {
  const t = translations[language];

  return (
    <section
      id="contact"
      className="py-20 md:py-32 px-4 md:px-0 border-t border-border/20"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <p className="text-primary text-sm mb-2">{language === "ar" ? "تواصل معي" : "Get in Touch"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 section-title">
            {t.contact}
          </h2>
          <p className="text-foreground/70 max-w-2xl text-sm md:text-base">
            {t.contactDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-12">
          {/* Email */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-foreground/70 text-sm">{t.email}</span>
            </div>
            <a
              href="mailto:h1taneen@gmail.com"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t.emailAddress}
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center md:items-start text-center md:text-right">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Linkedin className="w-5 h-5 text-primary" />
              <span className="text-foreground/70 text-sm">{t.linkedin}</span>
            </div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t.linkedinHandle}
            </a>
          </div>
        </div>

        {/* Social Icons Footer */}
        <div className="flex items-center justify-center gap-6 mt-12 pt-8 border-t border-border/20">
          <a
            href="mailto:h1taneen@gmail.com"
            className="p-2 hover:bg-secondary/50 rounded-md transition-colors"
          >
            <Mail className="w-5 h-5 text-foreground/60 hover:text-primary" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-secondary/50 rounded-md transition-colors"
          >
            <Linkedin className="w-5 h-5 text-foreground/60 hover:text-primary" />
          </a>
          <div className="flex-1"></div>
          <p className="text-foreground/50 text-xs">{t.copyright}</p>
        </div>
      </div>
    </section>
  );
}

import { Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  language: "ar" | "en";
}

const translations = {
  ar: {
    about: "عن DriveEase",
    aboutDesc:
      "نحن نوفر خدمات كراء السيارات الموثوقة والمرخصة برسميًا مع أفضل الأسعار.",
    services: "الخدمات",
    quick: "روابط سريعة",
    contact: "التواصل معنا",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    address: "العنوان",
    rights: "جميع الحقوق محفوظة",
  },
  en: {
    about: "About DriveEase",
    aboutDesc:
      "We provide reliable and officially licensed car rental services with the best prices.",
    services: "Services",
    quick: "Quick Links",
    contact: "Contact Us",
    phone: "Phone",
    email: "Email",
    address: "Address",
    rights: "All rights reserved",
  },
};

export function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-foreground mb-4">{t.about}</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              {t.aboutDesc}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-4">{t.services}</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  كراء قصير المدى
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  كراء طويل المدى
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  سيارات فاخرة
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">{t.quick}</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  الشروط والأحكام
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">{t.contact}</h3>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+966 50 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@driveease.com</span>
              </li>
              <li className="flex items-center gap-2 gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>الرياض، السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-foreground/50">
          <p>© 2025 DriveEase. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
}

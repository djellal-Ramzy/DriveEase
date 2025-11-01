"use client";

import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  language: "ar" | "en";
  setLanguage: (lang: "ar" | "en") => void;
}

const translations = {
  ar: {
    brand: "DriveEase",
    home: "الرئيسية",
    cars: "السيارات",
    pricing: "الأسعار",
    contact: "التواصل",
    about: "عن الشركة",
    booking: "احجز الآن",
  },
  en: {
    brand: "DriveEase",
    home: "Home",
    cars: "Cars",
    pricing: "Pricing",
    contact: "Contact",
    about: "About",
    booking: "Book Now",
  },
};

export function Header({ language, setLanguage }: HeaderProps) {
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">
            D
          </div>
          <span className="font-bold text-xl text-foreground">{t.brand}</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            {t.home}
          </Link>
          <Link
            href="/fleet"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            {t.cars}
          </Link>
          <Link
            href="/pricing"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            {t.pricing}
          </Link>
          <Link
            href="/about"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            {t.about}
          </Link>
          <Link
            href="/contact"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            {t.contact}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
            className="flex items-center gap-2"
          >
            <Globe className="w-4 h-4" />
            <span>{language === "ar" ? "EN" : "AR"}</span>
          </Button>
          <Link href="/booking">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {t.booking}
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

import { Button } from "@/components/ui/button";

interface HeroProps {
  language: "ar" | "en";
}

const translations = {
  ar: {
    headline: "استمتع برحلتك معنا",
    subheadline:
      "احصل على أفضل تجربة كراء سيارات مع أسعار منافسة وخدمة عملاء ممتازة",
    cta: "ابدأ الحجز الآن",
    secondary: "استكشف الأسطول",
  },
  en: {
    headline: "Enjoy Your Journey With Us",
    subheadline:
      "Get the best car rental experience with competitive prices and excellent customer service",
    cta: "Start Booking Now",
    secondary: "Explore Fleet",
  },
};

export function Hero({ language }: HeroProps) {
  const t = translations[language];

  return (
    <section className="relative overflow-hidden pt-20 pb-40">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t.headline}
          </h1>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            {t.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {t.cta}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/5 bg-transparent"
            >
              {t.secondary}
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 400 400"
        >
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="200"
            cy="200"
            r="100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}

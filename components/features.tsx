import { Card } from "@/components/ui/card";
import { Zap, Shield, Clock, Headphones } from "lucide-react";

interface FeaturesProps {
  language: "ar" | "en";
}

const translations = {
  ar: {
    featuresTitle: "لماذا تختار DriveEase؟",
    feature1Title: "أسعار منافسة",
    feature1Desc: "احصل على أفضل الأسعار في السوق مع خيارات دفع مرنة",
    feature2Title: "حجز آمن",
    feature2Desc: "حجزك محمي 100% مع تأمين شامل وضمانات قانونية",
    feature3Title: "الحجز الفوري",
    feature3Desc: "احجز سيارتك في ثوانٍ معدودة من خلال تطبيقنا",
    feature4Title: "دعم 24/7",
    feature4Desc: "فريق الدعم الخاص بنا متاح دائماً لمساعدتك",
  },
  en: {
    featuresTitle: "Why Choose DriveEase?",
    feature1Title: "Competitive Prices",
    feature1Desc:
      "Get the best rates on the market with flexible payment options",
    feature2Title: "Secure Booking",
    feature2Desc: "Your booking is 100% protected with full insurance coverage",
    feature3Title: "Instant Booking",
    feature3Desc: "Book your car in seconds through our easy-to-use platform",
    feature4Title: "24/7 Support",
    feature4Desc: "Our support team is always ready to assist you",
  },
};

const features = [
  { icon: Zap, key: "feature1" },
  { icon: Shield, key: "feature2" },
  { icon: Clock, key: "feature3" },
  { icon: Headphones, key: "feature4" },
];

export function Features({ language }: FeaturesProps) {
  const t = translations[language];

  return (
    <section className="container py-20 border-y border-border">
      <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
        {t.featuresTitle}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          const titleKey = `${feature.key}Title` as keyof typeof t;
          const descKey = `${feature.key}Desc` as keyof typeof t;

          return (
            <Card
              key={feature.key}
              className="p-6 bg-card/50 hover:bg-card transition-colors border-border"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t[titleKey]}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {t[descKey]}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

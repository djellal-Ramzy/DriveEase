"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const translations = {
  ar: {
    title: "أسعارنا",
    description: "خطط مرنة تناسب جميع الميزانيات",
    daily: "يومي",
    weekly: "أسبوعي",
    monthly: "شهري",
    economy: "اقتصادية",
    economyDesc: "مثالي للرحلات القصيرة",
    comfort: "مريحة",
    comfortDesc: "مناسبة للرحلات العائلية",
    luxury: "فاخرة",
    luxuryDesc: "تجربة فاخرة بدون تنازل",
    perDay: "في اليوم",
    includes: "يتضمن",
    unlimitedMileage: "مسافة غير محدودة",
    insuranceCoverage: "تغطية التأمين الكاملة",
    support24h: "دعم 24 ساعة",
    freeWifi: "واي فاي مجاني",
    valet: "خدمة الكونسيرج",
    bookNow: "احجز الآن",
    popular: "الأشهر",
    features: [
      "سيارة مضمونة",
      "بدون رسوم خفية",
      "إلغاء مجاني",
      "بطاقة وقود مجانية",
      "تسليم مجاني",
    ],
  },
  en: {
    title: "Our Pricing",
    description: "Flexible plans for every budget",
    daily: "Daily",
    weekly: "Weekly",
    monthly: "Monthly",
    economy: "Economy",
    economyDesc: "Perfect for short trips",
    comfort: "Comfort",
    comfortDesc: "Ideal for family trips",
    luxury: "Luxury",
    luxuryDesc: "Premium experience without compromise",
    perDay: "per Day",
    includes: "Includes",
    unlimitedMileage: "Unlimited Mileage",
    insuranceCoverage: "Full Insurance Coverage",
    support24h: "24-Hour Support",
    freeWifi: "Free Wi-Fi",
    valet: "Concierge Service",
    bookNow: "Book Now",
    popular: "Most Popular",
    features: [
      "Guaranteed car",
      "No hidden fees",
      "Free cancellation",
      "Free fuel card",
      "Free delivery",
    ],
  },
};

interface Plan {
  name: string;
  description: string;
  price: number;
  period: string;
  highlight: boolean;
  features: string[];
  color: string;
}

export default function PricingPage() {
  const [language, setLanguage] = useState<"ar" | "en">("ar");
  const [activeTab, setActiveTab] = useState("daily");
  const t = translations[language];

  const plans: Plan[] = [
    {
      name: t.economy,
      description: t.economyDesc,
      price: 150,
      period: t.perDay,
      highlight: false,
      features: t.features,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: t.comfort,
      description: t.comfortDesc,
      price: 220,
      period: t.perDay,
      highlight: true,
      features: t.features,
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: t.luxury,
      description: t.luxuryDesc,
      price: 400,
      period: t.perDay,
      highlight: false,
      features: t.features,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const discounts = {
    weekly: { label: t.weekly, discount: 0.1 },
    monthly: { label: t.monthly, discount: 0.2 },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage} />

      <main className="container py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">{t.title}</h1>
          <p className="text-foreground/60 text-lg">{t.description}</p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <Button
            variant={activeTab === "daily" ? "default" : "outline"}
            onClick={() => setActiveTab("daily")}
            className={activeTab === "daily" ? "bg-primary" : ""}
          >
            {t.daily}
          </Button>
          <Button
            variant={activeTab === "weekly" ? "default" : "outline"}
            onClick={() => setActiveTab("weekly")}
            className={activeTab === "weekly" ? "bg-primary" : ""}
          >
            {t.weekly} (-10%)
          </Button>
          <Button
            variant={activeTab === "monthly" ? "default" : "outline"}
            onClick={() => setActiveTab("monthly")}
            className={activeTab === "monthly" ? "bg-primary" : ""}
          >
            {t.monthly} (-20%)
          </Button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, idx) => {
            const discountRate =
              activeTab !== "daily"
                ? discounts[activeTab as keyof typeof discounts].discount
                : 0;
            const discountedPrice = Math.round(plan.price * (1 - discountRate));

            return (
              <Card
                key={idx}
                className={`relative overflow-hidden transition-all duration-300 ${
                  plan.highlight
                    ? "border-2 border-primary shadow-xl scale-105"
                    : "border border-border"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    {t.popular}
                  </div>
                )}

                <div className={`h-2 bg-gradient-to-r ${plan.color}`} />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">
                      ${discountedPrice}
                    </span>
                    <span className="text-foreground/60 ml-2">
                      {plan.period}
                    </span>
                    {discountRate > 0 && (
                      <div className="text-sm text-primary mt-2">
                        Savings: ${Math.round(plan.price * discountRate)}
                      </div>
                    )}
                  </div>

                  <Button
                    className={`w-full mb-8 ${
                      plan.highlight
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-secondary"
                    }`}
                  >
                    {t.bookNow}
                  </Button>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">
                      {t.includes}
                    </h4>
                    {plan.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            نحن نقدم أفضل الأسعار
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            جميع أسعارنا تشمل التأمين الكامل والدعم 24/7 والصيانة المجانية. بدون
            رسوم خفية أو مفاجآت.
          </p>
        </Card>
      </main>

      <Footer language={language} />
    </div>
  );
}

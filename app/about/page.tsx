"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

const translations = {
  ar: {
    title: "عن DriveEase",
    subtitle: "رحلتنا نحو خدمة الإيجار الأفضل",
    description:
      "تأسست DriveEase في عام 2015 برؤية واضحة: توفير خدمة إيجار سيارات موثوقة وميسورة للجميع. على مدى أكثر من عقد من الزمان، نمونا من شركة صغيرة إلى واحدة من أكبر شركات الإيجار في المنطقة.",
    mission: "مهمتنا",
    missionText:
      "توفير تجربة إيجار سيارات بدون متاعب مع أفضل الأسعار وخدمة العملاء الاستثنائية.",
    vision: "رؤيتنا",
    visionText:
      "أن نكون الخيار الأول للعملاء الذين يبحثون عن سيارات موثوقة وبأسعار معقولة.",
    values: "قيمنا",
    reliability: "الموثوقية",
    reliabilityDesc: "نضمن أن كل سيارة بحالة مثالية",
    affordability: "الأسعار المعقولة",
    affordabilityDesc: "أفضل الأسعار في السوق",
    service: "خدمة متميزة",
    serviceDesc: "فريق متدرب وملتزم بالخدمة",
    stats: "إحصائياتنا",
    customers: "العملاء السعداء",
    vehicles: "السيارات",
    locations: "فروع الخدمة",
    years: "سنوات الخبرة",
    team: "فريقنا",
    teamDesc: "نحن فريق من المهنيين الملتزمين بتقديم أفضل خدمة",
  },
  en: {
    title: "About DriveEase",
    subtitle: "Our journey towards the best rental service",
    description:
      "DriveEase was founded in 2015 with a clear vision: to provide a reliable and affordable car rental service for everyone. Over more than a decade, we have grown from a small company to one of the largest rental companies in the region.",
    mission: "Our Mission",
    missionText:
      "To provide a hassle-free car rental experience with the best prices and exceptional customer service.",
    vision: "Our Vision",
    visionText:
      "To be the first choice for customers looking for reliable and affordable vehicles.",
    values: "Our Values",
    reliability: "Reliability",
    reliabilityDesc: "We ensure every car is in perfect condition",
    affordability: "Affordability",
    affordabilityDesc: "Best prices in the market",
    service: "Exceptional Service",
    serviceDesc: "A trained team committed to service",
    stats: "Our Statistics",
    customers: "Happy Customers",
    vehicles: "Vehicles",
    locations: "Service Centers",
    years: "Years of Experience",
    team: "Our Team",
    teamDesc:
      "We are a team of professionals committed to providing the best service",
  },
};

export default function AboutPage() {
  const [language, setLanguage] = useState<"ar" | "en">("ar");
  const t = translations[language];

  const stats = [
    { label: t.customers, value: "50K+", icon: Users },
    { label: t.vehicles, value: "2K+", icon: TrendingUp },
    { label: t.locations, value: "25+", icon: Globe },
    { label: t.years, value: "10+", icon: Award },
  ];

  const values = [
    {
      icon: Award,
      title: t.reliability,
      description: t.reliabilityDesc,
      color: "from-primary to-orange-500",
    },
    {
      icon: TrendingUp,
      title: t.affordability,
      description: t.affordabilityDesc,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: t.service,
      description: t.serviceDesc,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage} />

      <main className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-foreground/60 mb-8">{t.subtitle}</p>
          <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t.mission}
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              {t.missionText}
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t.vision}
            </h2>
            <p className="text-foreground/70 leading-relaxed">{t.visionText}</p>
          </Card>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} className="p-6 text-center">
                <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <p className="text-foreground/60">{stat.label}</p>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t.values}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card
                  key={idx}
                  className="p-8 hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <Card className="p-12 bg-gradient-to-r from-primary/10 to-accent/10 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t.team}</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">{t.teamDesc}</p>
        </Card>
      </main>

      <Footer language={language} />
    </div>
  );
}

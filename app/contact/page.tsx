"use client";

import type React from "react";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const translations = {
  ar: {
    title: "تواصل معنا",
    description: "نحن هنا لمساعدتك. تواصل معنا بأي استفسارات",
    name: "الاسم",
    email: "البريد الإلكتروني",
    subject: "الموضوع",
    message: "الرسالة",
    send: "أرسل الرسالة",
    phone: "الهاتف",
    address: "العنوان",
    hours: "ساعات العمل",
    contactInfo: "معلومات التواصل",
    formInfo: "نموذج التواصل",
    weekday: "من الأحد إلى الخميس: 9 صباحاً - 6 مساءً",
    weekend: "الجمعة والسبت: 10 صباحاً - 4 مساءً",
    supportCenter: "مركز الدعم الرئيسي",
    address1: "شارع الملك عبدالعزيز، الرياض",
    phone1: "+966 50 123 4567",
    email1: "support@driveease.sa",
    branch2: "فرع جدة",
    address2: "شارع الجلاء، جدة",
    phone2: "+966 50 234 5678",
    branch3: "فرع الدمام",
    address3: "شارع الخليج، الدمام",
    phone3: "+966 50 345 6789",
  },
  en: {
    title: "Contact Us",
    description: "We are here to help. Reach out with any questions",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send Message",
    phone: "Phone",
    address: "Address",
    hours: "Business Hours",
    contactInfo: "Contact Information",
    formInfo: "Contact Form",
    weekday: "Sunday - Thursday: 9 AM - 6 PM",
    weekend: "Friday & Saturday: 10 AM - 4 PM",
    supportCenter: "Main Support Center",
    address1: "King Abdul Aziz Street, Riyadh",
    phone1: "+966 50 123 4567",
    email1: "support@driveease.com",
    branch2: "Jeddah Branch",
    address2: "Al-Jalaa Street, Jeddah",
    phone2: "+966 50 234 5678",
    branch3: "Dammam Branch",
    address3: "Gulf Street, Dammam",
    phone3: "+966 50 345 6789",
  },
};

export default function ContactPage() {
  const [language, setLanguage] = useState<"ar" | "en">("ar");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const t = translations[language];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[v0] Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const branches = [
    {
      title: t.supportCenter,
      address: t.address1,
      phone: t.phone1,
      email: t.email1,
    },
    {
      title: t.branch2,
      address: t.address2,
      phone: t.phone2,
      email: t.email1,
    },
    {
      title: t.branch3,
      address: t.address3,
      phone: t.phone3,
      email: t.email1,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage} />

      <main className="container py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">{t.title}</h1>
          <p className="text-foreground/60 text-lg">{t.description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {t.formInfo}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.name}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.email}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={t.subject}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.message}
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {t.send}
                </Button>
              </form>
            </Card>
          </div>

          {/* Sidebar Contact Info */}
          <div className="space-y-6">
            {/* Business Hours */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">{t.hours}</h3>
              </div>
              <div className="space-y-2 text-foreground/70 text-sm">
                <p>{t.weekday}</p>
                <p>{t.weekend}</p>
              </div>
            </Card>

            {/* Quick Contact */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">
                {t.contactInfo}
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+966501234567"
                  className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>{t.phone1}</span>
                </a>
                <a
                  href="mailto:support@driveease.sa"
                  className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="break-all">{t.email1}</span>
                </a>
              </div>
            </Card>
          </div>
        </div>

        {/* Branches */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            الفروع
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {branches.map((branch, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {branch.title}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground/70">{branch.address}</p>
                  </div>
                  <a
                    href={`tel:${branch.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span>{branch.phone}</span>
                  </a>
                  <a
                    href={`mailto:${branch.email}`}
                    className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span>{branch.email}</span>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}

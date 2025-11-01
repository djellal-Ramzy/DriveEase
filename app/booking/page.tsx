"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

interface BookingPageProps {
  params: {
    language: "ar" | "en";
  };
}

const translations = {
  ar: {
    title: "احجز سيارتك الآن",
    description: "حدد تفاصيل الحجز واختر السيارة المناسبة",
    pickupLocation: "موقع الاستلام",
    dropoffLocation: "موقع التسليم",
    pickupDate: "تاريخ الاستلام",
    dropoffDate: "تاريخ التسليم",
    passengers: "عدد الركاب",
    continueBooking: "متابعة الحجز",
    selectCar: "اختر السيارة",
    economy: "اقتصادية",
    comfort: "مريحة",
    luxury: "فاخرة",
    perDay: "في اليوم",
    selectButton: "اختر الآن",
  },
  en: {
    title: "Book Your Car Now",
    description: "Specify booking details and choose the right vehicle",
    pickupLocation: "Pickup Location",
    dropoffLocation: "Dropoff Location",
    pickupDate: "Pickup Date",
    dropoffDate: "Dropoff Date",
    passengers: "Number of Passengers",
    continueBooking: "Continue Booking",
    selectCar: "Select a Car",
    economy: "Economy",
    comfort: "Comfort",
    luxury: "Luxury",
    perDay: "per Day",
    selectButton: "Select Now",
  },
};

export default function BookingPage() {
  const [language, setLanguage] = useState<"ar" | "en">("ar");
  const t = translations[language];

  const cars = [
    {
      id: 1,
      name: "Toyota Corolla",
      type: t.economy,
      price: 150,
      image: "/toyota-corolla-sedan.png",
      passengers: 5,
      transmission: "Manual",
    },
    {
      id: 2,
      name: "Honda Civic",
      type: t.comfort,
      price: 200,
      image: "/honda-civic-sport-car.jpg",
      passengers: 5,
      transmission: "Automatic",
    },
    {
      id: 3,
      name: "BMW 7 Series",
      type: t.luxury,
      price: 400,
      image: "/bmw-7-series-luxury-sedan.jpg",
      passengers: 5,
      transmission: "Automatic",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage} />

      <main className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">{t.title}</h1>
          <p className="text-foreground/60">{t.description}</p>
        </div>

        {/* Booking Form */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">{t.pickupLocation}</h2>
              </div>
              <input
                type="text"
                placeholder={t.pickupLocation}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background"
              />

              <div className="flex items-center gap-2 mb-4 mt-6">
                <MapPin className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">{t.dropoffLocation}</h2>
              </div>
              <input
                type="text"
                placeholder={t.dropoffLocation}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background"
              />
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">{t.pickupDate}</h2>
              </div>
              <input
                type="date"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background"
              />

              <div className="flex items-center gap-2 mb-4 mt-6">
                <Calendar className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">{t.dropoffDate}</h2>
              </div>
              <input
                type="date"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background"
              />

              <div className="flex items-center gap-2 mb-4 mt-6">
                <Users className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">{t.passengers}</h2>
              </div>
              <select className="w-full px-4 py-2 border border-border rounded-lg bg-background">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>
          </Card>
        </div>

        {/* Car Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">{t.selectCar}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cars.map((car) => (
              <Card
                key={car.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={car.image || "/placeholder.svg"}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{car.name}</h3>
                  <p className="text-primary font-medium mb-3">{car.type}</p>
                  <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {car.passengers}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {car.transmission}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold">${car.price}</span>
                      <span className="text-foreground/60 ml-2">
                        {t.perDay}
                      </span>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      {t.selectButton}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
            {t.continueBooking}
          </Button>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}

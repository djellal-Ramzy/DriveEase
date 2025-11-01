"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Fuel, Zap, Users } from "lucide-react";

const translations = {
  ar: {
    title: "أسطولنا",
    description: "اكتشف مجموعة سيارات متنوعة لكل الاحتياجات",
    economy: "اقتصادية",
    comfort: "مريحة",
    luxury: "فاخرة",
    perDay: "في اليوم",
    features: "المميزات",
    capacity: "السعة",
    fuelType: "نوع الوقود",
    transmission: "الناقل",
    bookNow: "احجز الآن",
  },
  en: {
    title: "Our Fleet",
    description: "Discover a variety of vehicles for every need",
    economy: "Economy",
    comfort: "Comfort",
    luxury: "Luxury",
    perDay: "per Day",
    features: "Features",
    capacity: "Capacity",
    fuelType: "Fuel Type",
    transmission: "Transmission",
    bookNow: "Book Now",
  },
};

interface Car {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  passengers: number;
  fuelType: string;
  transmission: string;
  rating: number;
}

export default function FleetPage() {
  const [language, setLanguage] = useState<"ar" | "en">("ar");
  const t = translations[language];

  const cars: Car[] = [
    {
      id: 1,
      name: "Toyota Corolla",
      category: t.economy,
      price: 150,
      image: "/placeholder.svg?key=123cor",
      passengers: 5,
      fuelType: "Petrol",
      transmission: "Manual",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Hyundai Elantra",
      category: t.economy,
      price: 140,
      image: "/placeholder.svg?key=123ela",
      passengers: 5,
      fuelType: "Petrol",
      transmission: "Automatic",
      rating: 4.3,
    },
    {
      id: 3,
      name: "Nissan Altima",
      category: t.comfort,
      price: 200,
      image: "/placeholder.svg?key=123alt",
      passengers: 5,
      fuelType: "Petrol",
      transmission: "Automatic",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Honda Civic",
      category: t.comfort,
      price: 220,
      image: "/placeholder.svg?key=123civ",
      passengers: 5,
      fuelType: "Petrol",
      transmission: "Automatic",
      rating: 4.6,
    },
    {
      id: 5,
      name: "BMW 7 Series",
      category: t.luxury,
      price: 400,
      image: "/placeholder.svg?key=123bmw",
      passengers: 5,
      fuelType: "Petrol",
      transmission: "Automatic",
      rating: 4.9,
    },
    {
      id: 6,
      name: "Mercedes-Benz E-Class",
      category: t.luxury,
      price: 450,
      image: "/placeholder.svg?key=123merc",
      passengers: 5,
      fuelType: "Petrol",
      transmission: "Automatic",
      rating: 4.8,
    },
  ];

  const categories = [
    { name: t.economy, count: 2, color: "from-blue-500 to-cyan-500" },
    { name: t.comfort, count: 2, color: "from-orange-500 to-yellow-500" },
    { name: t.luxury, count: 2, color: "from-purple-500 to-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage} />

      <main className="container py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">{t.title}</h1>
          <p className="text-foreground/60 text-lg">{t.description}</p>
        </div>

        {/* Categories Summary */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {categories.map((cat, idx) => (
            <Card key={idx} className="p-6 text-center">
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cat.color} mx-auto mb-3 flex items-center justify-center text-white text-lg font-bold`}
              >
                {cat.count}
              </div>
              <h3 className="font-semibold text-lg">{cat.name}</h3>
              <p className="text-foreground/60 text-sm mt-1">
                {cat.count} vehicles
              </p>
            </Card>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <Card
              key={car.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src={car.image || "/placeholder.svg"}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm font-semibold">
                  {car.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{car.name}</h3>

                <div className="flex items-center gap-1 mb-4">
                  <span className="text-yellow-500">★</span>
                  <span className="font-semibold">{car.rating}</span>
                  <span className="text-foreground/60 text-sm">
                    (125 reviews)
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-t border-border">
                  <div className="flex flex-col items-center text-sm">
                    <Users className="w-4 h-4 mb-1 text-primary" />
                    <span className="text-foreground/60">
                      {car.passengers} {t.capacity}
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-sm">
                    <Fuel className="w-4 h-4 mb-1 text-primary" />
                    <span className="text-foreground/60">{car.fuelType}</span>
                  </div>
                  <div className="flex flex-col items-center text-sm">
                    <Zap className="w-4 h-4 mb-1 text-primary" />
                    <span className="text-foreground/60">
                      {car.transmission}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold">${car.price}</span>
                    <span className="text-foreground/60 ml-2 text-sm">
                      {t.perDay}
                    </span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    {t.bookNow}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}

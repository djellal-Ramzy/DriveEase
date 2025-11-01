import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Fuel, Wind } from "lucide-react";
import Image from "next/image";
interface FleetProps {
  language: "ar" | "en";
}

const translations = {
  ar: {
    fleetTitle: "أسطولنا المتنوع",
    fleetDesc: "اختر من مجموعتنا الواسعة من السيارات الحديثة والفاخرة",
    perDay: "يوم واحد",
    book: "احجز الآن",
    passengers: "ركاب",
    fuelEfficiency: "استهلاك الوقود",
    transmission: "ناقل الحركة",
  },
  en: {
    fleetTitle: "Our Diverse Fleet",
    fleetDesc: "Choose from our wide range of modern and luxury vehicles",
    perDay: "per day",
    book: "Book Now",
    passengers: "Passengers",
    fuelEfficiency: "Fuel Efficiency",
    transmission: "Transmission",
  },
};

const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    image: "/toyota-corolla-sedan-car .jpg",
    price: 250,
    seats: 5,
    fuel: "6.5L/100km",
    transmission: "Manual",
    category: "ar",
  },
  {
    id: 2,
    name: "BMW X5",
    image: "/bmw-x5-suv-luxury .jpg",
    price: 650,
    seats: 7,
    fuel: "8.2L/100km",
    transmission: "Automatic",
    category: "ar",
  },
  {
    id: 3,
    name: "Mercedes E-Class",
    image: "/mercedes-e-class-luxury-sedan .jpg",
    price: 750,
    seats: 5,
    fuel: "7.8L/100km",
    transmission: "Automatic",
    category: "ar",
  },
  {
    id: 4,
    name: "Hyundai Tucson",
    image: "/hyundai-tucson-suv .png",
    price: 380,
    seats: 5,
    fuel: "7.1L/100km",
    transmission: "Automatic",
    category: "ar",
  },
];

export function Fleet({ language }: FleetProps) {
  const t = translations[language];

  return (
    <section className="container py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          {t.fleetTitle}
        </h2>
        <p className="text-foreground/70 text-lg">{t.fleetDesc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <Card
            key={car.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Image
              width={500}
              height={900}
              src={car.image || "/placeholder.svg"}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {car.name}
              </h3>

              <div className="space-y-2 mb-4 text-sm text-foreground/70">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>
                    {car.seats} {t.passengers}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Fuel className="w-4 h-4 text-primary" />
                  <span>{car.fuel}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="w-4 h-4 text-primary" />
                  <span>{car.transmission}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-primary">
                    ${car.price}
                  </span>
                  <span className="text-sm text-foreground/50 block">
                    {t.perDay}
                  </span>
                </div>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  {t.book}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

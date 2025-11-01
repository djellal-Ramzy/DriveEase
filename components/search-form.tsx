"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Users } from "lucide-react"

interface SearchFormProps {
  language: "ar" | "en"
}

const translations = {
  ar: {
    searchTitle: "ابحث عن السيارة المثالية",
    location: "موقع الاستلام",
    pickupDate: "تاريخ الاستلام",
    dropoffDate: "تاريخ التسليم",
    passengers: "عدد الركاب",
    search: "بحث",
  },
  en: {
    searchTitle: "Find Your Perfect Car",
    location: "Pickup Location",
    pickupDate: "Pickup Date",
    dropoffDate: "Return Date",
    passengers: "Passengers",
    search: "Search",
  },
}

export function SearchForm({ language }: SearchFormProps) {
  const t = translations[language]

  return (
    <section className="container -mt-32 relative z-20 mb-20">
      <Card className="bg-card/95 backdrop-blur border-border shadow-2xl">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">{t.searchTitle}</h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                {t.location}
              </label>
              <input
                type="text"
                placeholder="أختر المدينة"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                {t.pickupDate}
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                {t.dropoffDate}
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Users className="w-4 h-4 text-primary" />
                {t.passengers}
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>

            <div className="flex items-end">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-10">
                {t.search}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialsProps {
  language: "ar" | "en"
}

const translations = {
  ar: {
    testimonialsTitle: "تقييمات عملائنا",
    rating: "تقييم",
  },
  en: {
    testimonialsTitle: "What Our Customers Say",
    rating: "Rating",
  },
}

const testimonials = [
  {
    id: 1,
    name: "أحمد محمد",
    text: "خدمة ممتازة وسيارات نظيفة جداً! سأحجز معهم مرة أخرى بكل تأكيد.",
    textEn: "Excellent service and very clean cars! I will definitely book with them again.",
    rating: 5,
  },
  {
    id: 2,
    name: "فاطمة علي",
    text: "أسعار معقولة وموظفين محترفين. تجربة رائعة من البداية للنهاية.",
    textEn: "Reasonable prices and professional staff. Amazing experience from start to finish.",
    rating: 5,
  },
  {
    id: 3,
    name: "محمود حسن",
    text: "الحجز سهل جداً عبر التطبيق والسيارة كانت بحالة ممتازة.",
    textEn: "Very easy booking through the app and the car was in excellent condition.",
    rating: 5,
  },
  {
    id: 4,
    name: "Samar Johnson",
    text: "Top-notch customer service and reliable vehicles. Highly recommended!",
    textEn: "Top-notch customer service and reliable vehicles. Highly recommended!",
    rating: 5,
  },
]

export function Testimonials({ language }: TestimonialsProps) {
  const t = translations[language]

  return (
    <section className="container py-20 border-y border-border">
      <h2 className="text-4xl font-bold text-foreground mb-12 text-center">{t.testimonialsTitle}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="p-6 bg-card/50">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
              {language === "ar" ? testimonial.text : testimonial.textEn}
            </p>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

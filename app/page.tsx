"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SearchForm } from "@/components/search-form"
import { Features } from "@/components/features"
import { Fleet } from "@/components/fleet"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  const [language, setLanguage] = useState<"ar" | "en">("ar")

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <SearchForm language={language} />
      <Features language={language} />
      <Fleet language={language} />
      <Testimonials language={language} />
      <Footer language={language} />
    </div>
  )
}

import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { WhyUjjain } from "@/components/why-ujjain"
import { FeaturesSection } from "@/components/features-section"
import { Newsletter } from "@/components/newsletter"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <WhyUjjain />
        <FeaturesSection />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  )
}

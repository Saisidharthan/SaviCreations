import Footer from "@/components/footer"
import Header from "@/components/header"
import AboutBrandSection from "@/components/home/about-brand-section"
import FounderIntro from "@/components/home/founder-intro"
import HappyClientsSection from "@/components/home/happy-clients-section"
import HeroSection from "@/components/home/hero-section"
import ImageShowcase from "@/components/home/image-showcase"
import LatestWorkSection from "@/components/home/latest-work-section"
import OccasionSection from "@/components/home/occasion-section"
import ServicesSection from "@/components/home/services-section"
import TestimonialsSection from "@/components/home/testimonials-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutBrandSection />
        <ServicesSection />
        <ImageShowcase />
        <FounderIntro />
        <OccasionSection />
        <HappyClientsSection />
        <LatestWorkSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}

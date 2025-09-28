import Header from "@/components/header"
import Footer from "@/components/footer"
import BridalHero from "@/components/services/bridal/bridal-hero"
import BridalPackages from "@/components/services/bridal/bridal-packages"
import BridalExpertise from "@/components/services/bridal/bridal-expertise"
import BridalSpecialized from "@/components/services/bridal/bridal-specialized"
import BridalPortfolio from "@/components/services/bridal/bridal-portfolio"
import BridalTerms from "@/components/services/bridal/bridal-terms"
import BridalCTA from "@/components/services/bridal/bridal-cta"

export const metadata = {
  title: "Bridal Makeup Packages | Best Bridal Makeup Artist | Sasvi Creations",
  description:
    "Luxury professional bridal makeup for destination weddings. Natural and elegant bridal makeover packages starting from INR 30,000. Book your dream wedding look today.",
  keywords:
    "bridal makeup packages, wedding makeup artist, bridal makeover, destination wedding makeup, luxury bridal makeup",
}

export default function BridalServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BridalHero />
        <BridalPackages />
        <BridalExpertise />
        <BridalSpecialized />
        <BridalPortfolio />
        <BridalTerms />
        <BridalCTA />
      </main>
      <Footer />
    </div>
  )
}

import HeroSection from "@/components/sections/hero"
import ProblemSolutionSection from "@/components/sections/problem-solution"
import ProductFormatsSection from "@/components/sections/product-formats"
import FeaturesSection from "@/components/sections/features"
import HowItWorksSection from "@/components/sections/how-it-works"
import PricingSection from "@/components/sections/pricing"
import TestimonialsSection from "@/components/sections/testimonials"
import ComparisonSection from "@/components/sections/comparison"
import FAQSection from "@/components/sections/faq"
import FinalCTASection from "@/components/sections/final-cta"
import Footer from "@/components/sections/footer"
import PurchaseNotification from "@/components/purchase-notification"

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <PurchaseNotification />
      <HeroSection />
      <ProblemSolutionSection />
      <ProductFormatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <ComparisonSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}

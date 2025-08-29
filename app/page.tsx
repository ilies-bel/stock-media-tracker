import { Navigation } from "@/components/sections/Navigation"
import { Hero } from "@/components/sections/Hero"
import { SocialProof } from "@/components/sections/SocialProof"
import { PainPoints } from "@/components/sections/PainPoints"
import { SolutionPreview } from "@/components/sections/SolutionPreview"
import { Features } from "@/components/sections/Features"
import { Pricing } from "@/components/sections/Pricing"
import { CTA } from "@/components/sections/CTA"
import { Footer } from "@/components/sections/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PainPoints />
      <SolutionPreview />
      <SocialProof />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
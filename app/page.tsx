import { Navigation } from "@/components/sections/Navigation"
import { Hero } from "@/components/sections/Hero"
import { SocialProof } from "@/components/sections/SocialProof"
import { PainPoints } from "@/components/sections/PainPoints"
import InteractiveDashboard from "@/components/sections/InteractiveDashboard"
import { Features } from "@/components/sections/Features"
import { Pricing } from "@/components/sections/Pricing"
import { CTA } from "@/components/sections/CTA"
import { Footer } from "@/components/sections/Footer"
import { SubscriptionProvider } from "@/lib/contexts/SubscriptionContext"

export default function HomePage() {
  return (
    <SubscriptionProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <PainPoints />
        <InteractiveDashboard />
        <SocialProof />
        <Features />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </SubscriptionProvider>
  )
}
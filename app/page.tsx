import {Navigation} from "@/components/sections/Navigation"
import {Hero} from "@/components/sections/Hero"
import {SocialProof} from "@/components/sections/SocialProof"
import {PainPoints} from "@/components/sections/PainPoints"
import InteractiveDashboard from "@/components/sections/InteractiveDashboard"
import {CTA} from "@/components/sections/CTA"
import {Footer} from "@/components/sections/Footer"
import {SubscriptionProvider} from "@/lib/contexts/SubscriptionContext"

export default function HomePage() {
    return (
        <SubscriptionProvider>
            <div className="min-h-screen bg-background">
                <Navigation/>
                <div className="pt-16">
                    <Hero/>
                    <PainPoints/>
                    <InteractiveDashboard/>
                    <SocialProof/>
                    <CTA/>
                    <Footer/>
                </div>
            </div>
        </SubscriptionProvider>
    )
}
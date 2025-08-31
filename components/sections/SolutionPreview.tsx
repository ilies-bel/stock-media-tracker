import Image from "next/image"
import { ArrowRight, Eye, Target, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "Spot trends before others",
    description: "AI-powered analysis reveals emerging opportunities"
  },
  {
    icon: Target,
    title: "Target high-demand niches",
    description: "Find keywords with high search volume, low competition"
  },
  {
    icon: TrendingUp,
    title: "Track performance",
    description: "Monitor your photo rankings and optimize for better results"
  }
]

export function SolutionPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-4">
              See what you&apos;re missing in seconds
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI dashboard reveals the exact keywords and niches that are trending right now, 
              so you can create content that actually sells.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
              
              <div className="pt-4">
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>And much more</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-2">
                <Image
                  src="/dashboard-mockup.png"
                  alt="KeywordLens Dashboard - AI-powered keyword research for stock photographers"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
              
              {/* Floating elements for extra visual interest */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Live Data
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Real-time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
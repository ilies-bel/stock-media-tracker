import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Search, TrendingUp, Zap, Users, Star } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "AI Keyword Research",
    description: "Generate high-performing keywords using advanced AI analysis of market trends and search patterns."
  },
  {
    icon: TrendingUp,
    title: "Market Analytics",
    description: "Track keyword performance, competition levels, and seasonal trends to maximize your earnings."
  },
  {
    icon: Camera,
    title: "Batch Processing",
    description: "Upload multiple photos and get optimized keyword suggestions for your entire portfolio at once."
  },
  {
    icon: Users,
    title: "Competitor Analysis",
    description: "Analyze successful photographers' keyword strategies and discover untapped opportunities."
  },
  {
    icon: Zap,
    title: "Auto-Tagging",
    description: "Automatically generate relevant tags and descriptions based on image content and market data."
  },
  {
    icon: Star,
    title: "Performance Tracking",
    description: "Monitor your photo performance across platforms and optimize based on real sales data."
  }
]

export function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Everything you need to optimize your stock photos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Powerful tools designed specifically for stock photographers and content creators
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="font-serif">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
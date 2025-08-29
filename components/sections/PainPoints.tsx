import { Clock, ImageOff, TrendingDown } from "lucide-react"

const painPoints = [
  {
    icon: Clock,
    title: "Spending hours researching what to shoot?",
    description: "Stop wasting time guessing. Get data-driven insights on what buyers actually want."
  },
  {
    icon: ImageOff,
    title: "Uploading photos that never sell?",
    description: "Discover exactly what keywords and subjects have high demand before you shoot."
  },
  {
    icon: TrendingDown,
    title: "Missing trending topics?",
    description: "Stay ahead with real-time alerts on emerging trends and seasonal opportunities."
  }
]

export function PainPoints() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-16">
            Sound familiar?
          </h2>
          
          <div className="space-y-8">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="flex gap-6 items-start p-6 rounded-2xl bg-muted/50 hover:bg-muted/70 transition-colors"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                  <point.icon className="h-6 w-6 text-destructive" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              There's a better way. Let AI analyze the market for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
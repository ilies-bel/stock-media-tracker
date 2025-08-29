import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for hobbyist photographers",
    price: "$19",
    period: "/month",
    features: [
      "100 keyword analyses/month",
      "Basic market insights",
      "Email support"
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Professional",
    description: "For serious stock photographers",
    price: "$49",
    period: "/month",
    features: [
      "Unlimited keyword analyses",
      "Advanced market analytics",
      "Batch processing",
      "Competitor analysis",
      "Priority support"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    popular: true
  },
  {
    name: "Enterprise",
    description: "For agencies and large portfolios",
    price: "$99",
    period: "/month",
    features: [
      "Everything in Professional",
      "Team collaboration",
      "API access",
      "Custom integrations",
      "Dedicated support"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false
  }
]

export function Pricing() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Choose the plan that fits your photography business
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={plan.popular ? "border-primary" : ""}>
              <CardHeader>
                {plan.popular ? (
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-serif text-xl">{plan.name}</CardTitle>
                    <Badge>Most Popular</Badge>
                  </div>
                ) : (
                  <CardTitle className="font-serif text-xl">{plan.name}</CardTitle>
                )}
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className={plan.buttonVariant === "outline" ? "w-full bg-transparent" : "w-full"} 
                  variant={plan.buttonVariant}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
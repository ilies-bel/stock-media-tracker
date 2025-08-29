"use client"

import { useEffect, useState } from "react"
import { Users, TrendingUp, Star } from "lucide-react"
import { getCreatorCountFormatted, getPercentageFilled } from "@/lib/utils/creator-count"

export function SocialProof() {
  const [isVisible, setIsVisible] = useState(false)
  const [creatorCount, setCreatorCount] = useState("80")
  const [percentageFilled, setPercentageFilled] = useState(2)

  useEffect(() => {
    setIsVisible(true)
    // Update with actual dynamic count after component mounts (client-side)
    setCreatorCount(getCreatorCountFormatted())
    setPercentageFilled(getPercentageFilled())
  }, [])

  const stats = [
    {
      icon: Users,
      value: "28",
      label: "Beta testers",
      highlight: true
    },
    {
      icon: TrendingUp,
      value: "2.3M+",
      label: "Keywords found"
    },
    {
      icon: Star,
      value: "4.9",
      label: "Early tester rating"
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Join thousands of creators getting early access
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Photographers and content creators worldwide are securing their spot
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${
                  stat.highlight ? "bg-primary/10" : "bg-muted"
                } mb-4`}>
                  <stat.icon className={`h-6 w-6 ${
                    stat.highlight ? "text-primary" : "text-muted-foreground"
                  }`} />
                </div>
                <div className={`text-3xl font-bold ${
                  stat.highlight ? "text-primary" : "text-foreground"
                }`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 mx-auto max-w-4xl">
            <div className="relative rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="rounded-full bg-background px-4 py-1 text-xs font-medium text-primary border">
                  Limited Early Access
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-lg font-semibold">
                    Spots filling fast
                  </p>
                  <p className="text-muted-foreground mt-1">
                    We&#39;re accepting <span className="font-semibold text-foreground">only 500 early adopters</span> to ensure quality feedback
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{creatorCount}</p>
                  <p className="text-sm text-muted-foreground">creators joined</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Early access spots taken</span>
                  <span className="font-semibold">{percentageFilled}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000"
                    style={{ width: isVisible ? `${percentageFilled}%` : "0%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
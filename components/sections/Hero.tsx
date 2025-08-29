"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import { EmailSignupModal } from "@/components/EmailSignupModal"

export function Hero() {
  const [emailModalOpen, setEmailModalOpen] = useState(false)

  return (
    <>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">

            <h1 className="font-serif text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Find <span className="text-primary">Untapped</span> Stock Photo Opportunities Before Your Competition
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty max-w-2xl mx-auto">
              Stop guessing what to shoot next. Our AI analyzes millions of searches across major stock platforms to reveal <span className="text-foreground font-semibold">high-demand, low-competition</span> niches that actually sell. Plan smarter, shoot strategically, <span className="text-foreground font-semibold">earn more</span>.
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="h-12 px-8"
                onClick={() => setEmailModalOpen(true)}
              >
                Get Early Access
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Limited spots available
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Be first to know
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Exclusive insights
              </div>
            </div>
          </div>
        </div>
      </section>

      <EmailSignupModal 
        open={emailModalOpen} 
        onOpenChange={setEmailModalOpen} 
      />
    </>
  )
}
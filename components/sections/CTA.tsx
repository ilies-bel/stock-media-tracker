"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { EmailSignupModal } from "@/components/EmailSignupModal"

export function CTA() {
  const [emailModalOpen, setEmailModalOpen] = useState(false)

  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Ready to boost your stock photo sales?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Join thousands of photographers who have increased their earnings with KeywordLens
            </p>
            <div className="mt-8">
              <Button 
                size="lg" 
                className="h-12 px-8"
                onClick={() => setEmailModalOpen(true)}
              >
                Get Early Access
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
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
"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, Sparkles } from "lucide-react"

interface EmailSignupModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EmailSignupModal({ open, onOpenChange }: EmailSignupModalProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Reset and close after success
    setTimeout(() => {
      setIsSuccess(false)
      setEmail("")
      onOpenChange(false)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Get Early Access
          </DialogTitle>
          <DialogDescription>
            Be first to know when we launch - <span className="font-semibold text-foreground">50% off for early adopters</span>. Join our exclusive list to discover untapped stock photo opportunities.
          </DialogDescription>
        </DialogHeader>
        
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="rounded-full bg-green-100 p-3 mb-4">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-lg font-semibold">You&#39;re on the list!</p>
            <p className="text-sm text-muted-foreground mt-2">
              Check your email for confirmation
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="photographer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="space-y-3">
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join Early Access"}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
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
import { useSubscription } from "@/lib/contexts/SubscriptionContext"

interface EmailSignupModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzmX3EIzebhJAkxm4mYLKewHl3v4LcvT5sZtBXRS--ZWNgSW1wJQdL3KHY_ItmP4kU9/exec"

export function EmailSignupModal({ open, onOpenChange }: EmailSignupModalProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const { incrementCount } = useSubscription()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    setError("")
    
    try {
      // Send data to Google Sheets
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: 'KeywordLens Landing Page'
        })
      })

      // Success - show confirmation message
      setIsSuccess(true)
      setEmail("")
      
      // Increment the count with animation
      incrementCount()
      
      // Reset and close after success
      setTimeout(() => {
        setIsSuccess(false)
        onOpenChange(false)
      }, 2000)

    } catch (err) {
      setError("Error during signup. Please try again.")
      console.error('Error:', err)
    } finally {
      setIsSubmitting(false)
    }
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
            
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <p className="text-sm text-red-600 font-medium">{error}</p>
              </div>
            )}
            
            <div className="space-y-3">
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting || !email}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Joining...
                  </>
                ) : (
                  "Join Early Access"
                )}
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
"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { getCreatorCount } from "@/lib/utils/creator-count"

interface SubscriptionContextType {
  creatorCount: string
  percentageFilled: number
  incrementCount: () => void
  isAnimating: boolean
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined)

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const [additionalCount, setAdditionalCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const getTotalCount = () => {
    return getCreatorCount() + additionalCount
  }

  const getFormattedCount = () => {
    return getTotalCount().toLocaleString()
  }

  const getUpdatedPercentage = () => {
    const current = getTotalCount()
    const max = 500
    const percentage = Math.min((current / max) * 100, 95)
    return Math.round(percentage)
  }

  const incrementCount = () => {
    setIsAnimating(true)
    setAdditionalCount(prev => prev + 1)
    
    // Reset animation after a delay
    setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }

  return (
    <SubscriptionContext.Provider value={{
      creatorCount: getFormattedCount(),
      percentageFilled: getUpdatedPercentage(),
      incrementCount,
      isAnimating
    }}>
      {children}
    </SubscriptionContext.Provider>
  )
}

export function useSubscription() {
  const context = useContext(SubscriptionContext)
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider')
  }
  return context
}
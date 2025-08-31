import { Button } from "@/components/ui/button"
import { Upload, AlertCircle } from "lucide-react"

export function DashboardHeader() {
  return (
    <>
      {/* Simplified Header */}
      <div className="p-6 pb-4 border-b">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-1">Market Intelligence Dashboard</h1>
            <p className="text-sm text-muted-foreground">Real-time insights from 7 major stock platforms</p>
          </div>
          <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
            <span className="text-xs font-medium">Live Sync</span>
          </div>
        </div>
      </div>
    </>
  )
}
import { Button } from "@/components/ui/button"
import { Upload, AlertCircle } from "lucide-react"

export function DashboardHeader() {
  return (
    <>
      {/* Navigation */}
      <nav className="border-b bg-background">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 50 50" className="h-8 w-8">
                <g transform="translate(10, 10)">
                  <path d="M 15,3 
                           C 18,3 21,4 23,6
                           L 19,11
                           C 18,10 17,9 15,9
                           C 13,9 12,10 11,11
                           L 7,6
                           C 9,4 12,3 15,3 Z" 
                        fill="#EC6547"/>
                  <path d="M 23,7 
                           C 25,9 27,12 27,15
                           C 27,18 25,21 23,23
                           L 19,19
                           C 20,18 20,17 20,15
                           C 20,13 20,12 19,11
                           Z" 
                        fill="#F47A5E"/>
                  <path d="M 23,23 
                           C 21,25 18,27 15,27
                           C 12,27 9,25 7,23
                           L 11,19
                           C 12,20 13,20 15,20
                           C 17,20 18,20 19,19
                           Z" 
                        fill="#EC6547"/>
                  <path d="M 7,23 
                           C 5,21 3,18 3,15
                           C 3,12 5,9 7,7
                           L 11,11
                           C 10,12 9,13 9,15
                           C 9,17 10,18 11,19
                           Z" 
                        fill="#F47A5E"/>
                </g>
              </svg>
              <span className="text-xl font-bold text-foreground">KeywordLens</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-sm font-medium text-primary">Dashboard</span>
              <span className="text-sm font-medium text-muted-foreground">Portfolio</span>
              <span className="text-sm font-medium text-muted-foreground">Analytics</span>
              <span className="text-sm font-medium text-muted-foreground">Calendar</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                <span className="text-xs font-medium">Live Sync</span>
              </div>
              <Button variant="outline" size="sm">
                <Upload className="h-3 w-3 mr-1"/>
                Bulk Upload
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header with Revenue Alert */}
      <div className="p-8 pb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Market Intelligence Dashboard</h1>
            <p className="text-muted-foreground">Real-time insights from 7 major stock platforms</p>
          </div>
          <div className="bg-green-50 border border-green-200 px-4 py-2 rounded-lg flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-green-600"/>
            <span className="text-sm text-green-700 font-medium">3 new high-value opportunities detected!</span>
          </div>
        </div>
      </div>
    </>
  )
}
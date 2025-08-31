import { Users, TrendingUp, Star, Award, AlertCircle, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CompetitionAnalysisTabProps {}

export function CompetitionAnalysisTab({}: CompetitionAnalysisTabProps) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 h-full">
      {/* Top Performers Leaderboard */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
          <Award className="w-6 h-6 text-primary" />
          Top Performers Leaderboard
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
            LIVE
          </span>
        </h3>
        
        <div className="space-y-4">
          {/* #1 PhotoPro_USA */}
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-xl p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-yellow-900 flex items-center gap-2">
                  PhotoPro_USA
                  <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 fill-current" />
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-yellow-700">
                  <span>12.4k photos</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Specializes in: Corporate, Tech</span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between sm:justify-end gap-3 sm:gap-4">
                <div className="text-left sm:text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-900">$24.5k</div>
                  <div className="text-xs sm:text-sm text-yellow-700">monthly revenue</div>
                  <div className="flex items-center gap-1 text-green-600 font-bold text-xs sm:text-sm">
                    <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4" />
                    +18% growth
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-yellow-300 hover:bg-yellow-100 text-xs sm:text-sm px-3 sm:px-4">
                  More Details
                </Button>
              </div>
            </div>
          </div>

          {/* #2 CreativeStock */}
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200 rounded-xl p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                  CreativeStock
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-700">
                  <span>8.7k photos</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Specializes in: Lifestyle, Nature</span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between sm:justify-end gap-3 sm:gap-4">
                <div className="text-left sm:text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">$18.2k</div>
                  <div className="text-xs sm:text-sm text-gray-700">monthly revenue</div>
                  <div className="flex items-center gap-1 text-green-600 font-bold text-xs sm:text-sm">
                    <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4" />
                    +12% growth
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-100 text-xs sm:text-sm px-3 sm:px-4">
                  More Details
                </Button>
              </div>
            </div>
          </div>

          {/* #3 VisualMaster */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-orange-900">
                  VisualMaster
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-orange-700">
                  <span>6.2k photos</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Last upload: 2 hours ago</span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between sm:justify-end gap-3 sm:gap-4">
                <div className="text-left sm:text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-900">$15.1k</div>
                  <div className="text-xs sm:text-sm text-orange-700">monthly revenue</div>
                  <div className="flex items-center gap-1 text-green-600 font-bold text-xs sm:text-sm">
                    <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4" />
                    +25% growth
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-orange-300 hover:bg-orange-100 text-xs sm:text-sm px-3 sm:px-4">
                  More Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Success Pattern Analytics */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Success Pattern Analytics
          </h3>
          
          {/* Upload Strategy Insights */}
          <div className="bg-muted/50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-4">Upload Strategy Insights</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                <span className="font-medium">Optimal Frequency</span>
                <span className="font-bold text-primary">Daily uploads</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                <span className="font-medium">Best Upload Time</span>
                <span className="font-bold text-primary">Tuesday 3PM EST</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                <span className="font-medium">Avg Keywords/Image</span>
                <span className="font-bold text-primary">42 keywords</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                <span className="font-medium">Top Style</span>
                <span className="font-bold text-primary">Minimal/Clean</span>
              </div>
            </div>
          </div>

          {/* Trending Content Themes */}
          <div className="bg-muted/50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-4">Trending Content Themes</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                  <span className="font-medium">AI & Technology</span>
                </div>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Hot Trend</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span className="font-medium">Sustainability & Green</span>
                </div>
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Growing</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="font-medium">Remote Work & Lifestyle</span>
                </div>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Stable</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="font-medium">Healthcare & Wellness</span>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Emerging</span>
              </div>
            </div>
          </div>
        </div>

        {/* Market Gap Analysis & Intelligence */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-primary" />
            Market Intelligence
          </h3>
          
          {/* Competitive Intelligence Alerts */}
          <div className="bg-muted/50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-4">Live Intelligence Alerts</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-background rounded-lg border-l-4 border-red-500">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Top seller uploaded 3 new AI photos!</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-background rounded-lg border-l-4 border-orange-500">
                <TrendingUp className="w-5 h-5 text-orange-500 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">New competitor entered Healthcare niche</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-background rounded-lg border-l-4 border-blue-500">
                <Star className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Opportunity to outrank #3 photographer</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
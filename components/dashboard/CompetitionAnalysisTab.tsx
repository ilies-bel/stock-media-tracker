import { Users, TrendingUp, Star, Award, AlertCircle, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CompetitionAnalysisTabProps {}

export function CompetitionAnalysisTab({}: CompetitionAnalysisTabProps) {
  return (
    <div className="p-8 h-full">
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
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">#1</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-900 flex items-center gap-2">
                      PhotoPro_USA
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        Trending
                      </span>
                    </h4>
                    <div className="flex gap-4 text-sm text-yellow-700">
                      <span>12.4k photos</span>
                      <span>•</span>
                      <span>Specializes in: Corporate, Tech</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-yellow-900">$24.5k</div>
                <div className="text-sm text-yellow-700">monthly revenue</div>
                <div className="flex items-center gap-1 text-green-600 font-bold">
                  <TrendingUp className="w-4 h-4" />
                  +18% growth
                </div>
              </div>
            </div>
          </div>

          {/* #2 CreativeStock */}
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">#2</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      CreativeStock
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                        Consistent
                      </span>
                    </h4>
                    <div className="flex gap-4 text-sm text-gray-700">
                      <span>8.7k photos</span>
                      <span>•</span>
                      <span>Specializes in: Lifestyle, Nature</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900">$18.2k</div>
                <div className="text-sm text-gray-700">monthly revenue</div>
                <div className="flex items-center gap-1 text-green-600 font-bold">
                  <TrendingUp className="w-4 h-4" />
                  +12% growth
                </div>
              </div>
            </div>
          </div>

          {/* #3 VisualMaster */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">#3</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-700" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-orange-900 flex items-center gap-2">
                      VisualMaster
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                        Rising Star
                      </span>
                    </h4>
                    <div className="flex gap-4 text-sm text-orange-700">
                      <span>6.2k photos</span>
                      <span>•</span>
                      <span>Last upload: 2 hours ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-orange-900">$15.1k</div>
                <div className="text-sm text-orange-700">monthly revenue</div>
                <div className="flex items-center gap-1 text-green-600 font-bold">
                  <TrendingUp className="w-4 h-4" />
                  +25% growth
                </div>
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
          
          {/* Gap Analysis */}
          <div className="bg-muted/50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-4">Market Gap Analysis</h4>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-red-900">Missing Style Alert!</span>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">High Priority</span>
                </div>
                <p className="text-sm text-red-700 mb-3">Dark mode UI mockups - only 12 images exist</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-red-700">Potential Revenue:</span>
                  <span className="font-bold text-red-900">$2,340/month</span>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-blue-900">Underserved Niche</span>
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Medium Priority</span>
                </div>
                <p className="text-sm text-blue-700 mb-3">Elderly using technology - growing demand</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-700">Potential Revenue:</span>
                  <span className="font-bold text-blue-900">$1,680/month</span>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-green-900">Content Opportunity</span>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Low Priority</span>
                </div>
                <p className="text-sm text-green-700 mb-3">Sustainable packaging concepts</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-green-700">Potential Revenue:</span>
                  <span className="font-bold text-green-900">$980/month</span>
                </div>
              </div>
            </div>
          </div>

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

          {/* Performance Comparison */}
          <div className="bg-muted/50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-4">Your Position vs Top 3</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Revenue Potential</span>
                <span className="text-lg font-bold text-primary">$8.2k/mo</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-primary to-blue-500 h-3 rounded-full" style={{width: '33%'}}></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Current</span>
                <span>Top Performer: $24.5k</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
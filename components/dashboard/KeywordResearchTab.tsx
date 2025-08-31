import { Hash, Globe, BarChart3, Sparkles, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface KeywordResearchTabProps {}

export function KeywordResearchTab({}: KeywordResearchTabProps) {
  return (
    <div className="p-8 h-full">
      {/* Keyword Generation Interface */}
      <div className="mb-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-muted/50 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-center">Generate Platform-Optimized Keywords</h3>
            <div className="flex gap-4 items-center">
              <input
                type="text"
                placeholder="Enter your concept or upload an image..."
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-lg"
                defaultValue="AI-powered healthcare technology"
              />
              <Button size="lg" className="px-8">
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Keywords
              </Button>
            </div>
            <div className="flex gap-4 mt-4 justify-center">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="rounded" />
                <span className="text-sm">All Platforms</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="rounded" />
                <span className="text-sm">Shutterstock</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="rounded" />
                <span className="text-sm">Adobe Stock</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="rounded" />
                <span className="text-sm">Getty Images</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Platform-Specific Results */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Shutterstock Panel */}
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-red-900 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Shutterstock
            </h3>
            <span className="bg-red-600 text-white text-sm px-3 py-1 rounded-full font-bold">
              25 Keywords
            </span>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between p-2 bg-white rounded-lg">
              <span className="text-sm font-medium">artificial intelligence</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">High</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-white rounded-lg">
              <span className="text-sm font-medium">healthcare technology</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">High</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-white rounded-lg">
              <span className="text-sm font-medium">medical AI</span>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Med</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-white rounded-lg">
              <span className="text-sm font-medium">telemedicine</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">High</span>
            </div>
            <div className="text-center text-sm text-muted-foreground mt-2">
              + 21 more keywords
            </div>
          </div>

          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span>Est. Impressions:</span>
              <span className="font-bold">124K/month</span>
            </div>
            <div className="flex justify-between">
              <span>Competition:</span>
              <span className="font-bold text-green-600">Low</span>
            </div>
          </div>
        </div>

        {/* Adobe Stock Panel */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Adobe Stock
            </h3>
            <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full font-bold">
              49 Keywords
            </span>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between p-2 bg-white rounded-lg">
              <span className="text-sm font-medium">AI medical diagnosis</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">$$$</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-white rounded-lg">
              <span className="text-sm font-medium">smart healthcare</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">$$$</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-white rounded-lg">
              <span className="text-sm font-medium">digital health</span>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">$$</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-white rounded-lg">
              <span className="text-sm font-medium">robotic surgery</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">$$$</span>
            </div>
            <div className="text-center text-sm text-muted-foreground mt-2">
              + 45 more keywords
            </div>
          </div>

          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span>Revenue Potential:</span>
              <span className="font-bold">$2,340/mo</span>
            </div>
            <div className="flex justify-between">
              <span>Difficulty:</span>
              <span className="font-bold text-orange-600">Medium</span>
            </div>
          </div>
        </div>

        {/* Getty Images Panel */}
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-green-900 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Getty Images
            </h3>
            <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full font-bold">
              30 Keywords
            </span>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between p-2 bg-white rounded-lg">
              <span className="text-sm font-medium">premium healthcare AI</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Elite</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-white rounded-lg">
              <span className="text-sm font-medium">medical innovation</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Elite</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-white rounded-lg">
              <span className="text-sm font-medium">futuristic medicine</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Pro</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-white rounded-lg">
              <span className="text-sm font-medium">AI doctor technology</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Elite</span>
            </div>
            <div className="text-center text-sm text-muted-foreground mt-2">
              + 26 more keywords
            </div>
          </div>

          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span>Exclusivity Score:</span>
              <span className="font-bold">94/100</span>
            </div>
            <div className="flex justify-between">
              <span>Market Tier:</span>
              <span className="font-bold text-purple-600">Premium</span>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Analytics Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Overall Performance */}
        <div className="bg-muted/50 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Performance Analytics
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-background rounded-lg">
              <span className="font-medium">Total Search Volume</span>
              <span className="text-primary font-bold text-lg">847K/month</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background rounded-lg">
              <span className="font-medium">Avg Competition Score</span>
              <span className="text-green-600 font-bold text-lg">Low (23)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background rounded-lg">
              <span className="font-medium">Conversion Rate</span>
              <span className="text-primary font-bold text-lg">4.7%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background rounded-lg">
              <span className="font-medium">CTR Improvement</span>
              <span className="text-green-600 font-bold text-lg">+67%</span>
            </div>
          </div>
        </div>

        {/* Keyword Strategy Insights */}
        <div className="bg-muted/50 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Strategy Insights
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="font-semibold text-green-900">Primary Keywords</span>
              </div>
              <p className="text-sm text-green-700">High volume terms with strong commercial intent</p>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span className="font-semibold text-blue-900">Long-tail Opportunities</span>
              </div>
              <p className="text-sm text-blue-700">Low competition with specific targeting potential</p>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></span>
                <span className="font-semibold text-orange-900">Trending Keywords</span>
              </div>
              <p className="text-sm text-orange-700">Growing search terms with momentum</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
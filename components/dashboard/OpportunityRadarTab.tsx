import { Search, TrendingUp, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OpportunityRadarTab() {
  return (
    <div className="p-8 h-full">
      {/* Search & Discovery Header */}
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            type="text"
            placeholder="Search niches, trends, or keywords..."
            className="w-full pl-12 pr-4 py-4 text-lg border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            defaultValue="sustainable technology"
          />
        </div>
      </div>

      {/* Opportunity Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* High Value Opportunity */}
        <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl relative">
          <div className="absolute -top-2 -right-2">
            <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-bold">
              HIGH VALUE
            </span>
          </div>
          
          <div className="mb-4">
            <h3 className="text-lg font-bold text-green-900 mb-2">AI-Powered Healthcare</h3>
            <p className="text-sm text-green-700">Medical technology, telemedicine, AI diagnosis</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <span className="text-green-600 font-medium">Revenue</span>
              <div className="text-green-900 font-bold text-xl">$3,450/mo</div>
            </div>
            <div>
              <span className="text-green-600 font-medium">Competition</span>
              <div className="text-green-900 font-bold">Low (23)</div>
            </div>
            <div>
              <span className="text-green-600 font-medium">Demand</span>
              <div className="text-green-900 font-bold">+890%</div>
            </div>
            <div>
              <span className="text-green-600 font-medium">ROI Score</span>
              <div className="text-green-900 font-bold">96/100</div>
            </div>
          </div>
          
          <Button className="w-full bg-green-600 hover:bg-green-700">
            <Target className="w-4 h-4 mr-2" />
            Analyze This Niche
          </Button>
        </div>

        {/* Growing Opportunity */}
        <div className="p-6 bg-blue-50 border-2 border-blue-200 rounded-xl relative">
          <div className="absolute -top-2 -right-2">
            <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold">
              GROWING
            </span>
          </div>
          
          <div className="mb-4">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Remote Team Collaboration</h3>
            <p className="text-sm text-blue-700">Virtual meetings, hybrid work, team building</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <span className="text-blue-600 font-medium">Revenue</span>
              <div className="text-blue-900 font-bold text-xl">$1,820/mo</div>
            </div>
            <div>
              <span className="text-blue-600 font-medium">Competition</span>
              <div className="text-blue-900 font-bold">Medium (156)</div>
            </div>
            <div>
              <span className="text-blue-600 font-medium">Demand</span>
              <div className="text-blue-900 font-bold">+340%</div>
            </div>
            <div>
              <span className="text-blue-600 font-medium">ROI Score</span>
              <div className="text-blue-900 font-bold">78/100</div>
            </div>
          </div>
          
          <Button variant="outline" className="w-full border-blue-200 hover:bg-blue-50">
            <Target className="w-4 h-4 mr-2" />
            Analyze This Niche
          </Button>
        </div>

        {/* Emerging Opportunity */}
        <div className="p-6 bg-purple-50 border-2 border-purple-200 rounded-xl relative">
          <div className="absolute -top-2 -right-2">
            <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-bold">
              EMERGING
            </span>
          </div>
          
          <div className="mb-4">
            <h3 className="text-lg font-bold text-purple-900 mb-2">Sustainable Fashion Tech</h3>
            <p className="text-sm text-purple-700">Eco materials, circular economy, fashion tech</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <span className="text-purple-600 font-medium">Revenue</span>
              <div className="text-purple-900 font-bold text-xl">$980/mo</div>
            </div>
            <div>
              <span className="text-purple-600 font-medium">Competition</span>
              <div className="text-purple-900 font-bold">Very Low (8)</div>
            </div>
            <div>
              <span className="text-purple-600 font-medium">Demand</span>
              <div className="text-purple-900 font-bold">+125%</div>
            </div>
            <div>
              <span className="text-purple-600 font-medium">ROI Score</span>
              <div className="text-purple-900 font-bold">82/100</div>
            </div>
          </div>
          
          <Button variant="outline" className="w-full border-purple-200 hover:bg-purple-50">
            <Target className="w-4 h-4 mr-2" />
            Analyze This Niche
          </Button>
        </div>
      </div>

      {/* Interactive Analytics Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Market Gap Analysis */}
        <div className="bg-muted/50 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Market Gap Analysis
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-background rounded-lg">
              <span className="font-medium">Search Volume</span>
              <span className="text-primary font-bold">847K/month</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background rounded-lg">
              <span className="font-medium">Avg Competition</span>
              <span className="text-green-600 font-bold">Low (23)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background rounded-lg">
              <span className="font-medium">Success Rate</span>
              <span className="text-primary font-bold">84%</span>
            </div>
          </div>
        </div>

        {/* Success Probability */}
        <div className="bg-muted/50 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Success Indicators
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Market Demand</span>
                <span className="text-sm font-bold text-green-600">High</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '89%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Competition Level</span>
                <span className="text-sm font-bold text-green-600">Low</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '23%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Revenue Potential</span>
                <span className="text-sm font-bold text-green-600">Excellent</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '96%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
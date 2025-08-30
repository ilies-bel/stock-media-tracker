import { Button } from "@/components/ui/button"
import { Target, Search } from "lucide-react"

interface OpportunityRadarProps {
  isHighlighted: boolean
  nicheAnalyzerHighlighted: boolean
}

export function OpportunityRadar({ isHighlighted, nicheAnalyzerHighlighted }: OpportunityRadarProps) {
  return (
    <div className={`
      bg-background border rounded-lg transition-all duration-500
      ${isHighlighted ? 'ring-4 ring-primary shadow-xl' : ''}
    `}>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
          <Target className="h-5 w-5 text-primary"/>
          Opportunity Radar
          <span className="ml-auto text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
            3 HOT
          </span>
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          High-value niches with exceptional ROI potential
        </p>

        {/* Search Bar */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Search niches, trends, or keywords..."
            className="flex-1 px-4 py-2 border rounded-lg text-sm bg-background"
            defaultValue="sustainable technology"
          />
          <Button size="sm" className="bg-primary">
            <Search className="h-4 w-4 mr-1"/>
            Analyze
          </Button>
        </div>

        {/* Niche Analyzer */}
        <div className={`
          space-y-3 transition-all duration-500
          ${nicheAnalyzerHighlighted ? 'scale-105' : ''}
        `}>
          {/* High Value Opportunity */}
          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold text-green-900">AI-Powered Healthcare</h4>
                <p className="text-xs text-green-700 mt-1">Medical technology, telemedicine, AI diagnosis</p>
              </div>
              <span className="px-2 py-1 bg-green-600 text-white text-xs rounded font-bold">
                HIGH VALUE
              </span>
            </div>
            <div className="grid grid-cols-4 gap-3 text-xs">
              <div>
                <span className="text-green-600 font-semibold">Demand</span>
                <div className="text-green-900 font-bold">+890%</div>
              </div>
              <div>
                <span className="text-green-600 font-semibold">Competition</span>
                <div className="text-green-900 font-bold">Low (23)</div>
              </div>
              <div>
                <span className="text-green-600 font-semibold">Est. Revenue</span>
                <div className="text-green-900 font-bold">$3,450/mo</div>
              </div>
              <div>
                <span className="text-green-600 font-semibold">ROI Score</span>
                <div className="text-green-900 font-bold">96/100</div>
              </div>
            </div>
          </div>

          {/* Medium Opportunity */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold">Remote Team Collaboration</h4>
                <p className="text-xs text-muted-foreground mt-1">Virtual meetings, hybrid work, team building</p>
              </div>
              <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                GROWING
              </span>
            </div>
            <div className="grid grid-cols-4 gap-3 text-xs">
              <div>
                <span className="text-muted-foreground">Demand</span>
                <div className="font-bold">+340%</div>
              </div>
              <div>
                <span className="text-muted-foreground">Competition</span>
                <div className="font-bold">Medium (156)</div>
              </div>
              <div>
                <span className="text-muted-foreground">Est. Revenue</span>
                <div className="font-bold">$1,820/mo</div>
              </div>
              <div>
                <span className="text-muted-foreground">ROI Score</span>
                <div className="font-bold">78/100</div>
              </div>
            </div>
          </div>

          {/* Emerging Opportunity */}
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold">Sustainable Fashion Tech</h4>
                <p className="text-xs text-muted-foreground mt-1">Eco materials, circular economy, fashion tech</p>
              </div>
              <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded">
                EMERGING
              </span>
            </div>
            <div className="grid grid-cols-4 gap-3 text-xs">
              <div>
                <span className="text-muted-foreground">Demand</span>
                <div className="font-bold">+125%</div>
              </div>
              <div>
                <span className="text-muted-foreground">Competition</span>
                <div className="font-bold">Very Low (8)</div>
              </div>
              <div>
                <span className="text-muted-foreground">Est. Revenue</span>
                <div className="font-bold">$980/mo</div>
              </div>
              <div>
                <span className="text-muted-foreground">ROI Score</span>
                <div className="font-bold">82/100</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
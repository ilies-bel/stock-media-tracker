import { Hash, Globe, BarChart3 } from "lucide-react"

interface KeywordGeneratorProps {
  isHighlighted: boolean
  platformOptimizerHighlighted: boolean
}

export function KeywordGenerator({ isHighlighted, platformOptimizerHighlighted }: KeywordGeneratorProps) {
  return (
    <div className={`
      bg-background border rounded-lg transition-all duration-500
      ${isHighlighted ? 'ring-4 ring-primary shadow-xl' : ''}
    `}>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Hash className="h-5 w-5 text-primary"/>
          Smart Keyword Generator
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {/* Platform Optimizer */}
          <div className={`
            p-4 bg-muted rounded-lg transition-all duration-500
            ${platformOptimizerHighlighted ? 'ring-2 ring-primary bg-primary/5' : ''}
          `}>
            <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
              <Globe className="h-4 w-4"/>
              Platform Optimization
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center p-2 bg-background rounded">
                <span>Shutterstock</span>
                <span className="text-green-600 font-semibold">25 keywords</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-background rounded">
                <span>Adobe Stock</span>
                <span className="text-blue-600 font-semibold">49 keywords</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-background rounded">
                <span>Getty Images</span>
                <span className="text-purple-600 font-semibold">30 keywords</span>
              </div>
            </div>
          </div>

          {/* Keyword Performance */}
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
              <BarChart3 className="h-4 w-4"/>
              Keyword Performance
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span>Search Volume</span>
                <span className="font-semibold">847K/month</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Competition Score</span>
                <span className="font-semibold text-green-600">Low (23)</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Conversion Rate</span>
                <span className="font-semibold">4.7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Est. CTR</span>
                <span className="font-semibold text-green-600">+67%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
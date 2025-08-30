import { DollarSign, Camera, Award, TrendingUp, Globe, ArrowUp, Zap } from "lucide-react"

interface StatsCardsProps {
  isHighlighted: boolean
}

export function StatsCards({ isHighlighted }: StatsCardsProps) {
  return (
    <div className={`
      grid grid-cols-5 gap-4 mb-6 px-8 transition-all duration-500
      ${isHighlighted ? 'ring-4 ring-primary ring-offset-2 bg-primary/5' : ''}
    `}>
      <div className="bg-background border rounded-lg p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-muted-foreground">Monthly Revenue</span>
          <DollarSign className="h-3 w-3 text-green-600"/>
        </div>
        <div className="text-2xl font-bold text-foreground">$4,832</div>
        <div className="flex items-center text-green-600 text-xs">
          <ArrowUp className="h-3 w-3"/>
          +42% vs last month
        </div>
      </div>

      <div className="bg-background border rounded-lg p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-muted-foreground">Portfolio Size</span>
          <Camera className="h-3 w-3 text-muted-foreground"/>
        </div>
        <div className="text-2xl font-bold text-foreground">2,457</div>
        <div className="flex items-center text-green-600 text-xs">
          <ArrowUp className="h-3 w-3"/>
          +156 this week
        </div>
      </div>

      <div className="bg-background border rounded-lg p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-muted-foreground">Keyword Score</span>
          <Award className="h-3 w-3 text-yellow-600"/>
        </div>
        <div className="text-2xl font-bold text-foreground">92.5</div>
        <div className="flex items-center text-green-600 text-xs">
          <ArrowUp className="h-3 w-3"/>
          Top 5% percentile
        </div>
      </div>

      <div className="bg-background border rounded-lg p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-muted-foreground">Downloads/Day</span>
          <TrendingUp className="h-3 w-3 text-blue-600"/>
        </div>
        <div className="text-2xl font-bold text-foreground">47.3</div>
        <div className="flex items-center text-green-600 text-xs">
          <ArrowUp className="h-3 w-3"/>
          +18% growth
        </div>
      </div>

      <div className="bg-background border rounded-lg p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-muted-foreground">Platform Reach</span>
          <Globe className="h-3 w-3 text-purple-600"/>
        </div>
        <div className="text-2xl font-bold text-foreground">7/7</div>
        <div className="flex items-center text-green-600 text-xs">
          <Zap className="h-3 w-3"/>
          All synced
        </div>
      </div>
    </div>
  )
}
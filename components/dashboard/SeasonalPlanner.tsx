import { Calendar } from "lucide-react"

interface SeasonalPlannerProps {
  isHighlighted: boolean
  upcomingEventsHighlighted: boolean
}

export function SeasonalPlanner({ isHighlighted, upcomingEventsHighlighted }: SeasonalPlannerProps) {
  return (
    <div className={`
      bg-background border rounded-lg transition-all duration-500
      ${isHighlighted ? 'ring-4 ring-primary shadow-xl' : ''}
    `}>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary"/>
          Seasonal Planner
        </h3>

        {/* Upcoming Events */}
        <div className={`
          space-y-3 transition-all duration-500
          ${upcomingEventsHighlighted ? 'scale-105' : ''}
        `}>
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="text-xs text-red-600">FEB</div>
                <div className="text-lg font-bold">14</div>
              </div>
              <div>
                <div className="font-semibold">Valentine&apos;s Day</div>
                <div className="text-xs text-muted-foreground">Romance, couples, gifts, hearts</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-green-600 font-bold">+890%</div>
              <div className="text-xs text-muted-foreground">Upload by Jan 15</div>
            </div>
          </div>

          <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="text-xs text-green-600">MAR</div>
                <div className="text-lg font-bold">17</div>
              </div>
              <div>
                <div className="font-semibold">St. Patrick&apos;s Day</div>
                <div className="text-xs text-muted-foreground">Irish culture, green, celebrations</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-green-600 font-bold">+420%</div>
              <div className="text-xs text-muted-foreground">Upload by Feb 20</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
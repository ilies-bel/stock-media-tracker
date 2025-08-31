import { Calendar, Heart, Clover, Leaf, Clock, AlertTriangle, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SeasonalPlannerTab() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 h-full">
      {/* Interactive 6-Month Calendar */}
      <div className="mb-8">
        <div className="bg-background border-2 border-border rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-2xl font-bold text-center mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-3">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            2024 Seasonal Opportunity Calendar
          </h3>
          
          {/* Mini Calendar Grid - 6 months */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mb-4 sm:mb-6">
            {[
              { month: 'JAN', current: true, events: 2 },
              { month: 'FEB', events: 3, hot: true },
              { month: 'MAR', events: 2 },
              { month: 'APR', events: 2 },
              { month: 'MAY', events: 1 },
              { month: 'JUN', events: 1 }
            ].map((month, index) => (
              <div
                key={index}
                className={`
                  relative p-2 sm:p-3 rounded-lg text-center cursor-pointer transition-all
                  ${month.current 
                    ? 'bg-primary text-primary-foreground shadow-lg ring-2 ring-primary' 
                    : month.hot 
                    ? 'bg-red-50 border border-red-200 hover:bg-red-100' 
                    : 'bg-muted hover:bg-muted/80'
                  }
                `}
              >
                <div className="font-bold text-xs sm:text-sm">{month.month}</div>
                <div className="text-[10px] sm:text-xs mt-0.5 sm:mt-1">
                  {month.events}
                  <span className="hidden sm:inline"> events</span>
                </div>
                {month.hot && (
                  <div className="absolute -top-1 -right-1 w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
                )}
              </div>
            ))}
          </div>

          {/* Second row for next 6 months */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mb-4 sm:mb-6">
            {[
              { month: 'JUL', events: 1 },
              { month: 'AUG', events: 2 },
              { month: 'SEP', events: 2 },
              { month: 'OCT', events: 3 },
              { month: 'NOV', events: 2 },
              { month: 'DEC', events: 4, hot: true }
            ].map((month, index) => (
              <div
                key={index}
                className={`
                  relative p-2 sm:p-3 rounded-lg text-center cursor-pointer transition-all
                  ${month.hot 
                    ? 'bg-red-50 border border-red-200 hover:bg-red-100' 
                    : 'bg-muted hover:bg-muted/80'
                  }
                `}
              >
                <div className="font-bold text-xs sm:text-sm">{month.month}</div>
                <div className="text-[10px] sm:text-xs mt-0.5 sm:mt-1">
                  {month.events}
                  <span className="hidden sm:inline"> events</span>
                </div>
                {month.hot && (
                  <div className="absolute -top-1 -right-1 w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
                )}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full"></span>
              <span>Hot Opportunities</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="w-2 sm:w-3 h-2 sm:h-3 bg-orange-500 rounded-full"></span>
              <span>Growing Trends</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full"></span>
              <span>Emerging Events</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Opportunities */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-primary" />
            Upcoming Opportunities
          </h3>

          {/* Valentine's Day */}
          <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-xl">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <div className="text-xs text-red-600 font-medium">FEB</div>
                  <div className="text-2xl font-bold">14</div>
                </div>
                <div>
                  <h4 className="font-bold text-red-900 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    Valentine&apos;s Day
                  </h4>
                  <p className="text-sm text-red-700">Romance, couples, gifts, hearts</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-600 font-bold text-lg">+890%</div>
                <div className="text-xs text-red-600 font-medium">High Revenue</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-red-700">
                <Clock className="w-4 h-4" />
                Upload deadline: January 15th
              </div>
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                Plan Content
              </Button>
            </div>
          </div>

          {/* St. Patrick's Day */}
          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <div className="text-xs text-green-600 font-medium">MAR</div>
                  <div className="text-2xl font-bold">17</div>
                </div>
                <div>
                  <h4 className="font-bold text-green-900 flex items-center gap-2">
                    <Clover className="w-4 h-4 text-green-500" />
                    St. Patrick&apos;s Day
                  </h4>
                  <p className="text-sm text-green-700">Irish culture, green, shamrocks, celebration</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-600 font-bold text-lg">+420%</div>
                <div className="text-xs text-green-600 font-medium">Medium Revenue</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-green-700">
                <Clock className="w-4 h-4" />
                Upload deadline: February 20th
              </div>
              <Button size="sm" variant="outline" className="border-green-200 hover:bg-green-50">
                Plan Content
              </Button>
            </div>
          </div>

          {/* Earth Day */}
          <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <div className="text-xs text-emerald-600 font-medium">APR</div>
                  <div className="text-2xl font-bold">22</div>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-900 flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-emerald-500" />
                    Earth Day
                  </h4>
                  <p className="text-sm text-emerald-700">Environment, sustainable, green, nature</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-600 font-bold text-lg">+340%</div>
                <div className="text-xs text-emerald-600 font-medium">Growing</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-emerald-700">
                <Clock className="w-4 h-4" />
                Upload deadline: March 25th
              </div>
              <Button size="sm" variant="outline" className="border-emerald-200 hover:bg-emerald-50">
                Plan Content
              </Button>
            </div>
          </div>
        </div>

        {/* Planning Tools & Intelligence */}
        <div className="space-y-6">
          {/* Seasonal Intelligence Panel */}
          <div className="bg-muted/50 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Seasonal Intelligence
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-background rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Peak Season Performance</span>
                  <span className="text-primary font-bold">+450% avg</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              
              <div className="p-4 bg-background rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Upload Timing Success</span>
                  <span className="text-green-600 font-bold">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
              
              <div className="p-4 bg-background rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Market Prediction Accuracy</span>
                  <span className="text-purple-600 font-bold">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '87%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-muted/50 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center p-3 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">45</div>
                <div className="text-muted-foreground">Days to Valentine&apos;s</div>
              </div>
              <div className="text-center p-3 bg-background rounded-lg">
                <div className="text-2xl font-bold text-green-600">3</div>
                <div className="text-muted-foreground">Hot Opportunities</div>
              </div>
              <div className="text-center p-3 bg-background rounded-lg">
                <div className="text-2xl font-bold text-orange-600">12</div>
                <div className="text-muted-foreground">Upload Deadlines</div>
              </div>
              <div className="text-center p-3 bg-background rounded-lg">
                <div className="text-2xl font-bold text-purple-600">89%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
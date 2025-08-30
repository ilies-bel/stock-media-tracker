import { Button } from "@/components/ui/button"
import { Sparkles, Lightbulb, Zap, Users, Award, FileText, Upload, Clock } from "lucide-react"

interface DashboardSidebarProps {
  competitorTrackingHighlighted: boolean
  successPatternsHighlighted: boolean
}

export function DashboardSidebar({ competitorTrackingHighlighted, successPatternsHighlighted }: DashboardSidebarProps) {
  return (
    <div className="space-y-4">
      {/* AI Recommendations */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-purple-600"/>
          AI Recommendations
        </h4>
        <div className="space-y-3">
          <div className="p-3 bg-white rounded-lg border border-purple-100">
            <div className="flex items-start gap-2">
              <Lightbulb className="h-4 w-4 text-yellow-500 mt-0.5"/>
              <div>
                <p className="text-sm font-medium">Quick Win Detected!</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Add &quot;sustainable&quot; to 47 images for +23% visibility
                </p>
              </div>
            </div>
          </div>
          <div className="p-3 bg-white rounded-lg border border-purple-100">
            <div className="flex items-start gap-2">
              <Zap className="h-4 w-4 text-orange-500 mt-0.5"/>
              <div>
                <p className="text-sm font-medium">Trending Alert</p>
                <p className="text-xs text-muted-foreground mt-1">
                  &quot;AI workplace&quot; searches up 340% this week
                </p>
              </div>
            </div>
          </div>
        </div>
        <Button className="w-full mt-4" size="sm">
          View All Suggestions
        </Button>
      </div>

      {/* Competitor Tracking */}
      <div className={`
        bg-background border rounded-lg p-6 transition-all duration-500
        ${competitorTrackingHighlighted ? 'ring-4 ring-primary bg-primary/5' : ''}
      `}>
        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Users className="h-5 w-5"/>
          Top Performers
        </h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-green-700">#1</span>
              </div>
              <div>
                <p className="text-sm font-medium">PhotoPro_USA</p>
                <p className="text-xs text-muted-foreground">12.4k photos</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold">$24.5k</p>
              <p className="text-xs text-green-600">+18%</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-gray-700">#2</span>
              </div>
              <div>
                <p className="text-sm font-medium">CreativeStock</p>
                <p className="text-xs text-muted-foreground">8.7k photos</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold">$18.2k</p>
              <p className="text-xs text-green-600">+12%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Patterns */}
      <div className={`
        bg-background border rounded-lg p-6 transition-all duration-500
        ${successPatternsHighlighted ? 'ring-4 ring-primary bg-primary/5' : ''}
      `}>
        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Award className="h-5 w-5"/>
          Success Patterns
        </h4>
        <div className="space-y-2 text-sm">
          <div className="p-2 bg-muted rounded flex items-center justify-between">
            <span>Upload frequency</span>
            <span className="font-semibold">Daily</span>
          </div>
          <div className="p-2 bg-muted rounded flex items-center justify-between">
            <span>Avg keywords</span>
            <span className="font-semibold">42</span>
          </div>
          <div className="p-2 bg-muted rounded flex items-center justify-between">
            <span>Best time</span>
            <span className="font-semibold">Tue 3PM</span>
          </div>
          <div className="p-2 bg-muted rounded flex items-center justify-between">
            <span>Top style</span>
            <span className="font-semibold">Minimal</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-background border rounded-lg p-6">
        <h4 className="font-bold text-lg mb-4">Quick Actions</h4>
        <div className="space-y-2">
          <Button className="w-full justify-start" variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2"/>
            Generate Report
          </Button>
          <Button className="w-full justify-start" variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2"/>
            Bulk Optimize
          </Button>
          <Button className="w-full justify-start" variant="outline" size="sm">
            <Clock className="h-4 w-4 mr-2"/>
            Schedule Upload
          </Button>
        </div>
      </div>
    </div>
  )
}
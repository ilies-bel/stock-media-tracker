"use client"

import React, { useState, useEffect } from 'react'
import { Camera, Search, TrendingUp, Upload, Download, BarChart3, Target, Lightbulb, Star, ArrowUp, ArrowDown, Filter, RefreshCw, ChevronRight, Sparkles, Eye } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useSubscription } from "@/lib/contexts/SubscriptionContext"
import { EmailSignupModal } from "@/components/EmailSignupModal"

const InteractiveDashboard = () => {
  const [activeFeature, setActiveFeature] = useState('opportunities')
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [emailModalOpen, setEmailModalOpen] = useState(false)
  const { creatorCount } = useSubscription()

  const features = [
    {
      id: 'opportunities',
      label: 'Find Hidden Opportunities',
      icon: <Search className="w-4 h-4" />,
      color: 'orange',
      description: 'AI discovers profitable niches with high demand & low competition',
      highlights: ['trending-section', 'low-competition'],
      callouts: [
        { id: 'trending', text: '+340% Trending!', position: 'left-[280px] top-[420px]' },
        { id: 'niche', text: 'Untapped Niche!', position: 'right-[320px] top-[520px]' }
      ]
    },
    {
      id: 'performance',
      label: 'Track Real Earnings',
      icon: <TrendingUp className="w-4 h-4" />,
      color: 'green',
      description: 'Monitor your actual sales and keyword performance across platforms',
      highlights: ['stats-cards', 'top-keywords'],
      callouts: [
        { id: 'earnings', text: '$2,847/month!', position: 'right-[80px] top-[180px]' },
        { id: 'growth', text: '+18.3% Growth!', position: 'right-[100px] top-[230px]' }
      ]
    },
    {
      id: 'optimize',
      label: 'Optimize & Scale',
      icon: <Sparkles className="w-4 h-4" />,
      color: 'purple',
      description: 'Get AI-powered keyword suggestions that actually convert to sales',
      highlights: ['optimization-section', 'quick-actions'],
      callouts: [
        { id: 'visibility', text: '+45% Visibility!', position: 'left-[350px] bottom-[280px]' },
        { id: 'suggestions', text: 'Smart Keywords!', position: 'left-[300px] bottom-[350px]' }
      ]
    }
  ]

  // Auto-play through features
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setActiveFeature(current => {
        const currentIndex = features.findIndex(f => f.id === current)
        const nextIndex = (currentIndex + 1) % features.length
        return features[nextIndex].id
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, features])

  const currentFeature = features.find(f => f.id === activeFeature)

  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Eye className="w-4 h-4" />
              Live Dashboard Preview
            </div>
            <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl text-balance mb-4">
              See The <span className="text-primary">Unfair Advantage</span> In Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch how successful photographers are finding untapped niches and earning 3x more with data-driven shooting
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => {
                  setActiveFeature(feature.id)
                  setIsAutoPlaying(false)
                }}
                className={`
                  relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300
                  ${activeFeature === feature.id
                    ? 'bg-primary text-primary-foreground shadow-xl scale-105'
                    : 'bg-background text-foreground hover:bg-muted border border-border'
                  }
                `}
              >
                {feature.icon}
                {feature.label}
                {activeFeature === feature.id && (
                  <span className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Feature Description */}
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground font-medium">
              {currentFeature?.description}
            </p>
          </div>

          {/* Dashboard Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Browser Frame */}
            <div className="bg-slate-900 rounded-t-xl p-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-slate-800 rounded px-4 py-1 text-slate-400 text-sm">
                  app.keywordlens.com/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="bg-background rounded-b-xl shadow-2xl overflow-hidden relative">
              {/* Navigation */}
              <nav className="border-b bg-background">
                <div className="px-8 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Camera className="h-8 w-8 text-primary" />
                      <span className="text-xl font-bold text-foreground">KeywordLens</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-sm font-medium text-muted-foreground">Dashboard</span>
                      <span className="text-sm font-medium text-muted-foreground">Analytics</span>
                      <span className="text-sm font-medium text-muted-foreground">Settings</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button variant="outline" size="sm">Sync</Button>
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">JD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>

              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-foreground mb-2">Keyword Planner Dashboard</h1>
                  <p className="text-muted-foreground">Optimize your stock photos with AI-powered keyword insights</p>
                </div>

                {/* Stats Cards */}
                <div className={`
                  grid grid-cols-4 gap-4 mb-6 p-2 rounded-lg transition-all duration-500
                  ${currentFeature?.highlights.includes('stats-cards') ? 'ring-4 ring-primary ring-offset-2 bg-primary/5' : ''}
                `}>
                  <div className="bg-background border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-muted-foreground">Total Photos</span>
                      <Camera className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">1,247</div>
                    <div className="flex items-center text-green-600 text-xs">
                      <ArrowUp className="h-3 w-3" />
                      +12%
                    </div>
                  </div>

                  <div className="bg-background border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-muted-foreground">Avg. Keywords</span>
                      <Target className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">23.4</div>
                    <div className="flex items-center text-green-600 text-xs">
                      <ArrowUp className="h-3 w-3" />
                      +5.2%
                    </div>
                  </div>

                  <div className="bg-background border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-muted-foreground">Performance Score</span>
                      <BarChart3 className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">87.2</div>
                    <div className="flex items-center text-red-600 text-xs">
                      <ArrowDown className="h-3 w-3" />
                      -2.1%
                    </div>
                  </div>

                  <div className="bg-background border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-muted-foreground">Monthly Earnings</span>
                      <TrendingUp className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">$2,847</div>
                    <div className="flex items-center text-green-600 text-xs">
                      <ArrowUp className="h-3 w-3" />
                      +18.3%
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {/* Main Content */}
                  <div className="col-span-2 space-y-6">
                    {/* Keyword Research Card */}
                    <div className="bg-background border rounded-lg">
                      <div className="p-6">
                        <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                          <Search className="h-5 w-5" />
                          Keyword Research
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Find new topics and optimize your existing footage with AI-powered insights
                        </p>

                        {/* Search Bar */}
                        <div className="flex gap-2 mb-6">
                          <input 
                            type="text" 
                            placeholder="Enter niche, category, or trending topic..."
                            className="flex-1 px-4 py-2 border rounded-lg text-sm bg-background"
                            readOnly
                          />
                          <Button size="sm">
                            <Search className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {/* Trending Now */}
                          <div className={`
                            p-4 bg-muted rounded-lg transition-all duration-500
                            ${currentFeature?.highlights.includes('trending-section') ? 'ring-4 ring-primary scale-105 bg-primary/5' : ''}
                          `}>
                            <div className="flex items-center gap-2 mb-3 text-green-600">
                              <TrendingUp className="h-4 w-4" />
                              <span className="font-medium text-sm">Trending Now</span>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-foreground">AI workplace integration</span>
                                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-semibold">+340%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-foreground">Sustainable fashion</span>
                                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-semibold">+180%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-foreground">Mental health awareness</span>
                                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-semibold">+125%</span>
                              </div>
                            </div>
                          </div>

                          {/* Low Competition */}
                          <div className={`
                            p-4 bg-muted rounded-lg transition-all duration-500
                            ${currentFeature?.highlights.includes('low-competition') ? 'ring-4 ring-primary scale-105 bg-primary/5' : ''}
                          `}>
                            <div className="flex items-center gap-2 mb-3 text-blue-600">
                              <Target className="h-4 w-4" />
                              <span className="font-medium text-sm">Low Competition</span>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-foreground">Vertical farming concepts</span>
                                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Low</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-foreground">Hybrid work setups</span>
                                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">Medium</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-foreground">Digital detox lifestyle</span>
                                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Low</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Optimization Section */}
                        <div className={`
                          mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg transition-all duration-500
                          ${currentFeature?.highlights.includes('optimization-section') ? 'ring-4 ring-primary' : ''}
                        `}>
                          <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="h-4 w-4 text-blue-600" />
                            <span className="font-medium text-sm">Optimization Analysis</span>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Search visibility:</span>
                              <span className="ml-2 font-semibold text-green-600">+45%</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Keyword density:</span>
                              <span className="ml-2 font-semibold text-green-600">+23%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-4">
                    {/* Quick Actions */}
                    <div className={`
                      bg-background border rounded-lg p-6 transition-all duration-500
                      ${currentFeature?.highlights.includes('quick-actions') ? 'ring-4 ring-primary bg-primary/5' : ''}
                    `}>
                      <h4 className="font-bold text-lg mb-4">Quick Actions</h4>
                      <div className="space-y-2">
                        <button className="w-full text-left px-4 py-3 bg-muted rounded-lg hover:bg-muted/80 flex items-center gap-3 text-sm">
                          <Lightbulb className="h-4 w-4 text-primary" />
                          Get Keyword Suggestions
                        </button>
                        <button className="w-full text-left px-4 py-3 bg-muted rounded-lg hover:bg-muted/80 flex items-center gap-3 text-sm">
                          <BarChart3 className="h-4 w-4 text-primary" />
                          View Analytics
                        </button>
                        <button className="w-full text-left px-4 py-3 bg-muted rounded-lg hover:bg-muted/80 flex items-center gap-3 text-sm">
                          <Download className="h-4 w-4 text-primary" />
                          Export Keywords
                        </button>
                      </div>
                    </div>

                    {/* Top Keywords */}
                    <div className={`
                      bg-background border rounded-lg p-6 transition-all duration-500
                      ${currentFeature?.highlights.includes('top-keywords') ? 'ring-4 ring-primary bg-primary/5' : ''}
                    `}>
                      <h4 className="font-bold text-lg mb-4">Top Performing</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">business team</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-xs font-medium">4.8</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">modern office</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-xs font-medium">4.6</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">creative workspace</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-xs font-medium">4.4</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Callouts */}
              {currentFeature?.callouts.map((callout) => (
                <div
                  key={callout.id}
                  className={`
                    absolute ${callout.position} 
                    bg-primary text-primary-foreground
                    px-4 py-2 rounded-lg shadow-xl 
                    animate-pulse z-10
                    after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2
                    after:border-4 after:border-transparent after:border-t-primary
                  `}
                >
                  <span className="text-sm font-bold">{callout.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <EmailSignupModal 
        open={emailModalOpen} 
        onOpenChange={setEmailModalOpen} 
      />
    </>
  )
}

export default InteractiveDashboard
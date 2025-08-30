"use client"

import React, { useState, useEffect } from 'react'
import { Target, Hash, Calendar, Users, ArrowUp, Eye } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { EmailSignupModal } from "@/components/EmailSignupModal"

// Dashboard components
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { StatsCards } from "@/components/dashboard/StatsCards"
import { OpportunityRadar } from "@/components/dashboard/OpportunityRadar"
import { KeywordGenerator } from "@/components/dashboard/KeywordGenerator"
import { SeasonalPlanner } from "@/components/dashboard/SeasonalPlanner"
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar"

const InteractiveDashboard = () => {
    const [activeFeature, setActiveFeature] = useState('opportunities')
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [emailModalOpen, setEmailModalOpen] = useState(false)

    const features = [
        {
            id: 'opportunities',
            label: 'Find Profitable Niches',
            icon: <Target className="w-4 h-4"/>,
            color: 'orange',
            description: 'AI scans all major platforms to find high-demand topics with low competition',
            highlights: ['opportunity-radar', 'niche-analyzer'],
            callouts: [
                {id: 'profit', text: '$3,450 potential/month!', position: 'left-[200px] top-[350px]'},
                {id: 'gap', text: 'Only 23 images exist!', position: 'right-[200px] top-[450px]'}
            ]
        },
        {
            id: 'keywords',
            label: 'Smart Keyword Research',
            icon: <Hash className="w-4 h-4"/>,
            color: 'blue',
            description: 'Get platform-optimized keywords that actually convert to sales',
            highlights: ['keyword-generator', 'platform-optimizer'],
            callouts: [
                {id: 'conversion', text: '+67% Better CTR!', position: 'left-[250px] top-[520px]'},
                {id: 'ranking', text: 'Rank #1 on 5 platforms!', position: 'right-[150px] top-[480px]'}
            ]
        },
        {
            id: 'seasonal',
            label: 'Seasonal Planning',
            icon: <Calendar className="w-4 h-4"/>,
            color: 'green',
            description: 'Never miss trending moments with 12-month forecasting and alerts',
            highlights: ['seasonal-calendar', 'upcoming-events'],
            callouts: [
                {id: 'upcoming', text: 'Valentine +890% in 45 days!', position: 'right-[100px] top-[400px]'},
                {id: 'alert', text: 'Upload by Jan 15!', position: 'left-[200px] top-[550px]'}
            ]
        },
        {
            id: 'competition',
            label: 'Competition Analysis',
            icon: <Users className="w-4 h-4"/>,
            color: 'purple',
            description: 'Track top performers and find gaps in their portfolios',
            highlights: ['competitor-tracking', 'success-patterns'],
            callouts: [
                {id: 'spy', text: 'Top seller uploaded!', position: 'left-[50px] top-[450px]'},
                {id: 'pattern', text: 'Missing this style!', position: 'right-[50px] top-[520px]'}
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
            <section id="dashboard" className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Eye className="w-4 h-4"/>
                            Live Dashboard Preview
                        </div>
                        <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl text-balance mb-4">
                            Your <span className="text-primary">Command Center</span> For Stock Success
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            See how top photographers are earning 5x more by shooting what actually sells
                        </p>
                    </div>

                    {/* Feature Tabs - Compact Horizontal */}
                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                        {features.map((feature) => (
                            <button
                                key={feature.id}
                                onClick={() => {
                                    setActiveFeature(feature.id)
                                    setIsAutoPlaying(false)
                                }}
                                className={`
                                    relative flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300
                                    ${activeFeature === feature.id
                                        ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                                        : 'bg-background text-foreground hover:bg-muted border border-border'
                                    }
                                `}
                            >
                                {feature.icon}
                                <span className="text-sm">{feature.label}</span>
                                {activeFeature === feature.id && (
                                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
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

                    {/* Dashboard Container - Full Width */}
                    <div className="relative max-w-6xl mx-auto">
                        {/* Browser Frame */}
                        <div className="bg-slate-900 rounded-t-xl p-3 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 bg-red-500 rounded-full"/>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
                                <div className="w-3 h-3 bg-green-500 rounded-full"/>
                            </div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="bg-background rounded-b-xl shadow-2xl overflow-hidden relative">
                            <DashboardHeader />
                            
                            <StatsCards isHighlighted={currentFeature?.highlights.includes('stats-cards') || false} />

                            <div className="px-8 pb-8">
                                <div className="grid grid-cols-3 gap-6">
                                    {/* Main Content Area */}
                                    <div className="col-span-2 space-y-6">
                                        <OpportunityRadar 
                                            isHighlighted={currentFeature?.highlights.includes('opportunity-radar') || false}
                                            nicheAnalyzerHighlighted={currentFeature?.highlights.includes('niche-analyzer') || false}
                                        />

                                        <KeywordGenerator 
                                            isHighlighted={currentFeature?.highlights.includes('keyword-generator') || false}
                                            platformOptimizerHighlighted={currentFeature?.highlights.includes('platform-optimizer') || false}
                                        />

                                        <SeasonalPlanner 
                                            isHighlighted={currentFeature?.highlights.includes('seasonal-calendar') || false}
                                            upcomingEventsHighlighted={currentFeature?.highlights.includes('upcoming-events') || false}
                                        />
                                    </div>

                                    {/* Sidebar */}
                                    <DashboardSidebar 
                                        competitorTrackingHighlighted={currentFeature?.highlights.includes('competitor-tracking') || false}
                                        successPatternsHighlighted={currentFeature?.highlights.includes('success-patterns') || false}
                                    />
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

                    {/* CTA Section */}
                    <div className="text-center mt-12">
                        <p className="text-lg text-muted-foreground mb-6">
                            Join 2,400+ photographers earning 5x more with KeywordLens
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" onClick={() => setEmailModalOpen(true)}>
                                Start Free Trial
                                <ArrowUp className="ml-2 h-4 w-4"/>
                            </Button>
                            <Button size="lg" variant="outline">
                                Watch Demo
                                <Eye className="ml-2 h-4 w-4"/>
                            </Button>
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
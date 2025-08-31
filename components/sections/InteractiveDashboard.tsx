"use client"

import React, {useEffect, useState} from 'react'
import {Calendar, Eye, Hash, Target, Users} from 'lucide-react'
import {EmailSignupModal} from "@/components/EmailSignupModal"

// Dashboard components
import {DashboardHeader} from "@/components/dashboard/DashboardHeader"
import {OpportunityRadarTab} from "@/components/dashboard/OpportunityRadarTab"
import {KeywordResearchTab} from "@/components/dashboard/KeywordResearchTab"
import {SeasonalPlannerTab} from "@/components/dashboard/SeasonalPlannerTab"
import {CompetitionAnalysisTab} from "@/components/dashboard/CompetitionAnalysisTab"

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
                <div className="container mx-auto px-2 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div
                            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
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

                    {/* Enhanced Feature Tabs */}
                    <div className="grid grid-cols-2 md:flex md:justify-center gap-2 mb-8 px-2 md:px-0">
                        {features.map((feature) => (
                            <button
                                key={feature.id}
                                onClick={() => {
                                    setActiveFeature(feature.id)
                                    setIsAutoPlaying(false)
                                }}
                                className={`
                                    relative flex items-center gap-1.5 px-3 py-2.5 rounded-lg font-medium transition-all duration-300
                                    ${activeFeature === feature.id
                                    ? 'bg-primary text-primary-foreground shadow-lg ring-2 ring-primary/50'
                                    : 'bg-background text-foreground hover:bg-muted border border-border hover:border-primary/30'
                                }
                                `}
                            >
                                <div className={`
                                    p-1 rounded-md transition-colors flex-shrink-0
                                    ${activeFeature === feature.id
                                    ? 'bg-primary-foreground/20'
                                    : 'bg-primary/10'
                                }
                                `}>
                                    {React.cloneElement(feature.icon, {
                                        className: `w-3.5 h-3.5 ${activeFeature === feature.id ? 'text-primary-foreground' : 'text-primary'}`
                                    })}
                                </div>
                                <span className="text-xs md:text-sm font-medium truncate">{feature.label}</span>
                                {activeFeature === feature.id && (
                                    <div
                                        className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
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
                        <div className="bg-background rounded-b-xl shadow-2xl overflow-hidden relative min-h-[700px]">
                            <DashboardHeader/>

                            {/* Tab Content Area - Full Screen */}
                            <div className="relative">
                                {/* Smooth transitions between tabs */}
                                <div
                                    className={`transition-opacity duration-500 ${activeFeature === 'opportunities' ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
                                    {activeFeature === 'opportunities' && (
                                        <OpportunityRadarTab/>
                                    )}
                                </div>

                                <div
                                    className={`transition-opacity duration-500 ${activeFeature === 'keywords' ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
                                    {activeFeature === 'keywords' && (
                                        <KeywordResearchTab/>
                                    )}
                                </div>

                                <div
                                    className={`transition-opacity duration-500 ${activeFeature === 'seasonal' ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
                                    {activeFeature === 'seasonal' && (
                                        <SeasonalPlannerTab/>
                                    )}
                                </div>

                                <div
                                    className={`transition-opacity duration-500 ${activeFeature === 'competition' ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
                                    {activeFeature === 'competition' && (
                                        <CompetitionAnalysisTab/>
                                    )}
                                </div>
                            </div>
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
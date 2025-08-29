"use client"

import React, {useEffect, useState} from 'react'
import {
    AlertCircle,
    ArrowUp,
    Award,
    BarChart3,
    Calendar,
    Camera,
    Clock,
    DollarSign,
    Eye,
    FileText,
    Globe,
    Hash,
    Lightbulb,
    Search,
    Sparkles,
    Target,
    TrendingUp,
    Upload,
    Users,
    Zap
} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {EmailSignupModal} from "@/components/EmailSignupModal"

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
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                            {/* Navigation */}
                            <nav className="border-b bg-background">
                                <div className="px-8 py-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Camera className="h-8 w-8 text-primary"/>
                                            <span className="text-xl font-bold text-foreground">KeywordLens</span>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <span className="text-sm font-medium text-primary">Dashboard</span>
                                            <span className="text-sm font-medium text-muted-foreground">Portfolio</span>
                                            <span className="text-sm font-medium text-muted-foreground">Analytics</span>
                                            <span className="text-sm font-medium text-muted-foreground">Calendar</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                                                <span className="text-xs font-medium">Live Sync</span>
                                            </div>
                                            <Button variant="outline" size="sm">
                                                <Upload className="h-3 w-3 mr-1"/>
                                                Bulk Upload
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </nav>

                            <div className="p-8">
                                {/* Header with Revenue Alert */}
                                <div className="mb-6 flex justify-between items-start">
                                    <div>
                                        <h1 className="text-3xl font-bold text-foreground mb-2">Market Intelligence
                                            Dashboard</h1>
                                        <p className="text-muted-foreground">Real-time insights from 7 major stock
                                            platforms</p>
                                    </div>
                                    <div
                                        className="bg-green-50 border border-green-200 px-4 py-2 rounded-lg flex items-center gap-2">
                                        <AlertCircle className="h-4 w-4 text-green-600"/>
                                        <span className="text-sm text-green-700 font-medium">3 new high-value opportunities detected!</span>
                                    </div>
                                </div>

                                {/* Enhanced Stats Cards */}
                                <div className="grid grid-cols-5 gap-4 mb-6">
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

                                <div className="grid grid-cols-3 gap-6">
                                    {/* Main Content Area */}
                                    <div className="col-span-2 space-y-6">

                                        {/* Opportunity Radar */}
                                        <div className={`
                                            bg-background border rounded-lg transition-all duration-500
                                            ${currentFeature?.highlights.includes('opportunity-radar') ? 'ring-4 ring-primary shadow-xl' : ''}
                                        `}>
                                            <div className="p-6">
                                                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                                                    <Target className="h-5 w-5 text-primary"/>
                                                    Opportunity Radar
                                                    <span
                                                        className="ml-auto text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
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
                                                    ${currentFeature?.highlights.includes('niche-analyzer') ? 'scale-105' : ''}
                                                `}>
                                                    {/* High Value Opportunity */}
                                                    <div
                                                        className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <div>
                                                                <h4 className="font-semibold text-green-900">AI-Powered
                                                                    Healthcare</h4>
                                                                <p className="text-xs text-green-700 mt-1">Medical
                                                                    technology, telemedicine, AI diagnosis</p>
                                                            </div>
                                                            <span
                                                                className="px-2 py-1 bg-green-600 text-white text-xs rounded font-bold">
                                                                HIGH VALUE
                                                            </span>
                                                        </div>
                                                        <div className="grid grid-cols-4 gap-3 text-xs">
                                                            <div>
                                                                <span
                                                                    className="text-green-600 font-semibold">Demand</span>
                                                                <div className="text-green-900 font-bold">+890%</div>
                                                            </div>
                                                            <div>
                                                                <span
                                                                    className="text-green-600 font-semibold">Competition</span>
                                                                <div className="text-green-900 font-bold">Low (23)</div>
                                                            </div>
                                                            <div>
                                                                <span className="text-green-600 font-semibold">Est. Revenue</span>
                                                                <div className="text-green-900 font-bold">$3,450/mo
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span
                                                                    className="text-green-600 font-semibold">ROI Score</span>
                                                                <div className="text-green-900 font-bold">96/100</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Medium Opportunity */}
                                                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <div>
                                                                <h4 className="font-semibold">Remote Team
                                                                    Collaboration</h4>
                                                                <p className="text-xs text-muted-foreground mt-1">Virtual
                                                                    meetings, hybrid work, team building</p>
                                                            </div>
                                                            <span
                                                                className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                                                                GROWING
                                                            </span>
                                                        </div>
                                                        <div className="grid grid-cols-4 gap-3 text-xs">
                                                            <div>
                                                                <span className="text-muted-foreground">Demand</span>
                                                                <div className="font-bold">+340%</div>
                                                            </div>
                                                            <div>
                                                                <span
                                                                    className="text-muted-foreground">Competition</span>
                                                                <div className="font-bold">Medium (156)</div>
                                                            </div>
                                                            <div>
                                                                <span
                                                                    className="text-muted-foreground">Est. Revenue</span>
                                                                <div className="font-bold">$1,820/mo</div>
                                                            </div>
                                                            <div>
                                                                <span className="text-muted-foreground">ROI Score</span>
                                                                <div className="font-bold">78/100</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Emerging Opportunity */}
                                                    <div
                                                        className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <div>
                                                                <h4 className="font-semibold">Sustainable Fashion
                                                                    Tech</h4>
                                                                <p className="text-xs text-muted-foreground mt-1">Eco
                                                                    materials, circular economy, fashion tech</p>
                                                            </div>
                                                            <span
                                                                className="px-2 py-1 bg-purple-600 text-white text-xs rounded">
                                                                EMERGING
                                                            </span>
                                                        </div>
                                                        <div className="grid grid-cols-4 gap-3 text-xs">
                                                            <div>
                                                                <span className="text-muted-foreground">Demand</span>
                                                                <div className="font-bold">+125%</div>
                                                            </div>
                                                            <div>
                                                                <span
                                                                    className="text-muted-foreground">Competition</span>
                                                                <div className="font-bold">Very Low (8)</div>
                                                            </div>
                                                            <div>
                                                                <span
                                                                    className="text-muted-foreground">Est. Revenue</span>
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

                                        {/* Keyword Generator */}
                                        <div className={`
                                            bg-background border rounded-lg transition-all duration-500
                                            ${currentFeature?.highlights.includes('keyword-generator') ? 'ring-4 ring-primary shadow-xl' : ''}
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
                                                        ${currentFeature?.highlights.includes('platform-optimizer') ? 'ring-2 ring-primary bg-primary/5' : ''}
                                                    `}>
                                                        <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
                                                            <Globe className="h-4 w-4"/>
                                                            Platform Optimization
                                                        </h4>
                                                        <div className="space-y-2 text-xs">
                                                            <div
                                                                className="flex justify-between items-center p-2 bg-background rounded">
                                                                <span>Shutterstock</span>
                                                                <span className="text-green-600 font-semibold">25 keywords</span>
                                                            </div>
                                                            <div
                                                                className="flex justify-between items-center p-2 bg-background rounded">
                                                                <span>Adobe Stock</span>
                                                                <span className="text-blue-600 font-semibold">49 keywords</span>
                                                            </div>
                                                            <div
                                                                className="flex justify-between items-center p-2 bg-background rounded">
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
                                                                <span
                                                                    className="font-semibold text-green-600">Low (23)</span>
                                                            </div>
                                                            <div className="flex justify-between items-center">
                                                                <span>Conversion Rate</span>
                                                                <span className="font-semibold">4.7%</span>
                                                            </div>
                                                            <div className="flex justify-between items-center">
                                                                <span>Est. CTR</span>
                                                                <span
                                                                    className="font-semibold text-green-600">+67%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Seasonal Calendar */}
                                        <div className={`
                                            bg-background border rounded-lg transition-all duration-500
                                            ${currentFeature?.highlights.includes('seasonal-calendar') ? 'ring-4 ring-primary shadow-xl' : ''}
                                        `}>
                                            <div className="p-6">
                                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                                    <Calendar className="h-5 w-5 text-primary"/>
                                                    Seasonal Planner
                                                </h3>

                                                {/* Upcoming Events */}
                                                <div className={`
                                                    space-y-3 transition-all duration-500
                                                    ${currentFeature?.highlights.includes('upcoming-events') ? 'scale-105' : ''}
                                                `}>
                                                    <div
                                                        className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className="text-center">
                                                                <div className="text-xs text-red-600">FEB</div>
                                                                <div className="text-lg font-bold">14</div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold">Valentine's Day</div>
                                                                <div className="text-xs text-muted-foreground">Romance,
                                                                    couples, gifts, hearts
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="text-green-600 font-bold">+890%</div>
                                                            <div className="text-xs text-muted-foreground">Upload by Jan
                                                                15
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className="text-center">
                                                                <div className="text-xs text-green-600">MAR</div>
                                                                <div className="text-lg font-bold">17</div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold">St. Patrick's Day</div>
                                                                <div className="text-xs text-muted-foreground">Irish
                                                                    culture, green, celebrations
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="text-green-600 font-bold">+420%</div>
                                                            <div className="text-xs text-muted-foreground">Upload by Feb
                                                                20
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Enhanced Sidebar */}
                                    <div className="space-y-4">
                                        {/* AI Recommendations */}
                                        <div
                                            className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
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
                                                                Add "sustainable" to 47 images for +23% visibility
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
                                                                "AI workplace" searches up 340% this week
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
                                            ${currentFeature?.highlights.includes('competitor-tracking') ? 'ring-4 ring-primary bg-primary/5' : ''}
                                        `}>
                                            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                                <Users className="h-5 w-5"/>
                                                Top Performers
                                            </h4>
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <div
                                                            className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                                            <span className="text-xs font-bold text-green-700">#1</span>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium">PhotoPro_USA</p>
                                                            <p className="text-xs text-muted-foreground">12.4k
                                                                photos</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-sm font-bold">$24.5k</p>
                                                        <p className="text-xs text-green-600">+18%</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <div
                                                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
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
                                            ${currentFeature?.highlights.includes('success-patterns') ? 'ring-4 ring-primary bg-primary/5' : ''}
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
                            Join 2,400+ photographers earning 5x more with data-driven shooting
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
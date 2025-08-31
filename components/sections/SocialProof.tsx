"use client"

import {useEffect, useState} from "react"
import {Star, TrendingUp, Users} from "lucide-react"
import {useSubscription} from "@/lib/contexts/SubscriptionContext"

export function SocialProof() {
    const [isVisible, setIsVisible] = useState(false)
    const {creatorCount, percentageFilled, isAnimating} = useSubscription()

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const stats = [
        {
            icon: Users,
            value: "28",
            label: "Beta testers",
            highlight: true
        },
        {
            icon: TrendingUp,
            value: "2.3M+",
            label: "Keywords found"
        },
        {
            icon: Star,
            value: "4.9",
            label: "Early tester rating"
        }
    ]

    return (
        <section id="social-proof" className="py-20 bg-muted/30">
            <div className="container mx-auto px-2 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                            Join hundreds of creators getting early access
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Photographers and content creators worldwide are securing their spot
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 sm:gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`text-center transition-all duration-700 ${
                                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                                style={{transitionDelay: `${index * 100}ms`}}
                            >
                                <div className={`inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg ${
                                    stat.highlight ? "bg-primary/10" : "bg-muted"
                                } mb-2 sm:mb-4`}>
                                    <stat.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${
                                        stat.highlight ? "text-primary" : "text-muted-foreground"
                                    }`}/>
                                </div>
                                <div className={`text-xl sm:text-3xl font-bold transition-all duration-500 ${
                                    stat.highlight ? "text-primary" : "text-foreground"
                                } ${stat.highlight && isAnimating ? "scale-110 animate-pulse" : ""}`}>
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 sm:mt-16 mx-auto max-w-4xl px-2 sm:px-0">
                        <div
                            className="relative rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-4 sm:p-6 lg:p-8">
                            <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                                <div
                                    className="rounded-full bg-background px-3 sm:px-4 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-primary border">
                                    Limited Early Access
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 sm:gap-6 text-center sm:text-left">
                                <div>
                                    <p className="text-base sm:text-lg font-semibold">
                                        Spots filling fast
                                    </p>
                                    <p className="text-sm sm:text-base text-muted-foreground mt-1">
                                        We&apos;re accepting <span className="font-semibold text-foreground">only 500 early adopters</span> to
                                        ensure quality feedback
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p className={`text-3xl sm:text-4xl font-bold text-primary transition-all duration-500 ${
                                        isAnimating ? "scale-110 animate-pulse" : ""
                                    }`}>
                                        {creatorCount}
                                    </p>
                                    <p className="text-xs sm:text-sm text-muted-foreground">creators joined</p>
                                </div>
                            </div>

                            <div className="mt-4 sm:mt-6">
                                <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                                    <span className="text-muted-foreground">Early access spots taken</span>
                                    <span className="font-semibold">{percentageFilled}%</span>
                                </div>
                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000"
                                        style={{width: isVisible ? `${percentageFilled}%` : "0%"}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
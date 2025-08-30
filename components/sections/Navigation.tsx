"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sparkles } from "lucide-react"
import { EmailSignupModal } from "@/components/EmailSignupModal"

export function Navigation() {
  const [emailModalOpen, setEmailModalOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 50 50" className="h-8 w-8">
                <g transform="translate(10, 10)">
                  <path d="M 15,3 
                           C 18,3 21,4 23,6
                           L 19,11
                           C 18,10 17,9 15,9
                           C 13,9 12,10 11,11
                           L 7,6
                           C 9,4 12,3 15,3 Z" 
                        fill="#EC6547"/>
                  <path d="M 23,7 
                           C 25,9 27,12 27,15
                           C 27,18 25,21 23,23
                           L 19,19
                           C 20,18 20,17 20,15
                           C 20,13 20,12 19,11
                           Z" 
                        fill="#F47A5E"/>
                  <path d="M 23,23 
                           C 21,25 18,27 15,27
                           C 12,27 9,25 7,23
                           L 11,19
                           C 12,20 13,20 15,20
                           C 17,20 18,20 19,19
                           Z" 
                        fill="#EC6547"/>
                  <path d="M 7,23 
                           C 5,21 3,18 3,15
                           C 3,12 5,9 7,7
                           L 11,11
                           C 10,12 9,13 9,15
                           C 9,17 10,18 11,19
                           Z" 
                        fill="#F47A5E"/>
                </g>
              </svg>
              <span className="font-serif text-xl font-bold text-foreground">KeywordLens</span>
            </div>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer"
                    onClick={() => scrollToSection('features')}
                  >
                    Features
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer"
                    onClick={() => scrollToSection('dashboard')}
                  >
                    Dashboard
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer"
                    onClick={() => scrollToSection('social-proof')}
                  >
                    Testimonials
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer"
                    onClick={() => scrollToSection('cta')}
                  >
                    Get Started
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
              <Button 
                size="sm"
                onClick={() => setEmailModalOpen(true)}
              >
                Get Early Access
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <EmailSignupModal 
        open={emailModalOpen} 
        onOpenChange={setEmailModalOpen} 
      />
    </>
  )
}
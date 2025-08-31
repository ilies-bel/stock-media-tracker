import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/stock-media-tracker' : '';

export const metadata: Metadata = {
  title: "KeywordLens - Stock Photo Keyword Planner",
  description:
    "Optimize your stock photo keywords for better discoverability and sales with AI-powered keyword planning.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico` },
      { url: `${basePath}/icon-192.png`, sizes: '192x192', type: 'image/png' },
      { url: `${basePath}/icon-512.png`, sizes: '512x512', type: 'image/png' }
    ],
    shortcut: `${basePath}/favicon.ico`,
    apple: { url: `${basePath}/icon-192.png`, sizes: '192x192' },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

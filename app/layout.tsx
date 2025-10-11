import type React from "react"
import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import "./globals.css"

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazirmatn",
})

export const metadata: Metadata = {
  title: "نیروخورشید - راه‌حل‌های حرفه‌ای انرژی خورشیدی",
  description:
    "شرکت پیشرو در زمینه انرژی خورشیدی ارائه‌دهنده خدمات طراحی، نصب و نگهداری سیستم‌های انرژی خورشیدی مسکونی و تجاری.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`font-sans ${vazirmatn.variable}`}>
        <Suspense fallback={<div>در حال بارگذاری...</div>}>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

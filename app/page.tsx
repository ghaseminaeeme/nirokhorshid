import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Sun, Zap, Shield, Wrench, Lightbulb, TrendingUp } from "lucide-react"
import { StructuredData } from "@/components/seo/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "نیروخورشید - راه‌حل‌های حرفه‌ای انرژی خورشیدی",
  description:
    "شرکت پیشرو در زمینه انرژی خورشیدی ارائه‌دهنده خدمات طراحی، نصب و نگهداری سیستم‌های انرژی خورشیدی مسکونی و تجاری. همین امروز قیمت رایگان دریافت کنید!",
  keywords: [
    "انرژی خورشیدی",
    "نصب پنل خورشیدی",
    "پنل‌های خورشیدی",
    "انرژی تجدیدپذیر",
    "سیستم‌های انرژی خورشیدی",
    "خورشیدی مسکونی",
    "خورشیدی تجاری",
    "نگهداری خورشیدی",
  ],
  openGraph: {
    title: "نیروخورشید - راه‌حل‌های حرفه‌ای انرژی خورشیدی",
    description: "مصرف انرژی خود را با راه‌حل‌های پایدار و مقرون‌به‌صرفه خورشیدی متحول کنید.",
    type: "website",
    url: "https://nirokhorshid.com",
    images: [
      {
        url: "https://nirokhorshid.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "نیروخورشید - نصب انرژی خورشیدی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "نیروخورشید - راه‌حل‌های حرفه‌ای انرژی خورشیدی",
    description: "مصرف انرژی خود را با راه‌حل‌های پایدار و مقرون‌به‌صرفه خورشیدی متحول کنید.",
  },
  alternates: {
    canonical: "https://nirokhorshid.com",
  },
}

export default function HomePage() {
  const organizationData = {
    name: "نیروخورشید",
    url: "https://nirokhorshid.com",
    logo: "https://nirokhorshid.com/logo.png",
    description: "ارائه‌دهنده پیشرو راه‌حل‌های انرژی خورشیدی برای املاک مسکونی و تجاری",
    telephone: "+98-21-1234-5678",
    email: "info@nirokhorshid.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "خیابان انرژی، پلاک ۱۲۳",
      addressLocality: "تهران",
      addressRegion: "تهران",
      postalCode: "12345",
      addressCountry: "IR",
    },
    areaServed: "ایران",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات انرژی خورشیدی",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "طراحی سیستم خورشیدی",
            description: "طراحی سفارشی سیستم انرژی خورشیدی برای املاک مسکونی و تجاری",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "نصب خورشیدی",
            description: "نصب حرفه‌ای پنل‌های خورشیدی توسط تکنسین‌های مجاز",
          },
        },
      ],
    },
  }

  return (
    <>
      <StructuredData type="Organization" data={organizationData} />
      <div className="min-h-screen">
        <section className="relative bg-gradient-to-br from-blue-50 to-orange-50 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">راه‌حل‌های انرژی پاک</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
                  آینده خود را با انرژی خورشیدی تامین کنید
                </h1>
                <p className="text-xl text-gray-600 mb-8 text-pretty">
                  راه‌حل‌های حرفه‌ای انرژی خورشیدی برای خانه‌ها و کسب‌وکارها. انرژی پاک، هزینه‌های کمتر، آینده‌ای روشن‌تر.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                    <Link href="/contact">دریافت قیمت رایگان</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/services">خدمات ما</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/modern-solar-panels-on-residential-roof-with-blue-.png"
                  alt="نصب پنل‌های خورشیدی روی سقف مسکونی"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">چرا انرژی خورشیدی؟</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                مصرف انرژی خود را با راه‌حل‌های پایدار و مقرون‌به‌صرفه خورشیدی متحول کنید
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">صرفه‌جویی در هزینه</h3>
                <p className="text-gray-600">قبض برق خود را تا ۹۰٪ با سیستم‌های انرژی خورشیدی کاهش دهید</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">سازگار با محیط زیست</h3>
                <p className="text-gray-600">ردپای کربن خود را کاهش دهید و به محیط زیست پاک‌تر کمک کنید</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">استقلال انرژی</h3>
                <p className="text-gray-600">انرژی پاک خود را تولید کنید و وابستگی به شبکه برق را کاهش دهید</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">خدمات ما</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">راه‌حل‌های جامع خورشیدی از طراحی تا نگهداری</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Sun className="h-12 w-12 text-orange-500 mb-2" />
                  <CardTitle>طراحی سیستم خورشیدی</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>طراحی سفارشی سیستم انرژی خورشیدی متناسب با نیازها و شرایط ملک شما.</CardDescription>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Wrench className="h-12 w-12 text-orange-500 mb-2" />
                  <CardTitle>خدمات نصب</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>نصب حرفه‌ای توسط تکنسین‌های مجاز با پوشش کامل گارانتی.</CardDescription>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-12 w-12 text-orange-500 mb-2" />
                  <CardTitle>نگهداری و پشتیبانی</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>خدمات نظارت و نگهداری ۲۴/۷ برای حفظ عملکرد بهینه سیستم شما.</CardDescription>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Lightbulb className="h-12 w-12 text-orange-500 mb-2" />
                  <CardTitle>مشاوره انرژی</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    مشاوره تخصصی در زمینه راه‌حل‌های انرژی تجدیدپذیر و تحلیل بازگشت سرمایه.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  مشاهده همه خدمات <ArrowLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-orange-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">+۵۰۰</div>
                <div className="text-orange-100">پروژه تکمیل شده</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">+۱۰</div>
                <div className="text-orange-100">سال تجربه</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">+۵۰ مگاوات</div>
                <div className="text-orange-100">ظرفیت کل نصب شده</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">%۹۸</div>
                <div className="text-orange-100">رضایت مشتریان</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">آماده استفاده از انرژی خورشیدی هستید؟</h2>
            <p className="text-xl text-gray-600 mb-8">
              همین امروز مشاوره و قیمت رایگان برای سیستم انرژی خورشیدی خود دریافت کنید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/contact">دریافت قیمت رایگان</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">مشاهده کارهای ما</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

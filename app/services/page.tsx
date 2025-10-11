import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sun, Wrench, Shield, Lightbulb, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { StructuredData } from "@/components/seo/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solar Services - Design, Installation & Maintenance | SolarTech Solutions",
  description:
    "Comprehensive solar services including system design, professional installation, maintenance, and energy consulting. 25-year warranty and 24/7 monitoring available.",
  keywords: [
    "solar services",
    "solar installation",
    "solar system design",
    "solar maintenance",
    "energy consulting",
    "solar monitoring",
  ],
  openGraph: {
    title: "Solar Services - Design, Installation & Maintenance",
    description: "Comprehensive solar solutions from consultation to ongoing maintenance.",
    type: "website",
    url: "https://solartech.com/services",
  },
}

export default function ServicesPage() {
  const servicesData = {
    name: "Solar Services",
    description: "Comprehensive solar power services from design to maintenance",
    url: "https://solartech.com/services",
    provider: {
      "@type": "Organization",
      name: "SolarTech Solutions",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Solar Power Services",
      itemListElement: [
        {
          "@type": "Service",
          name: "Solar System Design",
          description: "Custom solar power system design for your specific needs",
          provider: "SolarTech Solutions",
        },
        {
          "@type": "Service",
          name: "Installation Services",
          description: "Professional installation by certified technicians",
          provider: "SolarTech Solutions",
        },
      ],
    },
  }

  return (
    <>
      <StructuredData type="WebPage" data={servicesData} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Our Services</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Comprehensive Solar Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
                From initial consultation to ongoing maintenance, we provide end-to-end solar power services for
                residential and commercial clients.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Solar System Design */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Sun className="h-12 w-12 text-orange-500 mb-4" />
                  <CardTitle className="text-2xl">Solar System Design</CardTitle>
                  <CardDescription className="text-lg">
                    Custom solar power system design for your specific needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Our expert engineers design tailored solar power systems that maximize energy production and
                    efficiency for your property. We consider factors like roof orientation, shading, energy consumption
                    patterns, and local regulations to create the optimal solution.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Site assessment and energy audit</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">3D modeling and simulation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">ROI analysis and financing options</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Permit and regulatory compliance</span>
                    </div>
                  </div>
                  <Button asChild variant="outline">
                    <Link href="/contact">
                      Get Design Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Installation Services */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Wrench className="h-12 w-12 text-orange-500 mb-4" />
                  <CardTitle className="text-2xl">Installation Services</CardTitle>
                  <CardDescription className="text-lg">
                    Professional installation by certified technicians
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Our certified installation team ensures your solar power system is installed safely and efficiently.
                    We handle all aspects from permits and inspections to final commissioning, ensuring your system
                    meets all local codes and regulations.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Certified and insured technicians</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Complete permit handling</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Quality assurance testing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">25-year warranty coverage</span>
                    </div>
                  </div>
                  <Button asChild variant="outline">
                    <Link href="/contact">
                      Schedule Installation <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Maintenance & Support */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-12 w-12 text-orange-500 mb-4" />
                  <CardTitle className="text-2xl">Maintenance & Support</CardTitle>
                  <CardDescription className="text-lg">24/7 monitoring and maintenance services</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Keep your solar system running at peak performance with our comprehensive maintenance and support
                    services. We provide regular inspections, cleaning, performance monitoring, and rapid response to
                    any issues.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">24/7 system monitoring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Annual inspections and cleaning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Performance optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Emergency repair services</span>
                    </div>
                  </div>
                  <Button asChild variant="outline">
                    <Link href="/contact">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Energy Consulting */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Lightbulb className="h-12 w-12 text-orange-500 mb-4" />
                  <CardTitle className="text-2xl">Energy Consulting</CardTitle>
                  <CardDescription className="text-lg">Expert advice on renewable energy solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Our energy consultants help you understand your options and make informed decisions about renewable
                    energy investments. We provide feasibility studies, ROI analysis, and guidance on incentives and
                    financing options.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Energy usage analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Feasibility studies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Incentive and rebate guidance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Financing options</span>
                    </div>
                  </div>
                  <Button asChild variant="outline">
                    <Link href="/contact">
                      Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple, transparent steps from consultation to installation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation</h3>
                <p className="text-gray-600">Free initial consultation to assess your needs and site</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
                <p className="text-gray-600">Custom system design and detailed proposal with ROI analysis</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Installation</h3>
                <p className="text-gray-600">Professional installation by certified technicians</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>
                <p className="text-gray-600">Ongoing monitoring and maintenance for optimal performance</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-orange-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-orange-100 mb-8">Contact us today for a free consultation and custom quote</p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { StructuredData } from "@/components/seo/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get Your Free Solar Quote | SolarTech Solutions",
  description:
    "Contact SolarTech Solutions for a free solar consultation and quote. Expert solar installation services for residential and commercial properties. Call (555) 123-4567.",
  keywords: [
    "solar quote",
    "solar consultation",
    "solar installation contact",
    "solar energy company",
    "free solar estimate",
  ],
  openGraph: {
    title: "Contact SolarTech Solutions - Free Solar Quote",
    description: "Get a free consultation and quote for your solar power system. Expert installation services.",
    type: "website",
    url: "https://solartech.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SolarTech Solutions - Free Solar Quote",
    description: "Get a free consultation and quote for your solar power system.",
  },
}

export default function ContactPage() {
  const structuredData = {
    name: "SolarTech Solutions Contact",
    description: "Contact page for solar energy consultation and quotes",
    url: "https://solartech.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "SolarTech Solutions",
      telephone: "+1-555-123-4567",
      email: "info@solartech.com",
    },
  }

  return (
    <>
      <StructuredData type="WebPage" data={structuredData} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Contact Us</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Get Your Free Solar Quote
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
                Ready to make the switch to solar? Contact us today for a free consultation and custom quote for your
                property.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Request a Quote</h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-orange-500 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                          <p className="text-gray-600">+1 (555) 123-4567</p>
                          <p className="text-sm text-gray-500">Mon-Fri 8AM-6PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-orange-500 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                          <p className="text-gray-600">info@solartech.com</p>
                          <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                          <p className="text-gray-600">123 Solar Street</p>
                          <p className="text-gray-600">Green City, GC 12345</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Clock className="h-6 w-6 text-orange-500 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                          <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                          <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We proudly serve residential and commercial clients throughout the region
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Residential</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Custom solar solutions for homes, condos, and residential properties of all sizes.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Commercial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Large-scale solar installations for businesses, warehouses, and commercial buildings.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Industrial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    High-capacity solar systems for manufacturing facilities and industrial complexes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-orange-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Go Solar?</h2>
            <p className="text-xl text-orange-100 mb-8">
              Join hundreds of satisfied customers who have made the switch to clean energy
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+15551234567">Call Now: (555) 123-4567</a>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}

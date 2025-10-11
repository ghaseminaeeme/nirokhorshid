import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Target, Heart, CheckCircle } from "lucide-react"
import Link from "next/link"
import { StructuredData } from "@/components/seo/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About SolarTech Solutions - Leading Solar Energy Company",
  description:
    "Learn about SolarTech Solutions, a leading solar power company with over 10 years of experience. We've completed 500+ installations with 98% customer satisfaction.",
  keywords: [
    "about solar company",
    "solar energy experience",
    "solar installation team",
    "renewable energy experts",
    "solar power professionals",
  ],
  openGraph: {
    title: "About SolarTech Solutions - Leading Solar Energy Company",
    description: "Leading the solar revolution with over 10 years of experience and 500+ successful installations.",
    type: "website",
    url: "https://solartech.com/about",
  },
}

export default function AboutPage() {
  const aboutPageData = {
    name: "About SolarTech Solutions",
    description: "Learn about our company, mission, and team of solar energy experts",
    url: "https://solartech.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "SolarTech Solutions",
      foundingDate: "2014",
      numberOfEmployees: "50-100",
      slogan: "Leading the Solar Revolution",
    },
  }

  return (
    <>
      <StructuredData type="WebPage" data={aboutPageData} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
                About SolarTech Solutions
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Leading the Solar Revolution
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
                We are a leading provider of solar power solutions, dedicated to helping businesses and homeowners
                transition to clean, renewable energy.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded over 10 years ago, SolarTech Solutions has been at the forefront of the renewable energy
                  revolution. We started with a simple mission: to make clean, sustainable energy accessible to
                  everyone.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Today, we have successfully completed hundreds of solar installations across the region, helping
                  families and businesses reduce their carbon footprint while saving money on energy costs.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Over 500 successful installations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">50MW+ total capacity installed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">98% customer satisfaction rate</span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/solar-installation-team-working-on-commercial-buil.png"
                  alt="Our team at work"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="h-12 w-12 text-orange-500 mx-auto mb-2" />
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We strive for excellence in every project, delivering the highest quality solar solutions.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Heart className="h-12 w-12 text-orange-500 mx-auto mb-2" />
                  <CardTitle>Sustainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Committed to creating a sustainable future through clean, renewable energy solutions.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-12 w-12 text-orange-500 mx-auto mb-2" />
                  <CardTitle>Customer Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our customers are at the heart of everything we do, ensuring their satisfaction and success.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="h-12 w-12 text-orange-500 mx-auto mb-2" />
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Continuously innovating to provide the most advanced and efficient solar technologies.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced professionals dedicated to your solar success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <img
                    src="/professional-headshot-of-solar-engineer.png"
                    alt="Team member"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle>John Smith</CardTitle>
                  <CardDescription>CEO & Founder</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    15+ years in renewable energy with a passion for sustainable solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <img
                    src="/professional-headshot-of-female-solar-engineer.png"
                    alt="Team member"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle>Sarah Johnson</CardTitle>
                  <CardDescription>Lead Engineer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Expert in solar system design and optimization with 12+ years experience.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <img
                    src="/professional-headshot-of-solar-project-manager.png"
                    alt="Team member"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle>Mike Davis</CardTitle>
                  <CardDescription>Project Manager</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Ensures every installation is completed on time and to the highest standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-orange-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl text-orange-100 mb-8">
              Let's discuss how we can help you transition to clean, renewable energy
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}

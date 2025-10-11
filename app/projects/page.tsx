import { Suspense } from "react"
import type { Metadata } from "next"
import { getProjects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { Badge } from "@/components/ui/badge"
import { Zap, Building, Home, Factory } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Projects | Solar Power Solutions",
  description:
    "Explore our completed solar power installations including residential, commercial, and industrial projects. See our expertise in renewable energy solutions.",
  keywords: "solar projects, solar installations, renewable energy projects, solar power systems",
  openGraph: {
    title: "Our Solar Projects | Solar Power Solutions",
    description: "Explore our completed solar power installations and renewable energy projects.",
    type: "website",
  },
}

const projectTypes = [
  { name: "All Projects", value: "all", icon: Zap },
  { name: "Residential", value: "residential", icon: Home },
  { name: "Commercial", value: "commercial", icon: Building },
  { name: "Industrial", value: "industrial", icon: Factory },
]

async function ProjectsGrid() {
  const projects = await getProjects()

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600">No projects found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Solar Projects</h1>
            <p className="text-xl text-slate-300 text-balance">
              Discover our completed solar installations and see how we're helping businesses and homeowners transition
              to clean, renewable energy.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {projectTypes.map((type) => {
              const Icon = type.icon
              return (
                <Badge
                  key={type.value}
                  variant="outline"
                  className="px-4 py-2 cursor-pointer hover:bg-orange-50 hover:border-orange-200 transition-colors"
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {type.name}
                </Badge>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg h-96 animate-pulse" />
                ))}
              </div>
            }
          >
            <ProjectsGrid />
          </Suspense>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Solar Project?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Join our growing list of satisfied customers who have made the switch to solar energy.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>
    </div>
  )
}

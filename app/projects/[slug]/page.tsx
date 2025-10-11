import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getProjectBySlug, getProjects } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin, Zap, Calendar, User, CheckCircle } from "lucide-react"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Solar Power Solutions`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image_url],
      type: "article",
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px]">
        <Image src={project.image_url || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link href="/projects">
              <Button variant="outline" className="mb-6 bg-white/90 hover:bg-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-orange-600 hover:bg-orange-700">{project.project_type}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">{project.title}</h1>
              <p className="text-xl text-white/90 text-balance">{project.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Overview</h2>
                <p className="text-slate-600 mb-8">
                  This {project.project_type.toLowerCase()} solar installation in {project.location}
                  represents our commitment to delivering high-quality renewable energy solutions. With a capacity of{" "}
                  {project.capacity}, this project demonstrates our expertise in designing and implementing efficient
                  solar power systems.
                </p>

                {project.features && project.features.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Gallery */}
                {project.gallery_images && project.gallery_images.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Project Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.gallery_images.map((image, index) => (
                        <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${project.title} - Image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-6">Project Details</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-slate-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-slate-500">Location</p>
                        <p className="font-medium text-slate-900">{project.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-slate-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-slate-500">System Capacity</p>
                        <p className="font-medium text-slate-900">{project.capacity}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-slate-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-slate-500">Completion Date</p>
                        <p className="font-medium text-slate-900">
                          {new Date(project.completion_date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    {project.client_name && (
                      <div className="flex items-start gap-3">
                        <User className="h-5 w-5 text-slate-400 mt-0.5" />
                        <div>
                          <p className="text-sm text-slate-500">Client</p>
                          <p className="font-medium text-slate-900">{project.client_name}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 pt-6 border-t">
                    <h4 className="font-semibold text-slate-900 mb-4">Interested in a Similar Project?</h4>
                    <Link href="/contact">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">Get Your Free Quote</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Zap, Calendar } from "lucide-react"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-white">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image_url || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/90 text-slate-700">
              {project.project_type}
            </Badge>
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="font-semibold text-xl text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="h-4 w-4" />
              <span>{project.location}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Zap className="h-4 w-4" />
              <span>{project.capacity}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Calendar className="h-4 w-4" />
              <span>{new Date(project.completion_date).toLocaleDateString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

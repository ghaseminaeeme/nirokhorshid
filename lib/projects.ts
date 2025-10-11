import { createServerClient } from "@/lib/supabase/server"

export interface Project {
  id: string
  title: string
  description: string
  image_url: string
  project_type: string
  location: string
  capacity: string
  completion_date: string
  client_name?: string
  features: string[]
  gallery_images: string[]
  slug: string
  created_at: string
  updated_at: string
}

export async function getProjects(): Promise<Project[]> {
  const supabase = await createServerClient()

  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .eq("is_published", true)
    .order("completion_date", { ascending: false })

  if (error) {
    console.error("Error fetching projects:", error)
    return []
  }

  return projects || []
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const supabase = await createServerClient()

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single()

  if (error) {
    console.error("Error fetching project:", error)
    return null
  }

  return project
}

export async function getProjectsByType(projectType: string): Promise<Project[]> {
  const supabase = await createServerClient()

  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .eq("project_type", projectType)
    .eq("is_published", true)
    .order("completion_date", { ascending: false })

  if (error) {
    console.error("Error fetching projects by type:", error)
    return []
  }

  return projects || []
}

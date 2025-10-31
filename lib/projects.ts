import { createClient } from "@/lib/supabase/server"

export interface Project {
  id: string
  title: string
  description: string
  short_description?: string
  image_url: string
  project_type: string
  location: string
  capacity: string
  completion_date: string
  client_name?: string
  features: string[]
  gallery_images: string[]
  slug: string
  is_published: boolean
  created_at: string
  updated_at: string
}

export async function getProjects(): Promise<Project[]> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("is_published", true)
      .order("completion_date", { ascending: false })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error("Error fetching project:", error)
    return null
  }
}

export async function getProjectsByType(projectType: string): Promise<Project[]> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("project_type", projectType)
      .eq("is_published", true)
      .order("completion_date", { ascending: false })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Error fetching projects by type:", error)
    return []
  }
}

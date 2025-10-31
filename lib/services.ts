import { createClient } from "@/lib/supabase/server"

export interface Service {
  id: string
  title: string
  description: string
  short_description?: string
  icon?: string
  features: string[]
  image_url?: string
  is_active: boolean
  display_order: number
  slug: string
  created_at: string
  updated_at: string
}

export async function getServices(): Promise<Service[]> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase.from("services").select("*").eq("is_active", true).order("display_order")

    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Error fetching services:", error)
    return []
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase.from("services").select("*").eq("slug", slug).eq("is_active", true).single()

    if (error) throw error
    return data
  } catch (error) {
    console.error("Error fetching service:", error)
    return null
  }
}

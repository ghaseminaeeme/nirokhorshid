import { query, queryOne } from "@/lib/db"

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
    const sql = `
      SELECT * FROM projects 
      WHERE is_published = 1 
      ORDER BY completion_date DESC
    `

    const rows = await query<any>(sql)

    return rows.map((row) => ({
      ...row,
      features: typeof row.features === "string" ? JSON.parse(row.features) : row.features,
      gallery_images: typeof row.gallery_images === "string" ? JSON.parse(row.gallery_images) : row.gallery_images,
      is_published: Boolean(row.is_published),
    }))
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const sql = `
      SELECT * FROM projects 
      WHERE slug = ? AND is_published = 1 
      LIMIT 1
    `

    const row = await queryOne<any>(sql, [slug])

    if (!row) return null

    return {
      ...row,
      features: typeof row.features === "string" ? JSON.parse(row.features) : row.features,
      gallery_images: typeof row.gallery_images === "string" ? JSON.parse(row.gallery_images) : row.gallery_images,
      is_published: Boolean(row.is_published),
    }
  } catch (error) {
    console.error("Error fetching project:", error)
    return null
  }
}

export async function getProjectsByType(projectType: string): Promise<Project[]> {
  try {
    const sql = `
      SELECT * FROM projects 
      WHERE project_type = ? AND is_published = 1 
      ORDER BY completion_date DESC
    `

    const rows = await query<any>(sql, [projectType])

    return rows.map((row) => ({
      ...row,
      features: typeof row.features === "string" ? JSON.parse(row.features) : row.features,
      gallery_images: typeof row.gallery_images === "string" ? JSON.parse(row.gallery_images) : row.gallery_images,
      is_published: Boolean(row.is_published),
    }))
  } catch (error) {
    console.error("Error fetching projects by type:", error)
    return []
  }
}

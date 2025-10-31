import { createClient } from "@/lib/supabase/server"

export interface Category {
  id: string
  name: string
  description: string | null
  slug: string
  image_url: string | null
  created_at: string
  updated_at: string
}

export interface Product {
  id: string
  name: string
  description: string | null
  short_description: string | null
  price: number | null
  category_id: string | null
  specifications: any
  features: string[] | null
  image_url: string | null
  gallery_images: string[] | null
  is_featured: boolean
  is_active: boolean
  meta_title: string | null
  meta_description: string | null
  slug: string
  created_at: string
  updated_at: string
  category?: Category
}

export async function getCategories(): Promise<Category[]> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase.from("categories").select("*").order("name")

    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}

export async function getProducts(categorySlug?: string): Promise<Product[]> {
  try {
    const supabase = await createClient()
    let query = supabase
      .from("products")
      .select(
        `
        *,
        category:categories(id, name, slug)
      `,
      )
      .eq("is_active", true)

    if (categorySlug) {
      query = query.eq("category.slug", categorySlug)
    }

    const { data, error } = await query.order("name")

    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("products")
      .select(
        `
        *,
        category:categories(id, name, slug)
      `,
      )
      .eq("slug", slug)
      .eq("is_active", true)
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("products")
      .select(
        `
        *,
        category:categories(id, name, slug)
      `,
      )
      .eq("is_active", true)
      .eq("is_featured", true)
      .order("name")
      .limit(6)

    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Error fetching featured products:", error)
    return []
  }
}

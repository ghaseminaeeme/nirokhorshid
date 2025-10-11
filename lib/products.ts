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
  const supabase = await createClient()
  const { data, error } = await supabase.from("categories").select("*").order("name")

  if (error) {
    console.error("Error fetching categories:", error)
    return []
  }

  return data || []
}

export async function getProducts(categorySlug?: string): Promise<Product[]> {
  const supabase = await createClient()
  let query = supabase
    .from("products")
    .select(`
      *,
      category:categories(*)
    `)
    .eq("is_active", true)
    .order("name")

  if (categorySlug) {
    query = query.eq("categories.slug", categorySlug)
  }

  const { data, error } = await query

  if (error) {
    console.error("Error fetching products:", error)
    return []
  }

  return data || []
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      category:categories(*)
    `)
    .eq("slug", slug)
    .eq("is_active", true)
    .single()

  if (error) {
    console.error("Error fetching product:", error)
    return null
  }

  return data
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      category:categories(*)
    `)
    .eq("is_active", true)
    .eq("is_featured", true)
    .order("name")
    .limit(6)

  if (error) {
    console.error("Error fetching featured products:", error)
    return []
  }

  return data || []
}

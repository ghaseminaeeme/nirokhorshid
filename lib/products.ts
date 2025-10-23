import { query, queryOne } from "@/lib/db"

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
    const categories = await query<Category>("SELECT * FROM categories ORDER BY name")
    return categories
  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}

export async function getProducts(categorySlug?: string): Promise<Product[]> {
  try {
    let sql = `
      SELECT 
        p.*,
        c.id as category_id,
        c.name as category_name,
        c.slug as category_slug
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.is_active = 1
    `
    const params: any[] = []

    if (categorySlug) {
      sql += " AND c.slug = ?"
      params.push(categorySlug)
    }

    sql += " ORDER BY p.name"

    const rows = await query<any>(sql, params)

    return rows.map((row) => ({
      ...row,
      specifications: typeof row.specifications === "string" ? JSON.parse(row.specifications) : row.specifications,
      features: typeof row.features === "string" ? JSON.parse(row.features) : row.features,
      gallery_images: typeof row.gallery_images === "string" ? JSON.parse(row.gallery_images) : row.gallery_images,
      is_featured: Boolean(row.is_featured),
      is_active: Boolean(row.is_active),
      category: row.category_id
        ? {
            id: row.category_id,
            name: row.category_name,
            slug: row.category_slug,
          }
        : undefined,
    }))
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const sql = `
      SELECT 
        p.*,
        c.id as category_id,
        c.name as category_name,
        c.slug as category_slug
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.slug = ? AND p.is_active = 1
      LIMIT 1
    `

    const row = await queryOne<any>(sql, [slug])

    if (!row) return null

    return {
      ...row,
      specifications: typeof row.specifications === "string" ? JSON.parse(row.specifications) : row.specifications,
      features: typeof row.features === "string" ? JSON.parse(row.features) : row.features,
      gallery_images: typeof row.gallery_images === "string" ? JSON.parse(row.gallery_images) : row.gallery_images,
      is_featured: Boolean(row.is_featured),
      is_active: Boolean(row.is_active),
      category: row.category_id
        ? {
            id: row.category_id,
            name: row.category_name,
            slug: row.category_slug,
          }
        : undefined,
    }
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const sql = `
      SELECT 
        p.*,
        c.id as category_id,
        c.name as category_name,
        c.slug as category_slug
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.is_active = 1 AND p.is_featured = 1
      ORDER BY p.name
      LIMIT 6
    `

    const rows = await query<any>(sql)

    return rows.map((row) => ({
      ...row,
      specifications: typeof row.specifications === "string" ? JSON.parse(row.specifications) : row.specifications,
      features: typeof row.features === "string" ? JSON.parse(row.features) : row.features,
      gallery_images: typeof row.gallery_images === "string" ? JSON.parse(row.gallery_images) : row.gallery_images,
      is_featured: Boolean(row.is_featured),
      is_active: Boolean(row.is_active),
      category: row.category_id
        ? {
            id: row.category_id,
            name: row.category_name,
            slug: row.category_slug,
          }
        : undefined,
    }))
  } catch (error) {
    console.error("Error fetching featured products:", error)
    return []
  }
}

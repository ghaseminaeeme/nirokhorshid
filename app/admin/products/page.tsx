import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/server"
import { Plus, Edit, Trash2 } from "lucide-react"
import type { Product } from "@/lib/products"

async function getProducts(): Promise<Product[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      category:categories(*)
    `)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching products:", error)
    return []
  }

  return data || []
}

export default async function AdminProductsPage() {
  const products = await getProducts()

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600">Manage your product catalog</p>
        </div>
        <Button asChild className="bg-orange-500 hover:bg-orange-600">
          <Link href="/admin/products/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </div>

      {products.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-gray-600 mb-4">No products found</p>
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link href="/admin/products/new">Add Your First Product</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={
                    product.image_url ||
                    `/placeholder.svg?height=200&width=300&query=${encodeURIComponent(product.name + " solar product") || "/placeholder.svg"}`
                  }
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
                {product.is_featured && (
                  <Badge className="absolute top-2 right-2 bg-orange-500 hover:bg-orange-600">Featured</Badge>
                )}
                {!product.is_active && (
                  <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">Inactive</Badge>
                )}
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category?.name || "Uncategorized"}
                  </Badge>
                  {product.price && (
                    <span className="text-lg font-bold text-orange-600">${product.price.toLocaleString()}</span>
                  )}
                </div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="text-sm">
                  {product.short_description || product.description?.substring(0, 100) + "..."}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Link href={`/admin/products/${product.id}/edit`}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

import { Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"
import { getProducts, getCategories } from "@/lib/products"
import { Loader2 } from "lucide-react"

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>
}

async function ProductsContent({ categorySlug }: { categorySlug?: string }) {
  const [products, categories] = await Promise.all([getProducts(categorySlug), getCategories()])

  const selectedCategory = categories.find((cat) => cat.slug === categorySlug)

  return (
    <>
      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <Button asChild variant={!categorySlug ? "default" : "outline"} size="sm">
              <Link href="/products">All Products</Link>
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                asChild
                variant={categorySlug === category.slug ? "default" : "outline"}
                size="sm"
              >
                <Link href={`/products?category=${category.slug}`}>{category.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedCategory && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedCategory.name}</h2>
              {selectedCategory.description && <p className="text-gray-600">{selectedCategory.description}</p>}
            </div>
          )}

          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found in this category.</p>
              <Button asChild className="mt-4">
                <Link href="/contact">Contact us for custom solutions</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams
  const categorySlug = params.category

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Our Products</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">Solar Power Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Discover our comprehensive range of high-quality solar panels, inverters, batteries, and accessories for
              residential and commercial installations.
            </p>
          </div>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
          </div>
        }
      >
        <ProductsContent categorySlug={categorySlug} />
      </Suspense>
    </div>
  )
}

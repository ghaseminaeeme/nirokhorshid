import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="aspect-video relative overflow-hidden rounded-t-lg">
        <img
          src={
            product.image_url ||
            `/placeholder.svg?height=200&width=300&query=${encodeURIComponent(product.name + " solar product")}`
          }
          alt={product.name}
          className="object-cover w-full h-full"
        />
        {product.is_featured && (
          <Badge className="absolute top-2 right-2 bg-orange-500 hover:bg-orange-600">Featured</Badge>
        )}
      </div>
      <CardHeader className="flex-1">
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
        {product.features && product.features.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {product.features.slice(0, 3).map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
              {product.features.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{product.features.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}
        <Button asChild className="w-full">
          <Link href={`/products/${product.slug}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

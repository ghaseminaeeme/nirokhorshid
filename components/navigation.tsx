"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Sun className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-gray-900">نیروخورشید</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors">
              خانه
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-500 transition-colors">
              درباره ما
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-orange-500 transition-colors">
              خدمات
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-orange-500 transition-colors">
              محصولات
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-orange-500 transition-colors">
              پروژه‌ها
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">
              تماس با ما
            </Link>
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link href="/contact">دریافت قیمت</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-500"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors">
                خانه
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-500 transition-colors">
                درباره ما
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-orange-500 transition-colors">
                خدمات
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-orange-500 transition-colors">
                محصولات
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-orange-500 transition-colors">
                پروژه‌ها
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">
                تماس با ما
              </Link>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 w-fit">
                <Link href="/contact">دریافت قیمت</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

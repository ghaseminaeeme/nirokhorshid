import Link from "next/link"
import { Sun, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sun className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">نیروخورشید</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              ارائه‌دهنده پیشرو راه‌حل‌های انرژی خورشیدی، کمک به کسب‌وکارها و صاحبان خانه برای انتقال به انرژی پاک و
              تجدیدپذیر با خدمات نصب و نگهداری حرفه‌ای.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>خیابان انرژی، پلاک ۱۲۳، تهران، ایران</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>۰۲۱-۱۲۳۴-۵۶۷۸</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@nirokhorshid.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">لینک‌های سریع</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-gray-300 hover:text-orange-500 transition-colors">
                درباره ما
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-orange-500 transition-colors">
                خدمات
              </Link>
              <Link href="/products" className="text-gray-300 hover:text-orange-500 transition-colors">
                محصولات
              </Link>
              <Link href="/projects" className="text-gray-300 hover:text-orange-500 transition-colors">
                پروژه‌ها
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">
                تماس با ما
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">خدمات</h3>
            <div className="flex flex-col gap-2">
              <span className="text-gray-300">طراحی سیستم خورشیدی</span>
              <span className="text-gray-300">خدمات نصب</span>
              <span className="text-gray-300">نگهداری و پشتیبانی</span>
              <span className="text-gray-300">مشاوره انرژی</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; ۱۴۰۳ نیروخورشید. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}

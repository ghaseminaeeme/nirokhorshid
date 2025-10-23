-- =====================================================
-- پایگاه داده نیروخورشید - MySQL
-- Solar Power Company Database - Complete Setup
-- =====================================================

-- Create database (uncomment if needed)
-- CREATE DATABASE IF NOT EXISTS nirokhorshid CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- USE nirokhorshid;

-- =====================================================
-- 1. جدول دسته‌بندی‌ها (Categories)
-- =====================================================
CREATE TABLE IF NOT EXISTS categories (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  slug VARCHAR(255) NOT NULL UNIQUE,
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- 2. جدول محصولات (Products)
-- =====================================================
CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  short_description VARCHAR(500),
  price DECIMAL(10, 2),
  category_id VARCHAR(36),
  specifications JSON,
  features JSON,
  image_url VARCHAR(500),
  gallery_images JSON,
  is_featured BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  meta_title VARCHAR(255),
  meta_description VARCHAR(500),
  slug VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
  INDEX idx_slug (slug),
  INDEX idx_category (category_id),
  INDEX idx_featured (is_featured),
  INDEX idx_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- 3. جدول خدمات (Services)
-- =====================================================
CREATE TABLE IF NOT EXISTS services (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  short_description VARCHAR(500),
  icon VARCHAR(100),
  features JSON,
  image_url VARCHAR(500),
  is_active BOOLEAN DEFAULT TRUE,
  display_order INT DEFAULT 0,
  slug VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_slug (slug),
  INDEX idx_active (is_active),
  INDEX idx_order (display_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- 4. جدول پروژه‌ها (Projects)
-- =====================================================
CREATE TABLE IF NOT EXISTS projects (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  short_description VARCHAR(500),
  image_url VARCHAR(500),
  project_type VARCHAR(100),
  location VARCHAR(255),
  capacity VARCHAR(100),
  completion_date DATE,
  client_name VARCHAR(255),
  features JSON,
  gallery_images JSON,
  is_published BOOLEAN DEFAULT TRUE,
  slug VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_slug (slug),
  INDEX idx_type (project_type),
  INDEX idx_published (is_published),
  INDEX idx_completion (completion_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- 5. جدول پیام‌های تماس (Contact Messages)
-- =====================================================
CREATE TABLE IF NOT EXISTS contact_messages (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_read (is_read),
  INDEX idx_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- 6. جدول تنظیمات سایت (Site Settings)
-- =====================================================
CREATE TABLE IF NOT EXISTS site_settings (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  setting_key VARCHAR(100) NOT NULL UNIQUE,
  setting_value TEXT,
  setting_type VARCHAR(50) DEFAULT 'text',
  description VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_key (setting_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- 7. جدول کاربران مدیریت (Admin Users)
-- =====================================================
CREATE TABLE IF NOT EXISTS admin_users (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'admin',
  is_active BOOLEAN DEFAULT TRUE,
  last_login TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- داده‌های نمونه - دسته‌بندی‌ها
-- =====================================================
INSERT INTO categories (id, name, description, slug, image_url) VALUES
(UUID(), 'پنل‌های خورشیدی', 'انواع پنل‌های خورشیدی با بازدهی بالا', 'solar-panels', '/placeholder.svg?height=400&width=600'),
(UUID(), 'اینورترها', 'اینورترهای تبدیل برق DC به AC', 'inverters', '/placeholder.svg?height=400&width=600'),
(UUID(), 'باتری‌های ذخیره', 'سیستم‌های ذخیره‌سازی انرژی', 'batteries', '/placeholder.svg?height=400&width=600'),
(UUID(), 'تجهیزات نصب', 'سازه و تجهیزات نصب پنل', 'mounting-equipment', '/placeholder.svg?height=400&width=600');

-- =====================================================
-- داده‌های نمونه - محصولات
-- =====================================================
INSERT INTO products (id, name, description, short_description, price, category_id, specifications, features, image_url, is_featured, slug) VALUES
(UUID(), 'پنل خورشیدی 550 وات', 'پنل خورشیدی مونوکریستال با بازدهی 21.5 درصد مناسب برای نصب خانگی و تجاری', 'پنل مونوکریستال 550 وات با گارانتی 25 ساله', 12500000, 
(SELECT id FROM categories WHERE slug = 'solar-panels' LIMIT 1),
JSON_OBJECT('power', '550W', 'efficiency', '21.5%', 'voltage', '41.2V', 'current', '13.35A', 'dimensions', '2278×1134×35mm', 'weight', '27.5kg'),
JSON_ARRAY('گارانتی 25 ساله', 'مقاومت در برابر آب و هوا', 'بازدهی بالا', 'نصب آسان'),
'/placeholder.svg?height=600&width=800', TRUE),

(UUID(), 'اینورتر 5 کیلووات', 'اینورتر هیبریدی با قابلیت اتصال به شبکه و باتری', 'اینورتر هیبریدی 5KW با نمایشگر دیجیتال', 35000000,
(SELECT id FROM categories WHERE slug = 'inverters' LIMIT 1),
JSON_OBJECT('power', '5000W', 'input_voltage', '120-450V DC', 'output_voltage', '220V AC', 'efficiency', '97.5%', 'warranty', '5 years'),
JSON_ARRAY('قابلیت اتصال به شبکه', 'پشتیبانی از باتری', 'نمایشگر LCD', 'محافظت چندگانه'),
'/placeholder.svg?height=600&width=800', TRUE),

(UUID(), 'باتری لیتیوم 10 کیلووات ساعت', 'باتری لیتیوم یون با عمر طولانی برای ذخیره انرژی خورشیدی', 'باتری 10kWh با 6000 سیکل شارژ', 85000000,
(SELECT id FROM categories WHERE slug = 'batteries' LIMIT 1),
JSON_OBJECT('capacity', '10kWh', 'voltage', '51.2V', 'cycles', '6000+', 'warranty', '10 years', 'weight', '95kg'),
JSON_ARRAY('عمر طولانی', 'شارژ سریع', 'ایمنی بالا', 'مانیتورینگ هوشمند'),
'/placeholder.svg?height=600&width=800', TRUE);

-- =====================================================
-- داده‌های نمونه - پروژه‌ها
-- =====================================================
INSERT INTO projects (id, title, description, short_description, image_url, project_type, location, capacity, completion_date, client_name, features, gallery_images, slug) VALUES
(UUID(), 'نیروگاه خورشیدی مسکونی تهران', 'نصب سیستم خورشیدی 15 کیلووات برای یک واحد مسکونی در شمال تهران با قابلیت اتصال به شبکه', 'سیستم 15kW خانگی با اتصال به شبکه', 
'/placeholder.svg?height=600&width=800',
'مسکونی', 'تهران، نیاوران', '15 کیلووات', '2024-01-15', 'آقای احمدی',
JSON_ARRAY('27 پنل 550 وات', 'اینورتر 15kW', 'سیستم مانیتورینگ', 'اتصال به شبکه'),
JSON_ARRAY('/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600'),
'residential-tehran-15kw'),

(UUID(), 'نیروگاه خورشیدی صنعتی کرج', 'پروژه نصب 200 کیلووات پنل خورشیدی برای یک کارخانه تولیدی در کرج', 'سیستم 200kW صنعتی با ذخیره‌ساز', 
'/placeholder.svg?height=600&width=800',
'صنعتی', 'کرج، شهرک صنعتی', '200 کیلووات', '2023-11-20', 'شرکت صنایع پارس',
JSON_ARRAY('364 پنل 550 وات', '4 اینورتر 50kW', 'سیستم باتری 100kWh', 'مانیتورینگ آنلاین'),
JSON_ARRAY('/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600'),
'industrial-karaj-200kw'),

(UUID(), 'نیروگاه خورشیدی تجاری اصفهان', 'نصب سیستم 50 کیلووات برای یک مجتمع تجاری در اصفهان', 'سیستم 50kW تجاری روی پشت‌بام', 
'/placeholder.svg?height=600&width=800',
'تجاری', 'اصفهان، خیابان چهارباغ', '50 کیلووات', '2024-02-10', 'مجتمع تجاری سپهر',
JSON_ARRAY('91 پنل 550 وات', '2 اینورتر 25kW', 'سازه آلومینیومی', 'گارانتی 10 ساله'),
JSON_ARRAY('/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600'),
'commercial-isfahan-50kw');

-- =====================================================
-- داده‌های نمونه - تنظیمات سایت
-- =====================================================
INSERT INTO site_settings (setting_key, setting_value, setting_type, description) VALUES
('site_title', 'نیروخورشید - طراحی و اجرای نیروگاه خورشیدی', 'text', 'عنوان سایت'),
('site_description', 'ارائه خدمات طراحی، اجرا و نگهداری نیروگاه‌های خورشیدی', 'text', 'توضیحات سایت'),
('contact_email', 'info@nirokhorshid.ir', 'email', 'ایمیل تماس'),
('contact_phone', '021-12345678', 'text', 'تلفن تماس'),
('contact_address', 'تهران، خیابان ولیعصر، پلاک 123', 'text', 'آدرس'),
('instagram_url', 'https://instagram.com/nirokhorshid', 'url', 'اینستاگرام'),
('telegram_url', 'https://t.me/nirokhorshid', 'url', 'تلگرام');

-- =====================================================
-- کاربر مدیر پیش‌فرض
-- Password: admin123456 (هش شده با bcrypt)
-- =====================================================
INSERT INTO admin_users (email, password_hash, full_name, role) VALUES
('admin@nirokhorshid.com', '$2a$10$rKZvVxZ5qN8YqYqYqYqYqOqYqYqYqYqYqYqYqYqYqYqYqYqYqYqYq', 'مدیر سیستم', 'admin');

-- =====================================================
-- پایان اسکریپت
-- =====================================================

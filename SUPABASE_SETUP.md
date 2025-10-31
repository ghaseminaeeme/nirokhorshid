# راهنمای نصب Supabase برای نیروخورشید

## مرحله 1: ساخت پروژه Supabase

1. به https://supabase.com بروید
2. ثبت‌نام کنید یا وارد شوید
3. پروژه جدید بسازید:
   - نام: nirokhorshid
   - رمز دیتابیس: یک رمز قوی انتخاب کنید
   - منطقه: Singapore یا Frankfurt (نزدیک به ایران)

## مرحله 2: اجرای اسکریپت‌های SQL

1. در داشبورد Supabase به **SQL Editor** بروید
2. اسکریپت‌ها را به ترتیب اجرا کنید:

### اسکریپت 1: ساخت جداول
\`\`\`sql
-- محتوای فایل supabase/001_create_tables.sql را کپی کنید
\`\`\`

### اسکریپت 2: داده‌های نمونه
\`\`\`sql
-- محتوای فایل supabase/002_seed_data.sql را کپی کنید
\`\`\`

## مرحله 3: دریافت کلیدهای API

1. به **Settings** → **API** بروید
2. کپی کنید:
   - **Project URL**
   - **anon public** key

## مرحله 4: تنظیم متغیرهای محیطی

فایل `.env.local` بسازید:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
\`\`\`

## مرحله 5: اجرای پروژه

\`\`\`bash
npm install
npm run dev
\`\`\`

## بررسی نصب

1. به http://localhost:3000/products بروید
2. باید محصولات فارسی را ببینید
3. به http://localhost:3000/projects بروید
4. باید پروژه‌ها را ببینید

## دسترسی به دیتابیس

### از طریق داشبورد Supabase:
- **Table Editor**: مشاهده و ویرایش داده‌ها
- **SQL Editor**: اجرای کوئری‌های SQL
- **Database**: مشاهده ساختار جداول

### امکانات:
- افزودن/حذف/ویرایش رکوردها
- تغییر ساختار جداول
- اجرای کوئری‌های پیچیده
- Backup و Restore
- مانیتورینگ

## پلن رایگان Supabase

- 500 MB دیتابیس
- 1 GB File Storage
- 2 GB Bandwidth
- 50,000 کاربر فعال ماهانه
- دسترسی کامل به Dashboard

برای پروژه شما کاملاً کافی است!

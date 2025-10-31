# راهنمای انتشار سایت نیروخورشید

## مراحل انتشار روی Vercel

### 1. آماده‌سازی Supabase

قبل از انتشار، باید دیتابیس Supabase رو آماده کنی:

1. برو به https://supabase.com و یک پروژه جدید بساز
2. در **SQL Editor**، اسکریپت‌های زیر رو به ترتیب اجرا کن:
   - `supabase/001_create_tables.sql`
   - `supabase/002_seed_data.sql`
3. از **Settings → API** این مقادیر رو کپی کن:
   - Project URL
   - anon public key

### 2. انتشار روی Vercel

1. در v0، روی دکمه **Publish** کلیک کن
2. اگر اولین باره، به GitHub و Vercel وصل میشه
3. پروژه خودکار deploy میشه

### 3. تنظیم Environment Variables

بعد از deploy، باید متغیرهای محیطی رو تنظیم کنی:

1. برو به Vercel Dashboard: https://vercel.com/dashboard
2. پروژه `nirokhorshid` رو انتخاب کن
3. برو به **Settings → Environment Variables**
4. این متغیرها رو اضافه کن:

\`\`\`
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
\`\`\`

5. روی **Save** کلیک کن
6. برو به **Deployments** و آخرین deployment رو **Redeploy** کن

### 4. تست سایت

بعد از deploy موفق:
- سایتت روی آدرس `https://nirokhorshid.vercel.app` در دسترس هست
- صفحات محصولات و پروژه‌ها رو چک کن
- فرم تماس رو تست کن
- پنل مدیریت رو امتحان کن: `/admin/login`

### 5. دامنه سفارشی (اختیاری)

اگر دامنه خودت رو داری:
1. در Vercel Dashboard → **Settings → Domains**
2. دامنه‌ات رو اضافه کن
3. DNS records رو طبق راهنمای Vercel تنظیم کن

**نکته:** دامنه‌های `.ir` به دلیل تحریم‌ها ممکنه مشکل داشته باشن.

## مشکلات رایج

### سایت deploy شد ولی صفحات خالی هستن
- Environment variables رو چک کن
- مطمئن شو اسکریپت‌های SQL اجرا شدن
- در Vercel logs رو بررسی کن

### خطای 500 Internal Server Error
- Supabase URL و Key رو دوباره چک کن
- مطمئن شو جداول دیتابیس ساخته شدن

### تصاویر نمایش داده نمیشن
- در `next.config.mjs` تنظیمات images رو چک کن
- مطمئن شو `unoptimized: true` فعال هست

## پشتیبانی

اگر مشکلی داشتی:
- Vercel logs رو بررسی کن: Dashboard → Deployments → View Function Logs
- Supabase logs رو چک کن: Dashboard → Logs

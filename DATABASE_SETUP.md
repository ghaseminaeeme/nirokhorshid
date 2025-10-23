# راهنمای نصب پایگاه داده MySQL

## 1. نیازمندی‌ها

- MySQL 5.7 یا بالاتر
- یا MariaDB 10.3 یا بالاتر

## 2. ایجاد پایگاه داده

### روش اول: استفاده از phpMyAdmin (هاست اشتراکی)

1. وارد phpMyAdmin شوید
2. روی "New" کلیک کنید
3. نام پایگاه داده را `nirokhorshid` وارد کنید
4. Collation را `utf8mb4_unicode_ci` انتخاب کنید
5. روی "Create" کلیک کنید
6. روی تب "SQL" کلیک کنید
7. محتویات فایل `database/nirokhorshid_complete.sql` را کپی و پیست کنید
8. روی "Go" کلیک کنید

### روش دوم: استفاده از خط فرمان

\`\`\`bash
# ایجاد پایگاه داده
mysql -u root -p -e "CREATE DATABASE nirokhorshid CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# اجرای اسکریپت
mysql -u root -p nirokhorshid < database/nirokhorshid_complete.sql
\`\`\`

## 3. تنظیم متغیرهای محیطی

فایل `.env.local` را در ریشه پروژه ایجاد کنید:

\`\`\`env
# اطلاعات اتصال به پایگاه داده
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=nirokhorshid

# برای هاست اشتراکی:
# DB_HOST=your_host_address
# DB_USER=your_username
# DB_PASSWORD=your_password
# DB_NAME=your_database_name
\`\`\`

## 4. نصب وابستگی‌ها

\`\`\`bash
npm install
# یا
yarn install
\`\`\`

## 5. اجرای پروژه

\`\`\`bash
npm run dev
# یا
yarn dev
\`\`\`

پروژه روی `http://localhost:3000` اجرا می‌شود.

## 6. ورود به پنل مدیریت

- آدرس: `http://localhost:3000/admin/login`
- ایمیل: `admin@nirokhorshid.com`
- رمز عبور: `admin123456`

**مهم:** حتماً رمز عبور را بعد از اولین ورود تغییر دهید!

## 7. ساختار پایگاه داده

پایگاه داده شامل 7 جدول است:

1. **categories** - دسته‌بندی محصولات
2. **products** - محصولات
3. **services** - خدمات
4. **projects** - پروژه‌های انجام شده
5. **contact_messages** - پیام‌های تماس
6. **site_settings** - تنظیمات سایت
7. **admin_users** - کاربران مدیریت

## 8. داده‌های نمونه

اسکریپت شامل داده‌های نمونه فارسی است:
- 4 دسته‌بندی
- 3 محصول نمونه
- 3 پروژه نمونه
- تنظیمات اولیه سایت
- یک کاربر مدیر

## 9. پشتیبان‌گیری

### از طریق phpMyAdmin:
1. پایگاه داده را انتخاب کنید
2. روی "Export" کلیک کنید
3. "Quick" را انتخاب کنید
4. روی "Go" کلیک کنید

### از طریق خط فرمان:
\`\`\`bash
mysqldump -u root -p nirokhorshid > backup.sql
\`\`\`

## 10. بازیابی از پشتیبان

\`\`\`bash
mysql -u root -p nirokhorshid < backup.sql
\`\`\`

## 11. عیب‌یابی

### خطای اتصال به پایگاه داده:
- بررسی کنید MySQL در حال اجرا است
- اطلاعات `.env.local` را بررسی کنید
- دسترسی کاربر به پایگاه داده را بررسی کنید

### خطای کاراکترهای فارسی:
- مطمئن شوید Collation پایگاه داده `utf8mb4_unicode_ci` است
- در فایل `my.cnf` یا `my.ini` این تنظیمات را اضافه کنید:
\`\`\`ini
[client]
default-character-set=utf8mb4

[mysql]
default-character-set=utf8mb4

[mysqld]
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_ci
\`\`\`

## 12. نکات امنیتی

1. رمز عبور پایگاه داده را قوی انتخاب کنید
2. رمز عبور مدیر را تغییر دهید
3. فایل `.env.local` را در `.gitignore` قرار دهید
4. در محیط تولید از SSL برای اتصال به پایگاه داده استفاده کنید

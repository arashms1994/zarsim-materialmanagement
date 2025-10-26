# Zarsim Material Management

سیستم مدیریت مواد شرکت زرسم - یک اپلیکیشن React با TypeScript برای مدیریت ورود و خروج مواد از انبار.

## 🚀 راه‌اندازی پروژه

### پیش‌نیازها

- Node.js (نسخه 18 یا بالاتر)
- npm یا yarn

### نصب و راه‌اندازی

1. **کلون کردن پروژه:**

```bash
git clone <repository-url>
cd zarsim-materialmanagement
```

2. **نصب وابستگی‌ها:**

```bash
npm install
```

3. **تنظیم متغیرهای محیطی:**

```bash
# کپی کردن فایل نمونه
cp .env.example .env

# ویرایش فایل .env با مقادیر واقعی
```

4. **اجرای پروژه:**

```bash
npm run dev
```

## ⚙️ تنظیمات محیطی

فایل `.env` شامل متغیرهای زیر است:

```env
# Base URL for SharePoint API
VITE_BASE_URL=https://portal.zarsim.com

# SharePoint List GUIDs
VITE_DARKHAST_MAVAD_LIST_GUID=your-guid-here
VITE_SUPPLIERS_LIST_GUID=your-guid-here
VITE_PERSONNEL_LIST_GUID=your-guid-here

# API Configuration
VITE_API_TIMEOUT=30000
VITE_CACHE_STALE_TIME=300000

# Application Settings
VITE_APP_NAME=Zarsim Material Management
VITE_VERSION=1.0.0
```

## 🏗️ ساختار پروژه

```
src/
├── api/                    # لایه API
│   ├── base.ts            # تنظیمات پایه
│   └── getData.ts         # توابع دریافت داده
├── components/            # کامپوننت‌های اصلی
│   ├── enter-form/        # فرم ورود مواد
│   ├── exit-form/         # فرم‌های خروج مواد
│   ├── ui/               # کامپوننت‌های UI پایه
│   └── MaterialManagement.tsx
├── hooks/                # Custom hooks
├── lib/                  # توابع کمکی
├── providers/            # Context providers
├── theme/               # تنظیمات تم
├── types/               # تعریف انواع TypeScript
└── config.ts            # مدیریت متغیرهای محیطی
```

## 🔧 تکنولوژی‌های استفاده شده

- **React 19.1.1** با TypeScript
- **Vite** به عنوان bundler
- **Material-UI (MUI)** برای کامپوننت‌های UI
- **TailwindCSS** برای استایل‌دهی
- **React Hook Form** برای مدیریت فرم‌ها
- **TanStack Query** برای مدیریت state و API calls
- **Emotion** برای CSS-in-JS با پشتیبانی RTL

## 📋 ویژگی‌ها

- ✅ مدیریت ورود مواد به انبار شارژ
- ✅ مدیریت خروج مواد از انبار پای خط
- ✅ مدیریت خروج مواد از انبار شارژ
- ✅ جستجوی پیشرفته در برنامه‌ها، تأمین‌کنندگان و پرسنل
- ✅ پشتیبانی کامل از زبان فارسی و تقویم شمسی
- ✅ مدیریت cache و بهینه‌سازی عملکرد
- ✅ استفاده از متغیرهای محیطی برای امنیت

## 🛠️ اسکریپت‌های موجود

```bash
npm run dev      # اجرای پروژه در حالت توسعه
npm run build    # ساخت پروژه برای تولید
npm run lint     # بررسی کد با ESLint
npm run preview  # پیش‌نمایش نسخه تولید
```

## 🔒 امنیت

- تمام GUID های SharePoint در متغیرهای محیطی ذخیره می‌شوند
- فایل `.env` در `.gitignore` قرار دارد
- استفاده از فایل `.env.example` برای راهنمایی

## 📝 یادداشت‌ها

- این پروژه برای استفاده در محیط SharePoint طراحی شده است
- تمام API calls به SharePoint REST API انجام می‌شود
- پشتیبانی کامل از RTL و زبان فارسی

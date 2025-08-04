# منوی همبرگری موبایل - Mobile Hamburger Navigation

## خلاصه تغییرات

این پروژه شامل پیاده‌سازی منوی همبرگری موبایل با انیمیشن fade-in-right برای هر دو صفحه اصلی (`index.html`) و صفحه مقالات (`articles.html`) است.

## ویژگی‌های پیاده‌سازی شده

### 1. آیکون همبرگر (Hamburger Icon)
- **موقعیت**: سمت راست هدر در حالت موبایل
- **طراحی**: سه خط افقی با انیمیشن تبدیل به X هنگام فعال شدن
- **رنگ**: سبز (`#4CAF50`) برای صفحه اصلی، آبی (`#667eea`) برای صفحه مقالات

### 2. منوی کشویی موبایل (Mobile Dropdown Menu)
- **موقعیت**: کشویی از سمت راست
- **عرض**: 280px
- **انیمیشن**: fade-in-right با مدت 0.3 ثانیه
- **پس‌زمینه**: شیشه‌ای با blur effect

### 3. لوگو در وسط هدر
- **موقعیت**: وسط هدر در حالت موبایل
- **اندازه**: کوچک‌تر شده برای موبایل
- **انیمیشن**: hover effect

### 4. منوی ناوبری
- **موقعیت**: داخل منوی کشویی موبایل
- **استایل**: کارت‌های جداگانه با hover effect
- **لینک‌ها**: خانه، محصولات، مقالات، درباره ما

### 5. دکمه‌های عملیات
- **محتوای**: منوی دیجیتال و بازدید مجازی
- **استایل**: دکمه‌های gradient با hover effect

## فایل‌های تغییر یافته

### HTML Files
1. **`index.html`**
   - اضافه شدن آیکون همبرگر
   - جداسازی منوی دسکتاپ و موبایل
   - ساختار جدید هدر

2. **`articles.html`**
   - اضافه شدن آیکون همبرگر
   - منوی کشویی موبایل
   - لینک‌های مناسب برای صفحه مقالات

### CSS Files
1. **`styles.css`**
   - استایل‌های آیکون همبرگر
   - انیمیشن fade-in-right
   - Media queries برای موبایل
   - استایل‌های منوی کشویی

2. **`articles.css`**
   - استایل‌های مخصوص منوی همبرگر مقالات
   - Media queries برای صفحه مقالات
   - رنگ‌بندی متفاوت (آبی)

### JavaScript Files
1. **`script.js`**
   - عملکرد toggle منوی همبرگر
   - بستن منو با کلیک خارج از آن
   - بستن منو با کلیک روی لینک‌ها
   - مدیریت overflow صفحه

2. **`articles.js`**
   - عملکرد مشابه برای صفحه مقالات
   - سازگاری با عملکرد موجود صفحه

## Media Queries

### Breakpoint: 768px
- نمایش آیکون همبرگر
- مخفی کردن منوی دسکتاپ
- تغییر layout هدر

### Breakpoint: 600px
- تنظیم اندازه لوگو
- بهینه‌سازی فاصله‌ها

## انیمیشن‌ها

### fade-in-right
```css
@keyframes fade-in-right {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```

### Hamburger to X
```css
.hamburger-menu.active span:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
}
.hamburger-menu.active span:nth-child(2) {
    opacity: 0;
}
.hamburger-menu.active span:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
}
```

## نحوه استفاده

1. **در حالت دسکتاپ**: منوی معمولی نمایش داده می‌شود
2. **در حالت موبایل**: آیکون همبرگر در سمت راست هدر ظاهر می‌شود
3. **کلیک روی آیکون**: منوی کشویی با انیمیشن fade-in-right باز می‌شود
4. **بستن منو**: کلیک روی آیکون، کلیک خارج از منو، یا کلیک روی لینک

## سازگاری

- **مرورگرها**: Chrome, Firefox, Safari, Edge
- **دستگاه‌ها**: موبایل، تبلت، دسکتاپ
- **جهت**: RTL (راست به چپ)

## نکات فنی

- استفاده از CSS Grid و Flexbox برای layout
- Backdrop-filter برای افکت شیشه‌ای
- Event delegation برای عملکرد بهتر
- Responsive design با breakpoint های مناسب
- Accessibility با keyboard navigation 
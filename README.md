# Forex Landing Page - HP Trading

Landing page cho khóa học "Bí Quyết Sống Sót Cùng Forex" được xây dựng với Next.js, TypeScript và Tailwind CSS.

## 🚀 Tính năng

- ✅ **Next.js 16** với App Router
- ✅ **TypeScript** - Type safety đầy đủ
- ✅ **Tailwind CSS** - Styling hiện đại và responsive
- ✅ **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- ✅ **Responsive Design** - Hoạt động tốt trên mọi thiết bị
- ✅ **Vietnamese Support** - Font và language tối ưu cho tiếng Việt
- ✅ **Dark Theme Design** - Black background với red accents chuyên nghiệp

## 📋 Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Chạy production server
npm start
```

## 📁 Cấu trúc dự án

```
forex-landing/
├── app/
│   ├── layout.tsx          # Root layout với SEO metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── package.json
└── tsconfig.json
```

## 🎨 Các section chính

1. **Navigation Bar** - Menu điều hướng sticky
2. **Hero Section** - CTA chính với thông tin khóa học
3. **Common Mistakes** - Những vấn đề trader hay gặp
4. **Course Benefits** - Lợi ích của khóa học
5. **Course Content** - Nội dung 3 buổi học
6. **What You'll Get** - Kiến thức sẽ nhận được
7. **Instructor** - Giới thiệu Cộng Đồng Alpha net
8. **Target Audience** - Đối tượng phù hợp
9. **Value Proposition** - Tổng trị giá miễn phí
10. **Registration Form** - Form đăng ký
11. **Program Info** - Thông tin chương trình
12. **Footer** - Links và copyright

## 🔧 Tùy chỉnh

### Thay đổi màu sắc

Chỉnh sửa các class Tailwind trong `app/page.tsx`:
- `bg-blue-600` → Đổi sang màu bạn muốn
- `from-orange-500 to-red-600` → Gradient buttons

### Thêm nội dung

Chỉnh sửa trực tiếp trong các section tương ứng trong `app/page.tsx`

### SEO Settings

Chỉnh sửa metadata trong `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  // ...
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code lên GitHub
2. Import project vào Vercel
3. Deploy tự động

### Other platforms

```bash
# Build production
npm run build

# Deploy dist folder
npm start
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📝 License

MIT License

## 👤 Tác giả

Đại Lê

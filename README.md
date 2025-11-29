# LiveHindustan Clone

A responsive, high-performance Hindi news portal built with Next.js 15 & Tailwind CSS. This project is a simplified clone of the [LiveHindustan](https://www.livehindustan.com/) website, demonstrating modern web development practices.

![LiveHindustan Clone - Desktop View](./wireframe%201.png)

![LiveHindustan Clone - Mobile View](./wireframe%202.png)

---

## ✨ Features

### 🚀 Performance & Data Fetching
- **ISR Strategy**: Pages revalidate every 60 seconds for fresh content while maintaining fast static page loads
- **Dynamic Routing**: Individual article pages with clean URLs (`/article/[slug]`)
- **Category Pages**: Browse news by category (`/category/[slug]`)

### 🖼️ Optimization
- **Next.js Image Component**: Automatic image optimization, lazy loading, and responsive sizing
- **SEO Metadata**: Dynamic meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **Hindi Language Support**: Proper `lang="hi"` attribute and UTF-8 encoding

### 🛡️ Robustness
- **Fallback UI**: Graceful handling of errors and missing images with placeholder components
- **Loading States**: Skeleton loaders for smooth user experience during data fetching
- **Error Boundaries**: Custom error pages with retry functionality
- **Edge Case Handling**: Long titles truncated, empty states displayed properly

### 📱 Responsive Design
- Mobile-first approach with adaptive layouts
- Collapsible navigation menu for mobile devices
- 4-column grid collapsing to single column on mobile

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Utility-first CSS framework |
| **ISR** | Incremental Static Regeneration for data fetching |

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/livehindustan-clone.git
   cd livehindustan-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── article/[slug]/     # Dynamic article pages
│   ├── category/[slug]/    # Dynamic category pages
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Home page
│   ├── loading.tsx         # Loading skeleton
│   └── not-found.tsx       # 404 page
├── components/             # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── NewsCard.tsx
│   ├── NewsSection.tsx
│   ├── Sidebar.tsx
│   └── ...
├── data/
│   └── mockData.ts         # Mock articles and categories
├── lib/
│   └── utils.ts            # Utility functions
└── types/
    └── article.ts          # TypeScript interfaces
```

---

## 🧪 Testing & Edge Cases

For detailed information about edge case testing and how the application handles various scenarios, please refer to **[DOCUMENTATION.md](./DOCUMENTATION.md)**.

Key test scenarios covered:
- ✅ Articles without images
- ✅ Extremely long titles
- ✅ Empty data responses
- ✅ API failure fallbacks
- ✅ 404 handling for invalid routes

---

## 🎯 Key Features Demonstrated

1. **Next.js App Router** - Modern file-based routing
2. **Server Components** - Efficient server-side rendering
3. **ISR (Incremental Static Regeneration)** - Best of static and dynamic
4. **TypeScript** - Full type safety
5. **Responsive Design** - Mobile-first approach
6. **SEO Optimization** - Meta tags, structured data
7. **Error Handling** - Graceful degradation

---

## 📝 License

This project is for educational purposes only. LiveHindustan is a trademark of Hindustan Media Ventures Limited.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**Built with ❤️ using Next.js and Tailwind CSS**

# LiveHindustan Clone

A responsive, high-performance Hindi news portal built with Next.js 15 & Tailwind CSS. This project is a simplified clone of the [LiveHindustan](https://www.livehindustan.com/) website, demonstrating modern web development practices.

### 🌐 [Live Demo](https://superlative-rugelach-c0e618.netlify.app/) | [GitHub Repo](https://github.com/vemkaze/AST-consulting-assessment)

[![Netlify Status](https://api.netlify.com/api/v1/badges/superlative-rugelach-c0e618/deploy-status)](https://superlative-rugelach-c0e618.netlify.app/)

![LiveHindustan Clone - Screenshot](./preview.png)

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

### Running Tests

```bash
# Run all tests
npm test

# Watch mode for development
npm run test:watch

# With coverage report
npm run test:coverage
```

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── article/[slug]/     # Dynamic article pages
│   ├── category/[slug]/    # Dynamic category pages
│   ├── search/             # Search results page
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
├── types/
│   └── article.ts          # TypeScript interfaces
└── __tests__/              # Unit tests
    ├── utils.test.ts
    ├── mockData.test.ts
    └── components/
        └── NewsCard.test.tsx
```

---

## 🧪 Testing & Edge Cases

For detailed information about edge case testing and how the application handles various scenarios, please refer to **[DOCUMENTATION.md](./DOCUMENTATION.md)**.

### Unit Tests (25 tests)
- ✅ Utility functions (formatDate, truncateText, generateSlug)
- ✅ Mock data integrity (articles, categories, helper functions)
- ✅ Component rendering (NewsCard with various props)

### Edge Cases Covered
- ✅ Articles without images
- ✅ Extremely long titles
- ✅ Empty data responses
- ✅ API failure fallbacks
- ✅ 404 handling for invalid routes

---

## 🔍 Working Search

The application includes a fully functional search feature:
- Real-time search across article titles, content, and categories
- Accessible via the search icon in the header
- Dedicated `/search` page with search results
- Hindi language support for search queries

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

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

### Disclaimer

This is an **educational/assessment project** created to demonstrate web development skills using Next.js and modern frontend technologies. 

- This project is **not affiliated with** LiveHindustan or Hindustan Media Ventures Limited
- All news content is **mock/fictional data** for demonstration purposes only
- The LiveHindustan name and branding are trademarks of their respective owners
- No commercial use is intended or permitted without proper authorization

---

## 👨‍💻 Author

**Abhishek Verma**
- GitHub: [@vemkaze](https://github.com/vemkaze)

---

## 🙏 Acknowledgments

- [LiveHindustan](https://www.livehindustan.com/) for design inspiration
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Unsplash](https://unsplash.com/) for placeholder images

---

**Built with ❤️ using Next.js and Tailwind CSS**

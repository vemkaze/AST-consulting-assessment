import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NewsSection, Sidebar } from '@/components';
import { getAllArticles, getAllCategories, getArticlesByCategory } from '@/data/mockData';

// Generate static paths for all categories
export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const categories = getAllCategories();
  const category = categories.find(c => c.slug === slug);
  
  if (!category) {
    return {
      title: 'Category Not Found - LiveHindustan Clone',
    };
  }
  
  return {
    title: `${category.name} News - LiveHindustan Clone`,
    description: `${category.name} से जुड़ी सभी ताजा खबरें पढ़ें - LiveHindustan Clone`,
    openGraph: {
      title: `${category.name} News - LiveHindustan Clone`,
      description: `${category.name} से जुड़ी सभी ताजा खबरें`,
      type: 'website',
      locale: 'hi_IN',
    },
  };
}

// ISR: Revalidate category pages every 2 minutes
export const revalidate = 120;

export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const categories = getAllCategories();
  const category = categories.find(c => c.slug === slug);
  
  if (!category) {
    notFound();
  }
  
  const articles = getArticlesByCategory(slug);
  const allArticles = getAllArticles();
  
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Category Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {category.name}
        </h1>
        <div 
          className="w-20 h-1 rounded-full"
          style={{ backgroundColor: category.color }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {articles.length > 0 ? (
            <NewsSection 
              title="" 
              articles={articles} 
            />
          ) : (
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="mb-4">
                <svg 
                  className="w-16 h-16 mx-auto text-gray-400"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" 
                  />
                </svg>
              </div>
              <p className="text-gray-500">इस कैटेगरी में अभी कोई खबर उपलब्ध नहीं है।</p>
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Sidebar articles={allArticles} />
        </div>
      </div>
    </div>
  );
}

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllArticles, getArticleBySlug } from '@/data/mockData';
import { Sidebar } from '@/components';
import { formatDateTime, formatDistanceToNow } from '@/lib/utils';

// Generate static paths for all articles at build time
export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: 'Article Not Found - LiveHindustan Clone',
    };
  }
  
  return {
    title: `${article.title} - LiveHindustan Clone`,
    description: article.summary,
    keywords: `${article.category}, Hindi News, ${article.title}`,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.summary,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: article.image ? [{ url: article.image, alt: article.title }] : [],
      locale: 'hi_IN',
      siteName: 'LiveHindustan Clone',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
      images: article.image ? [article.image] : [],
    },
  };
}

// ISR: Revalidate article pages every 5 minutes
export const revalidate = 300;

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const allArticles = getAllArticles();
  
  if (!article) {
    notFound();
  }
  
  // Get related articles from the same category
  const relatedArticles = allArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 4);
  
  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.summary,
    image: article.image || undefined,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'LiveHindustan Clone',
      logo: {
        '@type': 'ImageObject',
        url: '/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://livehindustan-clone.vercel.app/article/${article.slug}`,
    },
  };
  
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Breadcrumb */}
            <nav className="mb-4 text-sm">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-red-600">
                    होम
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link 
                    href={`/category/${article.category.toLowerCase()}`} 
                    className="text-gray-500 hover:text-red-600"
                  >
                    {article.category}
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-700 truncate max-w-xs">{article.title}</li>
              </ol>
            </nav>
            
            {/* Article Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Category & Breaking Badge */}
              <div className="px-6 pt-6 flex items-center gap-3">
                <span className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded">
                  {article.category}
                </span>
                {article.isBreaking && (
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm font-bold rounded animate-pulse">
                    ब्रेकिंग
                  </span>
                )}
              </div>
              
              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-6 py-4 leading-tight">
                {article.title}
              </h1>
              
              {/* Meta Info */}
              <div className="px-6 pb-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">{article.author}</span>
                </div>
                <span className="hidden sm:inline text-gray-300">|</span>
                <span>{formatDateTime(article.publishedAt)}</span>
                <span className="hidden sm:inline text-gray-300">|</span>
                <span>{formatDistanceToNow(article.publishedAt)}</span>
                <span className="hidden sm:inline text-gray-300">|</span>
                <span>{article.readTime} मिनट पढ़ें</span>
              </div>
              
              {/* Featured Image */}
              {article.image ? (
                <div className="relative w-full h-64 md:h-96 lg:h-[500px]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 75vw"
                  />
                </div>
              ) : (
                <div className="w-full h-64 md:h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
              
              {/* Summary */}
              <div className="px-6 py-4 bg-gray-50 border-l-4 border-red-600">
                <p className="text-lg text-gray-700 font-medium leading-relaxed">
                  {article.summary}
                </p>
              </div>
              
              {/* Article Content */}
              <div className="px-6 py-6">
                <div className="prose prose-lg max-w-none">
                  {article.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* Share Buttons */}
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-700">शेयर करें:</span>
                  <div className="flex gap-2">
                    <button 
                      className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                      </svg>
                    </button>
                    <button 
                      className="w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="Share on X/Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                    <button 
                      className="w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label="Share on WhatsApp"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-600">
                  संबंधित खबरें
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedArticles.map((relatedArticle) => (
                    <Link 
                      key={relatedArticle.id} 
                      href={`/article/${relatedArticle.slug}`}
                      className="group flex gap-4 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="relative w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        {relatedArticle.image ? (
                          <Image
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {formatDistanceToNow(relatedArticle.publishedAt)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar articles={allArticles} />
          </div>
        </div>
      </div>
    </>
  );
}

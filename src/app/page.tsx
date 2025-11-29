import { Suspense } from 'react';
import { HeroSection, NewsSection, Sidebar, BreakingNewsTicker, HeroSkeleton, LoadingSkeleton } from '@/components';
import { getAllArticles, getArticlesByCategory } from '@/data/mockData';

// Using ISR (Incremental Static Regeneration) - regenerates page every 60 seconds
// This is ideal for a news site because:
// 1. News doesn't change every second, but needs periodic updates
// 2. Provides fast initial page load (static content)
// 3. Reduces server load compared to SSR
// 4. Keeps content relatively fresh without manual rebuilds
export const revalidate = 60;

async function getNewsData() {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const articles = getAllArticles();
  
  return {
    articles,
    featuredArticles: articles.filter(a => a.isFeatured),
    breakingNews: articles.filter(a => a.isBreaking),
    sportsNews: getArticlesByCategory('khel'),
    entertainmentNews: getArticlesByCategory('manoranjan'),
    businessNews: getArticlesByCategory('business'),
    technologyNews: getArticlesByCategory('technology'),
  };
}

export default async function HomePage() {
  const data = await getNewsData();
  
  const mainFeatured = data.featuredArticles[0];
  const sideFeatured = data.featuredArticles.slice(1, 3);
  const latestNews = data.articles.filter(a => !a.isFeatured).slice(0, 8);
  
  return (
    <>
      {/* Breaking News Ticker */}
      <BreakingNewsTicker articles={data.articles} />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Hero Section */}
            <Suspense fallback={<HeroSkeleton />}>
              {mainFeatured && (
                <HeroSection 
                  mainArticle={mainFeatured} 
                  sideArticles={sideFeatured.length > 0 ? sideFeatured : data.articles.slice(1, 3)} 
                />
              )}
            </Suspense>
            
            {/* Latest News */}
            <Suspense fallback={<LoadingSkeleton count={4} />}>
              <NewsSection 
                title="ताजा खबरें" 
                articles={latestNews.slice(0, 4)} 
                showMore 
              />
            </Suspense>
            
            {/* Sports News */}
            {data.sportsNews.length > 0 && (
              <Suspense fallback={<LoadingSkeleton count={4} />}>
                <NewsSection 
                  title="खेल" 
                  articles={data.sportsNews.slice(0, 4)} 
                  showMore 
                />
              </Suspense>
            )}
            
            {/* Business News */}
            {data.businessNews.length > 0 && (
              <Suspense fallback={<LoadingSkeleton count={4} />}>
                <NewsSection 
                  title="बिज़नेस" 
                  articles={data.businessNews.slice(0, 4)} 
                  showMore 
                />
              </Suspense>
            )}
            
            {/* Entertainment News */}
            {data.entertainmentNews.length > 0 && (
              <Suspense fallback={<LoadingSkeleton count={4} />}>
                <NewsSection 
                  title="मनोरंजन" 
                  articles={data.entertainmentNews.slice(0, 4)} 
                  showMore 
                />
              </Suspense>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar articles={data.articles} />
          </div>
        </div>
      </div>
    </>
  );
}

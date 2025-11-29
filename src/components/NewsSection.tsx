import NewsCard from './NewsCard';
import { Article } from '@/types/article';

interface NewsSectionProps {
  title: string;
  articles: Article[];
  variant?: 'grid' | 'list';
  showMore?: boolean;
}

export default function NewsSection({ 
  title, 
  articles, 
  variant = 'grid',
  showMore = false 
}: NewsSectionProps) {
  if (articles.length === 0) {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-600">
          {title}
        </h2>
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-500">इस सेक्शन में कोई खबर उपलब्ध नहीं है।</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2 border-red-600">
          {title}
        </h2>
        {showMore && (
          <a 
            href="#" 
            className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
          >
            और देखें →
          </a>
        )}
      </div>
      
      {variant === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} variant="default" />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} variant="horizontal" />
          ))}
        </div>
      )}
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/types/article';
import { formatDistanceToNow } from '@/lib/utils';

interface NewsCardProps {
  article: Article;
  variant?: 'default' | 'compact' | 'horizontal';
}

export default function NewsCard({ article, variant = 'default' }: NewsCardProps) {
  // Default vertical card
  if (variant === 'default') {
    return (
      <Link href={`/article/${article.slug}`}>
        <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            {article.image ? (
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            
            {/* Category Badge */}
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 bg-red-600 text-white text-xs font-medium rounded">
                {article.category}
              </span>
            </div>
            
            {/* Breaking Badge */}
            {article.isBreaking && (
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded animate-pulse">
                  ब्रेकिंग
                </span>
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors mb-2">
              {article.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-3 flex-1">
              {article.summary}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{article.author}</span>
              <span>{formatDistanceToNow(article.publishedAt)}</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  // Compact card (smaller, for sidebar)
  if (variant === 'compact') {
    return (
      <Link href={`/article/${article.slug}`}>
        <article className="group flex gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
          {/* Image */}
          <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
            {article.image ? (
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="80px"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors">
              {article.title}
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              {formatDistanceToNow(article.publishedAt)}
            </p>
          </div>
        </article>
      </Link>
    );
  }

  // Horizontal card
  if (variant === 'horizontal') {
    return (
      <Link href={`/article/${article.slug}`}>
        <article className="group flex gap-4 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow p-4">
          {/* Image */}
          <div className="relative w-32 h-24 md:w-40 md:h-28 flex-shrink-0 rounded-lg overflow-hidden">
            {article.image ? (
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 128px, 160px"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              <span className="text-xs font-medium text-red-600">{article.category}</span>
              <h3 className="text-base md:text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors mt-1">
                {article.title}
              </h3>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">
              <span>{article.author}</span>
              <span>•</span>
              <span>{formatDistanceToNow(article.publishedAt)}</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return null;
}

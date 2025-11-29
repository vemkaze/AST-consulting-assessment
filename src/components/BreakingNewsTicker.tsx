'use client';

import { useState, useEffect } from 'react';
import { Article } from '@/types/article';

interface BreakingNewsTickerProps {
  articles: Article[];
}

export default function BreakingNewsTicker({ articles }: BreakingNewsTickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const breakingArticles = articles.filter(article => article.isBreaking);

  useEffect(() => {
    if (breakingArticles.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingArticles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [breakingArticles.length]);

  if (breakingArticles.length === 0) return null;

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="animate-pulse">🔴</span>
            <span className="font-bold text-sm whitespace-nowrap">ब्रेकिंग न्यूज</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentIndex * 100}%)` }}
            >
              {breakingArticles.map((article, index) => (
                <div 
                  key={article.id}
                  className={`text-sm truncate ${index === currentIndex ? 'block' : 'hidden'}`}
                >
                  <a 
                    href={`/article/${article.slug}`} 
                    className="hover:underline"
                  >
                    {article.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          {breakingArticles.length > 1 && (
            <div className="flex gap-1 flex-shrink-0">
              {breakingArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/40'
                  }`}
                  aria-label={`Go to news ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

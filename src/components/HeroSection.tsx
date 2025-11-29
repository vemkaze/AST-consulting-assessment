import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/types/article';
import { formatDistanceToNow } from '@/lib/utils';

interface HeroSectionProps {
  mainArticle: Article;
  sideArticles: Article[];
}

export default function HeroSection({ mainArticle, sideArticles }: HeroSectionProps) {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main Featured Article */}
        <div className="lg:col-span-2">
          <Link href={`/article/${mainArticle.slug}`}>
            <article className="relative group cursor-pointer h-[300px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden">
              {mainArticle.image ? (
                <Image
                  src={mainArticle.image}
                  alt={mainArticle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-800" />
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Breaking Badge */}
              {mainArticle.isBreaking && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full animate-pulse">
                    ब्रेकिंग
                  </span>
                </div>
              )}
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-medium rounded mb-3">
                  {mainArticle.category}
                </span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 line-clamp-3 group-hover:text-red-300 transition-colors">
                  {mainArticle.title}
                </h2>
                <p className="text-gray-200 text-sm md:text-base line-clamp-2 hidden md:block">
                  {mainArticle.summary}
                </p>
                <div className="flex items-center gap-4 mt-3 text-gray-300 text-xs md:text-sm">
                  <span>{mainArticle.author}</span>
                  <span>•</span>
                  <span>{formatDistanceToNow(mainArticle.publishedAt)}</span>
                </div>
              </div>
            </article>
          </Link>
        </div>

        {/* Side Articles */}
        <div className="flex flex-col gap-4">
          {sideArticles.slice(0, 2).map((article) => (
            <Link key={article.id} href={`/article/${article.slug}`}>
              <article className="relative group cursor-pointer h-[140px] md:h-[170px] lg:h-[217px] rounded-xl overflow-hidden">
                {article.image ? (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800" />
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Breaking Badge */}
                {article.isBreaking && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded-full animate-pulse">
                      ब्रेकिंग
                    </span>
                  </div>
                )}
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <span className="inline-block px-2 py-0.5 bg-red-600 text-white text-[10px] font-medium rounded mb-2">
                    {article.category}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-white line-clamp-2 group-hover:text-red-300 transition-colors">
                    {article.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

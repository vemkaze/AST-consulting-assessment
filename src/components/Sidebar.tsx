import NewsCard from './NewsCard';
import { Article } from '@/types/article';

interface SidebarProps {
  articles: Article[];
}

export default function Sidebar({ articles }: SidebarProps) {
  return (
    <aside className="space-y-6">
      {/* Trending News */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="bg-red-600 text-white px-4 py-3">
          <h3 className="font-bold text-lg">🔥 ट्रेंडिंग न्यूज</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {articles.slice(0, 5).map((article, index) => (
            <div key={article.id} className="flex items-start gap-3 p-4 hover:bg-gray-50 transition-colors">
              <span className="text-2xl font-bold text-red-600 flex-shrink-0 w-8">
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <a 
                  href={`/article/${article.slug}`}
                  className="text-sm font-medium text-gray-900 hover:text-red-600 transition-colors line-clamp-2"
                >
                  {article.title}
                </a>
                <p className="text-xs text-gray-500 mt-1">{article.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advertisement Placeholder */}
      <div className="bg-gray-100 rounded-xl p-4 text-center">
        <p className="text-xs text-gray-500 mb-2">विज्ञापन</p>
        <div className="bg-gray-200 rounded-lg h-60 flex items-center justify-center">
          <p className="text-gray-400">300 x 250</p>
        </div>
      </div>

      {/* Latest News */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="bg-gray-800 text-white px-4 py-3">
          <h3 className="font-bold text-lg">📰 ताजा खबरें</h3>
        </div>
        <div className="p-2">
          {articles.slice(5, 10).map((article) => (
            <NewsCard key={article.id} article={article} variant="compact" />
          ))}
        </div>
      </div>
    </aside>
  );
}

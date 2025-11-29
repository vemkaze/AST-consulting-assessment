import { HeroSkeleton, LoadingSkeleton } from '@/components';

export default function HomeLoading() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Hero Skeleton */}
          <div className="mb-8">
            <HeroSkeleton />
          </div>
          
          {/* Latest News Skeleton */}
          <div className="mb-8">
            <div className="h-8 w-40 bg-gray-200 rounded mb-4 animate-pulse" />
            <LoadingSkeleton count={4} />
          </div>
          
          {/* Another Section Skeleton */}
          <div className="mb-8">
            <div className="h-8 w-32 bg-gray-200 rounded mb-4 animate-pulse" />
            <LoadingSkeleton count={4} />
          </div>
        </div>
        
        {/* Sidebar Skeleton */}
        <div className="lg:col-span-1">
          <div className="space-y-6 animate-pulse">
            {/* Trending Box */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-gray-200 h-12" />
              <div className="p-4 space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-full" />
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Ad Placeholder */}
            <div className="bg-gray-200 rounded-xl h-64" />
            
            {/* Latest News Box */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-gray-200 h-12" />
              <div className="p-4 space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-20 h-16 bg-gray-200 rounded" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-full" />
                      <div className="h-3 bg-gray-200 rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

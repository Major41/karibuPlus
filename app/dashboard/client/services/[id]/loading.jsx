export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="flex">
        {/* Sidebar Skeleton */}
        <div className="w-64 bg-white/90 backdrop-blur-sm shadow-xl border-r border-gray-200 min-h-screen">
          <div className="p-6">
            {/* Logo Skeleton */}
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="w-24 h-6 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* User Profile Skeleton */}
            <div className="mb-8 p-4 bg-gray-100 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse"></div>
                <div>
                  <div className="w-20 h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="w-12 h-3 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Navigation Skeleton */}
            <nav className="space-y-2">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-3 px-4 py-3">
                  <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content Skeleton */}
        <div className="flex-1 p-8">
          {/* Header Skeleton */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-64 h-8 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="w-96 h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="flex space-x-4">
              <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Filters Skeleton */}
          <div className="bg-white/90 rounded-lg shadow-lg p-6 mb-8">
            <div className="flex gap-4">
              <div className="flex-1 h-10 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-32 h-10 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-32 h-10 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Vendors Grid Skeleton */}
          <div className="grid lg:grid-cols-2 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white/90 rounded-lg shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                    <div>
                      <div className="w-32 h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                      <div className="w-24 h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                      <div className="w-40 h-4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-16 h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="flex gap-2 mb-4">
                  <div className="w-16 h-6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-18 h-6 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="w-8 h-6 bg-gray-200 rounded animate-pulse mx-auto mb-1"></div>
                    <div className="w-12 h-3 bg-gray-200 rounded animate-pulse mx-auto"></div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-6 bg-gray-200 rounded animate-pulse mx-auto mb-1"></div>
                    <div className="w-12 h-3 bg-gray-200 rounded animate-pulse mx-auto"></div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-6 bg-gray-200 rounded animate-pulse mx-auto mb-1"></div>
                    <div className="w-12 h-3 bg-gray-200 rounded animate-pulse mx-auto"></div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="flex-1 h-10 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-10 h-10 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-10 h-10 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

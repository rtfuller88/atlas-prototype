interface FeedHeaderProps {
  groupName: string;
  onClose: () => void;
}

export function FeedHeader({ groupName, onClose }: FeedHeaderProps) {
  return (
    <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
      {/* Combined header - compact on mobile */}
      <div className="flex items-start justify-between px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex-1 min-w-0">
          <h2 className="text-base sm:text-lg font-semibold text-warm-black truncate">
            {groupName}'s Feed
          </h2>
          {/* Inline disclaimer - more compact */}
          <p className="text-xs sm:text-sm text-warm-muted mt-0.5">
            <span className="text-blue-600 font-medium">Real headlines</span>
            {' '}from sources this group follows — curated sample
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 -mr-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
          aria-label="Close feed view"
        >
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

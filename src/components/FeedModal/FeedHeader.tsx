interface FeedHeaderProps {
  groupName: string;
  onClose: () => void;
}

export function FeedHeader({ groupName, onClose }: FeedHeaderProps) {
  return (
    <div className="sticky top-0 z-10 bg-gray-800">
      {/* Combined header - compact on mobile */}
      <div className="flex items-start justify-between px-4 py-3 md:px-6 md:py-4">
        <div className="flex-1 min-w-0">
          <h2 className="text-base md:text-lg font-semibold text-white truncate">
            {groupName}'s Feed
          </h2>
          {/* Inline disclaimer - more compact */}
          <p className="text-xs md:text-sm text-gray-300 mt-0.5">
            <span className="text-blue-300 font-medium">Real headlines</span>
            {' '}from sources this group follows — curated sample
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 -mr-2 rounded-lg hover:bg-gray-700 transition-colors flex-shrink-0"
          aria-label="Close feed view"
        >
          <svg
            className="w-6 h-6 text-gray-300"
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

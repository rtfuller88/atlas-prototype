interface FeedHeaderProps {
  groupName: string;
  onClose: () => void;
}

export function FeedHeader({ groupName, onClose }: FeedHeaderProps) {
  return (
    <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
      {/* Top bar with title and close button */}
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h2 className="text-lg font-semibold text-warm-black">
            {groupName}'s Information Environment
          </h2>
          <p className="text-sm text-warm-muted">
            A simulated view of their media landscape
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
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

      {/* Disclaimer */}
      <div className="px-6 py-3 bg-blue-50 border-t border-blue-100">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
            <svg
              className="w-3 h-3 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-blue-800">Simulated Feed</p>
            <p className="text-sm text-blue-700">
              This is a curated sample of what members of this group might see.
              Real feeds vary by individual. All articles link to actual sources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

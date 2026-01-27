import type { WindowOption } from '../../types';

interface LandscapeHeaderProps {
  windowDescription: string;
  activeWindow: WindowOption;
}

export function LandscapeHeader({ windowDescription, activeWindow }: LandscapeHeaderProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-warm-black">
        Narrative Landscape
      </h1>
      <p className="text-warm-muted mt-1">
        What different media clusters are actually emphasizing right now — {windowDescription}
      </p>
      <p className="text-xs text-warm-muted mt-0.5 italic">
        Coverage patterns, not truth assessments
      </p>

      {/* Window toggle */}
      <div className="flex items-center gap-2 mt-3">
        <span className="text-xs text-warm-muted">Window:</span>
        <div className="inline-flex rounded-md border border-gray-200 overflow-hidden text-xs">
          <button
            disabled
            className="px-3 py-1.5 bg-gray-50 text-gray-400 cursor-not-allowed relative"
            title="Coming soon"
          >
            10 days
            <span className="absolute -top-1 -right-1 bg-amber-100 text-amber-700 text-[9px] font-medium px-1 rounded">
              Soon
            </span>
          </button>
          <button
            className={`px-3 py-1.5 font-medium ${
              activeWindow === '21d'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-warm-black hover:bg-gray-50'
            }`}
          >
            21 days
          </button>
        </div>
      </div>
    </div>
  );
}

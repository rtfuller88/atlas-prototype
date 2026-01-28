import type { WindowOption, LandscapeViewMode } from '../../types';
import { ViewToggle } from './ViewToggle';

interface LandscapeHeaderProps {
  windowDescription: string;
  activeWindow: WindowOption;
  activeView: LandscapeViewMode;
  onViewChange: (view: LandscapeViewMode) => void;
}

export function LandscapeHeader({ windowDescription, activeWindow, activeView, onViewChange }: LandscapeHeaderProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-warm-black">
        Narrative Landscape
      </h2>
      <p className="text-sm text-warm-muted">
        This shows how different media clusters emphasize topics — not what's true or important.
      </p>

      {/* Controls */}
      <div className="mt-3 space-y-2">
        {/* Window toggle */}
        <div className="flex items-center gap-2">
        <span className="text-xs text-warm-muted">Window:</span>
        <span className="text-xs text-gray-400 mr-1">{windowDescription}</span>
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

        {/* Region indicator */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-warm-muted">Region:</span>
          <span
            className="text-xs text-gray-600"
            title="Additional regions planned"
          >
            United States
          </span>
        </div>

        {/* View toggle */}
        <ViewToggle activeView={activeView} onViewChange={onViewChange} />
      </div>
    </div>
  );
}

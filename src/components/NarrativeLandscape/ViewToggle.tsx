import type { LandscapeViewMode } from '../../types';

interface ViewToggleProps {
  activeView: LandscapeViewMode;
  onViewChange: (view: LandscapeViewMode) => void;
}

export function ViewToggle({ activeView, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-warm-muted">View:</span>
      <div className="inline-flex rounded-md border border-gray-200 overflow-hidden text-xs">
        <button
          onClick={() => onViewChange('matrix')}
          className={`px-3 py-1.5 font-medium transition-colors ${
            activeView === 'matrix'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-warm-black hover:bg-gray-50'
          }`}
        >
          Matrix View
        </button>
        <button
          onClick={() => onViewChange('cluster-agenda')}
          className={`px-3 py-1.5 font-medium transition-colors ${
            activeView === 'cluster-agenda'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-warm-black hover:bg-gray-50'
          }`}
        >
          Cluster Agenda
        </button>
      </div>
    </div>
  );
}

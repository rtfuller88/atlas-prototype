import type { LandscapeViewMode } from '../../types';
import { useIsMobile } from '../../hooks/useIsMobile';

interface ViewToggleProps {
  activeView: LandscapeViewMode;
  onViewChange: (view: LandscapeViewMode) => void;
}

const DESKTOP_OPTIONS: { value: LandscapeViewMode; label: string }[] = [
  { value: 'matrix', label: 'Matrix View' },
  { value: 'cluster-agenda', label: 'Cluster Agenda' },
];

const MOBILE_OPTIONS: { value: LandscapeViewMode; label: string }[] = [
  { value: 'topic-list', label: 'Topics' },
  { value: 'matrix', label: 'Matrix' },
  { value: 'cluster-agenda', label: 'By Cluster' },
];

export function ViewToggle({ activeView, onViewChange }: ViewToggleProps) {
  const isMobile = useIsMobile();
  const options = isMobile ? MOBILE_OPTIONS : DESKTOP_OPTIONS;

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-warm-muted">View:</span>
      <div className="inline-flex rounded-md border border-gray-200 overflow-hidden text-xs">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onViewChange(opt.value)}
            className={`px-3 py-1.5 font-medium transition-colors ${
              activeView === opt.value
                ? 'bg-blue-600 text-white'
                : 'bg-white text-warm-black hover:bg-gray-50'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

import { useEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import type { LandscapeTopic, MatrixCell, MediaCluster } from '../../types';
import { DrilldownClusterCard } from './DrilldownClusterCard';

interface TopicDrilldownPanelProps {
  isOpen: boolean;
  onClose: () => void;
  topic: LandscapeTopic | null;
  cells: MatrixCell[];
  clusters: MediaCluster[];
}

export function TopicDrilldownPanel({ isOpen, onClose, topic, cells, clusters }: TopicDrilldownPanelProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Escape key
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Animation: rAF double-buffer
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender || !topic) return null;

  // Build cluster -> cell map for this topic
  const cellMap = new Map(cells.map((c) => [c.clusterId, c]));

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Desktop: right panel. Mobile: bottom drawer. */}
      {/* Desktop panel */}
      <div
        className={`hidden md:flex fixed top-0 right-0 h-full w-[420px] max-w-full bg-white shadow-2xl flex-col transform transition-transform duration-300 ease-out ${
          isAnimating ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drilldown-title-desktop"
      >
        <PanelContent
          titleId="drilldown-title-desktop"
          topic={topic}
          clusters={clusters}
          cellMap={cellMap}
          onClose={onClose}
        />
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 max-h-[85vh] bg-white rounded-t-2xl shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${
          isAnimating ? 'translate-y-0' : 'translate-y-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drilldown-title-mobile"
      >
        <PanelContent
          titleId="drilldown-title-mobile"
          topic={topic}
          clusters={clusters}
          cellMap={cellMap}
          onClose={onClose}
        />
      </div>
    </div>
  );
}

// ─── Shared panel content ────────────────────────────────────────────────────

interface PanelContentProps {
  titleId: string;
  topic: LandscapeTopic;
  clusters: MediaCluster[];
  cellMap: Map<string, MatrixCell>;
  onClose: () => void;
}

function PanelContent({ titleId, topic, clusters, cellMap, onClose }: PanelContentProps) {
  return (
    <>
      {/* Header */}
      <div className="flex items-start justify-between gap-3 px-5 pt-5 pb-3 border-b border-gray-200">
        <div>
          <h3 id={titleId} className="text-lg font-semibold text-warm-black leading-snug">
            {topic.title}
          </h3>
          {topic.issueSlug && (
            <Link
              to={`/story/${topic.issueSlug}`}
              className="text-xs text-blue-600 hover:text-blue-800 hover:underline mt-1 inline-block"
            >
              View full analysis →
            </Link>
          )}
        </div>
        <button
          onClick={onClose}
          className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500"
          aria-label="Close panel"
        >
          ✕
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
        {clusters.map((cluster) => {
          const cell = cellMap.get(cluster.id);
          if (!cell) return null;
          return (
            <DrilldownClusterCard
              key={cluster.id}
              cluster={cluster}
              cell={cell}
              issueSlug={topic.issueSlug}
            />
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-gray-200 text-center">
        <p className="text-xs text-warm-muted">
          Press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">Esc</kbd> or click outside to close
        </p>
      </div>
    </>
  );
}

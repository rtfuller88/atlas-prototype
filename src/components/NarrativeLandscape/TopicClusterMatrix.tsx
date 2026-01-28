import React, { useMemo, useState } from 'react';
import type { LandscapeTopic, MediaCluster, MatrixCell, MatrixNormalization } from '../../types';
import { useIsMobile } from '../../hooks/useIsMobile';
import { MatrixCellView } from './MatrixCell';

export const NORM_LABELS: Record<MatrixNormalization, string> = {
  absolute: 'Absolute',
  row: 'Compare clusters (this topic)',
  column: 'Compare topics (this cluster)',
};

export const NORM_HELP_MAIN: Record<MatrixNormalization, string> = {
  absolute: 'Raw coverage intensity on a 0–10 scale. Best used for detailed inspection.',
  row: 'Compare how much each cluster covers the same topic.',
  column: 'Compare which topics a cluster emphasizes most.',
};

const NORM_HELP_DETAIL: Record<MatrixNormalization, string> = {
  absolute: '(Compare any cell to any other.)',
  row: '(Longest bar in each row = the cluster pushing this topic most.)',
  column: '(Longest bar in each column = the topic this cluster focuses on most.)',
};

export const NORM_MODES: MatrixNormalization[] = ['row', 'column', 'absolute'];

interface TopicClusterMatrixProps {
  topics: LandscapeTopic[];
  clusters: MediaCluster[];
  matrix: MatrixCell[];
  onCellClick: (topicId: string) => void;
  selectedTopicId: string | null;
  normalization: MatrixNormalization;
  onNormalizationChange: (mode: MatrixNormalization) => void;
}

export function TopicClusterMatrix({
  topics,
  clusters,
  matrix,
  onCellClick,
  selectedTopicId,
  normalization,
  onNormalizationChange,
}: TopicClusterMatrixProps) {
  const isMobile = useIsMobile();
  const [hoveredTopicId, setHoveredTopicId] = useState<string | null>(null);
  const [hoveredClusterId, setHoveredClusterId] = useState<string | null>(null);
  const visibleModes = isMobile ? NORM_MODES.filter((m) => m !== 'absolute') : NORM_MODES;

  const cellMap = useMemo(() => {
    const map = new Map<string, MatrixCell>();
    for (const cell of matrix) {
      map.set(`${cell.topicId}::${cell.clusterId}`, cell);
    }
    return map;
  }, [matrix]);

  const rowMaxMap = useMemo(() => {
    const map = new Map<string, number>();
    for (const topic of topics) {
      let max = 0;
      for (const cluster of clusters) {
        const cell = cellMap.get(`${topic.id}::${cluster.id}`);
        if (cell && cell.intensity > max) max = cell.intensity;
      }
      map.set(topic.id, max);
    }
    return map;
  }, [topics, clusters, cellMap]);

  const colMaxMap = useMemo(() => {
    const map = new Map<string, number>();
    for (const cluster of clusters) {
      let max = 0;
      for (const topic of topics) {
        const cell = cellMap.get(`${topic.id}::${cluster.id}`);
        if (cell && cell.intensity > max) max = cell.intensity;
      }
      map.set(cluster.id, max);
    }
    return map;
  }, [topics, clusters, cellMap]);

  function getNormMax(topicId: string, clusterId: string): number {
    if (normalization === 'row') return rowMaxMap.get(topicId) ?? 1;
    if (normalization === 'column') return colMaxMap.get(clusterId) ?? 1;
    return 10; // absolute
  }

  function isHighlighted(topicId: string, clusterId: string): boolean {
    if (normalization === 'row' && hoveredTopicId === topicId) return true;
    if (normalization === 'column' && hoveredClusterId === clusterId) return true;
    return false;
  }

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-warm-black">
          Topic × Cluster Matrix
        </h2>
        <p className="text-sm text-warm-muted mt-1">
          Click any topic row to explore coverage details.
        </p>
        <div className="flex flex-wrap items-center gap-1.5 mt-2" aria-label="Momentum legend">
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-green-100 text-green-700">↑ Emerging</span>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-blue-100 text-blue-700">→ Sustained</span>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-gray-100 text-gray-600">↓ Declining</span>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-gray-50 text-gray-400 border border-gray-200">
            <span className="inline-block w-2.5 h-2.5 bg-absent-hatch border border-gray-200 rounded-sm" />
            Not covered
          </span>
        </div>
      </div>

      {/* Normalization toggle */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-warm-muted">Compare:</span>
          <div className="inline-flex rounded-md border border-gray-200 overflow-hidden text-xs">
            {visibleModes.map((mode) => {
              const isActive = normalization === mode;
              const isAbsolute = mode === 'absolute';
              return (
                <button
                  key={mode}
                  onClick={() => onNormalizationChange(mode)}
                  aria-label={NORM_LABELS[mode]}
                  aria-pressed={isActive}
                  title={isAbsolute ? 'Raw 0–10 scale for detailed comparison' : undefined}
                  className={`px-3 py-1.5 font-medium transition-colors ${
                    isAbsolute ? 'border-l border-gray-300' : ''
                  } ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : isAbsolute
                        ? 'bg-white text-gray-400 hover:bg-gray-50'
                        : 'bg-white text-warm-black hover:bg-gray-50'
                  }`}
                >
                  {NORM_LABELS[mode]}{isAbsolute && <span className="text-[10px] ml-1">(Advanced)</span>}
                </button>
              );
            })}
          </div>
        </div>
        <p className="text-xs text-warm-muted italic leading-snug mt-1.5">
          {NORM_HELP_MAIN[normalization]}{' '}
          <span className="hidden md:inline">{NORM_HELP_DETAIL[normalization]}</span>
        </p>
      </div>

      {/* Mobile scroll hint wrapper */}
      <div className="relative">
        <div className="overflow-x-auto border border-gray-200 rounded-lg bg-white">
          <div
            className="grid"
            style={{
              gridTemplateColumns: '200px ' + clusters.map(() => '1fr').join(' '),
              minWidth: 640,
            }}
          >
            {/* Header row */}
            <div className="sticky left-0 z-20 bg-warm-bg border-b border-gray-200 p-3" />
            {clusters.map((cluster) => {
              const colHighlighted = normalization === 'column' && hoveredClusterId === cluster.id;
              return (
                <div
                  key={cluster.id}
                  className={`sticky top-0 z-10 border-b border-gray-200 p-3 text-center transition-colors ${
                    colHighlighted ? 'bg-blue-50/40' : 'bg-warm-bg'
                  }`}
                >
                  <span className={`text-xs font-semibold uppercase tracking-wide ${cluster.textClass} ${
                    colHighlighted ? 'underline decoration-1 underline-offset-2' : ''
                  }`}>
                    {cluster.shortName}
                  </span>
                </div>
              );
            })}

            {/* Data rows */}
            {topics.map((topic) => {
              const isSelected = selectedTopicId === topic.id;
              const rowHighlighted = isHighlighted(topic.id, '');

              return (
                <React.Fragment key={topic.id}>
                  {/* Topic label cell */}
                  <button
                    onClick={() => onCellClick(topic.id)}
                    onMouseEnter={() => setHoveredTopicId(topic.id)}
                    onMouseLeave={() => setHoveredTopicId(null)}
                    className={`sticky left-0 z-10 border-b border-gray-100 px-3 py-2 text-left transition-colors ${
                      isSelected ? 'bg-blue-50' : rowHighlighted ? 'bg-gray-50' : 'bg-warm-bg hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-sm font-medium text-warm-black leading-tight line-clamp-2">
                      {topic.title}
                    </span>
                  </button>

                  {/* Cluster cells */}
                  {clusters.map((cluster) => {
                    const cell = cellMap.get(`${topic.id}::${cluster.id}`);
                    const highlighted = isHighlighted(topic.id, cluster.id);

                    if (!cell) return <div key={`${topic.id}-${cluster.id}`} className="border-b border-gray-100" />;

                    return (
                      <div
                        key={`${topic.id}-${cluster.id}`}
                        onMouseEnter={() => {
                          setHoveredTopicId(topic.id);
                          setHoveredClusterId(cluster.id);
                        }}
                        onMouseLeave={() => {
                          setHoveredTopicId(null);
                          setHoveredClusterId(null);
                        }}
                        className={`border-b border-gray-100 flex items-center justify-center transition-colors ${
                          highlighted ? 'bg-blue-50/40' : ''
                        }`}
                      >
                        <MatrixCellView
                          cell={cell}
                          clusterColor={cluster.color}
                          isSelected={isSelected}
                          onClick={() => onCellClick(topic.id)}
                          normMax={getNormMax(topic.id, cluster.id)}
                        />
                      </div>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Right-edge gradient scroll hint (mobile only) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent md:hidden" />
      </div>
    </section>
  );
}

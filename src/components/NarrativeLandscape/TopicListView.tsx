import { useMemo } from 'react';
import type { LandscapeTopic, MediaCluster, MatrixCell, MatrixNormalization } from '../../types';
import { NORM_LABELS, NORM_HELP_MAIN, NORM_MODES } from './TopicClusterMatrix';

interface TopicListViewProps {
  topics: LandscapeTopic[];
  clusters: MediaCluster[];
  matrix: MatrixCell[];
  normalization: MatrixNormalization;
  onNormalizationChange: (mode: MatrixNormalization) => void;
  onTopicClick: (topicId: string) => void;
  onSwitchToMatrix: () => void;
}

export function TopicListView({
  topics,
  clusters,
  matrix,
  normalization,
  onNormalizationChange,
  onTopicClick,
  onSwitchToMatrix,
}: TopicListViewProps) {
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
    return 10;
  }

  return (
    <section className="space-y-4">
      {/* Normalization toggle */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-warm-muted">Compare:</span>
          <div className="inline-flex rounded-md border border-gray-200 overflow-hidden text-xs">
            {NORM_MODES.map((mode) => {
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
          {NORM_HELP_MAIN[normalization]}
        </p>
      </div>

      {/* Topic cards */}
      {topics.map((topic) => (
        <button
          key={topic.id}
          onClick={() => onTopicClick(topic.id)}
          className="w-full text-left bg-white rounded-lg border border-gray-200 shadow-sm p-4 transition-colors hover:bg-gray-50"
        >
          <h3 className="text-sm font-semibold text-warm-black mb-3">
            {topic.title}
          </h3>

          <div className="space-y-1.5">
            {clusters.map((cluster) => {
              const cell = cellMap.get(`${topic.id}::${cluster.id}`);
              const isAbsent = !cell || cell.intensity === 0;

              if (isAbsent) {
                return (
                  <div key={cluster.id} className="flex items-center gap-2">
                    <span className={`text-[10px] font-medium uppercase tracking-wide w-16 shrink-0 text-right ${cluster.textClass}`}>
                      {cluster.shortName}
                    </span>
                    <div className="flex-1 flex items-center gap-1.5 bg-absent-hatch rounded h-4 px-2">
                      <span className="text-gray-300 text-[10px]">Ø</span>
                      {cell?.notableAbsence && (
                        <span className="text-amber-500 text-[10px] font-bold" title={cell.notableAbsence}>!</span>
                      )}
                    </div>
                  </div>
                );
              }

              const normMax = getNormMax(topic.id, cluster.id);
              const ratio = normMax > 0 ? cell.intensity / normMax : 0;

              return (
                <div key={cluster.id} className="flex items-center gap-2">
                  <span className={`text-[10px] font-medium uppercase tracking-wide w-16 shrink-0 text-right ${cluster.textClass}`}>
                    {cluster.shortName}
                  </span>
                  <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${ratio * 100}%`, backgroundColor: cluster.color }}
                    />
                  </div>
                  <span className="text-[10px] font-semibold text-gray-600 w-4 text-right shrink-0">
                    {cell.intensity}
                  </span>
                </div>
              );
            })}
          </div>
        </button>
      ))}

      {/* Bottom action */}
      <div className="pt-2 text-center">
        <button
          onClick={onSwitchToMatrix}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          View full matrix →
        </button>
      </div>
    </section>
  );
}

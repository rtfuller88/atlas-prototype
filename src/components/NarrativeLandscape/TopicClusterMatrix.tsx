import { useMemo, useState } from 'react';
import type { LandscapeTopic, MediaCluster, MatrixCell, MatrixNormalization } from '../../types';
import { MatrixCellView } from './MatrixCell';

const NORM_LABELS: Record<MatrixNormalization, string> = {
  absolute: 'Absolute',
  row: 'Across Clusters',
  column: 'Within Cluster',
};

const NORM_HELP: Record<MatrixNormalization, string> = {
  absolute:
    'Bars show coverage intensity on a 0–10 scale. Compare any cell to any other.',
  row:
    'Bars compare across clusters for each topic. The longest bar in each row = the cluster that covers this topic most.',
  column:
    'Bars compare within each cluster. The longest bar in each column = the topic that cluster covers most.',
};

interface TopicClusterMatrixProps {
  topics: LandscapeTopic[];
  clusters: MediaCluster[];
  matrix: MatrixCell[];
  onCellClick: (topicId: string) => void;
  selectedTopicId: string | null;
}

export function TopicClusterMatrix({
  topics,
  clusters,
  matrix,
  onCellClick,
  selectedTopicId,
}: TopicClusterMatrixProps) {
  const [normalization, setNormalization] = useState<MatrixNormalization>('absolute');

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

  const normModes: MatrixNormalization[] = ['absolute', 'row', 'column'];

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-warm-black">
          Topic × Cluster Matrix
        </h2>
        <p className="text-sm text-warm-muted mt-1">
          Coverage intensity across media clusters. Click a row to explore how each cluster covers a topic.
        </p>
      </div>

      {/* Normalization toggle */}
      <div className="flex flex-wrap items-start gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-warm-muted">Compare:</span>
          <div className="inline-flex rounded-md border border-gray-200 overflow-hidden text-xs">
            {normModes.map((mode) => (
              <button
                key={mode}
                onClick={() => setNormalization(mode)}
                className={`px-3 py-1.5 font-medium transition-colors ${
                  normalization === mode
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-warm-black hover:bg-gray-50'
                }`}
              >
                {NORM_LABELS[mode]}
              </button>
            ))}
          </div>
        </div>
        <p className="text-xs text-warm-muted italic leading-snug pt-1">
          {NORM_HELP[normalization]}
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
            {clusters.map((cluster) => (
              <div
                key={cluster.id}
                className="sticky top-0 z-10 bg-warm-bg border-b border-gray-200 p-3 text-center"
              >
                <span className={`text-xs font-semibold uppercase tracking-wide ${cluster.textClass}`}>
                  {cluster.shortName}
                </span>
              </div>
            ))}

            {/* Data rows */}
            {topics.map((topic) => {
              const isSelected = selectedTopicId === topic.id;

              return (
                <>
                  {/* Topic label cell */}
                  <button
                    key={`label-${topic.id}`}
                    onClick={() => onCellClick(topic.id)}
                    className={`sticky left-0 z-10 bg-warm-bg border-b border-gray-100 px-3 py-2 text-left transition-colors ${
                      isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-sm font-medium text-warm-black leading-tight line-clamp-2">
                      {topic.title}
                    </span>
                  </button>

                  {/* Cluster cells */}
                  {clusters.map((cluster) => {
                    const cell = cellMap.get(`${topic.id}::${cluster.id}`);
                    if (!cell) return <div key={`${topic.id}-${cluster.id}`} className="border-b border-gray-100" />;

                    return (
                      <div
                        key={`${topic.id}-${cluster.id}`}
                        className="border-b border-gray-100 flex items-center justify-center"
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
                </>
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

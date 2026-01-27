import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import type { LandscapeTopic, MediaCluster, MatrixCell, CoverageMomentum } from '../../types';

const MOMENTUM_ICON: Record<CoverageMomentum, string> = {
  emerging: '↑',
  sustained: '→',
  declining: '↓',
  absent: 'Ø',
};

const MOMENTUM_LABEL: Record<CoverageMomentum, string> = {
  emerging: 'Emerging',
  sustained: 'Sustained',
  declining: 'Declining',
  absent: 'Absent',
};

interface ClusterAgendaViewProps {
  clusters: MediaCluster[];
  topics: LandscapeTopic[];
  matrix: MatrixCell[];
  onTopicClick: (topicId: string) => void;
  selectedTopicId: string | null;
}

export function ClusterAgendaView({
  clusters,
  topics,
  matrix,
  onTopicClick,
  selectedTopicId,
}: ClusterAgendaViewProps) {
  const [selectedClusterId, setSelectedClusterId] = useState(clusters[0]?.id ?? '');

  const selectedCluster = clusters.find((c) => c.id === selectedClusterId);

  const { covered, absent, clusterMax } = useMemo(() => {
    const clusterCells = matrix.filter((c) => c.clusterId === selectedClusterId);

    const coveredCells: (MatrixCell & { topic: LandscapeTopic })[] = [];
    const absentCells: (MatrixCell & { topic: LandscapeTopic })[] = [];

    for (const cell of clusterCells) {
      const topic = topics.find((t) => t.id === cell.topicId);
      if (!topic) continue;

      if (cell.intensity > 0) {
        coveredCells.push({ ...cell, topic });
      } else {
        absentCells.push({ ...cell, topic });
      }
    }

    coveredCells.sort((a, b) => b.intensity - a.intensity);

    const max = coveredCells.length > 0
      ? Math.max(...coveredCells.map((c) => c.intensity))
      : 1;

    return { covered: coveredCells, absent: absentCells, clusterMax: max };
  }, [selectedClusterId, matrix, topics]);

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-warm-black">Cluster Agenda</h2>
        <p className="text-sm text-warm-muted mt-1">
          What each media cluster is prioritizing — ranked by coverage intensity.
        </p>
        <p className="text-xs text-warm-muted italic mt-1">
          This view shows what this cluster emphasizes most relative to other topics (cluster-normalized).
        </p>
      </div>

      {/* Cluster selector — tabs on desktop, dropdown on mobile */}
      <div className="hidden md:flex items-center gap-1 mb-6 border-b border-gray-200">
        {clusters.map((cluster) => {
          const isActive = cluster.id === selectedClusterId;
          return (
            <button
              key={cluster.id}
              onClick={() => setSelectedClusterId(cluster.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
                isActive
                  ? `${cluster.textClass} border-current`
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {cluster.shortName}
            </button>
          );
        })}
      </div>

      <div className="md:hidden mb-6">
        <select
          value={selectedClusterId}
          onChange={(e) => setSelectedClusterId(e.target.value)}
          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white text-warm-black"
        >
          {clusters.map((cluster) => (
            <option key={cluster.id} value={cluster.id}>
              {cluster.name}
            </option>
          ))}
        </select>
      </div>

      {/* Covered topics */}
      <div className="space-y-1">
        {covered.map((item) => (
          <button
            key={item.topicId}
            onClick={() => onTopicClick(item.topicId)}
            className={`w-full text-left py-3 px-3 rounded-lg transition-colors ${
              selectedTopicId === item.topicId ? 'bg-blue-50' : 'hover:bg-gray-50'
            }`}
          >
            <div className="flex items-baseline justify-between gap-2 mb-1.5">
              <span className="text-sm font-medium text-warm-black leading-tight">
                {item.topic.title}
              </span>
              <span className="text-xs text-gray-500 shrink-0">
                {MOMENTUM_ICON[item.momentum]} {MOMENTUM_LABEL[item.momentum]}
              </span>
            </div>

            {/* Horizontal bar */}
            <div className="flex items-center gap-2 mb-1.5">
              <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(item.intensity / clusterMax) * 100}%`,
                    backgroundColor: selectedCluster?.color ?? '#6B7280',
                  }}
                />
              </div>
              <span className="text-xs font-medium text-gray-600 w-5 text-right shrink-0">
                {item.intensity}
              </span>
            </div>

            {/* Frame keywords */}
            {item.frames.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-1">
                {item.frames.slice(0, 4).map((frame) => (
                  <span
                    key={frame}
                    className="text-xs bg-gray-100 text-gray-600 rounded px-1.5 py-0.5"
                  >
                    {frame}
                  </span>
                ))}
              </div>
            )}

            {/* Deep dive link */}
            {item.topic.issueSlug && (
              <Link
                to={`/issue/${item.topic.issueSlug}`}
                onClick={(e) => e.stopPropagation()}
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                Open deep dive →
              </Link>
            )}
          </button>
        ))}
      </div>

      {/* Absent topics */}
      {absent.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-3">
            Notably Absent
          </h3>
          <div className="space-y-2">
            {absent.map((item) => (
              <button
                key={item.topicId}
                onClick={() => onTopicClick(item.topicId)}
                className={`w-full text-left py-2 px-3 rounded-lg transition-colors ${
                  selectedTopicId === item.topicId ? 'bg-blue-50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-gray-400 text-sm">Ø</span>
                  <span className="text-sm text-gray-500">{item.topic.title}</span>
                </div>
                {item.notableAbsence && (
                  <p className="text-xs text-gray-400 mt-0.5 line-clamp-2 pl-5">
                    {item.notableAbsence}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

import type { MediaCluster, ClusterLandscapeEntry } from '../../types';
import { TopicRow } from './TopicRow';

interface ClusterCardProps {
  cluster: MediaCluster;
  entry: ClusterLandscapeEntry;
}

export function ClusterCard({ cluster, entry }: ClusterCardProps) {
  // Sort topics by coverage intensity descending
  const sortedTopics = [...entry.topicCoverage].sort(
    (a, b) => b.coverageIntensity - a.coverageIntensity
  );

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 border-l-4`}
      style={{ borderLeftColor: cluster.color }}
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className={`text-lg font-semibold ${cluster.textClass}`}>
          {cluster.shortName}
        </h3>
        <p className="text-sm text-warm-muted mt-1">{cluster.description}</p>
      </div>

      {/* Outlet list */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {cluster.outlets.map((outlet) => (
          <span
            key={outlet}
            className="text-xs text-warm-muted bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-full"
          >
            {outlet}
          </span>
        ))}
      </div>

      {/* Topic rows */}
      <div className="mb-4">
        {sortedTopics.map((topic) => (
          <TopicRow
            key={topic.topicId}
            topic={topic}
            clusterColor={cluster.color}
          />
        ))}
      </div>

      {/* Notably absent */}
      <div className="bg-gray-50 rounded-lg p-3">
        <p className="text-xs font-medium text-warm-muted uppercase tracking-wide mb-1">
          Notably absent
        </p>
        <p className="text-sm text-gray-600">{entry.notablyAbsent.observation}</p>
      </div>
    </div>
  );
}

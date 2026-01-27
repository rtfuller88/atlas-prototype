import { useMemo } from 'react';
import type { MediaCluster, MatrixCell, LandscapeTopic, ClusterLandscapeEntry } from '../../types';
import { ClusterOverview } from './ClusterOverview';

interface LegacyClusterDetailsProps {
  clusters: MediaCluster[];
  matrix: MatrixCell[];
  topics: LandscapeTopic[];
}

export function LegacyClusterDetails({ clusters, matrix, topics }: LegacyClusterDetailsProps) {
  // Reconstruct ClusterLandscapeEntry[] from matrix data for backward compatibility
  const entries: ClusterLandscapeEntry[] = useMemo(() => {
    const topicMap = new Map(topics.map((t) => [t.id, t]));

    return clusters.map((cluster) => {
      const clusterCells = matrix.filter((c) => c.clusterId === cluster.id);
      const coveredCells = clusterCells.filter((c) => c.intensity > 0);
      const absentWithNote = clusterCells.find((c) => c.intensity === 0 && c.notableAbsence);

      return {
        clusterId: cluster.id,
        topicCoverage: coveredCells.map((cell) => {
          const topic = topicMap.get(cell.topicId);
          return {
            topicId: cell.topicId,
            topicLabel: topic?.title ?? cell.topicId,
            coverageIntensity: cell.intensity,
            momentum: cell.momentum,
            framingKeywords: cell.frames,
            atlasStoryId: topic?.issueSlug,
          };
        }),
        notablyAbsent: {
          topicId: absentWithNote?.topicId ?? '',
          observation: absentWithNote?.notableAbsence ?? 'No notable absences identified.',
        },
      };
    });
  }, [clusters, matrix, topics]);

  return (
    <details className="mt-2">
      <summary className="cursor-pointer select-none text-sm font-medium text-warm-muted hover:text-warm-black transition-colors">
        Detailed Cluster View
      </summary>
      <div className="mt-4">
        <ClusterOverview clusters={clusters} entries={entries} />
      </div>
    </details>
  );
}

import type { MediaCluster, ClusterLandscapeEntry } from '../../types';
import { ClusterCard } from './ClusterCard';

interface ClusterOverviewProps {
  clusters: MediaCluster[];
  entries: ClusterLandscapeEntry[];
}

export function ClusterOverview({ clusters, entries }: ClusterOverviewProps) {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-warm-black">
          What Each Cluster Is Covering
        </h2>
        <p className="text-sm text-warm-muted mt-1">
          Top topics by coverage intensity for each media ecosystem cluster, with framing keywords showing how each cluster approaches the story.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clusters.map((cluster) => {
          const entry = entries.find((e) => e.clusterId === cluster.id);
          if (!entry) return null;
          return (
            <ClusterCard key={cluster.id} cluster={cluster} entry={entry} />
          );
        })}
      </div>
    </section>
  );
}

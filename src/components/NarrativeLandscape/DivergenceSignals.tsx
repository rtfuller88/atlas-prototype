import type { DivergenceSignal, DivergenceSignalType, MediaCluster } from '../../types';

const SIGNAL_TYPE_CONFIG: Record<DivergenceSignalType, { icon: string; label: string }> = {
  'coverage-gap': { icon: '◐', label: 'Coverage Gap' },
  'framing-difference': { icon: '◈', label: 'Framing Difference' },
  'intensity-mismatch': { icon: '◑', label: 'Intensity Mismatch' },
};

interface DivergenceSignalsProps {
  signals: DivergenceSignal[];
  clusters: MediaCluster[];
}

export function DivergenceSignals({ signals, clusters }: DivergenceSignalsProps) {
  const clusterMap = new Map(clusters.map((c) => [c.id, c]));

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-warm-black">
          Narrative Divergence Signals
        </h2>
        <p className="text-sm text-warm-muted mt-1">
          Where coverage patterns diverge across clusters.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {signals.map((signal) => {
          const typeConfig = SIGNAL_TYPE_CONFIG[signal.signalType];

          return (
            <div
              key={signal.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
            >
              {/* Type badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">{typeConfig.icon}</span>
                <span className="text-xs font-medium uppercase tracking-wide text-warm-muted">
                  {typeConfig.label}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-sm font-semibold text-warm-black mb-1">
                {signal.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-warm-black leading-relaxed mb-3 line-clamp-3">
                {signal.description}
              </p>

              {/* Involved clusters */}
              <div className="flex flex-wrap gap-1.5">
                {signal.involvedClusters.map((clusterId) => {
                  const cluster = clusterMap.get(clusterId);
                  if (!cluster) return null;
                  return (
                    <span
                      key={clusterId}
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${cluster.bgClass} ${cluster.textClass}`}
                    >
                      {cluster.shortName}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

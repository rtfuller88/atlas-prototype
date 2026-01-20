import { useState } from 'react';
import { ClusterBelief, ClusterDefinition, BeliefState, ConfidenceLevel, BELIEF_LABELS } from '../types';
import { SourceList } from './SourceLink';

interface ClusterBeliefDisplayProps {
  beliefs: ClusterBelief[];
  clusters: ClusterDefinition[];
}

const BELIEF_COLORS: Record<BeliefState, string> = {
  true: '#65A30D',
  false: '#DC2626',
  uncertain: '#6B7280',
  mixed: '#D97706',
};

const CONFIDENCE_LABELS: Record<ConfidenceLevel, string> = {
  high: 'High confidence',
  medium: 'Medium confidence',
  low: 'Low confidence',
};

export function ClusterBeliefDisplay({ beliefs, clusters }: ClusterBeliefDisplayProps) {
  const [expandedClusterId, setExpandedClusterId] = useState<string | null>(null);

  const getCluster = (clusterId: string) => {
    return clusters.find(c => c.id === clusterId);
  };

  return (
    <div className="space-y-3">
      {beliefs.map((belief) => {
        const cluster = getCluster(belief.clusterId);
        const isExpanded = expandedClusterId === belief.clusterId;

        return (
          <div
            key={belief.clusterId}
            className="p-3 bg-gray-50 rounded-lg border border-gray-100"
          >
            {/* Group header with label */}
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-warm-black bg-gray-200 px-2 py-0.5 rounded">
                    {cluster?.label || 'Group'}
                  </span>
                  {cluster?.characteristics && (
                    <button
                      onClick={() => setExpandedClusterId(isExpanded ? null : belief.clusterId)}
                      className="text-xs text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {isExpanded ? 'Hide profile' : 'View profile'}
                    </button>
                  )}
                </div>
                <p className="text-sm text-warm-muted italic">
                  {cluster?.description}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium"
                  style={{
                    backgroundColor: `${BELIEF_COLORS[belief.belief]}15`,
                    color: BELIEF_COLORS[belief.belief]
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: BELIEF_COLORS[belief.belief] }}
                  />
                  {BELIEF_LABELS[belief.belief]}
                </span>
                <span className="text-xs text-warm-muted">
                  {CONFIDENCE_LABELS[belief.confidence]}
                </span>
              </div>
            </div>

            {/* Expanded cluster profile */}
            {isExpanded && cluster?.characteristics && (
              <div className="mb-3 p-2 bg-blue-50 border border-blue-100 rounded text-xs">
                {cluster.characteristics.infoSources && cluster.characteristics.infoSources.length > 0 && (
                  <div className="mb-2">
                    <span className="font-medium text-blue-800">Common information sources:</span>
                    <span className="text-blue-700 ml-1">
                      {cluster.characteristics.infoSources.join(' · ')}
                    </span>
                  </div>
                )}
                {cluster.characteristics.demographicNotes && (
                  <div>
                    <span className="font-medium text-blue-800">Notes:</span>
                    <span className="text-blue-700 ml-1">
                      {cluster.characteristics.demographicNotes}
                    </span>
                  </div>
                )}
              </div>
            )}

            <div className="space-y-2 text-sm">
              <div>
                <p className="text-warm-muted text-xs uppercase tracking-wide mb-0.5">Reasoning</p>
                <p className="text-warm-black">{belief.reasoning}</p>
              </div>
              <div>
                <p className="text-warm-muted text-xs uppercase tracking-wide mb-0.5">Evidence basis</p>
                <p className="text-warm-black">{belief.evidenceSummary}</p>
              </div>
              {belief.sources && belief.sources.length > 0 && (
                <div>
                  <p className="text-warm-muted text-xs uppercase tracking-wide mb-1.5">Sources</p>
                  <SourceList sources={belief.sources} compact />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

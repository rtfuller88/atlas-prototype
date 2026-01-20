import { ClusterDefinition, BeliefState, BELIEF_LABELS } from '../types';

interface GroupsOverviewProps {
  clusters: ClusterDefinition[];
  coreQuestion: string;
  // Summary of each group's top-level belief on the core question
  topLevelBeliefs: {
    clusterId: string;
    belief: BeliefState;
    summary: string; // One-line summary of their position
  }[];
}

const BELIEF_COLORS: Record<BeliefState, string> = {
  true: '#65A30D',
  false: '#DC2626',
  uncertain: '#6B7280',
  mixed: '#D97706',
};

const BELIEF_BG_COLORS: Record<BeliefState, string> = {
  true: 'bg-green-50 border-green-200',
  false: 'bg-red-50 border-red-200',
  uncertain: 'bg-gray-50 border-gray-200',
  mixed: 'bg-amber-50 border-amber-200',
};

const PREVALENCE_LABELS: Record<string, { label: string; color: string }> = {
  majority: { label: 'Majority', color: 'bg-blue-100 text-blue-700' },
  significant: { label: 'Significant', color: 'bg-purple-100 text-purple-700' },
  minority: { label: 'Minority', color: 'bg-gray-100 text-gray-600' },
  small: { label: 'Small', color: 'bg-gray-100 text-gray-500' },
};

export function GroupsOverview({ clusters, coreQuestion, topLevelBeliefs }: GroupsOverviewProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xs font-medium uppercase tracking-wide text-warm-muted mb-2">
        The groups in this debate
      </h2>
      <p className="text-sm text-warm-muted mb-4">
        We identified <strong>{clusters.length} distinct perspectives</strong> on this issue.
        Each group weighs evidence differently and reaches different conclusions.
        Below you can explore exactly where and why they diverge.
      </p>

      {/* Core question reminder */}
      <div className="bg-gray-100 rounded-lg p-3 mb-4">
        <p className="text-xs text-warm-muted uppercase tracking-wide mb-1">Core question</p>
        <p className="text-sm font-medium text-warm-black">{coreQuestion}</p>
      </div>

      {/* Groups grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {clusters.map((cluster) => {
          const topBelief = topLevelBeliefs.find(b => b.clusterId === cluster.id);
          const belief = topBelief?.belief || 'uncertain';

          return (
            <div
              key={cluster.id}
              className={`p-4 rounded-lg border ${BELIEF_BG_COLORS[belief]}`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-sm font-semibold text-warm-black">
                  {cluster.label}
                </span>
                <span
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium"
                  style={{
                    backgroundColor: `${BELIEF_COLORS[belief]}20`,
                    color: BELIEF_COLORS[belief]
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: BELIEF_COLORS[belief] }}
                  />
                  {belief === 'true' ? 'Yes' : belief === 'false' ? 'No' : BELIEF_LABELS[belief]}
                </span>
              </div>

              <p className="text-sm text-warm-black mb-2">
                {topBelief?.summary}
              </p>

              <p className="text-xs text-warm-muted italic">
                {cluster.description}
              </p>

              {/* Prevalence indicator */}
              {cluster.prevalence && (
                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-xs px-2 py-0.5 rounded font-medium ${PREVALENCE_LABELS[cluster.prevalence.label]?.color || 'bg-gray-100 text-gray-600'}`}>
                    {cluster.prevalence.percentage
                      ? `~${cluster.prevalence.percentage}%`
                      : PREVALENCE_LABELS[cluster.prevalence.label]?.label || cluster.prevalence.label}
                  </span>
                  {cluster.prevalence.description && (
                    <span className="text-xs text-warm-muted">
                      {cluster.prevalence.description}
                    </span>
                  )}
                </div>
              )}

              {cluster.characteristics?.infoSources && (
                <p className="text-xs text-warm-muted mt-2">
                  <span className="font-medium">Info sources:</span>{' '}
                  {cluster.characteristics.infoSources.slice(0, 2).join(', ')}
                  {cluster.characteristics.infoSources.length > 2 && '...'}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-xs text-warm-muted text-center mt-4">
        Scroll down to see exactly where these groups agree, disagree, and why.
      </p>
    </div>
  );
}

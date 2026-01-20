import { ClusterBelief, BeliefState, BELIEF_LABELS } from '../types';

interface AgreementBarProps {
  beliefs: ClusterBelief[];
  showLegend?: boolean;
}

const BELIEF_COLORS: Record<BeliefState, string> = {
  true: '#65A30D',     // Green - Agrees
  false: '#DC2626',    // Red - Disagrees
  uncertain: '#6B7280', // Gray - Uncertain
  mixed: '#D97706',    // Amber - Mixed
};

export function AgreementBar({ beliefs, showLegend = false }: AgreementBarProps) {
  // Count beliefs by type
  const counts = beliefs.reduce((acc, b) => {
    acc[b.belief] = (acc[b.belief] || 0) + 1;
    return acc;
  }, {} as Record<BeliefState, number>);

  const total = beliefs.length;

  // Calculate which belief state is most common for prose summary
  const beliefEntries = Object.entries(counts) as [BeliefState, number][];
  const maxBelief = beliefEntries.reduce((a, b) => a[1] > b[1] ? a : b);

  // Generate prose summary
  const getProseSummary = () => {
    const agreeCount = counts['true'] || 0;

    if (agreeCount === total) {
      return `All ${total} groups agree`;
    } else if ((counts['false'] || 0) === total) {
      return `All ${total} groups disagree`;
    } else if (agreeCount > 0 && agreeCount === total - 1) {
      return `${agreeCount} of ${total} groups agree`;
    } else if (maxBelief[0] === 'uncertain' || maxBelief[0] === 'mixed') {
      return `Views are divided across groups`;
    } else {
      return `${maxBelief[1]} of ${total} groups ${BELIEF_LABELS[maxBelief[0]].toLowerCase()}`;
    }
  };

  return (
    <div className="space-y-1.5">
      {/* Visual bar */}
      <div className="h-2 flex rounded-full overflow-hidden bg-gray-100">
        {(['true', 'false', 'uncertain', 'mixed'] as BeliefState[]).map((belief) => {
          const count = counts[belief] || 0;
          if (count === 0) return null;
          const width = (count / total) * 100;
          return (
            <div
              key={belief}
              className="h-full transition-all"
              style={{
                width: `${width}%`,
                backgroundColor: BELIEF_COLORS[belief]
              }}
              title={`${count} ${BELIEF_LABELS[belief].toLowerCase()}`}
            />
          );
        })}
      </div>

      {/* Prose summary */}
      <p className="text-xs text-warm-muted">{getProseSummary()}</p>

      {/* Optional legend */}
      {showLegend && (
        <div className="flex flex-wrap gap-3 mt-2">
          {(['true', 'false', 'uncertain', 'mixed'] as BeliefState[]).map((belief) => {
            const count = counts[belief] || 0;
            if (count === 0) return null;
            return (
              <div key={belief} className="flex items-center gap-1.5 text-xs">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: BELIEF_COLORS[belief] }}
                />
                <span className="text-warm-muted">
                  {BELIEF_LABELS[belief]} ({count})
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

import { RelatedDivide } from '../types';

interface BeliefCoalitionsProps {
  relatedDivides: RelatedDivide[];
  // Labels for the two sides (e.g., "Justified" vs "Not Justified")
  believesTrueLabel?: string;
  believesFalseLabel?: string;
}

const CORRELATION_LABELS: Record<string, string> = {
  strong: 'Very predictive',
  moderate: 'Somewhat predictive',
  weak: 'Loosely connected',
};

export function BeliefCoalitions({
  relatedDivides,
  believesTrueLabel = 'Believes justified',
  believesFalseLabel = 'Believes not justified',
}: BeliefCoalitionsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xs font-medium uppercase tracking-wide text-warm-muted mb-2">
        The belief coalition
      </h2>
      <p className="text-sm text-warm-muted mb-4">
        These groups don't just disagree on this issue — they tend to disagree on a predictable set of
        related issues. Knowing someone's view here often predicts their views elsewhere, not because
        the issues are logically connected, but because beliefs cluster into coalitions.
      </p>

      {/* Header row */}
      <div className="grid grid-cols-12 gap-2 mb-3 px-2">
        <div className="col-span-4">
          <span className="text-xs font-medium text-warm-muted">Related issue</span>
        </div>
        <div className="col-span-4 text-center">
          <span className="text-xs font-medium text-green-700 flex items-center justify-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            {believesTrueLabel}
          </span>
        </div>
        <div className="col-span-4 text-center">
          <span className="text-xs font-medium text-red-700 flex items-center justify-center gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            {believesFalseLabel}
          </span>
        </div>
      </div>

      {/* Divides list */}
      <div className="space-y-2">
        {relatedDivides.map((divide) => (
          <div
            key={divide.id}
            className="grid grid-cols-12 gap-2 items-stretch bg-gray-50 rounded-lg overflow-hidden"
          >
            {/* Issue name */}
            <div className="col-span-4 p-3 flex flex-col justify-center">
              <span className="text-sm font-medium text-warm-black">
                {divide.issue}
              </span>
              {divide.correlation && (
                <span className="text-xs text-warm-muted mt-0.5">
                  {CORRELATION_LABELS[divide.correlation]}
                </span>
              )}
            </div>

            {/* True position */}
            <div className="col-span-4 bg-green-50 p-3 flex items-center justify-center text-center border-l border-r border-gray-100">
              <span className="text-xs text-green-800">
                {divide.believesTruePosition}
              </span>
            </div>

            {/* False position */}
            <div className="col-span-4 bg-red-50 p-3 flex items-center justify-center text-center">
              <span className="text-xs text-red-800">
                {divide.believesFalsePosition}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Insight callout */}
      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <span className="text-amber-500 text-lg">⚡</span>
          <div>
            <p className="text-sm font-medium text-warm-black mb-1">
              Why this matters
            </p>
            <p className="text-sm text-warm-muted">
              When beliefs cluster this predictably, it suggests people aren't evaluating each issue
              independently — they're adopting package deals from their coalition. This makes genuine
              persuasion harder: changing one belief means potentially betraying your "team" on
              multiple issues at once.
            </p>
          </div>
        </div>
      </div>

      {/* Reflection prompt */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-warm-muted italic text-center">
          Ask yourself: Do you hold all the positions on one side of this table?
          If so, consider whether you've evaluated each issue on its merits,
          or absorbed a coalition's worldview wholesale.
        </p>
      </div>
    </div>
  );
}

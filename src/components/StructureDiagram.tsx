interface StructureDiagramProps {
  question: string;
  claims: {
    id: string;
    label: string;
    status: 'agreed' | 'disputed' | 'uncertain';
    assertionCount: number;
  }[];
  onClaimClick?: (claimId: string) => void;
  activeClaimId?: string;
}

const STATUS_STYLES = {
  agreed: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    dot: 'bg-green-500',
    text: 'text-green-700',
    label: 'Agreed',
  },
  disputed: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    dot: 'bg-amber-500',
    text: 'text-amber-700',
    label: 'Disputed',
  },
  uncertain: {
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    dot: 'bg-gray-400',
    text: 'text-gray-600',
    label: 'Uncertain',
  },
};

export function StructureDiagram({ question, claims, onClaimClick, activeClaimId }: StructureDiagramProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xs font-medium uppercase tracking-wide text-warm-muted mb-4">
        How this issue breaks down
      </h2>

      {/* Core question at top */}
      <div className="relative">
        <div className="bg-gray-800 text-white rounded-lg p-4 text-center">
          <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">Core Question</p>
          <p className="font-medium">{question}</p>
        </div>

        {/* Connector line */}
        <div className="flex justify-center">
          <div className="w-0.5 h-6 bg-gray-300" />
        </div>

        {/* Claims branch */}
        <div className="relative">
          {/* Horizontal connector */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gray-300" />

          {/* Claims */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
            {claims.map((claim) => {
              const style = STATUS_STYLES[claim.status];
              const isActive = activeClaimId === claim.id;

              return (
                <div key={claim.id} className="relative">
                  {/* Vertical connector to horizontal line */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gray-300" />

                  <button
                    onClick={() => onClaimClick?.(claim.id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${style.bg} ${
                      isActive ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                    } ${style.border} hover:shadow-md`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-2 h-2 rounded-full ${style.dot}`} />
                      <span className={`text-xs font-medium ${style.text}`}>{style.label}</span>
                    </div>
                    <p className="text-sm font-medium text-warm-black mb-2">{claim.label}</p>
                    <p className="text-xs text-warm-muted">
                      {claim.assertionCount} supporting assertion{claim.assertionCount !== 1 ? 's' : ''}
                    </p>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-gray-100">
        {Object.entries(STATUS_STYLES).map(([key, style]) => (
          <div key={key} className="flex items-center gap-2 text-xs">
            <span className={`w-2.5 h-2.5 rounded-full ${style.dot}`} />
            <span className="text-warm-muted">{style.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

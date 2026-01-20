interface ExecutiveSummaryProps {
  title: string;
  dateline: string;
  whatHappened: string;
  whyControversial: string;
  coreQuestion: string;
  previewInsight: string;
}

export function ExecutiveSummary({
  title,
  dateline,
  whatHappened,
  whyControversial,
  coreQuestion,
  previewInsight,
}: ExecutiveSummaryProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header band */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-4">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{dateline}</p>
        <h1 className="text-xl font-semibold text-white">{title}</h1>
      </div>

      <div className="p-6 space-y-5">
        {/* What happened */}
        <div>
          <h2 className="text-xs font-medium uppercase tracking-wide text-warm-muted mb-2">
            What happened
          </h2>
          <p className="text-warm-black leading-relaxed">{whatHappened}</p>
        </div>

        {/* Why it's controversial */}
        <div>
          <h2 className="text-xs font-medium uppercase tracking-wide text-warm-muted mb-2">
            Why it's controversial
          </h2>
          <p className="text-warm-black leading-relaxed">{whyControversial}</p>
        </div>

        {/* The core question */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h2 className="text-xs font-medium uppercase tracking-wide text-amber-700 mb-2">
            The core question
          </h2>
          <p className="text-lg font-medium text-warm-black">{coreQuestion}</p>
        </div>

        {/* What this analysis will show */}
        <div className="border-t border-gray-100 pt-4">
          <p className="text-sm text-warm-muted">
            <span className="font-medium text-warm-black">What you'll see below:</span>{' '}
            {previewInsight}
          </p>
        </div>
      </div>
    </div>
  );
}

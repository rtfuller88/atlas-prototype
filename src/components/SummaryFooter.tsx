interface SummaryFooterProps {
  insight: string;
}

export function SummaryFooter({ insight }: SummaryFooterProps) {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <svg className="w-5 h-5 text-warm-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-medium text-warm-black mb-1">Key insight</h3>
          <p className="text-warm-muted">{insight}</p>
        </div>
      </div>
    </div>
  );
}

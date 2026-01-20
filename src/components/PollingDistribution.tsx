import { PollingData } from '../types';

interface PollingDistributionProps {
  pollingData: PollingData;
}

export function PollingDistribution({ pollingData }: PollingDistributionProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">📊</span>
        <h2 className="text-xs font-medium uppercase tracking-wide text-warm-muted">
          Public Opinion
        </h2>
      </div>

      {/* Bar visualization */}
      <div className="mb-4">
        <div className="flex h-8 rounded-lg overflow-hidden">
          {pollingData.segments.map((segment, i) => (
            <div
              key={i}
              className="flex items-center justify-center text-white text-xs font-medium transition-all"
              style={{
                width: `${segment.percentage}%`,
                backgroundColor: segment.color,
              }}
            >
              {segment.percentage >= 10 && `${segment.percentage}%`}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4">
        {pollingData.segments.map((segment, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: segment.color }}
            />
            <span className="text-sm text-warm-black">
              {segment.label}: <span className="font-medium">{segment.percentage}%</span>
            </span>
          </div>
        ))}
      </div>

      {/* Source */}
      <div className="text-xs text-warm-muted">
        Source:{' '}
        {pollingData.sourceUrl ? (
          <a
            href={pollingData.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {pollingData.source}
          </a>
        ) : (
          pollingData.source
        )}
      </div>

      {/* Note */}
      {pollingData.note && (
        <p className="text-sm text-warm-muted mt-3 italic">
          {pollingData.note}
        </p>
      )}
    </div>
  );
}

import { ClusterDefinition, RepresentativeArticle } from '../../types';
import { OUTLET_COLORS } from '../../constants/outlets';

interface CompareColumnProps {
  cluster: ClusterDefinition;
  headlines: RepresentativeArticle[];
  missingLine: string;
}

export function CompareColumn({ cluster, headlines, missingLine }: CompareColumnProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col min-w-[260px] snap-center">
      {/* Group label */}
      <h3 className="text-sm font-semibold text-warm-black mb-3">
        {cluster.label}
      </h3>

      {/* Headlines */}
      <div className="space-y-3 flex-1">
        {headlines.map((article, i) => {
          const brandColor = OUTLET_COLORS[article.outlet] || '#374151';
          return (
            <div key={i} className="space-y-1">
              <span
                className="text-[10px] font-semibold uppercase tracking-wider"
                style={{ color: brandColor }}
              >
                {article.outlet}
              </span>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-medium text-warm-black hover:text-blue-600 transition-colors line-clamp-2 leading-snug"
              >
                {article.title}
              </a>
            </div>
          );
        })}
      </div>

      {/* "Often not covered" section */}
      {missingLine && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-xs font-medium text-warm-muted mb-1">Often not covered</p>
          <p className="text-xs text-warm-muted italic leading-relaxed">
            {missingLine}
          </p>
        </div>
      )}
    </div>
  );
}

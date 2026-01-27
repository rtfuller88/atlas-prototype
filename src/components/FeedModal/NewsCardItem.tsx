import { RepresentativeArticle } from '../../types';
import { OUTLET_COLORS } from '../../constants/outlets';

interface NewsCardItemProps {
  article: RepresentativeArticle;
}

// Extract domain from URL for favicon
function getDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return '';
  }
}

// Get favicon URL - using Google's favicon service for reliability
function getFaviconUrl(url: string): string {
  const domain = getDomain(url);
  if (!domain) return '';
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

const CONTENT_TYPE_BADGES: Record<string, { label: string; color: string }> = {
  video: { label: 'VIDEO', color: 'bg-red-600 text-white' },
  opinion: { label: 'OPINION', color: 'bg-purple-600 text-white' },
  breaking: { label: 'BREAKING', color: 'bg-red-600 text-white animate-pulse' },
};

export function NewsCardItem({ article }: NewsCardItemProps) {
  const faviconUrl = getFaviconUrl(article.url);
  const brandColor = OUTLET_COLORS[article.outlet] || '#374151';
  const contentType = article.contentType || 'article';
  const badge = CONTENT_TYPE_BADGES[contentType];

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 overflow-hidden"
    >
      {/* Source branding bar */}
      <div
        className="flex items-center gap-3 px-4 py-2.5"
        style={{ borderBottom: `3px solid ${brandColor}` }}
      >
        {faviconUrl && (
          <img
            src={faviconUrl}
            alt=""
            className="w-6 h-6 rounded"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        )}
        <span
          className="font-bold text-sm uppercase tracking-wide"
          style={{ color: brandColor }}
        >
          {article.outlet}
        </span>
        {badge && (
          <span className={`ml-auto text-xs px-2 py-0.5 rounded font-bold ${badge.color}`}>
            {badge.label}
          </span>
        )}
      </div>

      {/* Headline - the main focus */}
      <div className="px-4 py-4">
        <h3 className="text-lg font-bold text-gray-900 leading-tight">
          {article.title}
        </h3>

        {/* Pull quote from article - if available */}
        {article.pullQuote && (
          <blockquote className="mt-3 pl-3 border-l-2 border-gray-300">
            <p className="text-sm text-gray-700 italic">
              "{article.pullQuote}"
            </p>
          </blockquote>
        )}

        {article.excerpt && (
          <p className="text-sm text-gray-600 mt-3 line-clamp-2">
            {article.excerpt}
          </p>
        )}

        {article.publishedDate && (
          <p className="text-xs text-gray-400 mt-3">
            {article.publishedDate}
          </p>
        )}
      </div>

      {/* Framing analysis - clearly labeled as editorial context */}
      <div className="px-4 py-3 bg-amber-50/50 border-t border-amber-100/50">
        <div className="flex items-start gap-2">
          <svg className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-xs font-medium text-amber-800 mb-1">How this source frames it</p>
            <p className="text-sm text-amber-900/80">
              {article.framingNote}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

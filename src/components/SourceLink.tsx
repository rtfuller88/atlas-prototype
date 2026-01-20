import { Source } from '../types';

interface SourceLinkProps {
  source: Source;
  compact?: boolean;
}

const TYPE_ICONS: Record<Source['type'], string> = {
  official: '🏛️',
  media: '📰',
  video: '🎥',
  document: '📄',
  analysis: '🔍',
};

export function SourceLink({ source, compact = false }: SourceLinkProps) {
  if (compact) {
    return (
      <a
        href={source.url}
        className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline"
        title={`${source.title} — ${source.outlet}`}
      >
        <span>{TYPE_ICONS[source.type]}</span>
        <span>{source.outlet}</span>
      </a>
    );
  }

  return (
    <a
      href={source.url}
      className="block p-2 rounded border border-gray-200 hover:bg-gray-50 transition-colors group"
    >
      <div className="flex items-start gap-2">
        <span className="text-base">{TYPE_ICONS[source.type]}</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-blue-600 group-hover:underline truncate">
            {source.title}
          </p>
          <p className="text-xs text-warm-muted">
            {source.outlet} · {source.date}
          </p>
        </div>
        <svg
          className="w-4 h-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </a>
  );
}

interface SourceListProps {
  sources: Source[];
  compact?: boolean;
}

export function SourceList({ sources, compact = false }: SourceListProps) {
  if (!sources || sources.length === 0) return null;

  if (compact) {
    return (
      <div className="flex flex-wrap gap-2">
        {sources.map((source) => (
          <SourceLink key={source.id} source={source} compact />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {sources.map((source) => (
        <SourceLink key={source.id} source={source} />
      ))}
    </div>
  );
}

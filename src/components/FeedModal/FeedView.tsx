import { ClusterDefinition } from '../../types';
import { NewsCardItem } from './NewsCardItem';

interface FeedViewProps {
  cluster: ClusterDefinition;
}

export function FeedView({ cluster }: FeedViewProps) {
  const articles = cluster.characteristics?.representativeArticles || [];
  const infoSources = cluster.characteristics?.infoSources || [];

  // Graceful degradation based on article count
  if (articles.length === 0) {
    return (
      <div className="px-6 py-8">
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <svg
            className="w-12 h-12 text-gray-300 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          <p className="text-warm-muted mb-4">
            No sample articles available for this group yet.
          </p>
          {infoSources.length > 0 && (
            <div className="mt-6">
              <p className="text-sm font-medium text-warm-black mb-2">
                Typical information sources:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {infoSources.map((source, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white rounded-full text-sm text-warm-muted border border-gray-200"
                  >
                    {source}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (articles.length === 1) {
    return (
      <div className="px-6 py-8">
        <div className="mb-6">
          <p className="text-sm text-warm-muted text-center">
            Featured article from this group's media environment
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <NewsCardItem article={articles[0]} />
        </div>
        {infoSources.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-sm font-medium text-warm-black mb-2">
              Other typical sources:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {infoSources.map((source, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-warm-muted"
                >
                  {source}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // 2+ articles - show as feed
  return (
    <div className="px-6 py-6">
      {articles.length === 2 && (
        <div className="mb-4 px-4 py-2 bg-amber-50 rounded-lg border border-amber-200">
          <p className="text-sm text-amber-700">
            <span className="font-medium">Limited sample:</span> This is a small
            selection. Real feeds include many more sources.
          </p>
        </div>
      )}
      <div className="space-y-4 max-w-2xl mx-auto">
        {articles.map((article, idx) => (
          <NewsCardItem key={article.sourceId || idx} article={article} />
        ))}
      </div>
      {infoSources.length > 0 && (
        <div className="mt-8 text-center">
          <p className="text-xs text-warm-muted mb-2">
            Other sources this group commonly follows:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {infoSources.map((source, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-gray-100 rounded text-xs text-warm-muted"
              >
                {source}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

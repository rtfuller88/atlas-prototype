import { Link } from 'react-router-dom';
import type { ClusterTopicCoverage } from '../../types';
import { MomentumBadge } from './MomentumBadge';

interface TopicRowProps {
  topic: ClusterTopicCoverage;
  clusterColor: string;
}

export function TopicRow({ topic, clusterColor }: TopicRowProps) {
  return (
    <div className="py-3 border-b border-gray-100 last:border-b-0">
      {/* Topic name + momentum */}
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <div className="flex items-center gap-2 flex-wrap">
          {topic.atlasStoryId ? (
            <Link
              to={`/story/${topic.atlasStoryId}`}
              className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
            >
              {topic.topicLabel}
            </Link>
          ) : (
            <span className="text-sm font-medium text-warm-black">
              {topic.topicLabel}
            </span>
          )}
          {!topic.atlasStoryId && (
            <span className="bg-amber-100 text-amber-700 text-xs font-medium px-1.5 py-0.5 rounded">
              Analysis coming soon
            </span>
          )}
        </div>
        <MomentumBadge momentum={topic.momentum} />
      </div>

      {/* Intensity bar */}
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-xs text-warm-muted w-14 shrink-0">Intensity</span>
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${topic.coverageIntensity * 10}%`,
              backgroundColor: clusterColor,
            }}
          />
        </div>
        <span className="text-xs font-medium text-warm-muted w-5 text-right">
          {topic.coverageIntensity}
        </span>
      </div>

      {/* Framing keywords */}
      <div className="flex flex-wrap gap-1">
        {topic.framingKeywords.map((keyword) => (
          <span
            key={keyword}
            className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
}

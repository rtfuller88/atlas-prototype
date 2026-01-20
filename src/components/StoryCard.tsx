import { Link } from 'react-router-dom';
import { StoryMeta } from '../data/stories';

interface StoryCardProps {
  story: StoryMeta;
}

export function StoryCard({ story }: StoryCardProps) {
  const divergenceColors = {
    high: 'bg-red-500',
    medium: 'bg-amber-500',
    low: 'bg-green-500',
  };

  const divergenceLabels = {
    high: 'High divergence',
    medium: 'Moderate divergence',
    low: 'Low divergence',
  };

  return (
    <Link
      to={`/story/${story.id}`}
      className="block bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-300 hover:shadow-md transition-all group"
    >
      {/* Category tag */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{story.categoryIcon}</span>
        <span className="text-xs font-medium text-warm-muted uppercase tracking-wide">
          {story.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-warm-black mb-1 group-hover:text-blue-600 transition-colors">
        {story.title}
      </h3>

      {/* Subtitle */}
      <p className="text-warm-muted text-sm mb-4">
        {story.subtitle}
      </p>

      {/* Metadata */}
      <div className="flex items-center justify-between text-xs text-warm-muted">
        <span>{story.groupCount} groups · {story.assertionCount} assertions</span>
      </div>

      {/* Divergence indicator */}
      <div className="mt-3 flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full ${divergenceColors[story.divergenceLevel]} rounded-full`}
            style={{
              width: story.divergenceLevel === 'high' ? '85%' :
                     story.divergenceLevel === 'medium' ? '55%' : '25%'
            }}
          />
        </div>
        <span className="text-xs text-warm-muted">
          {divergenceLabels[story.divergenceLevel]}
        </span>
      </div>
    </Link>
  );
}

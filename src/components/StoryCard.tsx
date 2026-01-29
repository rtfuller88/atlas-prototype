import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StoryMeta } from '../data/stories';
import { CompareModal } from './CompareModal';

interface StoryCardProps {
  story: StoryMeta;
}

const driverColors: Record<string, string> = {
  Fact: 'bg-type-empirical',
  Interpretation: 'bg-type-inferential',
  Values: 'bg-type-normative',
  Confidence: 'bg-type-confidence',
};

function MiniBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-warm-muted w-24 shrink-0">{label}</span>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`w-4 h-2 rounded-sm ${i < value ? color : 'bg-gray-200'}`}
          />
        ))}
      </div>
    </div>
  );
}

export function StoryCard({ story }: StoryCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-300 hover:shadow-md transition-all">
      {/* Category tag */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{story.categoryIcon}</span>
        <span className="text-xs font-medium text-warm-muted uppercase tracking-wide">
          {story.category}
        </span>
      </div>

      {/* Title (navigable link) */}
      <Link to={`/story/${story.id}`} className="group">
        <h3 className="text-lg font-semibold text-warm-black mb-1 group-hover:text-blue-600 transition-colors">
          {story.title}
        </h3>
      </Link>

      {/* Subtitle */}
      <p className="text-warm-muted text-sm mb-4">
        {story.subtitle}
      </p>

      {/* Metadata */}
      <div className="flex items-center justify-between text-xs text-warm-muted mb-4">
        <span>{story.groupCount} groups · {story.assertionCount} assertions</span>
        <span>Analyzed {story.date}</span>
      </div>

      {/* At-a-Glance Mini-Bars */}
      <div className="space-y-1.5 mb-3">
        <MiniBar label="Agreement" value={story.atAGlance.agreement} color="bg-agreed" />
        <MiniBar label="Uncertainty" value={story.atAGlance.uncertainty} color="bg-uncertain" />
        <MiniBar label="Divergence" value={story.atAGlance.narrativeDivergence} color="bg-red-500" />
      </div>

      {/* Debate Crux */}
      <p className="text-sm italic text-warm-muted mb-4">
        "{story.debateCrux}"
      </p>

      {/* Action buttons */}
      <div className="flex items-center gap-3">
        {/* Preview Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
        >
          <svg
            className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-90' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          {expanded ? 'Hide preview' : 'Preview'}
        </button>

        {/* Compare feeds */}
        <button
          onClick={() => setCompareOpen(true)}
          className="text-xs font-medium text-warm-muted hover:text-warm-black transition-colors flex items-center gap-1"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 4v16m6-16v16M4 8h4m-4 4h4m-4 4h4m8-8h4m-4 4h4m-4 4h4" />
          </svg>
          Compare feeds
        </button>
      </div>

      {/* Expanded Preview */}
      {expanded && (
        <div className="mt-3 pt-3 border-t border-gray-100 space-y-4">
          {/* Agreements */}
          <div>
            <h4 className="text-xs font-semibold text-agreed uppercase tracking-wide mb-2">
              Areas of Agreement
            </h4>
            <ul className="space-y-1.5">
              {story.agreements.map((item) => (
                <li key={item} className="text-sm text-warm-black flex items-start gap-2">
                  <span className="text-agreed mt-0.5 shrink-0">&#x2713;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Disputes */}
          <div>
            <h4 className="text-xs font-semibold text-disputed uppercase tracking-wide mb-2">
              Top Disputes
            </h4>
            <ul className="space-y-1.5">
              {story.disputed.map((item) => (
                <li key={item.text} className="text-sm text-warm-black flex items-start gap-2">
                  <span className="text-disputed mt-0.5 shrink-0">&#x2717;</span>
                  <span className="flex-1">{item.text}</span>
                  <span className={`text-xs text-white px-1.5 py-0.5 rounded-full shrink-0 ${driverColors[item.type]}`}>
                    {item.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Read Full Analysis Link */}
          <Link
            to={`/story/${story.id}`}
            className="inline-block text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            Read full analysis &rarr;
          </Link>
        </div>
      )}

      {/* Compare Modal */}
      <CompareModal
        isOpen={compareOpen}
        onClose={() => setCompareOpen(false)}
        storyId={story.id}
        storyTitle={story.title}
      />
    </div>
  );
}

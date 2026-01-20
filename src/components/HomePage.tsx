import { stories } from '../data/stories';
import { StoryCard } from './StoryCard';

function AddTopicCard() {
  return (
    <div className="relative bg-white rounded-xl shadow-sm border-2 border-dashed border-gray-300 p-5 opacity-60 cursor-not-allowed">
      {/* Coming Soon Badge */}
      <div className="absolute top-3 right-3">
        <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded-full">
          Coming Soon
        </span>
      </div>

      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-3">
        <span className="text-xl">➕</span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-warm-black mb-2">
        Add a New Topic
      </h3>

      {/* Description */}
      <p className="text-sm text-warm-muted mb-4">
        Get an epistemic analysis for any controversial topic you care about.
      </p>

      {/* Disabled Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Enter any topic..."
          disabled
          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-400 cursor-not-allowed"
        />
      </div>

      {/* Hint */}
      <p className="text-xs text-warm-muted mt-3 italic">
        Soon you'll be able to analyze any topic: "Is remote work better?", "Should we have universal healthcare?", etc.
      </p>
    </div>
  );
}

export function HomePage() {
  return (
    <div className="min-h-screen bg-warm-bg">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-warm-black">Project Atlas</h1>
          <p className="text-warm-muted mt-1">
            Understand the real disagreement
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-warm-black">Trending Stories</h2>
          <p className="text-sm text-warm-muted">
            Explore current debates, see where groups agree and disagree, and understand why.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
          {/* Add Topic Card */}
          <AddTopicCard />
        </div>

        {/* Footer */}
        <footer className="text-center pt-12 pb-4">
          <p className="text-xs text-warm-muted">
            Project Atlas helps you understand complex disagreements by identifying where groups
            actually agree and disagree — and why.
          </p>
        </footer>
      </main>
    </div>
  );
}

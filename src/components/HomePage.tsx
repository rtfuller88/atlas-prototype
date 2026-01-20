import { stories } from '../data/stories';
import { StoryCard } from './StoryCard';

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

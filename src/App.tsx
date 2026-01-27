import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import { QUESTIONS } from './data/questions';
import { GuidedAnalysis } from './components/GuidedAnalysis';
import { HomePage } from './components/HomePage';

function StoryPage() {
  const { id } = useParams<{ id: string }>();
  const question = id ? QUESTIONS[id] : null;

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!question) {
    return (
      <div className="min-h-screen bg-warm-bg">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-3xl mx-auto px-4 py-4">
            <Link to="/" className="text-sm text-blue-600 hover:text-blue-800">
              ← Back to stories
            </Link>
          </div>
        </header>
        <main className="max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-semibold text-warm-black">Story not found</h1>
          <p className="text-warm-muted mt-2">
            The story you're looking for doesn't exist or hasn't been created yet.
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-bg">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-sm text-blue-600 hover:text-blue-800">
              ← Back to stories
            </Link>
            <span className="text-xs text-warm-muted">Project Atlas</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        <GuidedAnalysis question={question} />

        {/* Footer */}
        <footer className="text-center pt-8 pb-4">
          <p className="text-xs text-warm-muted">
            This is a prototype for demonstration purposes.
          </p>
        </footer>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story/:id" element={<StoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

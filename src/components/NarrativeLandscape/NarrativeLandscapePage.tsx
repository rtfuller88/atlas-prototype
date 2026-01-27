import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { narrativeLandscapeData } from '../../data/landscape';
import { ClusterOverview } from './ClusterOverview';
import { DivergenceSignals } from './DivergenceSignals';

export function NarrativeLandscapePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { clusters, clusterEntries, divergenceSignals, methodNote, windowDescription } =
    narrativeLandscapeData;

  return (
    <div className="min-h-screen bg-warm-bg">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-sm text-blue-600 hover:text-blue-800">
              ← Back to stories
            </Link>
            <span className="text-xs text-warm-muted">Project Atlas</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-10">
        {/* Page title */}
        <div>
          <h1 className="text-2xl font-bold text-warm-black">
            Narrative Landscape
          </h1>
          <p className="text-warm-muted mt-1">
            What different media clusters are actually emphasizing right now — {windowDescription}
          </p>
        </div>

        {/* Method disclaimer */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-warm-muted mb-1">
            About this analysis
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">{methodNote}</p>
        </div>

        {/* Cluster overview */}
        <ClusterOverview clusters={clusters} entries={clusterEntries} />

        {/* Divergence signals */}
        <DivergenceSignals signals={divergenceSignals} clusters={clusters} />

        {/* Footer */}
        <footer className="text-center pt-4 pb-4">
          <p className="text-xs text-warm-muted">
            This is a prototype for demonstration purposes.
          </p>
        </footer>
      </main>
    </div>
  );
}

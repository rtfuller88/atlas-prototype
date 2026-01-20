import { useState } from 'react';
import { rtoQuestion } from './data/rto';
import { iceShootingQuestion } from './data/ice-shooting';
import { AssertionCard } from './components/AssertionCard';
import { SummaryFooter } from './components/SummaryFooter';
import { GuidedAnalysis } from './components/GuidedAnalysis';
import { Question } from './types';

type ExampleId = 'ice' | 'rto';

const EXAMPLES: Record<ExampleId, Question> = {
  ice: iceShootingQuestion,
  rto: rtoQuestion,
};

const EXAMPLE_LABELS: Record<ExampleId, { title: string; description: string }> = {
  ice: {
    title: 'Minneapolis Shooting',
    description: 'Guided analysis with sources',
  },
  rto: {
    title: 'Return to Office',
    description: 'Original format',
  },
};

function App() {
  const [selectedExample, setSelectedExample] = useState<ExampleId>('ice');
  const question = EXAMPLES[selectedExample];

  // Use guided analysis for ICE, original format for RTO
  const useGuidedLayout = selectedExample === 'ice';

  return (
    <div className="min-h-screen bg-warm-bg">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold text-warm-black">Project Atlas</h1>
            <span className="text-xs text-warm-muted">Prototype</span>
          </div>
        </div>
      </header>

      {/* Example Selector */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex gap-2">
            {(Object.keys(EXAMPLES) as ExampleId[]).map((id) => (
              <button
                key={id}
                onClick={() => setSelectedExample(id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedExample === id
                    ? 'bg-warm-black text-white'
                    : 'bg-gray-100 text-warm-muted hover:bg-gray-200'
                }`}
              >
                {EXAMPLE_LABELS[id].title}
              </button>
            ))}
          </div>
          <p className="text-xs text-warm-muted mt-2">
            {EXAMPLE_LABELS[selectedExample].description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        {useGuidedLayout ? (
          <GuidedAnalysis question={question} />
        ) : (
          <OriginalLayout question={question} />
        )}

        {/* Footer */}
        <footer className="text-center pt-8 pb-4">
          <p className="text-xs text-warm-muted">
            This is a prototype for demonstration purposes. All data is illustrative.
          </p>
        </footer>
      </main>
    </div>
  );
}

// Original layout for RTO example (unchanged)
function OriginalLayout({ question }: { question: Question }) {
  const agreedAssertions = question.assertions.filter(a => a.category === 'agreed');
  const disputedAssertions = question.assertions.filter(a => a.category === 'disputed');
  const uncertainAssertions = question.assertions.filter(a => a.category === 'uncertain');

  return (
    <div className="space-y-8">
      {/* Core Question */}
      <section>
        <h2 className="text-2xl font-semibold text-warm-black leading-snug">
          {question.text}
        </h2>
        <p className="text-warm-muted mt-2">
          Below is a structured breakdown of where groups agree, disagree, and remain uncertain.
        </p>
      </section>

      {/* Agreement Section */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-agreed" />
          <h3 className="text-xs font-medium uppercase tracking-wide text-warm-muted">
            Where there is broad agreement
          </h3>
        </div>
        <div className="space-y-3">
          {agreedAssertions.map((assertion) => (
            <AssertionCard
              key={assertion.id}
              assertion={assertion}
              clusters={question.clusters}
            />
          ))}
        </div>
      </section>

      {/* Disagreement Section */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-disputed" />
          <h3 className="text-xs font-medium uppercase tracking-wide text-warm-muted">
            Where there is genuine disagreement
          </h3>
          <span className="text-xs text-disputed font-medium">(The crux)</span>
        </div>
        <div className="space-y-3">
          {disputedAssertions.map((assertion) => (
            <AssertionCard
              key={assertion.id}
              assertion={assertion}
              clusters={question.clusters}
            />
          ))}
        </div>
      </section>

      {/* Uncertainty Section */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-uncertain" />
          <h3 className="text-xs font-medium uppercase tracking-wide text-warm-muted">
            What remains genuinely uncertain
          </h3>
        </div>
        <div className="space-y-3">
          {uncertainAssertions.map((assertion) => (
            <AssertionCard
              key={assertion.id}
              assertion={assertion}
              clusters={question.clusters}
            />
          ))}
        </div>
      </section>

      {/* Summary */}
      <SummaryFooter insight={question.summaryInsight} />
    </div>
  );
}

export default App;

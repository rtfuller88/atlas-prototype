import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { narrativeLandscapeData, getCellsForTopic } from '../../data/landscape';
import type { WindowOption, LandscapeViewMode, MatrixNormalization } from '../../types';
import { LandscapeHeader } from './LandscapeHeader';
import { AboutAnalysis } from './AboutAnalysis';
import { ViewToggle } from './ViewToggle';
import { TopicClusterMatrix } from './TopicClusterMatrix';
import { ClusterAgendaView } from './ClusterAgendaView';
import { TopicListView } from './TopicListView';
import { DivergenceSignals } from './DivergenceSignals';
import { LegacyClusterDetails } from './LegacyClusterDetails';
import { TopicDrilldownPanel } from './TopicDrilldownPanel';

function getDefaultView(): LandscapeViewMode {
  return window.matchMedia('(min-width: 768px)').matches ? 'matrix' : 'topic-list';
}

export function NarrativeLandscapePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { clusters, topics, matrix, divergenceSignals, methodNote, windowDescription } =
    narrativeLandscapeData;

  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [activeWindow] = useState<WindowOption>('21d');
  const [activeView, setActiveView] = useState<LandscapeViewMode>(getDefaultView);
  const [normalization, setNormalization] = useState<MatrixNormalization>('row');

  const selectedTopic = selectedTopicId
    ? topics.find((t) => t.id === selectedTopicId) ?? null
    : null;

  const selectedCells = selectedTopicId ? getCellsForTopic(selectedTopicId) : [];

  const handleCellClick = useCallback((topicId: string) => {
    setSelectedTopicId(topicId);
  }, []);

  const handleClosePanel = useCallback(() => {
    setSelectedTopicId(null);
  }, []);

  return (
    <div className="min-h-screen bg-warm-bg">
      {/* Header bar */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-sm text-blue-600 hover:text-blue-800">
              ← Back to stories
            </Link>
            <span className="text-xs text-warm-muted">Project Atlas</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-10">
        {/* 1. Title + subtitle + window toggle */}
        <LandscapeHeader windowDescription={windowDescription} activeWindow={activeWindow} />

        {/* 2. Collapsible method note */}
        <AboutAnalysis methodNote={methodNote} />

        {/* 3. View toggle */}
        <ViewToggle activeView={activeView} onViewChange={setActiveView} />

        {/* 4. Active view */}
        {activeView === 'matrix' ? (
          <TopicClusterMatrix
            topics={topics}
            clusters={clusters}
            matrix={matrix}
            onCellClick={handleCellClick}
            selectedTopicId={selectedTopicId}
            normalization={normalization}
            onNormalizationChange={setNormalization}
          />
        ) : activeView === 'topic-list' ? (
          <TopicListView
            topics={topics}
            clusters={clusters}
            matrix={matrix}
            normalization={normalization}
            onNormalizationChange={setNormalization}
            onTopicClick={handleCellClick}
            onSwitchToMatrix={() => setActiveView('matrix')}
          />
        ) : (
          <ClusterAgendaView
            clusters={clusters}
            topics={topics}
            matrix={matrix}
            onTopicClick={handleCellClick}
            selectedTopicId={selectedTopicId}
          />
        )}

        {/* 5. Divergence signals */}
        <DivergenceSignals signals={divergenceSignals} clusters={clusters} />

        {/* 6. Legacy cluster detail (collapsible) */}
        <LegacyClusterDetails clusters={clusters} matrix={matrix} topics={topics} />

        {/* Footer */}
        <footer className="text-center pt-4 pb-4">
          <p className="text-xs text-warm-muted">
            This is a prototype for demonstration purposes.
          </p>
        </footer>
      </main>

      {/* 7. Drilldown panel overlay */}
      <TopicDrilldownPanel
        isOpen={selectedTopicId !== null}
        onClose={handleClosePanel}
        topic={selectedTopic}
        cells={selectedCells}
        clusters={clusters}
      />
    </div>
  );
}

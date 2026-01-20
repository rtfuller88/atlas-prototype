import { useState } from 'react';
import { Question, ClusterDefinition } from '../types';
import { ExecutiveSummary } from './ExecutiveSummary';
import { StructureDiagram } from './StructureDiagram';
import { GroupsOverview } from './GroupsOverview';
import { PollingDistribution } from './PollingDistribution';
import { AssertionCard } from './AssertionCard';
import { SummaryFooter } from './SummaryFooter';
import { MediaEcosystem } from './MediaEcosystem';
import { BeliefCoalitions } from './BeliefCoalitions';
import { FeedModal } from './FeedModal';

// Status styles matching StructureDiagram
const STATUS_STYLES = {
  agreed: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    dot: 'bg-green-500',
    text: 'text-green-700',
    label: 'Broadly Agreed',
    description: 'Most groups accept this claim, though they may interpret it differently.',
  },
  disputed: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    dot: 'bg-amber-500',
    text: 'text-amber-700',
    label: 'Disputed',
    description: 'Groups disagree on this claim — this is where the real debate lies.',
  },
  uncertain: {
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    dot: 'bg-gray-400',
    text: 'text-gray-600',
    label: 'Uncertain',
    description: "Even experts aren't sure about this claim yet.",
  },
};

interface GuidedAnalysisProps {
  question: Question;
}

export function GuidedAnalysis({ question }: GuidedAnalysisProps) {
  // Feed modal state
  const [feedModalCluster, setFeedModalCluster] = useState<ClusterDefinition | null>(null);

  const handleSeeTheirFeed = (cluster: ClusterDefinition) => {
    setFeedModalCluster(cluster);
  };

  const handleCloseFeedModal = () => {
    setFeedModalCluster(null);
  };

  // Handle claim click - scroll to that claim's section
  const handleClaimClick = (claimId: string) => {
    const element = document.getElementById(`claim-${claimId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Get assertions for a specific claim
  const getAssertionsForClaim = (claimId: string) => {
    const claim = question.claims?.find(c => c.id === claimId);
    if (!claim) return [];
    return question.assertions.filter(a => claim.assertionIds.includes(a.id));
  };

  // Build claim data for structure diagram
  const claimData = question.claims?.map(claim => ({
    id: claim.id,
    label: claim.label,
    status: claim.status,
    assertionCount: claim.assertionIds.length,
  })) || [];

  return (
    <div className="space-y-8">
      {/* Step 1: Executive Summary */}
      {question.executiveSummary && (
        <section>
          <ExecutiveSummary
            title={question.executiveSummary.title}
            dateline={question.executiveSummary.dateline}
            whatHappened={question.executiveSummary.whatHappened}
            whyControversial={question.executiveSummary.whyControversial}
            coreQuestion={question.text}
            previewInsight={question.executiveSummary.previewInsight}
            pollingSummary={question.executiveSummary.pollingSummary}
          />
        </section>
      )}

      {/* Step 1.5: Polling Distribution (below executive summary/core question) */}
      {question.pollingData && (
        <section>
          <PollingDistribution pollingData={question.pollingData} />
        </section>
      )}

      {/* Step 2: Groups Overview (moved before structure diagram) */}
      {question.topLevelBeliefs && question.topLevelBeliefs.length > 0 && (
        <section>
          <GroupsOverview
            clusters={question.clusters}
            coreQuestion={question.text}
            topLevelBeliefs={question.topLevelBeliefs}
            onSeeTheirFeed={handleSeeTheirFeed}
          />
        </section>
      )}

      {/* Step 3: Structure Overview */}
      {question.claims && question.claims.length > 0 && (
        <section>
          <StructureDiagram
            question={question.text}
            claims={claimData}
            onClaimClick={handleClaimClick}
          />
          <p className="text-sm text-warm-muted text-center mt-3">
            Click any claim above to jump to its detailed analysis below.
          </p>
        </section>
      )}

      {/* Step 4: Detailed analysis of each claim */}
      {question.claims && question.claims.map((claim) => {
        const style = STATUS_STYLES[claim.status];
        const assertions = getAssertionsForClaim(claim.id);

        return (
          <section
            key={claim.id}
            id={`claim-${claim.id}`}
            className={`rounded-xl border-2 ${style.border} ${style.bg} p-6`}
          >
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-3 h-3 rounded-full ${style.dot}`} />
                <span className={`text-xs font-medium ${style.text}`}>{style.label}</span>
              </div>
              <h2 className="text-lg font-semibold text-warm-black mb-2">
                {claim.label}
              </h2>
              <p className="text-warm-muted text-sm mb-2">
                {claim.description}
              </p>
              <p className="text-xs text-warm-muted italic">
                {style.description}
              </p>
            </div>
            <div className="space-y-3">
              {assertions.map((assertion) => (
                <AssertionCard
                  key={assertion.id}
                  assertion={assertion}
                  clusters={question.clusters}
                />
              ))}
            </div>
          </section>
        );
      })}

      {/* Step 5: Media Ecosystem */}
      {question.topLevelBeliefs && question.topLevelBeliefs.length > 0 && (
        <section>
          <MediaEcosystem
            clusters={question.clusters}
            topLevelBeliefs={question.topLevelBeliefs}
            framingComparison={question.framingComparison}
            beliefTrueLabel={question.mediaEcosystemConfig?.beliefTrueLabel}
            beliefFalseLabel={question.mediaEcosystemConfig?.beliefFalseLabel}
            keyPatternInsight={question.mediaEcosystemConfig?.keyPatternInsight}
          />
        </section>
      )}

      {/* Step 6: Belief Coalitions */}
      {question.relatedDivides && question.relatedDivides.length > 0 && (
        <section>
          <BeliefCoalitions
            relatedDivides={question.relatedDivides}
            believesTrueLabel={question.mediaEcosystemConfig?.beliefTrueLabel ? `Believes "${question.mediaEcosystemConfig.beliefTrueLabel}"` : "Believes justified"}
            believesFalseLabel={question.mediaEcosystemConfig?.beliefFalseLabel ? `Believes "${question.mediaEcosystemConfig.beliefFalseLabel}"` : "Believes not justified"}
          />
        </section>
      )}

      {/* Step 7: Summary insight */}
      <section>
        <SummaryFooter insight={question.summaryInsight} />
      </section>

      {/* Feed Modal */}
      <FeedModal
        isOpen={feedModalCluster !== null}
        onClose={handleCloseFeedModal}
        cluster={feedModalCluster}
      />
    </div>
  );
}

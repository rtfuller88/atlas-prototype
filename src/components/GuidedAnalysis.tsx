import { useState } from 'react';
import { Question } from '../types';
import { ExecutiveSummary } from './ExecutiveSummary';
import { StructureDiagram } from './StructureDiagram';
import { GroupsOverview } from './GroupsOverview';
import { PollingDistribution } from './PollingDistribution';
import { AssertionCard } from './AssertionCard';
import { SummaryFooter } from './SummaryFooter';
import { MediaEcosystem } from './MediaEcosystem';
import { BeliefCoalitions } from './BeliefCoalitions';

interface GuidedAnalysisProps {
  question: Question;
}

export function GuidedAnalysis({ question }: GuidedAnalysisProps) {
  const [activeClaimId, setActiveClaimId] = useState<string | null>(null);

  const agreedAssertions = question.assertions.filter(a => a.category === 'agreed');
  const disputedAssertions = question.assertions.filter(a => a.category === 'disputed');
  const uncertainAssertions = question.assertions.filter(a => a.category === 'uncertain');

  // Get assertions for the active claim
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

      {/* Step 2: Structure Overview */}
      {question.claims && question.claims.length > 0 && (
        <section>
          <StructureDiagram
            question={question.text}
            claims={claimData}
            onClaimClick={(id) => setActiveClaimId(activeClaimId === id ? null : id)}
            activeClaimId={activeClaimId || undefined}
          />
          <p className="text-sm text-warm-muted text-center mt-3">
            Click a claim above to see its supporting assertions, or scroll down for the full analysis.
          </p>
        </section>
      )}

      {/* Step 3: Groups Overview */}
      {question.topLevelBeliefs && question.topLevelBeliefs.length > 0 && (
        <section>
          <GroupsOverview
            clusters={question.clusters}
            coreQuestion={question.text}
            topLevelBeliefs={question.topLevelBeliefs}
          />
        </section>
      )}

      {/* Claim detail view (if a claim is selected) */}
      {activeClaimId && (
        <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-warm-black">
              {question.claims?.find(c => c.id === activeClaimId)?.label}
            </h3>
            <button
              onClick={() => setActiveClaimId(null)}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Close
            </button>
          </div>
          <p className="text-warm-muted mb-4">
            {question.claims?.find(c => c.id === activeClaimId)?.description}
          </p>
          <div className="space-y-3">
            {getAssertionsForClaim(activeClaimId).map((assertion) => (
              <AssertionCard
                key={assertion.id}
                assertion={assertion}
                clusters={question.clusters}
              />
            ))}
          </div>
        </section>
      )}

      {/* Step 3: Where there's agreement */}
      <section>
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <h2 className="text-lg font-semibold text-warm-black">
              Where there is broad agreement
            </h2>
          </div>
          <p className="text-warm-muted">
            Before diving into disagreements, notice what most groups actually agree on.
            This is often more than the public debate suggests.
          </p>
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

      {/* Step 4: The Crux — where disagreement lies */}
      <section>
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <h2 className="text-lg font-semibold text-warm-black">
              Where the real disagreement lies
            </h2>
            <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded">
              The crux
            </span>
          </div>
          <p className="text-warm-muted">
            These are the specific assertions where groups diverge. For each one, we show
            <em> why</em> they disagree — whether it's about facts, interpretation, or values.
          </p>
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

      {/* Step 5: What remains uncertain */}
      <section>
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-gray-400" />
            <h2 className="text-lg font-semibold text-warm-black">
              What remains genuinely uncertain
            </h2>
          </div>
          <p className="text-warm-muted">
            Some questions don't yet have clear answers — even experts aren't sure.
            Recognizing uncertainty is part of understanding the issue honestly.
          </p>
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

      {/* Step 6: Media Ecosystem */}
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

      {/* Step 7: Belief Coalitions */}
      {question.relatedDivides && question.relatedDivides.length > 0 && (
        <section>
          <BeliefCoalitions
            relatedDivides={question.relatedDivides}
            believesTrueLabel={question.mediaEcosystemConfig?.beliefTrueLabel ? `Believes "${question.mediaEcosystemConfig.beliefTrueLabel}"` : "Believes justified"}
            believesFalseLabel={question.mediaEcosystemConfig?.beliefFalseLabel ? `Believes "${question.mediaEcosystemConfig.beliefFalseLabel}"` : "Believes not justified"}
          />
        </section>
      )}

      {/* Step 8: Summary insight */}
      <section>
        <SummaryFooter insight={question.summaryInsight} />
      </section>
    </div>
  );
}

import { useState } from 'react';
import { Assertion, ClusterDefinition } from '../types';
import { DisagreementTypeBadge } from './DisagreementTypeBadge';
import { AgreementBar } from './AgreementBar';
import { ClusterBeliefDisplay } from './ClusterBeliefDisplay';

interface AssertionCardProps {
  assertion: Assertion;
  clusters: ClusterDefinition[];
}

export function AssertionCard({ assertion, clusters }: AssertionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all">
      {/* Collapsed view - always visible */}
      <button
        className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-warm-black font-medium mb-2">{assertion.text}</p>
            <div className="flex items-center gap-3 mb-3">
              <DisagreementTypeBadge
                type={assertion.type}
                explanation={assertion.typeExplanation}
              />
            </div>
            <AgreementBar beliefs={assertion.beliefStates} />
          </div>
          <div className="flex-shrink-0 mt-1">
            <svg
              className={`w-5 h-5 text-warm-muted transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {/* Expanded view */}
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-gray-100">
          <div className="pt-4 space-y-4">
            {/* Resolution note if present */}
            {assertion.resolutionNote && (
              <div className="p-3 bg-amber-50 border border-amber-100 rounded-lg">
                <p className="text-sm text-amber-800">
                  <span className="font-medium">What might change this:</span>{' '}
                  {assertion.resolutionNote}
                </p>
              </div>
            )}

            {/* Cluster beliefs */}
            <div>
              <h4 className="text-xs uppercase tracking-wide text-warm-muted mb-3">
                How different groups see this
              </h4>
              <ClusterBeliefDisplay
                beliefs={assertion.beliefStates}
                clusters={clusters}
              />
            </div>

            {/* Legend for the bar */}
            <div className="pt-2">
              <AgreementBar beliefs={assertion.beliefStates} showLegend />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

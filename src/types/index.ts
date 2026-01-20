export type DisagreementType = 'empirical' | 'inferential' | 'normative' | 'confidence';

export type BeliefState = 'true' | 'false' | 'uncertain' | 'mixed';

export type ConfidenceLevel = 'high' | 'medium' | 'low';

export type AssertionCategory = 'agreed' | 'disputed' | 'uncertain';

export interface Source {
  id: string;
  title: string;
  outlet: string;
  url: string;
  date: string;
  type: 'official' | 'media' | 'video' | 'document' | 'analysis';
}

export interface ClusterBelief {
  clusterId: string;
  belief: BeliefState;
  confidence: ConfidenceLevel;
  reasoning: string;
  evidenceSummary: string;
  sources?: Source[];
}

export interface Assertion {
  id: string;
  text: string;
  type: DisagreementType;
  typeExplanation: string;
  beliefStates: ClusterBelief[];
  category: AssertionCategory;
  resolutionNote?: string; // What might resolve this, or why it won't
}

export interface Claim {
  id: string;
  label: string;
  description: string;
  status: AssertionCategory;
  assertionIds: string[]; // References to assertions that support this claim
}

export interface ExecutiveSummaryData {
  title: string;
  dateline: string;
  whatHappened: string;
  whyControversial: string;
  previewInsight: string;
}

export interface TopLevelBelief {
  clusterId: string;
  belief: BeliefState;
  summary: string; // One-line summary of their position on the core question
}

export interface RelatedDivide {
  id: string;
  issue: string;
  description?: string;
  // How groups who believe the main assertion is true tend to fall on this issue
  believesTruePosition: string;
  // How groups who believe the main assertion is false tend to fall on this issue
  believesFalsePosition: string;
  // Optional: correlation strength
  correlation?: 'strong' | 'moderate' | 'weak';
}

export interface Question {
  id: string;
  text: string;
  assertions: Assertion[];
  summaryInsight: string;
  clusters: ClusterDefinition[];
  // New fields for guided experience
  executiveSummary?: ExecutiveSummaryData;
  claims?: Claim[]; // High-level claims that group assertions
  topLevelBeliefs?: TopLevelBelief[]; // Each group's overall answer to the core question
  relatedDivides?: RelatedDivide[]; // Other issues where these groups also diverge
}

export interface RepresentativeArticle {
  sourceId: string;
  title: string;
  outlet: string;
  url: string;
  framingNote: string; // How this article frames the issue, what it emphasizes
}

export interface ClusterDefinition {
  id: string;
  label: string; // e.g., "Group A"
  description: string; // Brief description of this belief cluster's overall stance
  characteristics?: {
    infoSources?: string[]; // Where this group tends to get information
    demographicNotes?: string; // Neutral demographic observations
    representativeArticles?: RepresentativeArticle[]; // Key articles this group would read
  };
}

// Helper to get type explanations in plain language
export const TYPE_EXPLANATIONS: Record<DisagreementType, { label: string; description: string }> = {
  empirical: {
    label: 'About what happened',
    description: 'Different beliefs about observable facts or events',
  },
  inferential: {
    label: 'About what it means',
    description: 'Same facts, but different conclusions drawn from them',
  },
  normative: {
    label: 'About what matters',
    description: 'Different values or priorities for what should count',
  },
  confidence: {
    label: 'About certainty',
    description: 'Different standards for how sure we should be',
  },
};

// Color mappings for visualization
export const TYPE_COLORS: Record<DisagreementType, string> = {
  empirical: '#3B82F6',
  inferential: '#8B5CF6',
  normative: '#EC4899',
  confidence: '#6B7280',
};

export const BELIEF_LABELS: Record<BeliefState, string> = {
  true: 'Agrees',
  false: 'Disagrees',
  uncertain: 'Uncertain',
  mixed: 'Mixed views',
};

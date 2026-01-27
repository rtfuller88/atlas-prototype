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
  pollingSummary?: string; // Brief note about polling distribution, e.g., "Polling shows 61% oppose"
}

export interface PollingSegment {
  label: string; // e.g., "Support ban", "Oppose ban", "Unsure"
  percentage: number;
  color: string; // Tailwind color class or hex
}

export interface PollingData {
  source: string; // e.g., "Pew Research, March 2025"
  sourceUrl?: string;
  segments: PollingSegment[];
  note?: string; // Additional context about the polling
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

export interface FramingComparison {
  sideALabel: string; // e.g., "Official/Conservative framing"
  sideAFraming: string[]; // Array of framing examples
  sideBLabel: string; // e.g., "Investigative/Progressive framing"
  sideBFraming: string[]; // Array of framing examples
}

export interface MediaEcosystemConfig {
  beliefTrueLabel: string; // e.g., "Justified", "Yes, ban", "Support tariffs"
  beliefFalseLabel: string; // e.g., "Not Justified", "No, don't ban", "Oppose tariffs"
  keyPatternInsight: string; // Dynamic insight about the media pattern
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
  framingComparison?: FramingComparison; // How different sides frame the issue
  mediaEcosystemConfig?: MediaEcosystemConfig; // Labels and insight for media ecosystem section
  pollingData?: PollingData; // Public opinion polling data
}

export interface RepresentativeArticle {
  sourceId: string;
  title: string;
  outlet: string;
  url: string;
  framingNote: string; // How this article frames the issue, what it emphasizes
  // Optional fields for enhanced feed experience
  contentType?: 'article' | 'video' | 'opinion' | 'breaking';
  publishedDate?: string; // e.g., "2 hours ago"
  excerpt?: string; // 1-2 sentence preview
  pullQuote?: string; // Actual quote from the article
}

export interface ClusterPrevalence {
  percentage?: number; // Approximate percentage of population, if known
  label: 'majority' | 'significant' | 'minority' | 'small'; // Qualitative size
  description?: string; // e.g., "~30% of Americans" or "Primarily among executives"
}

export interface ClusterDefinition {
  id: string;
  label: string; // e.g., "Group A"
  description: string; // Brief description of this belief cluster's overall stance
  prevalence?: ClusterPrevalence; // How common this viewpoint is
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

export * from './landscape';

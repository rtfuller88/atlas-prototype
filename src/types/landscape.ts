export interface MediaCluster {
  id: string;
  name: string;
  shortName: string;
  description: string;
  outlets: string[];
  color: string;       // hex color for the cluster
  bgClass: string;     // tailwind bg class
  borderClass: string; // tailwind border class
  textClass: string;   // tailwind text class
}

export type CoverageMomentum = 'emerging' | 'sustained' | 'declining' | 'absent';

// --- New matrix types ---

export interface LandscapeTopic {
  id: string;
  title: string;
  issueSlug?: string;
}

export interface MatrixCell {
  topicId: string;
  clusterId: string;
  intensity: number; // 0-10
  momentum: CoverageMomentum;
  frames: string[];
  notableAbsence?: string;
}

export type WindowOption = '10d' | '21d';

export type LandscapeViewMode = 'matrix' | 'cluster-agenda';

export type MatrixNormalization = 'absolute' | 'row' | 'column';

// --- Legacy types (used by LegacyClusterDetails) ---

export interface ClusterTopicCoverage {
  topicId: string;
  topicLabel: string;
  coverageIntensity: number; // 1-10
  momentum: CoverageMomentum;
  framingKeywords: string[];
  atlasStoryId?: string;
}

export interface NotablyAbsentTopic {
  topicId: string;
  observation: string;
}

export interface ClusterLandscapeEntry {
  clusterId: string;
  topicCoverage: ClusterTopicCoverage[];
  notablyAbsent: NotablyAbsentTopic;
}

// --- Divergence signals ---

export type DivergenceSignalType = 'coverage-gap' | 'framing-difference' | 'intensity-mismatch';

export interface DivergenceSignal {
  id: string;
  title: string;
  description: string;
  involvedClusters: string[];
  involvedTopics: string[];
  signalType: DivergenceSignalType;
}

// --- Top-level data shape ---

export interface NarrativeLandscapeData {
  generatedDate: string;
  windowDescription: string;
  clusters: MediaCluster[];
  topics: LandscapeTopic[];
  matrix: MatrixCell[];
  divergenceSignals: DivergenceSignal[];
  methodNote: string;
}

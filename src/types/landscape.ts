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

export interface ClusterTopicCoverage {
  topicId: string;
  topicLabel: string;
  coverageIntensity: number; // 1-10
  momentum: CoverageMomentum;
  framingKeywords: string[];
  atlasStoryId?: string; // only set if topic maps to an existing Atlas page
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

export type DivergenceSignalType = 'coverage-gap' | 'framing-difference' | 'intensity-mismatch';

export interface DivergenceSignal {
  id: string;
  observation: string;
  involvedClusters: string[];
  involvedTopics: string[];
  signalType: DivergenceSignalType;
}

export interface NarrativeLandscapeData {
  generatedDate: string;
  windowDescription: string;
  clusters: MediaCluster[];
  clusterEntries: ClusterLandscapeEntry[];
  divergenceSignals: DivergenceSignal[];
  methodNote: string;
}

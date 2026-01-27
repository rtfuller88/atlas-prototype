import type {
  MediaCluster,
  LandscapeTopic,
  MatrixCell,
  DivergenceSignal,
  NarrativeLandscapeData,
} from '../types';

// ─── Media Cluster Definitions ───────────────────────────────────────────────
// Outlet lists aligned with keys in OUTLET_COLORS (src/constants/outlets.ts)

const conservativeCluster: MediaCluster = {
  id: 'conservative',
  name: 'Conservative Media',
  shortName: 'Conservative',
  description:
    'Right-leaning outlets emphasizing law enforcement, border security, government accountability, and national strength narratives.',
  outlets: ['Fox News', 'Newsmax', 'The Daily Wire', 'Breitbart'],
  color: '#DC2626', // red-600
  bgClass: 'bg-red-50',
  borderClass: 'border-red-500',
  textClass: 'text-red-700',
};

const mainstreamCluster: MediaCluster = {
  id: 'mainstream',
  name: 'Mainstream Media',
  shortName: 'Mainstream',
  description:
    'Legacy broadcast and print outlets covering institutional dynamics, civil liberties, and policy consequences with establishment framing.',
  outlets: ['CNN', 'Washington Post', 'New York Times', 'NPR', 'MSNBC', 'ABC News', 'NBC News', 'CBS News'],
  color: '#2563EB', // blue-600
  bgClass: 'bg-blue-50',
  borderClass: 'border-blue-500',
  textClass: 'text-blue-700',
};

const progressiveCluster: MediaCluster = {
  id: 'progressive',
  name: 'Progressive Media',
  shortName: 'Progressive',
  description:
    'Investigative and left-leaning outlets foregrounding systemic critique, civil rights, corporate power, and economic justice.',
  outlets: ['The Intercept', 'ProPublica', 'Mother Jones', 'Jacobin'],
  color: '#16A34A', // green-600
  bgClass: 'bg-green-50',
  borderClass: 'border-green-500',
  textClass: 'text-green-700',
};

const wireInternationalCluster: MediaCluster = {
  id: 'wire-international',
  name: 'Wire / International Media',
  shortName: 'Wire / Intl',
  description:
    'Wire services and international outlets prioritizing factual reporting, sovereignty issues, and geopolitical consequences.',
  outlets: ['AP News', 'Reuters', 'BBC', 'The Guardian'],
  color: '#9333EA', // purple-600
  bgClass: 'bg-purple-50',
  borderClass: 'border-purple-500',
  textClass: 'text-purple-700',
};

const clusters: MediaCluster[] = [
  conservativeCluster,
  mainstreamCluster,
  progressiveCluster,
  wireInternationalCluster,
];

// ─── Deduplicated Topics ─────────────────────────────────────────────────────
// 13 unique topics extracted from the 4 cluster entries

const topics: LandscapeTopic[] = [
  { id: 'ice-enforcement', title: 'ICE Enforcement / Minneapolis Shootings', issueSlug: 'ice-shooting' },
  { id: 'venezuela-maduro', title: 'Venezuela / Maduro Capture' },
  { id: 'government-shutdown', title: 'Government Shutdown / DHS Funding' },
  { id: 'mn-somali-fraud', title: 'MN Somali Fraud Scandal' },
  { id: 'iran-protests', title: 'Iran Protests & Regime Crackdown' },
  { id: 'clinton-epstein', title: 'Clinton / Epstein Contempt' },
  { id: 'greenland-nato', title: 'Greenland / NATO Tariff Crisis', issueSlug: 'tariffs' },
  { id: 'doj-fed-powell', title: 'DOJ Investigation of Fed Chair Powell' },
  { id: 'doge-federal', title: 'DOGE / Dismantling Federal Government' },
  { id: 'public-education', title: 'Destruction of Public Education' },
  { id: 'aca-subsidy-expiration', title: 'ACA Subsidy Expiration / Healthcare' },
  { id: 'ukraine-peace', title: 'Ukraine Peace Talks' },
  { id: 'gaza-ceasefire', title: 'Gaza Ceasefire Phase Two' },
];

// ─── Topic × Cluster Matrix ─────────────────────────────────────────────────
// 52 cells (13 topics × 4 clusters)
// Populated cells carry over existing intensity/momentum/frames.
// Empty cells get intensity: 0, momentum: 'absent', frames: [].
// Cells where original data had a notablyAbsent entry get a notableAbsence string.

const matrix: MatrixCell[] = [
  // ── Conservative cluster ──
  { topicId: 'ice-enforcement', clusterId: 'conservative', intensity: 10, momentum: 'sustained', frames: ['law-and-order', 'far-left mob', 'Democrat obstruction', 'officer safety'] },
  { topicId: 'venezuela-maduro', clusterId: 'conservative', intensity: 8, momentum: 'declining', frames: ['decisive action', 'American strength', 'narco-dictator', 'liberation'] },
  { topicId: 'government-shutdown', clusterId: 'conservative', intensity: 8, momentum: 'emerging', frames: ['Democrat shutdown', 'defund DHS', 'obstruction', 'border security'] },
  { topicId: 'mn-somali-fraud', clusterId: 'conservative', intensity: 7, momentum: 'sustained', frames: ['massive fraud', 'Democrat cover-up', 'Walz complicit', 'taxpayer dollars'] },
  { topicId: 'iran-protests', clusterId: 'conservative', intensity: 7, momentum: 'sustained', frames: ['regime brutality', 'Trump strength', 'freedom movement', 'maximum pressure'] },
  { topicId: 'clinton-epstein', clusterId: 'conservative', intensity: 6, momentum: 'emerging', frames: ['Clinton corruption', 'bipartisan contempt', 'cover-up', 'accountability'] },
  { topicId: 'greenland-nato', clusterId: 'conservative', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'doj-fed-powell', clusterId: 'conservative', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'doge-federal', clusterId: 'conservative', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'public-education', clusterId: 'conservative', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'aca-subsidy-expiration', clusterId: 'conservative', intensity: 0, momentum: 'absent', frames: [], notableAbsence: 'ACA subsidy expiration — premiums doubled for 20M+ Americans, disproportionately in red states — receives virtually no coverage despite direct impact on conservative-leaning audiences.' },
  { topicId: 'ukraine-peace', clusterId: 'conservative', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'gaza-ceasefire', clusterId: 'conservative', intensity: 0, momentum: 'absent', frames: [] },

  // ── Mainstream cluster ──
  { topicId: 'ice-enforcement', clusterId: 'mainstream', intensity: 10, momentum: 'emerging', frames: ['civil liberties', 'accountability', 'video evidence', 'citizen victims'] },
  { topicId: 'venezuela-maduro', clusterId: 'mainstream', intensity: 7, momentum: 'declining', frames: ['unprecedented action', 'legal questions', 'endgame uncertainty', 'sovereignty'] },
  { topicId: 'government-shutdown', clusterId: 'mainstream', intensity: 9, momentum: 'emerging', frames: ['Democratic resistance', 'ICE accountability', 'constitutional tension', 'budget crisis'] },
  { topicId: 'mn-somali-fraud', clusterId: 'mainstream', intensity: 0, momentum: 'absent', frames: [], notableAbsence: 'MN Somali fraud scandal — a signature story in conservative media with dozens of articles — has received minimal mainstream pickup despite substantive fraud allegations.' },
  { topicId: 'iran-protests', clusterId: 'mainstream', intensity: 8, momentum: 'sustained', frames: ['humanitarian catastrophe', 'regime brutality', 'military options', 'sanctions'] },
  { topicId: 'clinton-epstein', clusterId: 'mainstream', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'greenland-nato', clusterId: 'mainstream', intensity: 7, momentum: 'declining', frames: ['transatlantic rupture', 'sovereignty threat', 'coercive diplomacy', 'alliance strain'] },
  { topicId: 'doj-fed-powell', clusterId: 'mainstream', intensity: 6, momentum: 'sustained', frames: ['institutional independence', 'political intimidation', 'norms erosion', 'market impact'] },
  { topicId: 'doge-federal', clusterId: 'mainstream', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'public-education', clusterId: 'mainstream', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'aca-subsidy-expiration', clusterId: 'mainstream', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'ukraine-peace', clusterId: 'mainstream', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'gaza-ceasefire', clusterId: 'mainstream', intensity: 0, momentum: 'absent', frames: [] },

  // ── Progressive cluster ──
  { topicId: 'ice-enforcement', clusterId: 'progressive', intensity: 10, momentum: 'emerging', frames: ['state violence', 'constitutional crisis', 'racial profiling', 'militarized policing'] },
  { topicId: 'venezuela-maduro', clusterId: 'progressive', intensity: 9, momentum: 'sustained', frames: ['illegal war', 'imperialism', 'congressional abdication', 'regime change'] },
  { topicId: 'government-shutdown', clusterId: 'progressive', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'mn-somali-fraud', clusterId: 'progressive', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'iran-protests', clusterId: 'progressive', intensity: 6, momentum: 'emerging', frames: ['economic injustice', 'state repression', 'imperial opportunism', 'sanctions harm'] },
  { topicId: 'clinton-epstein', clusterId: 'progressive', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'greenland-nato', clusterId: 'progressive', intensity: 0, momentum: 'absent', frames: [], notableAbsence: 'Greenland / NATO tariff crisis — a major story for mainstream and international outlets — has received light progressive coverage, likely due to its focus on geopolitical alliances rather than domestic justice issues.' },
  { topicId: 'doj-fed-powell', clusterId: 'progressive', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'doge-federal', clusterId: 'progressive', intensity: 8, momentum: 'sustained', frames: ['corruption', 'privatization', 'accountability', 'conflicts of interest'] },
  { topicId: 'public-education', clusterId: 'progressive', intensity: 7, momentum: 'sustained', frames: ['privatization', 'Christian nationalism', 'civil rights rollback', 'vouchers'] },
  { topicId: 'aca-subsidy-expiration', clusterId: 'progressive', intensity: 6, momentum: 'sustained', frames: ['Republican cruelty', 'affordability crisis', 'working-class harm', 'corporate profits'] },
  { topicId: 'ukraine-peace', clusterId: 'progressive', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'gaza-ceasefire', clusterId: 'progressive', intensity: 0, momentum: 'absent', frames: [] },

  // ── Wire / International cluster ──
  { topicId: 'ice-enforcement', clusterId: 'wire-international', intensity: 9, momentum: 'emerging', frames: ['civil liberties crisis', 'lethal overreach', 'state-federal confrontation', 'protest response'] },
  { topicId: 'venezuela-maduro', clusterId: 'wire-international', intensity: 9, momentum: 'sustained', frames: ['sovereignty violation', 'international law', 'regime change', 'Venezuelan casualties'] },
  { topicId: 'government-shutdown', clusterId: 'wire-international', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'mn-somali-fraud', clusterId: 'wire-international', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'iran-protests', clusterId: 'wire-international', intensity: 8, momentum: 'sustained', frames: ['regime instability', 'brutal crackdown', 'potential collapse', 'regional implications'] },
  { topicId: 'clinton-epstein', clusterId: 'wire-international', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'greenland-nato', clusterId: 'wire-international', intensity: 7, momentum: 'declining', frames: ['transatlantic rift', 'Arctic sovereignty', 'tariff coercion', 'alliance fracture'] },
  { topicId: 'doj-fed-powell', clusterId: 'wire-international', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'doge-federal', clusterId: 'wire-international', intensity: 0, momentum: 'absent', frames: [], notableAbsence: 'U.S. domestic policy stories (ACA subsidies, DOGE, education) receive minimal international coverage — these inherently domestic stories lack the geopolitical hook that drives wire service attention.' },
  { topicId: 'public-education', clusterId: 'wire-international', intensity: 0, momentum: 'absent', frames: [], notableAbsence: 'U.S. domestic policy stories (ACA subsidies, DOGE, education) receive minimal international coverage — these inherently domestic stories lack the geopolitical hook that drives wire service attention.' },
  { topicId: 'aca-subsidy-expiration', clusterId: 'wire-international', intensity: 0, momentum: 'absent', frames: [], notableAbsence: 'U.S. domestic policy stories (ACA subsidies, DOGE, education) receive minimal international coverage — these inherently domestic stories lack the geopolitical hook that drives wire service attention.' },
  { topicId: 'ukraine-peace', clusterId: 'wire-international', intensity: 8, momentum: 'sustained', frames: ['trilateral diplomacy', 'territorial deadlock', 'continued bombardment', 'war fatigue'] },
  { topicId: 'gaza-ceasefire', clusterId: 'wire-international', intensity: 7, momentum: 'sustained', frames: ['demilitarization', 'hostage closure', 'humanitarian catastrophe', 'reconstruction'] },
];

// ─── Helper Functions ────────────────────────────────────────────────────────

const cellIndex = new Map<string, MatrixCell>(
  matrix.map((c) => [`${c.topicId}::${c.clusterId}`, c])
);

export function getCell(topicId: string, clusterId: string): MatrixCell | undefined {
  return cellIndex.get(`${topicId}::${clusterId}`);
}

export function getCellsForTopic(topicId: string): MatrixCell[] {
  return matrix.filter((c) => c.topicId === topicId);
}

export function getCellsForCluster(clusterId: string): MatrixCell[] {
  return matrix.filter((c) => c.clusterId === clusterId);
}

export function getRowMaxIntensity(topicId: string): number {
  return Math.max(...getCellsForTopic(topicId).map((c) => c.intensity));
}

export function getClusterMaxIntensity(clusterId: string): number {
  return Math.max(...getCellsForCluster(clusterId).map((c) => c.intensity));
}

// ─── Divergence Signals ──────────────────────────────────────────────────────
// Neutral observations about how different media clusters cover the same events.

const divergenceSignals: DivergenceSignal[] = [
  {
    id: 'ice-framing',
    title: 'ICE Enforcement Framing Divide',
    description:
      'ICE enforcement / Minneapolis shootings dominate all four clusters but with sharply different framing: conservative outlets emphasize "far-left mob" and officer safety; mainstream outlets foreground video evidence contradicting official accounts; progressive outlets frame it as state violence and constitutional crisis; international outlets focus on civil liberties and state-federal confrontation.',
    involvedClusters: ['conservative', 'mainstream', 'progressive', 'wire-international'],
    involvedTopics: ['ice-enforcement'],
    signalType: 'framing-difference',
  },
  {
    id: 'venezuela-framing',
    title: 'Venezuela Coverage Spectrum',
    description:
      'Venezuela coverage spans a wide framing spectrum: conservative outlets celebrate the Maduro capture as "American strength"; progressive outlets call it an illegal war and "the least popular war in recent memory"; international outlets foreground sovereignty violations and 100+ Venezuelan casualties.',
    involvedClusters: ['conservative', 'progressive', 'wire-international'],
    involvedTopics: ['venezuela-maduro'],
    signalType: 'framing-difference',
  },
  {
    id: 'aca-coverage-gap',
    title: 'ACA Subsidy Coverage Gap',
    description:
      'ACA subsidy expiration — affecting 20M+ Americans with doubled premiums — is covered by progressive and some mainstream outlets as a crisis, but is virtually absent from conservative media despite disproportionate impact on red-state populations.',
    involvedClusters: ['conservative', 'progressive'],
    involvedTopics: ['aca-subsidy-expiration'],
    signalType: 'coverage-gap',
  },
  {
    id: 'doge-coverage-gap',
    title: 'DOGE Investigation Gap',
    description:
      'DOGE / federal dismantling: ProPublica\'s sustained investigative series tracking 100+ DOGE operatives has no conservative counterpart. Conservative outlets largely ignore or celebrate the cuts, while progressive outlets treat it as a top-tier accountability story.',
    involvedClusters: ['conservative', 'progressive'],
    involvedTopics: ['doge-federal'],
    signalType: 'coverage-gap',
  },
  {
    id: 'mn-fraud-coverage-gap',
    title: 'MN Fraud Coverage Gap',
    description:
      'MN Somali fraud scandal is a signature story for Breitbart and Fox News with dozens of articles, but mainstream outlets have given it minimal coverage — a gap that conservative commentators cite as evidence of media bias.',
    involvedClusters: ['conservative', 'mainstream'],
    involvedTopics: ['mn-somali-fraud'],
    signalType: 'coverage-gap',
  },
  {
    id: 'greenland-intensity-mismatch',
    title: 'Greenland / NATO Attention Gap',
    description:
      'Greenland / NATO tariff crisis is a major story for mainstream and international outlets tracking transatlantic rupture, but is largely absent from progressive coverage and secondary for conservative outlets — a rare case where progressive and conservative attention align in underplaying a story.',
    involvedClusters: ['mainstream', 'wire-international', 'progressive', 'conservative'],
    involvedTopics: ['greenland-nato'],
    signalType: 'intensity-mismatch',
  },
  {
    id: 'gaza-intensity-mismatch',
    title: 'Gaza Coverage Divergence',
    description:
      'Gaza ceasefire negotiations receive sustained high-intensity coverage from international outlets and progressive media, declining coverage from mainstream outlets, and minimal attention from conservative outlets — reflecting divergent editorial judgments about the story\'s ongoing significance.',
    involvedClusters: ['wire-international', 'progressive', 'mainstream', 'conservative'],
    involvedTopics: ['gaza-ceasefire'],
    signalType: 'intensity-mismatch',
  },
];

// ─── Assembled Landscape Data ────────────────────────────────────────────────

export const narrativeLandscapeData: NarrativeLandscapeData = {
  generatedDate: '2026-01-27',
  windowDescription: 'January 6 – January 27, 2026 (21-day window)',
  clusters,
  topics,
  matrix,
  divergenceSignals,
  methodNote:
    'This landscape reflects media coverage patterns observed across 20+ outlets over a 21-day window. It shows what each media cluster is emphasizing and how they frame shared topics — not an assessment of which coverage is correct or which stories matter most. Coverage intensity and momentum are editorial judgments based on article frequency, placement, and framing consistency. "Notably absent" observations identify stories receiving significant coverage in other clusters but minimal attention in the indicated cluster.',
};

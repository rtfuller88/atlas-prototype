import type {
  MediaCluster,
  ClusterLandscapeEntry,
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

// ─── Cluster Landscape Entries ───────────────────────────────────────────────
// Coverage data derived from research across 20+ outlets, January 2026.
// Annotations: [S] source-supported, [I] inferred from coverage patterns, [C] comparative observation

const conservativeEntry: ClusterLandscapeEntry = {
  clusterId: 'conservative',
  topicCoverage: [
    {
      topicId: 'ice-enforcement',
      topicLabel: 'ICE Enforcement / Minneapolis Shootings',
      coverageIntensity: 10,
      momentum: 'sustained',
      framingKeywords: ['law-and-order', 'far-left mob', 'Democrat obstruction', 'officer safety'], // [S]
      atlasStoryId: 'ice-shooting',
    },
    {
      topicId: 'venezuela-maduro',
      topicLabel: 'Venezuela / Maduro Capture',
      coverageIntensity: 8,
      momentum: 'declining',
      framingKeywords: ['decisive action', 'American strength', 'narco-dictator', 'liberation'], // [S]
    },
    {
      topicId: 'government-shutdown',
      topicLabel: 'Government Shutdown / DHS Funding',
      coverageIntensity: 8,
      momentum: 'emerging',
      framingKeywords: ['Democrat shutdown', 'defund DHS', 'obstruction', 'border security'], // [S]
    },
    {
      topicId: 'mn-somali-fraud',
      topicLabel: 'MN Somali Fraud Scandal',
      coverageIntensity: 7,
      momentum: 'sustained',
      framingKeywords: ['massive fraud', 'Democrat cover-up', 'Walz complicit', 'taxpayer dollars'], // [S]
    },
    {
      topicId: 'iran-protests',
      topicLabel: 'Iran Protests & Regime Crackdown',
      coverageIntensity: 7,
      momentum: 'sustained',
      framingKeywords: ['regime brutality', 'Trump strength', 'freedom movement', 'maximum pressure'], // [S]
    },
    {
      topicId: 'clinton-epstein',
      topicLabel: 'Clinton / Epstein Contempt',
      coverageIntensity: 6,
      momentum: 'emerging',
      framingKeywords: ['Clinton corruption', 'bipartisan contempt', 'cover-up', 'accountability'], // [S]
    },
  ],
  notablyAbsent: {
    topicId: 'aca-subsidy-expiration',
    observation:
      'ACA subsidy expiration — premiums doubled for 20M+ Americans, disproportionately in red states — receives virtually no coverage despite direct impact on conservative-leaning audiences.', // [C]
  },
};

const mainstreamEntry: ClusterLandscapeEntry = {
  clusterId: 'mainstream',
  topicCoverage: [
    {
      topicId: 'ice-enforcement',
      topicLabel: 'ICE Enforcement / Minneapolis Shootings',
      coverageIntensity: 10,
      momentum: 'emerging',
      framingKeywords: ['civil liberties', 'accountability', 'video evidence', 'citizen victims'], // [S]
      atlasStoryId: 'ice-shooting',
    },
    {
      topicId: 'government-shutdown',
      topicLabel: 'Government Shutdown / DHS Funding',
      coverageIntensity: 9,
      momentum: 'emerging',
      framingKeywords: ['Democratic resistance', 'ICE accountability', 'constitutional tension', 'budget crisis'], // [S]
    },
    {
      topicId: 'iran-protests',
      topicLabel: 'Iran Protests & Massacres',
      coverageIntensity: 8,
      momentum: 'sustained',
      framingKeywords: ['humanitarian catastrophe', 'regime brutality', 'military options', 'sanctions'], // [S]
    },
    {
      topicId: 'venezuela-maduro',
      topicLabel: 'Venezuela / Maduro Capture & Aftermath',
      coverageIntensity: 7,
      momentum: 'declining',
      framingKeywords: ['unprecedented action', 'legal questions', 'endgame uncertainty', 'sovereignty'], // [S]
    },
    {
      topicId: 'greenland-nato',
      topicLabel: 'Greenland / NATO Tariff Crisis',
      coverageIntensity: 7,
      momentum: 'declining',
      framingKeywords: ['transatlantic rupture', 'sovereignty threat', 'coercive diplomacy', 'alliance strain'], // [S]
      atlasStoryId: 'tariffs',
    },
    {
      topicId: 'doj-fed-powell',
      topicLabel: 'DOJ Investigation of Fed Chair Powell',
      coverageIntensity: 6,
      momentum: 'sustained',
      framingKeywords: ['institutional independence', 'political intimidation', 'norms erosion', 'market impact'], // [S]
    },
  ],
  notablyAbsent: {
    topicId: 'mn-somali-fraud',
    observation:
      'MN Somali fraud scandal — a signature story in conservative media with dozens of articles — has received minimal mainstream pickup despite substantive fraud allegations.', // [C]
  },
};

const progressiveEntry: ClusterLandscapeEntry = {
  clusterId: 'progressive',
  topicCoverage: [
    {
      topicId: 'ice-enforcement',
      topicLabel: 'ICE Enforcement / Minneapolis Shootings',
      coverageIntensity: 10,
      momentum: 'emerging',
      framingKeywords: ['state violence', 'constitutional crisis', 'racial profiling', 'militarized policing'], // [S]
      atlasStoryId: 'ice-shooting',
    },
    {
      topicId: 'venezuela-maduro',
      topicLabel: 'Venezuela / U.S. Military Intervention',
      coverageIntensity: 9,
      momentum: 'sustained',
      framingKeywords: ['illegal war', 'imperialism', 'congressional abdication', 'regime change'], // [S]
    },
    {
      topicId: 'doge-federal',
      topicLabel: 'DOGE / Dismantling Federal Government',
      coverageIntensity: 8,
      momentum: 'sustained',
      framingKeywords: ['corruption', 'privatization', 'accountability', 'conflicts of interest'], // [S]
    },
    {
      topicId: 'public-education',
      topicLabel: 'Destruction of Public Education',
      coverageIntensity: 7,
      momentum: 'sustained',
      framingKeywords: ['privatization', 'Christian nationalism', 'civil rights rollback', 'vouchers'], // [S]
    },
    {
      topicId: 'iran-protests',
      topicLabel: 'Iran Protests (Anti-Intervention Lens)',
      coverageIntensity: 6,
      momentum: 'emerging',
      framingKeywords: ['economic injustice', 'state repression', 'imperial opportunism', 'sanctions harm'], // [I]
    },
    {
      topicId: 'aca-subsidy-expiration',
      topicLabel: 'ACA Subsidy Expiration / Healthcare',
      coverageIntensity: 6,
      momentum: 'sustained',
      framingKeywords: ['Republican cruelty', 'affordability crisis', 'working-class harm', 'corporate profits'], // [S]
    },
  ],
  notablyAbsent: {
    topicId: 'greenland-nato',
    observation:
      'Greenland / NATO tariff crisis — a major story for mainstream and international outlets — has received light progressive coverage, likely due to its focus on geopolitical alliances rather than domestic justice issues.', // [C]
  },
};

const wireInternationalEntry: ClusterLandscapeEntry = {
  clusterId: 'wire-international',
  topicCoverage: [
    {
      topicId: 'ice-enforcement',
      topicLabel: 'ICE Enforcement / Minneapolis Shootings',
      coverageIntensity: 9,
      momentum: 'emerging',
      framingKeywords: ['civil liberties crisis', 'lethal overreach', 'state-federal confrontation', 'protest response'], // [S]
      atlasStoryId: 'ice-shooting',
    },
    {
      topicId: 'venezuela-maduro',
      topicLabel: 'Venezuela / Maduro Capture',
      coverageIntensity: 9,
      momentum: 'sustained',
      framingKeywords: ['sovereignty violation', 'international law', 'regime change', 'Venezuelan casualties'], // [S]
    },
    {
      topicId: 'iran-protests',
      topicLabel: 'Iran Protests & Regime Crisis',
      coverageIntensity: 8,
      momentum: 'sustained',
      framingKeywords: ['regime instability', 'brutal crackdown', 'potential collapse', 'regional implications'], // [S]
    },
    {
      topicId: 'ukraine-peace',
      topicLabel: 'Ukraine Peace Talks',
      coverageIntensity: 8,
      momentum: 'sustained',
      framingKeywords: ['trilateral diplomacy', 'territorial deadlock', 'continued bombardment', 'war fatigue'], // [S]
    },
    {
      topicId: 'greenland-nato',
      topicLabel: 'Greenland / NATO Tariff Crisis',
      coverageIntensity: 7,
      momentum: 'declining',
      framingKeywords: ['transatlantic rift', 'Arctic sovereignty', 'tariff coercion', 'alliance fracture'], // [S]
      atlasStoryId: 'tariffs',
    },
    {
      topicId: 'gaza-ceasefire',
      topicLabel: 'Gaza Ceasefire Phase Two',
      coverageIntensity: 7,
      momentum: 'sustained',
      framingKeywords: ['demilitarization', 'hostage closure', 'humanitarian catastrophe', 'reconstruction'], // [S]
    },
  ],
  notablyAbsent: {
    topicId: 'us-domestic-policy',
    observation:
      'U.S. domestic policy stories (ACA subsidies, DOGE, education) receive minimal international coverage — these inherently domestic stories lack the geopolitical hook that drives wire service attention.', // [C]
  },
};

const clusterEntries: ClusterLandscapeEntry[] = [
  conservativeEntry,
  mainstreamEntry,
  progressiveEntry,
  wireInternationalEntry,
];

// ─── Divergence Signals ──────────────────────────────────────────────────────
// Neutral observations about how different media clusters cover the same events.

const divergenceSignals: DivergenceSignal[] = [
  {
    id: 'ice-framing',
    observation:
      'ICE enforcement / Minneapolis shootings dominate all four clusters but with sharply different framing: conservative outlets emphasize "far-left mob" and officer safety; mainstream outlets foreground video evidence contradicting official accounts; progressive outlets frame it as state violence and constitutional crisis; international outlets focus on civil liberties and state-federal confrontation.',
    involvedClusters: ['conservative', 'mainstream', 'progressive', 'wire-international'],
    involvedTopics: ['ice-enforcement'],
    signalType: 'framing-difference',
  },
  {
    id: 'venezuela-framing',
    observation:
      'Venezuela coverage spans a wide framing spectrum: conservative outlets celebrate the Maduro capture as "American strength"; progressive outlets call it an illegal war and "the least popular war in recent memory"; international outlets foreground sovereignty violations and 100+ Venezuelan casualties.',
    involvedClusters: ['conservative', 'progressive', 'wire-international'],
    involvedTopics: ['venezuela-maduro'],
    signalType: 'framing-difference',
  },
  {
    id: 'aca-coverage-gap',
    observation:
      'ACA subsidy expiration — affecting 20M+ Americans with doubled premiums — is covered by progressive and some mainstream outlets as a crisis, but is virtually absent from conservative media despite disproportionate impact on red-state populations.',
    involvedClusters: ['conservative', 'progressive'],
    involvedTopics: ['aca-subsidy-expiration'],
    signalType: 'coverage-gap',
  },
  {
    id: 'doge-coverage-gap',
    observation:
      'DOGE / federal dismantling: ProPublica\'s sustained investigative series tracking 100+ DOGE operatives has no conservative counterpart. Conservative outlets largely ignore or celebrate the cuts, while progressive outlets treat it as a top-tier accountability story.',
    involvedClusters: ['conservative', 'progressive'],
    involvedTopics: ['doge-federal'],
    signalType: 'coverage-gap',
  },
  {
    id: 'mn-fraud-coverage-gap',
    observation:
      'MN Somali fraud scandal is a signature story for Breitbart and Fox News with dozens of articles, but mainstream outlets have given it minimal coverage — a gap that conservative commentators cite as evidence of media bias.',
    involvedClusters: ['conservative', 'mainstream'],
    involvedTopics: ['mn-somali-fraud'],
    signalType: 'coverage-gap',
  },
  {
    id: 'greenland-intensity-mismatch',
    observation:
      'Greenland / NATO tariff crisis is a major story for mainstream and international outlets tracking transatlantic rupture, but is largely absent from progressive coverage and secondary for conservative outlets — a rare case where progressive and conservative attention align in underplaying a story.',
    involvedClusters: ['mainstream', 'wire-international', 'progressive', 'conservative'],
    involvedTopics: ['greenland-nato'],
    signalType: 'intensity-mismatch',
  },
  {
    id: 'gaza-intensity-mismatch',
    observation:
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
  clusterEntries,
  divergenceSignals,
  methodNote:
    'This landscape reflects media coverage patterns observed across 20+ outlets over a 21-day window. It shows what each media cluster is emphasizing and how they frame shared topics — not an assessment of which coverage is correct or which stories matter most. Coverage intensity and momentum are editorial judgments based on article frequency, placement, and framing consistency. "Notably absent" observations identify stories receiving significant coverage in other clusters but minimal attention in the indicated cluster.',
};

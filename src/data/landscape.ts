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
  { topicId: 'ice-enforcement', clusterId: 'conservative', intensity: 10, momentum: 'sustained', frames: ['law-and-order', 'far-left mob', 'Democrat obstruction', 'officer safety'], clusterNarrative: 'Conservative media frames ICE operations in Minneapolis as heroic law enforcement defending public safety against dangerous criminals, with agents under siege from hostile mobs and Democratic obstruction at the state level.' },
  { topicId: 'venezuela-maduro', clusterId: 'conservative', intensity: 8, momentum: 'declining', frames: ['decisive action', 'American strength', 'narco-dictator', 'liberation'], clusterNarrative: 'Conservative outlets celebrate the Maduro capture as a decisive triumph of American military strength and Trump\'s fulfillment of campaign promises to confront the "narco-dictator."' },
  { topicId: 'government-shutdown', clusterId: 'conservative', intensity: 8, momentum: 'emerging', frames: ['Democrat shutdown', 'defund DHS', 'obstruction', 'border security'], clusterNarrative: 'Conservative media frames the shutdown threat as a "Democrat shutdown" — partisan obstruction of border security funding to protect illegal immigrants at the expense of public safety.' },
  { topicId: 'mn-somali-fraud', clusterId: 'conservative', intensity: 7, momentum: 'sustained', frames: ['massive fraud', 'Democrat cover-up', 'Walz complicit', 'taxpayer dollars'], clusterNarrative: 'Conservative outlets treat the $250M Feeding Our Future case as a signature Democratic corruption scandal, tying it to Governor Walz and immigration — and citing mainstream media silence as evidence of systemic bias.' },
  { topicId: 'iran-protests', clusterId: 'conservative', intensity: 7, momentum: 'sustained', frames: ['regime brutality', 'Trump strength', 'freedom movement', 'maximum pressure'], clusterNarrative: 'Conservative media frames the Iranian protests as vindication of Trump\'s maximum-pressure sanctions policy, emphasizing that the regime is at its weakest point in 45 years thanks to American strength.' },
  { topicId: 'clinton-epstein', clusterId: 'conservative', intensity: 6, momentum: 'emerging', frames: ['Clinton corruption', 'bipartisan contempt', 'cover-up', 'accountability'], clusterNarrative: 'Conservative outlets frame the Epstein file releases as finally exposing long-suspected Clinton corruption, emphasizing bipartisan contempt proceedings and the conspicuous silence of mainstream media.' },
  { topicId: 'greenland-nato', clusterId: 'conservative', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'doj-fed-powell', clusterId: 'conservative', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'doge-federal', clusterId: 'conservative', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'public-education', clusterId: 'conservative', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'aca-subsidy-expiration', clusterId: 'conservative', intensity: 0, momentum: 'absent', frames: [], notableAbsence: 'ACA subsidy expiration — premiums doubled for 20M+ Americans, disproportionately in red states — receives virtually no coverage despite direct impact on conservative-leaning audiences.' },
  { topicId: 'ukraine-peace', clusterId: 'conservative', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'gaza-ceasefire', clusterId: 'conservative', intensity: 0, momentum: 'absent', frames: [] },

  // ── Mainstream cluster ──
  { topicId: 'ice-enforcement', clusterId: 'mainstream', intensity: 10, momentum: 'emerging', frames: ['civil liberties', 'accountability', 'video evidence', 'citizen victims'], clusterNarrative: 'Mainstream coverage centers a constitutional crisis: two U.S. citizens fatally shot by agents, bystander video contradicting official accounts, and a separation-of-powers fight between federal and state authorities.' },
  { topicId: 'venezuela-maduro', clusterId: 'mainstream', intensity: 7, momentum: 'declining', frames: ['unprecedented action', 'legal questions', 'endgame uncertainty', 'sovereignty'], clusterNarrative: 'Mainstream outlets examine the operation\'s legal and strategic risks — the absence of congressional authorization, a classified legal memo, and divided public opinion — framing Maduro\'s capture as constitutionally contested.' },
  { topicId: 'government-shutdown', clusterId: 'mainstream', intensity: 9, momentum: 'emerging', frames: ['Democratic resistance', 'ICE accountability', 'constitutional tension', 'budget crisis'], clusterNarrative: 'Mainstream media covers the DHS funding standoff as a constitutional tension between executive enforcement powers and congressional oversight, catalyzed by the Minneapolis shootings and ICE accountability demands.' },
  { topicId: 'mn-somali-fraud', clusterId: 'mainstream', intensity: 0, momentum: 'absent', frames: [], notableAbsence: 'MN Somali fraud scandal — a signature story in conservative media with dozens of articles — has received minimal mainstream pickup despite substantive fraud allegations.' },
  { topicId: 'iran-protests', clusterId: 'mainstream', intensity: 8, momentum: 'sustained', frames: ['humanitarian catastrophe', 'regime brutality', 'military options', 'sanctions'], clusterNarrative: 'Mainstream outlets balance the humanitarian catastrophe — mounting death tolls, internet blackout, overwhelmed hospitals — with policy analysis of U.S. response options, from targeted sanctions to military posturing.' },
  { topicId: 'clinton-epstein', clusterId: 'mainstream', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'greenland-nato', clusterId: 'mainstream', intensity: 7, momentum: 'declining', frames: ['transatlantic rupture', 'sovereignty threat', 'coercive diplomacy', 'alliance strain'], clusterNarrative: 'Mainstream coverage treats the Greenland standoff as the most serious transatlantic rupture in years, examining how Trump\'s tariff threats against Denmark strained NATO alliance cohesion and set a coercive diplomacy precedent.' },
  { topicId: 'doj-fed-powell', clusterId: 'mainstream', intensity: 6, momentum: 'sustained', frames: ['institutional independence', 'political intimidation', 'norms erosion', 'market impact'], clusterNarrative: 'Mainstream media frames the DOJ investigation of Fed Chair Powell as a direct attack on institutional independence, tracking market reactions, warnings from former Fed chairs, and the broader pattern of norm erosion.' },
  { topicId: 'doge-federal', clusterId: 'mainstream', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'public-education', clusterId: 'mainstream', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'aca-subsidy-expiration', clusterId: 'mainstream', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'ukraine-peace', clusterId: 'mainstream', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'gaza-ceasefire', clusterId: 'mainstream', intensity: 0, momentum: 'absent', frames: [] },

  // ── Progressive cluster ──
  { topicId: 'ice-enforcement', clusterId: 'progressive', intensity: 10, momentum: 'emerging', frames: ['state violence', 'constitutional crisis', 'racial profiling', 'militarized policing'], clusterNarrative: 'Progressive outlets treat ICE enforcement as state violence and a constitutional emergency — documenting militarized policing, racial profiling, gutted civil rights oversight, and calling for the agency\'s abolition.' },
  { topicId: 'venezuela-maduro', clusterId: 'progressive', intensity: 9, momentum: 'sustained', frames: ['illegal war', 'imperialism', 'congressional abdication', 'regime change'], clusterNarrative: 'Progressive media condemns the Venezuela operation as illegal regime change driven by oil interests and imperial ambition, drawing direct parallels to the Iraq War and questioning the narco-terrorism pretext.' },
  { topicId: 'government-shutdown', clusterId: 'progressive', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'mn-somali-fraud', clusterId: 'progressive', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'iran-protests', clusterId: 'progressive', intensity: 6, momentum: 'emerging', frames: ['economic injustice', 'state repression', 'imperial opportunism', 'sanctions harm'], clusterNarrative: 'Progressive outlets foreground how U.S. sanctions devastated ordinary Iranians and fueled the economic crisis, warning that both Israel and the U.S. are treating the protests as a geopolitical opportunity rather than a humanitarian crisis.' },
  { topicId: 'clinton-epstein', clusterId: 'progressive', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'greenland-nato', clusterId: 'progressive', intensity: 0, momentum: 'absent', frames: [], notableAbsence: 'Greenland / NATO tariff crisis — a major story for mainstream and international outlets — has received light progressive coverage, likely due to its focus on geopolitical alliances rather than domestic justice issues.' },
  { topicId: 'doj-fed-powell', clusterId: 'progressive', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'doge-federal', clusterId: 'progressive', intensity: 8, momentum: 'sustained', frames: ['corruption', 'privatization', 'accountability', 'conflicts of interest'], clusterNarrative: 'Progressive media investigates DOGE as corporate capture of government — tracking 46+ operatives with industry conflicts of interest, debunking inflated savings claims, and documenting access to sensitive federal systems.' },
  { topicId: 'public-education', clusterId: 'progressive', intensity: 7, momentum: 'sustained', frames: ['privatization', 'Christian nationalism', 'civil rights rollback', 'vouchers'], clusterNarrative: 'Progressive outlets frame the voucher expansion as a coordinated dismantling of public education driven by billionaire donors like DeVos and Yass — documenting civil rights rollbacks and the redirection of public funds to religious schools.' },
  { topicId: 'aca-subsidy-expiration', clusterId: 'progressive', intensity: 6, momentum: 'sustained', frames: ['Republican cruelty', 'affordability crisis', 'working-class harm', 'corporate profits'], clusterNarrative: 'Progressive media frames the subsidy expiration as a manufactured affordability crisis that benefits insurance company profits, noting the irony that red-state populations are disproportionately harmed by their own party\'s inaction.' },
  { topicId: 'ukraine-peace', clusterId: 'progressive', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'gaza-ceasefire', clusterId: 'progressive', intensity: 0, momentum: 'absent', frames: [] },

  // ── Wire / International cluster ──
  { topicId: 'ice-enforcement', clusterId: 'wire-international', intensity: 9, momentum: 'emerging', frames: ['civil liberties crisis', 'lethal overreach', 'state-federal confrontation', 'protest response'], clusterNarrative: 'International outlets report the operation\'s unprecedented scale and the fatal shootings with factual precision, placing Minneapolis in the broader context of democratic norms and civil liberties — drawing parallels that U.S. domestic coverage avoids.' },
  { topicId: 'venezuela-maduro', clusterId: 'wire-international', intensity: 9, momentum: 'sustained', frames: ['sovereignty violation', 'international law', 'regime change', 'Venezuelan casualties'], clusterNarrative: 'Wire and international coverage leads with sovereignty violations, UN condemnation, and 100+ Venezuelan civilian casualties — dimensions largely absent from U.S. domestic coverage across all clusters.' },
  { topicId: 'government-shutdown', clusterId: 'wire-international', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'mn-somali-fraud', clusterId: 'wire-international', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'iran-protests', clusterId: 'wire-international', intensity: 8, momentum: 'sustained', frames: ['regime instability', 'brutal crackdown', 'potential collapse', 'regional implications'], clusterNarrative: 'Wire and international outlets document the crackdown through forensic evidence — leaked morgue photos, verified casualty figures, independent video analysis — with rigorous sourcing caveats that distinguish their reporting from domestic outlets\' more declarative coverage.' },
  { topicId: 'clinton-epstein', clusterId: 'wire-international', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'greenland-nato', clusterId: 'wire-international', intensity: 7, momentum: 'declining', frames: ['transatlantic rift', 'Arctic sovereignty', 'tariff coercion', 'alliance fracture'], clusterNarrative: 'International outlets report the Greenland standoff with European voices front and center — foregrounding Denmark\'s sovereignty assertions and NATO allies\' alarm in a way that U.S. domestic coverage largely omits.' },
  { topicId: 'doj-fed-powell', clusterId: 'wire-international', intensity: 0, momentum: 'absent', frames: [] },
  { topicId: 'doge-federal', clusterId: 'wire-international', intensity: 0, momentum: 'absent', frames: [], notableAbsence: 'U.S. domestic policy stories (ACA subsidies, DOGE, education) receive minimal international coverage — these inherently domestic stories lack the geopolitical hook that drives wire service attention.' },
  { topicId: 'public-education', clusterId: 'wire-international', intensity: 0, momentum: 'absent', frames: [], notableAbsence: 'U.S. domestic policy stories (ACA subsidies, DOGE, education) receive minimal international coverage — these inherently domestic stories lack the geopolitical hook that drives wire service attention.' },
  { topicId: 'aca-subsidy-expiration', clusterId: 'wire-international', intensity: 0, momentum: 'absent', frames: [], notableAbsence: 'U.S. domestic policy stories (ACA subsidies, DOGE, education) receive minimal international coverage — these inherently domestic stories lack the geopolitical hook that drives wire service attention.' },
  { topicId: 'ukraine-peace', clusterId: 'wire-international', intensity: 8, momentum: 'sustained', frames: ['trilateral diplomacy', 'territorial deadlock', 'continued bombardment', 'war fatigue'], clusterNarrative: 'Wire and international outlets provide sustained coverage of the trilateral peace talks — documenting territorial deadlocks, Russian continued bombardment, and European "war fatigue" — a story largely overlooked by U.S. domestic media focused on immigration and Venezuela.' },
  { topicId: 'gaza-ceasefire', clusterId: 'wire-international', intensity: 7, momentum: 'sustained', frames: ['demilitarization', 'hostage closure', 'humanitarian catastrophe', 'reconstruction'], clusterNarrative: 'International outlets sustain coverage of phase-two ceasefire negotiations, the final hostage recovery, and the humanitarian catastrophe — famine, destroyed infrastructure, decades-long reconstruction — that has faded from U.S. domestic attention across all clusters.' },
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

export interface AtAGlance {
  agreement: number;
  uncertainty: number;
  narrativeDivergence: number;
  drivers: ('Fact' | 'Interpretation' | 'Values' | 'Confidence')[];
}

export interface DisputedItem {
  text: string;
  type: 'Fact' | 'Interpretation' | 'Values' | 'Confidence';
}

export interface StoryMeta {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categoryIcon: string;
  date: string;
  groupCount: number;
  assertionCount: number;
  divergenceLevel: 'high' | 'medium' | 'low';
  atAGlance: AtAGlance;
  debateCrux: string;
  agreements: string[];
  disputed: DisputedItem[];
}

export const stories: StoryMeta[] = [
  {
    id: 'ice-shooting',
    title: 'Minneapolis ICE Shooting',
    subtitle: 'Was lethal force against Renee Good justified?',
    category: 'Government',
    categoryIcon: '🏛️',
    date: 'January 2026',
    groupCount: 4,
    assertionCount: 9,
    divergenceLevel: 'high',
    atAGlance: {
      agreement: 2,
      uncertainty: 3,
      narrativeDivergence: 5,
      drivers: ['Interpretation', 'Values', 'Fact', 'Confidence'],
    },
    debateCrux: 'Mostly interpretation + values — prior trust in institutions shapes how ambiguous evidence is read.',
    agreements: [
      'Renee Good, a U.S. citizen, was shot and killed by ICE agent Jonathan Ross',
      'Good was a community observer, not a target of immigration enforcement',
      'Multiple videos exist but show an ambiguous sequence',
    ],
    disputed: [
      { text: 'Vehicle posed imminent lethal threat', type: 'Fact' },
      { text: 'No viable alternative to lethal force', type: 'Interpretation' },
      { text: 'Federal investigation will be adequate and impartial', type: 'Values' },
    ],
  },
  {
    id: 'tiktok-ban',
    title: 'TikTok Ban',
    subtitle: 'Should the US ban TikTok over national security concerns?',
    category: 'Technology',
    categoryIcon: '📱',
    date: 'January 2026',
    groupCount: 4,
    assertionCount: 9,
    divergenceLevel: 'high',
    atAGlance: {
      agreement: 2,
      uncertainty: 3,
      narrativeDivergence: 5,
      drivers: ['Values', 'Fact', 'Interpretation', 'Confidence'],
    },
    debateCrux: 'Values + fact — whether speculative security risks justify restricting 170M Americans\' speech.',
    agreements: [
      'ByteDance is subject to Chinese laws that could require data sharing',
      'TikTok has approximately 170 million US users',
      'Public support for a ban has declined significantly since 2023',
    ],
    disputed: [
      { text: 'China has exploited US TikTok data for intelligence', type: 'Fact' },
      { text: 'The ban violates First Amendment protections', type: 'Values' },
      { text: 'Divestiture adequately addresses security concerns', type: 'Interpretation' },
    ],
  },
  {
    id: 'tariffs',
    title: 'Tariffs & Trade War',
    subtitle: 'Are tariffs the right approach to trade policy?',
    category: 'Economy',
    categoryIcon: '💼',
    date: 'January 2026',
    groupCount: 4,
    assertionCount: 9,
    divergenceLevel: 'high',
    atAGlance: {
      agreement: 2,
      uncertainty: 3,
      narrativeDivergence: 5,
      drivers: ['Values', 'Interpretation', 'Fact', 'Confidence'],
    },
    debateCrux: 'Values + interpretation — how you weigh short-term consumer costs against long-term strategic goals.',
    agreements: [
      'Tariffs increase costs for American consumers and businesses',
      'US tariff rate reached the highest level in over a century',
      'A majority of Americans disapprove of the tariff policy',
    ],
    disputed: [
      { text: 'Tariffs will bring back American manufacturing jobs', type: 'Interpretation' },
      { text: 'China bears the cost of tariffs on Chinese goods', type: 'Fact' },
      { text: 'Economic costs are worth the strategic benefits', type: 'Values' },
    ],
  },
  {
    id: 'rto-mandate',
    title: 'Return to Office',
    subtitle: 'Should companies mandate 3+ days in office?',
    category: 'Business',
    categoryIcon: '🏢',
    date: '2024',
    groupCount: 4,
    assertionCount: 8,
    divergenceLevel: 'medium',
    atAGlance: {
      agreement: 3,
      uncertainty: 2,
      narrativeDivergence: 3,
      drivers: ['Interpretation', 'Values', 'Confidence', 'Fact'],
    },
    debateCrux: 'Mostly values + interpretation — management philosophy, not missing productivity data.',
    agreements: [
      'Employees broadly value flexibility in where they work',
      'Productivity impacts vary significantly by role and task type',
      'RTO mandates increase employee attrition',
    ],
    disputed: [
      { text: 'In-office work meaningfully improves collaboration quality', type: 'Interpretation' },
      { text: 'Attrition from mandates is acceptable given benefits', type: 'Values' },
      { text: 'Remote work has degraded company culture', type: 'Interpretation' },
    ],
  },
  {
    id: 'social-media-kids',
    title: 'Social Media Ban for Kids',
    subtitle: 'Should countries ban social media for children under 16?',
    category: 'Technology',
    categoryIcon: '📱',
    date: 'December 2025',
    groupCount: 4,
    assertionCount: 8,
    divergenceLevel: 'medium',
    atAGlance: {
      agreement: 3,
      uncertainty: 3,
      narrativeDivergence: 3,
      drivers: ['Interpretation', 'Values', 'Fact', 'Confidence'],
    },
    debateCrux: 'Interpretation + values — all sides agree platforms fail kids; they disagree on whether government bans are the answer.',
    agreements: [
      'Teen mental health has worsened significantly since 2010',
      'Current platform self-regulation has failed to protect young users',
      'Age verification requires collecting sensitive personal data',
    ],
    disputed: [
      { text: 'Social media is a primary cause of the teen mental health crisis', type: 'Interpretation' },
      { text: 'Age-based bans can effectively keep children off platforms', type: 'Fact' },
      { text: 'Banning children from social media violates fundamental rights', type: 'Values' },
    ],
  },
];

export function getStoryById(id: string): StoryMeta | undefined {
  return stories.find(story => story.id === id);
}

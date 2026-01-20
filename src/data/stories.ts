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
  },
];

export function getStoryById(id: string): StoryMeta | undefined {
  return stories.find(story => story.id === id);
}

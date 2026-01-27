// "Often not covered" observations per group per topic.
// Each string is a short, neutral observation about what that group's
// media environment tends not to surface.

export const whatsMissing: Record<string, Record<string, string>> = {
  'ice-shooting': {
    'cluster-trust':
      'Rarely surfaces the frame-by-frame video analyses that contradict key parts of the official account.',
    'cluster-evidence-pro':
      'Tends not to cover the prosecutor resignations or the FBI revoking state investigators\u2019 access to evidence.',
    'cluster-evidence-con':
      'Seldom reports Agent Ross\u2019s prior experience being dragged by a vehicle during a previous arrest.',
    'cluster-distrust':
      'Rarely engages with the legal standard (Graham v. Connor) that courts will actually apply to evaluate the shooting.',
  },
  'tiktok-ban': {
    'cluster-security-hawks':
      'Seldom reports that U.S. intelligence has produced no public evidence of China exploiting TikTok data.',
    'cluster-parents':
      'Rarely covers the free-speech and economic arguments from creators and small businesses who depend on the platform.',
    'cluster-free-speech':
      'Tends not to surface the leaked audio of China-based employees accessing U.S. user data.',
    'cluster-creators':
      'Seldom engages with the classified intelligence briefings that shifted bipartisan lawmakers toward supporting the ban.',
  },
  tariffs: {
    'cluster-nationalists':
      'Rarely covers manufacturing job losses since April or the broad economist consensus against tariffs.',
    'cluster-hawks':
      'Tends not to surface distributional analysis showing tariffs cost lowest-income households proportionally more.',
    'cluster-freetraders':
      'Seldom explores the national-security case for reducing supply-chain dependence on China.',
    'cluster-consumers':
      'Rarely covers strategic arguments about reshoring manufacturing or reducing structural trade deficits.',
  },
  'rto-mandate': {
    'cluster-a':
      'Rarely reports on randomized trials showing hybrid work has no negative effect on productivity.',
    'cluster-b':
      'Tends not to surface research showing fully remote workers can see measurable productivity drops.',
    'cluster-c':
      'Seldom covers the cultural and mentorship arguments that executives describe from direct experience.',
    'cluster-d':
      'Rarely surfaces data on collaboration improvements some companies report after RTO implementation.',
  },
  'social-media-kids': {
    'cluster-protection':
      'Rarely covers the academic critique that correlation between social media and teen mental health does not establish causation.',
    'cluster-rights':
      'Tends not to surface the scale of teen mental health decline \u2014 50%+ rise in depression since 2010.',
    'cluster-skeptic':
      'Seldom covers the practical experience of parents and pediatricians seeing direct behavioral changes.',
    'cluster-reform':
      'Rarely surfaces how platform design mandates still require age verification, raising the same privacy concerns.',
  },
};

import { useState } from 'react';
import { ClusterDefinition, TopLevelBelief, BeliefState } from '../types';

interface MediaEcosystemProps {
  clusters: ClusterDefinition[];
  topLevelBeliefs?: TopLevelBelief[];
}

const BELIEF_COLORS: Record<BeliefState, string> = {
  true: '#65A30D',
  false: '#DC2626',
  uncertain: '#6B7280',
  mixed: '#D97706',
};

export function MediaEcosystem({ clusters, topLevelBeliefs }: MediaEcosystemProps) {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  // Group clusters by belief (true = justified, false = not justified)
  const justifiedGroups = clusters.filter(c => {
    const belief = topLevelBeliefs?.find(b => b.clusterId === c.id);
    return belief?.belief === 'true';
  });

  const notJustifiedGroups = clusters.filter(c => {
    const belief = topLevelBeliefs?.find(b => b.clusterId === c.id);
    return belief?.belief === 'false';
  });

  // Get all unique info sources for each side
  const getSourcesForGroups = (groups: ClusterDefinition[]) => {
    const sources = new Set<string>();
    groups.forEach(g => {
      g.characteristics?.infoSources?.forEach(s => sources.add(s));
    });
    return Array.from(sources);
  };

  const justifiedSources = getSourcesForGroups(justifiedGroups);
  const notJustifiedSources = getSourcesForGroups(notJustifiedGroups);

  // Find overlapping sources
  const overlappingSources = justifiedSources.filter(s => notJustifiedSources.includes(s));

  // Check if any group has representative articles
  const hasRepresentativeArticles = clusters.some(
    c => c.characteristics?.representativeArticles && c.characteristics.representativeArticles.length > 0
  );

  const renderGroupCard = (cluster: ClusterDefinition, bgColor: string, borderColor: string, tagColor: string) => {
    const isExpanded = expandedGroup === cluster.id;
    const hasArticles = cluster.characteristics?.representativeArticles && cluster.characteristics.representativeArticles.length > 0;

    return (
      <div key={cluster.id} className={`${bgColor} border ${borderColor} rounded-lg p-3`}>
        <div className="flex items-start justify-between gap-2 mb-2">
          <p className="text-sm font-medium text-warm-black">{cluster.label}</p>
          {hasArticles && (
            <button
              onClick={() => setExpandedGroup(isExpanded ? null : cluster.id)}
              className="text-xs text-blue-600 hover:text-blue-800 whitespace-nowrap"
            >
              {isExpanded ? 'Hide reading' : 'See reading →'}
            </button>
          )}
        </div>

        {cluster.characteristics?.infoSources && (
          <div className="flex flex-wrap gap-1.5 mb-2">
            {cluster.characteristics.infoSources.map((source, i) => (
              <span
                key={i}
                className={`text-xs px-2 py-0.5 rounded ${
                  overlappingSources.includes(source)
                    ? 'bg-blue-100 text-blue-700'
                    : tagColor
                }`}
              >
                {source}
              </span>
            ))}
          </div>
        )}

        {/* Representative articles (expanded) */}
        {isExpanded && hasArticles && (
          <div className="mt-3 pt-3 border-t border-gray-200 space-y-3">
            <p className="text-xs font-medium text-warm-muted uppercase tracking-wide">
              Representative reading for this group:
            </p>
            {cluster.characteristics?.representativeArticles?.map((article, i) => (
              <div key={i} className="bg-white rounded-lg p-3 shadow-sm">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline block mb-1"
                >
                  {article.title}
                  <span className="text-xs text-warm-muted ml-2 font-normal">
                    ({article.outlet})
                  </span>
                </a>
                <p className="text-xs text-warm-muted leading-relaxed">
                  <span className="font-medium">How it frames the story:</span> {article.framingNote}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xs font-medium uppercase tracking-wide text-warm-muted mb-2">
        The information ecosystem
      </h2>
      <p className="text-sm text-warm-muted mb-6">
        Different groups consume different media, leading to divergent understandings of the same event.
        This isn't about one side being "misinformed" — it's about how media ecosystems shape what stories
        get told, which facts get emphasized, and what framing feels natural.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column: Groups who conclude "Justified" */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: BELIEF_COLORS.true }}
            />
            <h3 className="text-sm font-semibold text-warm-black">
              Groups concluding "Justified"
            </h3>
          </div>

          <div className="space-y-3">
            {justifiedGroups.map(cluster =>
              renderGroupCard(cluster, 'bg-green-50', 'border-green-100', 'bg-green-100 text-green-700')
            )}
          </div>
        </div>

        {/* Right column: Groups who conclude "Not Justified" */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: BELIEF_COLORS.false }}
            />
            <h3 className="text-sm font-semibold text-warm-black">
              Groups concluding "Not Justified"
            </h3>
          </div>

          <div className="space-y-3">
            {notJustifiedGroups.map(cluster =>
              renderGroupCard(cluster, 'bg-red-50', 'border-red-100', 'bg-red-100 text-red-700')
            )}
          </div>
        </div>
      </div>

      {/* Overlapping sources callout */}
      {overlappingSources.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-blue-500 text-lg">↔</span>
            <div>
              <p className="text-sm font-medium text-warm-black mb-1">
                Shared sources across conclusions
              </p>
              <p className="text-xs text-warm-muted mb-2">
                These sources are consumed by groups on both sides. When people see the same evidence
                and reach opposite conclusions, the disagreement is often about interpretation or values,
                not facts.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {overlappingSources.map((source, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700"
                  >
                    {source}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Framing comparison section */}
      {hasRepresentativeArticles && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-amber-500 text-lg">📰</span>
            <div>
              <p className="text-sm font-medium text-warm-black mb-2">
                How framing shapes understanding
              </p>
              <p className="text-xs text-warm-muted mb-3">
                The same event gets told differently depending on the source. Compare how these outlets frame the key facts:
              </p>

              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-xs font-medium text-green-700 mb-1">Official/Conservative framing:</p>
                    <p className="text-xs text-warm-muted">
                      "Driver attempted to run over federal officers" • "Domestic terrorism" • "Interfering with lawful enforcement"
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-xs font-medium text-red-700 mb-1">Investigative/Progressive framing:</p>
                    <p className="text-xs text-warm-muted">
                      "Community observer whistling to warn neighbors" • "Video contradicts official account" • "U.S. citizen, mother, poet"
                    </p>
                  </div>
                </div>

                <p className="text-xs text-warm-muted italic">
                  Neither framing is necessarily wrong — but each emphasizes different facts, uses different language,
                  and invites different conclusions. Click "See reading" above to explore each group's information diet.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Key insight */}
      <div className="border-t border-gray-100 pt-4">
        <p className="text-sm text-warm-muted italic">
          <span className="font-medium text-warm-black">Key pattern:</span>{' '}
          Groups relying on <span className="text-green-700">official government statements</span> and{' '}
          <span className="text-green-700">law enforcement associations</span> tend to conclude the shooting was justified.
          Groups relying on <span className="text-red-700">investigative journalism</span> and{' '}
          <span className="text-red-700">primary video analysis</span> tend to conclude it was not.
          The <span className="text-blue-700">evidence-based groups</span> on both sides share some sources —
          showing that even the same evidence can support different conclusions depending on how ambiguity is interpreted.
        </p>
      </div>
    </div>
  );
}

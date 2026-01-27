import { useIsMobile } from '../../hooks/useIsMobile';

interface AboutAnalysisProps {
  methodNote: string;
}

export function AboutAnalysis({ methodNote }: AboutAnalysisProps) {
  const isMobile = useIsMobile();

  return (
    <details open={!isMobile} className="bg-gray-50 border border-gray-200 rounded-lg">
      <summary className="px-4 py-3 cursor-pointer select-none text-xs font-medium uppercase tracking-wide text-warm-muted hover:text-warm-black transition-colors">
        About this analysis
      </summary>
      <div className="px-4 pb-4">
        <p className="text-sm text-gray-600 leading-relaxed">{methodNote}</p>
      </div>
    </details>
  );
}

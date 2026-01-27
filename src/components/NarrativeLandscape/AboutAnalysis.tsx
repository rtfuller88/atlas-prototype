import { useState, useEffect } from 'react';

interface AboutAnalysisProps {
  methodNote: string;
}

export function AboutAnalysis({ methodNote }: AboutAnalysisProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <details open={isDesktop} className="bg-gray-50 border border-gray-200 rounded-lg">
      <summary className="px-4 py-3 cursor-pointer select-none text-xs font-medium uppercase tracking-wide text-warm-muted hover:text-warm-black transition-colors">
        About this analysis
      </summary>
      <div className="px-4 pb-4">
        <p className="text-sm text-gray-600 leading-relaxed">{methodNote}</p>
      </div>
    </details>
  );
}

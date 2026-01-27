import type { CoverageMomentum } from '../../types';

const MOMENTUM_STYLES: Record<CoverageMomentum, { bg: string; text: string; icon: string }> = {
  emerging: { bg: 'bg-green-100', text: 'text-green-700', icon: '↑' },
  sustained: { bg: 'bg-blue-100', text: 'text-blue-700', icon: '→' },
  declining: { bg: 'bg-gray-100', text: 'text-gray-600', icon: '↓' },
  absent: { bg: 'bg-red-50', text: 'text-red-500', icon: '—' },
};

interface MomentumBadgeProps {
  momentum: CoverageMomentum;
}

export function MomentumBadge({ momentum }: MomentumBadgeProps) {
  const style = MOMENTUM_STYLES[momentum];
  const label = momentum.charAt(0).toUpperCase() + momentum.slice(1);

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${style.bg} ${style.text}`}>
      <span>{style.icon}</span>
      {label}
    </span>
  );
}

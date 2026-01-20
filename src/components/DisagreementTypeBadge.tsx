import { useState } from 'react';
import { DisagreementType, TYPE_EXPLANATIONS, TYPE_COLORS } from '../types';

interface DisagreementTypeBadgeProps {
  type: DisagreementType;
  explanation: string;
}

export function DisagreementTypeBadge({ type, explanation }: DisagreementTypeBadgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const typeInfo = TYPE_EXPLANATIONS[type];
  const color = TYPE_COLORS[type];

  return (
    <div className="relative inline-block">
      <button
        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium transition-colors cursor-help"
        style={{
          backgroundColor: `${color}15`,
          color: color,
          border: `1px solid ${color}30`
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(!showTooltip)}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
        {typeInfo.label}
      </button>

      {showTooltip && (
        <div className="absolute z-10 left-0 top-full mt-2 w-64 p-3 bg-white rounded-lg shadow-lg border border-gray-200">
          <p className="text-sm font-medium text-warm-black mb-1">{typeInfo.label}</p>
          <p className="text-xs text-warm-muted mb-2">{typeInfo.description}</p>
          <p className="text-xs text-warm-black italic">{explanation}</p>
        </div>
      )}
    </div>
  );
}

import type { MatrixCell as MatrixCellType, CoverageMomentum } from '../../types';

const MOMENTUM_ICON: Record<CoverageMomentum, string> = {
  emerging: '↑',
  sustained: '→',
  declining: '↓',
  absent: 'Ø',
};

interface MatrixCellProps {
  cell: MatrixCellType;
  clusterColor: string;
  isSelected: boolean;
  onClick: () => void;
  normMax: number;
}

export function MatrixCellView({ cell, clusterColor, isSelected, onClick, normMax }: MatrixCellProps) {
  if (cell.intensity === 0) {
    return (
      <button
        onClick={onClick}
        className={`flex items-center justify-center gap-1 w-full h-full min-h-[56px] rounded transition-colors ${
          isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'
        }`}
      >
        <span className="text-gray-300 text-sm">Ø</span>
        {cell.notableAbsence && (
          <span className="text-amber-500 text-xs font-bold" title={cell.notableAbsence}>!</span>
        )}
      </button>
    );
  }

  const ratio = normMax > 0 ? cell.intensity / normMax : 0;
  const widthPct = `${ratio * 100}%`;

  return (
    <button
      onClick={onClick}
      className={`flex flex-col justify-center w-full h-full min-h-[56px] rounded transition-colors px-2 py-1.5 ${
        isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'
      }`}
      title={`Intensity: ${cell.intensity}/10 | ${cell.momentum}`}
    >
      <div className="flex items-center gap-1.5 w-full">
        <div className="flex-1 bg-gray-100 rounded-full h-1.5 min-w-0">
          <div
            className="h-full rounded-full"
            style={{ width: widthPct, backgroundColor: clusterColor }}
          />
        </div>
        <span className="text-xs font-semibold text-gray-700 shrink-0 w-4 text-right">
          {cell.intensity}
        </span>
      </div>
      <span className="text-[10px] text-gray-400 mt-0.5">{MOMENTUM_ICON[cell.momentum]}</span>
    </button>
  );
}

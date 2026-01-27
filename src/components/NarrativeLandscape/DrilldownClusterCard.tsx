import { Link } from 'react-router-dom';
import type { MediaCluster, MatrixCell } from '../../types';
import { MomentumBadge } from './MomentumBadge';

interface DrilldownClusterCardProps {
  cluster: MediaCluster;
  cell: MatrixCell;
  issueSlug?: string;
}

export function DrilldownClusterCard({ cluster, cell, issueSlug }: DrilldownClusterCardProps) {
  if (cell.intensity === 0) {
    return (
      <div
        className="rounded-lg border border-gray-200 p-4 border-l-4"
        style={{ borderLeftColor: cluster.color }}
      >
        <h4 className={`text-sm font-semibold ${cluster.textClass}`}>{cluster.shortName}</h4>
        <p className="text-sm text-gray-400 mt-1">Not covered</p>
        {cell.notableAbsence && (
          <div className="mt-2 bg-amber-50 border border-amber-200 rounded p-2">
            <p className="text-xs text-amber-800">
              <span className="font-semibold">Notable absence: </span>
              {cell.notableAbsence}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="rounded-lg border border-gray-200 p-4 border-l-4"
      style={{ borderLeftColor: cluster.color }}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <h4 className={`text-sm font-semibold ${cluster.textClass}`}>{cluster.shortName}</h4>
        <MomentumBadge momentum={cell.momentum} />
      </div>

      {/* Intensity bar */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs text-warm-muted w-14 shrink-0">Intensity</span>
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${cell.intensity * 10}%`,
              backgroundColor: cluster.color,
            }}
          />
        </div>
        <span className="text-xs font-medium text-warm-muted w-5 text-right">
          {cell.intensity}
        </span>
      </div>

      {/* Framing keywords */}
      {cell.frames.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {cell.frames.map((frame) => (
            <span
              key={frame}
              className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded"
            >
              {frame}
            </span>
          ))}
        </div>
      )}

      {/* Link to issue deep dive */}
      {issueSlug && (
        <Link
          to={`/story/${issueSlug}`}
          className="inline-block mt-3 text-xs text-blue-600 hover:text-blue-800 hover:underline font-medium"
        >
          View full analysis →
        </Link>
      )}
    </div>
  );
}

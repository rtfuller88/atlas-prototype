import { useEffect, useCallback, useState } from 'react';
import type { MediaCluster } from '../../types';

interface ClusterSourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
  cluster: MediaCluster | null;
}

export function ClusterSourcesModal({ isOpen, onClose, cluster }: ClusterSourcesModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Handle escape key
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Animation handling
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender || !cluster) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div
        className={`relative max-w-md w-[95vw] max-h-[85vh] bg-white rounded-xl shadow-2xl flex flex-col transform transition-all duration-300 ease-out ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cluster-sources-modal-title"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 id="cluster-sources-modal-title" className="text-lg font-semibold text-warm-black">
                Sources in {cluster.name}
              </h2>
              <p className="text-sm text-warm-muted mt-1">
                {cluster.description}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 min-w-[44px] min-h-[44px] flex items-center justify-center -mt-1 -mr-2"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content (scrollable) */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 mb-4">
            {cluster.outlets.map((outlet) => (
              <li key={outlet}>{outlet}</li>
            ))}
          </ul>

          <div className="space-y-2 text-xs text-warm-muted italic leading-relaxed">
            <p>
              Clusters group outlets with similar coverage patterns over the selected time window.
            </p>
            <p>
              Clusters are based on observed coverage patterns, not ideology. Sources may change over time.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-200 flex items-center justify-end">
          <p className="hidden md:block text-xs text-warm-muted">
            Press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">Esc</kbd> to close
          </p>
        </div>
      </div>
    </div>
  );
}

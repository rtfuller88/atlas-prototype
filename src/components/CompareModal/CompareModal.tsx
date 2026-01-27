import { useEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { getQuestionById } from '../../data/questions';
import { whatsMissing } from '../../data/whats-missing';
import { CompareColumn } from './CompareColumn';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  storyId: string;
  storyTitle: string;
}

export function CompareModal({ isOpen, onClose, storyId, storyTitle }: CompareModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const question = getQuestionById(storyId);
  const clusters = question?.clusters ?? [];
  const missingData = whatsMissing[storyId] ?? {};

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

  if (!shouldRender) {
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
        className={`relative max-w-5xl w-[95vw] max-h-[85vh] bg-gray-50 rounded-xl shadow-2xl flex flex-col transform transition-all duration-300 ease-out ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="compare-modal-title"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 bg-white rounded-t-xl">
          <div className="flex items-start justify-between">
            <div>
              <h2 id="compare-modal-title" className="text-lg font-semibold text-warm-black">
                Compare what groups are seeing
              </h2>
              <p className="text-sm text-warm-muted mt-0.5">{storyTitle}</p>
              <p className="text-xs text-warm-muted mt-1">
                Real headlines from sources each group follows
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Columns container (scrollable) */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:grid sm:grid-cols-2 sm:overflow-x-visible lg:grid-cols-4">
            {clusters.map((cluster) => {
              const headlines = cluster.characteristics?.representativeArticles?.slice(0, 3) ?? [];
              const missingLine = missingData[cluster.id] ?? '';
              return (
                <CompareColumn
                  key={cluster.id}
                  cluster={cluster}
                  headlines={headlines}
                  missingLine={missingLine}
                />
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-200 bg-white rounded-b-xl flex items-center justify-between">
          <Link
            to={`/story/${storyId}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Open full analysis
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <p className="hidden md:block text-xs text-warm-muted">
            Press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">Esc</kbd> to close
          </p>
        </div>
      </div>
    </div>
  );
}

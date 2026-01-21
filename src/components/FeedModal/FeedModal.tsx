import { useEffect, useCallback, useState } from 'react';
import { ClusterDefinition } from '../../types';
import { FeedHeader } from './FeedHeader';
import { FeedView } from './FeedView';

interface FeedModalProps {
  isOpen: boolean;
  onClose: () => void;
  cluster: ClusterDefinition | null;
}

export function FeedModal({ isOpen, onClose, cluster }: FeedModalProps) {
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
      // Small delay to trigger animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else {
      setIsAnimating(false);
      // Wait for animation to complete before unmounting
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
    <div className="fixed inset-0 z-50">
      {/* Backdrop with blur */}
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel - full screen on mobile, 90vh on desktop */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 min-h-screen md:min-h-0 md:top-auto md:bottom-0 md:h-[90vh] bg-gray-50 md:rounded-t-2xl shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
          isAnimating ? 'translate-y-0' : 'translate-y-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="feed-modal-title"
      >
        {/* Header (sticky) */}
        <FeedHeader groupName={cluster.label} onClose={onClose} />

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <FeedView cluster={cluster} />
        </div>

        {/* Footer hint - hidden on mobile */}
        <div className="hidden md:block px-6 py-3 bg-white border-t border-gray-200 text-center">
          <p className="text-xs text-warm-muted">
            Press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">Esc</kbd> or click outside to close
          </p>
        </div>
      </div>
    </div>
  );
}

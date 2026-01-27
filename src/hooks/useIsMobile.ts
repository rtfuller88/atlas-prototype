import { useState, useEffect } from 'react';

const MQ = '(min-width: 768px)';

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(() => !window.matchMedia(MQ).matches);

  useEffect(() => {
    const mq = window.matchMedia(MQ);
    const handler = (e: MediaQueryListEvent) => setIsMobile(!e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isMobile;
}

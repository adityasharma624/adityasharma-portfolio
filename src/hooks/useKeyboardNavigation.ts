import { useEffect } from 'react';

export function useKeyboardNavigation() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if user is typing in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (e.key) {
        case 'ArrowUp':
          window.scrollBy({ top: -100, behavior: 'smooth' });
          break;
        case 'ArrowDown':
          window.scrollBy({ top: 100, behavior: 'smooth' });
          break;
        case 'Home':
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'End':
          window.scrollTo({ 
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
          });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
} 
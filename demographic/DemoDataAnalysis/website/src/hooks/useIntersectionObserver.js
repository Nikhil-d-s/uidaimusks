import { useEffect, useRef, useState } from 'react';

/**
 * Hook to detect when an element becomes visible in the viewport
 * @param {Object} options - Intersection Observer options
 * @returns {[React.RefObject, boolean]} - [ref to attach to element, isVisible state]
 */
export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once visible, stay visible (don't unmount charts)
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '100px', // Start loading 100px before element enters viewport
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [elementRef, isVisible];
};

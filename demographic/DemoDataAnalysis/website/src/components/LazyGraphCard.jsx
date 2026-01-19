import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import GraphCard from './GraphCard';

/**
 * Lazy loading wrapper for GraphCard - only renders chart when visible
 */
const LazyGraphCard = ({ children, ...props }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div ref={ref}>
      {isVisible ? (
        <GraphCard {...props}>{children}</GraphCard>
      ) : (
        <GraphCard {...props}>
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-400">Loading chart...</div>
          </div>
        </GraphCard>
      )}
    </div>
  );
};

export default LazyGraphCard;

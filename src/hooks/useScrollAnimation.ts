import { useEffect, useState, RefObject } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollAnimation<T extends HTMLElement>(
  ref: RefObject<T>,
  options: ScrollAnimationOptions = {}
): boolean {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once it's been seen, we can stop observing
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, rootMargin]);

  return isInView;
}
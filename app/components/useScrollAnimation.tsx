"use client";
import { useState, useEffect, useRef, RefObject } from 'react';

export function useScrollAnimation<T extends HTMLElement>(
  threshold: number = 0.1
): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentElement = ref.current;
    
    if (!currentElement) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold }
    );
    
    observer.observe(currentElement);
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);
  
  return [ref as RefObject<T>, inView];
}
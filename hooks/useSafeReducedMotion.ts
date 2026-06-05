import { useState, useEffect } from 'react';
import { useReducedMotion } from 'motion/react';

export function useSafeReducedMotion() {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return mounted ? shouldReduceMotion : false;
}

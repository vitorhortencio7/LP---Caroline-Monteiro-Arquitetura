'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // 1. Handle element scrolling on initial page load if hash exists
    const handleInitialHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          // Slight delay to ensure content has rendered and layout shift is complete
          setTimeout(() => {
            const headerOffset = window.scrollY > 50 ? 70 : 90;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            
            // Clean up the URL hash so that subsequent page refreshes start at the top
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          }, 150);
        }
      }
    };

    handleInitialHash();

    // 2. Handle internal anchor links click transitions
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Find closest anchor tag if any
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href) return;
      
      // If it points to the top
      if (href === '#') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        
        // Ensure url has no hash
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
        return;
      }
      
      // If it's a hash link pointing internally
      if (href.startsWith('#')) {
        const id = href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          
          // Comfort offsets depending on scroll status
          const headerOffset = window.scrollY > 50 ? 70 : 90;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Clean hash from URL bar after scrolling is finished
          setTimeout(() => {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          }, 800);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return null;
}

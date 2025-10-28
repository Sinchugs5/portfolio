import { useEffect } from 'react';

export const useScrollEffects = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
          navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
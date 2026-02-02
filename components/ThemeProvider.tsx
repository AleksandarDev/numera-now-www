'use client';

import { useEffect } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check system preference
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Apply theme based on system preference (only if different from current state)
    const applyTheme = (isDark: boolean) => {
      const hasClass = document.documentElement.classList.contains('dark');
      if (isDark && !hasClass) {
        document.documentElement.classList.add('dark');
      } else if (!isDark && hasClass) {
        document.documentElement.classList.remove('dark');
      }
    };
    
    // Listen for changes in system preference
    const handleChange = (e: MediaQueryListEvent) => {
      applyTheme(e.matches);
    };
    
    darkModeQuery.addEventListener('change', handleChange);
    
    return () => {
      darkModeQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return <>{children}</>;
}

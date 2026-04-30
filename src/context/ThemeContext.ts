import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { ThemeContextProviderProps, ThemeContextType, ThemeType } from '@/type';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { createElement } from 'react';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const themeTokens: ThemeType[] = ['dark', 'light'];

export default function ThemeContextProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'ui-theme',
}: ThemeContextProviderProps) {
  const [theme, changeTheme] = useLocalStorage<ThemeType>({
    key: storageKey,
    initialValue: defaultTheme,
  });
  const [error, setError] = useState<Error | null>(null);

  const safeChangeTheme = useCallback(
    (newTheme: ThemeType) => {
      try {
        changeTheme(newTheme);
        setError(null);
      } catch (error) {
        console.error('Failed to change theme', error);
        setError(error as Error);
      }
    },
    [changeTheme]
  );

  // handle if theme is "system", and synchronize with OS system
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(...themeTokens);
    if (theme === 'system') {
      const systemTheme: ThemeType = window.matchMedia('(prefers-color-scheme:dark)').matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
    }
    root.classList.add(theme);
  }, [theme]);

  // handle if theme is system
  useEffect(() => {
    if (theme !== 'system') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme:dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const root = window.document.documentElement;
      const newSystemTheme = e.matches ? 'dark' : 'light';
      root.classList.remove(...themeTokens);
      root.classList.add(newSystemTheme);
    };
    handleSystemThemeChange(mediaQuery);
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme]);

  const value = useMemo(() => ({ theme, changeTheme: safeChangeTheme, error }), [theme]);

  return createElement(ThemeContext.Provider, { value }, children);
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context as ThemeContextType;
};

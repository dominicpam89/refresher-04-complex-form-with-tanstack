export type Theme = 'light' | 'dark' | 'system';

export type ThemeContext = {
  theme: Theme;
  changeTheme: (t: Theme) => void;
  error: Error | null;
};

export type ThemeContextProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

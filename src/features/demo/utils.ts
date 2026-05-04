export const tabs = {
  login: '?tab=login',
  register: '?tab=register',
} as const;

export type Tab = keyof typeof tabs;

export const getVariant = (tab: string | null, currentTab: Tab) => {
  if (tab === currentTab) return 'default';
  return 'outline';
};

export const basicFormTabs = {
  basic: 'basic',
  'using-zod': 'using-zod',
} as const;

export type BasicFormTabType = keyof typeof basicFormTabs;

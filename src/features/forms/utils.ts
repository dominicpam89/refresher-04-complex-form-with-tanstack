export const formLevels = {
  level1: '1',
  level2: '2',
  level3: '3',
  level4: '4',
  level5: '5',
  level6: '6',
} as const;

// "level1", "level2"
export type KeyFormLevel = keyof typeof formLevels;
// "1", "2", etc.
export type FormLevel = (typeof formLevels)[KeyFormLevel];

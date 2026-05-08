export const formLevels = {
  level1: '1',
  level2: '2',
  level3: '3',
  level4: '4',
  level5: '5',
  level6: '6',
  level7: '7',
  level8: '8',
  level9: '9',
  level10: '10',
  level11: '11',
  level12: '12',
  level13: '13',
  level14: '14',
  level15: '15',
  level16: '16',
  level17: '17',
  level18: '18',
  level19: '19',
  level20: '20',
} as const;

// "level1", "level2"
export type KeyFormLevel = keyof typeof formLevels;
// "1", "2", etc.
export type FormLevel = (typeof formLevels)[KeyFormLevel];

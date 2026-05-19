// features/forms/components/PageForms.tsx
import { useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router';
import { formLevels, type FormLevel } from '@/features/forms/utils';
import FormLevel1 from '@/features/forms/components/FormLevel1';
import LevelSelect from '@/features/forms/components/LevelSelect';
import FormLevel2 from '@/features/forms/components/FormLevel2';
import FormLevel3 from '@/features/forms/components/FormLevel3';
import FormLevel4 from '@/features/forms/components/FormLevel4';
import FormLevel5 from '@/features/forms/components/FormLevel5';
import FormLevel6 from '@/features/forms/components/FormLevel6';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export default function PageForms() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentLevel = searchParams.get('level') as FormLevel | null;

  const [, setLastFormLevel] = useLocalStorage<string | null>({
    key: 'lastFormLevel',
    initialValue: null,
  });

  // Store current level in localStorage whenever it changes
  useEffect(() => {
    if (currentLevel) {
      setLastFormLevel(currentLevel);
    }
  }, [currentLevel, setLastFormLevel]);

  // Validate and set default level if missing or invalid
  useEffect(() => {
    const validLevels = Object.values(formLevels) as FormLevel[];
    if (!currentLevel || !validLevels.includes(currentLevel)) {
      setSearchParams({ level: formLevels.level1 });
    }
  }, [currentLevel, setSearchParams]);

  const onValueChange = useCallback(
    (level: FormLevel) => {
      setSearchParams({ level });
    },
    [setSearchParams]
  );

  return (
    <div
      aria-label="page-forms"
      className="relative p-6 lg:p-12 lg:h-full max-w-xl min-w-xs mx-auto flex flex-col gap-4 justify-center"
    >
      <LevelSelect level={currentLevel} onValueChange={onValueChange} />
      {currentLevel === '1' && <FormLevel1 />}
      {currentLevel === '2' && <FormLevel2 />}
      {currentLevel === '3' && <FormLevel3 />}
      {currentLevel === '4' && <FormLevel4 />}
      {currentLevel === '5' && <FormLevel5 />}
      {currentLevel === '6' && <FormLevel6 />}
    </div>
  );
}

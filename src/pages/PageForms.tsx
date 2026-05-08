// features/forms/components/PageForms.tsx
import { useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router';
import { formLevels, type FormLevel } from '@/features/forms/utils';
import FormLevel1 from '@/features/forms/components/FormLevel1';
import LevelSelect from '@/features/forms/components/LevelSelect';

export default function PageForms() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentLevel = searchParams.get('level') as FormLevel | null;

  // Validate and set default level if missing or invalid
  useEffect(() => {
    const validLevels = Object.values(formLevels) as FormLevel[];
    if (!currentLevel || !validLevels.includes(currentLevel)) {
      setSearchParams({ level: formLevels.level1 });
    }
  }, [currentLevel, setSearchParams]);

  // Memoized handler to avoid recreating function on every render
  const onValueChange = useCallback(
    (level: FormLevel) => {
      setSearchParams({ level });
    },
    [setSearchParams]
  );

  return (
    <div
      aria-label="page-forms"
      className="h-screen max-w-lg min-w-xs mx-auto flex flex-col gap-4 justify-center items-center"
    >
      <LevelSelect level={currentLevel} onValueChange={onValueChange} />
      <div aria-label="form-container" className="w-full">
        <FormLevel1 visible={currentLevel === '1'} />
      </div>
    </div>
  );
}

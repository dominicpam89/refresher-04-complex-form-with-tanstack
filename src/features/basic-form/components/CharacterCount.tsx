import { useWatch, type Control, type FieldPath, type FieldValues } from 'react-hook-form';

interface Props<T extends FieldValues> {
  name: FieldPath<T>;
  maxChar: number;
  control: Control<T>;
}

export default function CharacterCount<T extends FieldValues>({
  name,
  maxChar,
  control,
}: Props<T>) {
  const val = useWatch<T>({ name, control });
  if (typeof val !== 'string') return;
  return (
    <div className="absolute z-10 top-0 right-0 mr-2 mt-2 opacity-50">
      {val.length || 0}/{maxChar}
    </div>
  );
}

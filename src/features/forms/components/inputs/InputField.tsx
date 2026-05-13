import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useFieldContext } from '@/features/forms/context/form.context';
import type { Updater } from '@tanstack/react-form';

interface Props {
  id: string;
  label?: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  description?: string;
}

export default function InputField<T extends string | number | readonly string[] | undefined>({
  id,
  label,
  type,
  placeholder,
  description,
}: Props) {
  const { state, handleBlur, handleChange } = useFieldContext<T>();
  return (
    <Field>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={state.value}
        onChange={(e) => handleChange(e.target.value as Updater<T>)}
        onBlur={handleBlur}
      />
      {description && <FieldDescription>{description}</FieldDescription>}
      {state.meta.errors.length > 0 && <FieldError errors={state.meta.errors} />}
    </Field>
  );
}

import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import type { ComponentProps } from 'react';

type InputProps = Omit<ComponentProps<typeof Input>, 'id'>;

interface InputTextProps extends InputProps {
  id: string;
  label: string;
  description?: string;
  error?: string;
}

export default function InputText({
  id,
  label,
  description,
  error,
  ...inputProps
}: InputTextProps) {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Input id={id} {...inputProps} />
      {description && <FieldDescription>{description}</FieldDescription>}
      {error && <FieldError>{error}</FieldError>}
    </Field>
  );
}

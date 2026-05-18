import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import type { ComponentProps } from 'react';
import { useFieldContext } from '@/features/forms/context/form.context';

type InputProps = Omit<ComponentProps<typeof Input>, 'id'>;

interface InputTextProps extends InputProps {
  id: string;
  label: string;
  description?: string;
}

export default function InputText({ id, label, description, ...inputProps }: InputTextProps) {
  const field = useFieldContext<string>();
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Input
        id={id}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        type="text"
        {...inputProps}
      />
      {description && <FieldDescription>{description}</FieldDescription>}
      <FieldError errors={field.state.meta.errors} />
    </Field>
  );
}

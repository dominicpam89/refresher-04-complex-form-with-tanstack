import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import type { ComponentProps } from 'react';
import { useFieldContext } from '@/features/forms/context/form.context';

type InputProps = Omit<ComponentProps<typeof Input>, 'id' | 'value' | 'onChange' | 'onBlur'>;

interface InputTextProps extends InputProps {
  id: string;
  label?: string;
  description?: string;
  containerClasses?: string;
}

export default function InputText({
  id,
  label,
  description,
  containerClasses,
  ...inputProps
}: InputTextProps) {
  const field = useFieldContext<string>();
  return (
    <Field className={containerClasses}>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      <Input
        id={id}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        type="text"
        {...inputProps}
      />
      {description && <FieldDescription>{description}</FieldDescription>}
    </Field>
  );
}

import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import type { ComponentProps } from 'react';
import { useFieldContext } from '@/features/forms/context/form.context';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';

type InputProps = Omit<ComponentProps<typeof Input>, 'id'>;

interface InputTextProps extends InputProps {
  id: string;
  label: string;
  description?: string;
  addOn?: React.ReactNode;
}

export default function InputTextGroup({
  id,
  label,
  description,
  addOn,
  ...inputProps
}: InputTextProps) {
  const field = useFieldContext<string>();
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id={id}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          type="text"
          {...inputProps}
        />
        {addOn && <InputGroupAddon align="inline-end">{addOn}</InputGroupAddon>}
      </InputGroup>
      {description && <FieldDescription>{description}</FieldDescription>}
      <FieldError errors={field.state.meta.errors} />
    </Field>
  );
}

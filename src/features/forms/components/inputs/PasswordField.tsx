import { Button } from '@/components/ui/button';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useFieldContext } from '@/features/forms/context/form.context';
import type { Updater } from '@tanstack/react-form';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';

interface Props {
  id: string;
  label?: string;
  placeholder: string;
  description?: string;
}

export default function PasswordField<T extends string | number | readonly string[] | undefined>({
  id,
  label,
  placeholder,
  description,
}: Props) {
  const [show, setShow] = useState<boolean>(false);
  const { state, handleBlur, handleChange } = useFieldContext<T>();
  return (
    <Field>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      <div aria-label="input-group" className="flex gap-2">
        <Input
          id={id}
          type={show ? 'text' : 'password'}
          placeholder={placeholder}
          value={state.value}
          onChange={(e) => handleChange(e.target.value as Updater<T>)}
          onBlur={handleBlur}
        />
        <Button type="button" variant="ghost" size="icon-lg" onClick={() => setShow((val) => !val)}>
          {show ? <EyeOffIcon /> : <EyeIcon />}
        </Button>
      </div>
      {description && <FieldDescription>{description}</FieldDescription>}
      {state.meta.errors.length > 0 && <FieldError errors={state.meta.errors} />}
    </Field>
  );
}

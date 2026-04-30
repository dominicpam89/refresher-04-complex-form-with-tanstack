import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState, type ComponentProps } from 'react';

type InputProps = Omit<ComponentProps<typeof Input>, 'id'>;

interface InputPasswordProps extends InputProps {
  id: string;
  label: string;
  description?: string;
  error?: string;
}

export default function InputPassword({ id, label, description, error }: InputPasswordProps) {
  const [showPass, setShowPass] = useState(false);
  const typeInput = showPass ? 'text' : 'password';
  const onToggleShowpass = () => {
    setShowPass((prev) => !prev);
  };
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <div className="flex gap-2 items-center">
        <Input id={id} type={typeInput} className="w-full" />
        <Button size="icon" type="button" className="cursor-pointer" onClick={onToggleShowpass}>
          {showPass ? <EyeOffIcon size={14} /> : <EyeIcon size={14} />}
        </Button>
      </div>
      {description && <FieldDescription>{description}</FieldDescription>}
      {error && <FieldError>{error}</FieldError>}
    </Field>
  );
}

import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useFieldContext } from '@/features/forms/context/form.context';
import type { Updater } from '@tanstack/react-form';

interface Props<K extends string> {
  label?: string;
  placeholder: string;
  description?: string;
  items: K[];
}

export default function SelectField<T extends string | undefined, K extends string>({
  label,
  placeholder,
  description,
  items,
}: Props<K>) {
  const { state, handleChange } = useFieldContext<T>();
  return (
    <Field>
      {label && <FieldLabel>{label}</FieldLabel>}
      <Select value={state.value} onValueChange={(val) => handleChange(val as Updater<T>)}>
        <SelectTrigger className="w-45">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {description && <FieldDescription>{description}</FieldDescription>}
      {state.meta.errors.length > 0 && <FieldError errors={state.meta.errors} />}
    </Field>
  );
}

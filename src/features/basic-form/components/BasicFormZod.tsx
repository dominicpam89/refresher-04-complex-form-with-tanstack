import { Field, FieldLabel, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { basicFormLength } from '@/features/basic-form/schema';
import {
  basicFormSchema,
  defaultBasicFormValues as defaultValues,
  type BasicFormSchema,
} from '@/features/basic-form/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import CharacterCount from './CharacterCount';
import { useCreateTodo } from '@/features/basic-form/hooks/createTodo';

export default function BasicFormZod() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<BasicFormSchema>({
    defaultValues,
    resolver: zodResolver(basicFormSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });
  const titleProps = register('title');
  const descriptionProps = register('description');
  const { mutate, isPending } = useCreateTodo();
  const onSubmit = handleSubmit(({ title, description }) => {
    mutate({ title, description });
  });
  return (
    <form id="basic-form-with-zod" className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
      <Field>
        <FieldLabel htmlFor="title">Title</FieldLabel>
        <div className="relative">
          <Input
            id="title"
            placeholder="Title of Todo"
            maxLength={basicFormLength.title.max}
            disabled={isPending}
            {...titleProps}
          />
          <CharacterCount<BasicFormSchema>
            control={control}
            name="title"
            maxChar={basicFormLength.title.max}
          />
        </div>
        {errors.title && <FieldError>{errors.title.message}</FieldError>}
      </Field>
      <Field>
        <FieldLabel htmlFor="description">Description</FieldLabel>
        <div className="relative">
          <Textarea
            id="description"
            placeholder="Description of todo"
            maxLength={basicFormLength.description.max}
            disabled={isPending}
            {...descriptionProps}
          />
          <CharacterCount<BasicFormSchema>
            control={control}
            name="description"
            maxChar={basicFormLength.description.max}
          />
        </div>
        {errors.description && <FieldError>{errors.description.message}</FieldError>}
      </Field>
      <div aria-label="button-group" className="w-full flex items-center gap-2">
        <Button
          type="reset"
          variant="outline"
          className="w-1/2"
          onClick={() => reset()}
          disabled={isPending}
        >
          Reset Field
        </Button>
        <Button type="submit" className="w-1/2" disabled={isPending}>
          Submit
        </Button>
      </div>
    </form>
  );
}

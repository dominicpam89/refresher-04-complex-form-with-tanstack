import { Field, FieldLabel, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import type { BasicFormType } from '@/types/form-type';
import { basicFormRules, defaultValues } from '@/features/basic-form/hook-form-rules';
import { useCreateTodo } from '@/features/basic-form/hooks/createTodo';
import CharacterCount from './CharacterCount';

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<BasicFormType>({
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });
  const { mutate, isPending } = useCreateTodo();
  const titleProps = register('title', basicFormRules.title());
  const descriptionProps = register('description', basicFormRules.description());
  const onSubmit = handleSubmit(({ title, description }) => {
    mutate({ title, description });
  });
  return (
    <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
      <Field>
        <FieldLabel htmlFor="title">Title</FieldLabel>
        <div className="relative">
          <Input
            id="title"
            placeholder="Title of Todo"
            maxLength={basicFormRules.attribute.title.max}
            {...titleProps}
            disabled={isPending}
          />
          <CharacterCount<BasicFormType>
            name="title"
            control={control}
            maxChar={basicFormRules.attribute.title.max}
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
            maxLength={basicFormRules.attribute.description.max}
            {...descriptionProps}
            disabled={isPending}
          />
          <CharacterCount<BasicFormType>
            name="description"
            control={control}
            maxChar={basicFormRules.attribute.description.max}
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

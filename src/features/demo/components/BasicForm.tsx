import { Field, FieldLabel, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import type { BasicFormType } from '@/types/form-type';
import { basicFormRules } from '@/features/demo/hook-form-rules/basic-form';

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BasicFormType>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });
  const titleProps = register('title', basicFormRules.title());
  const descriptionProps = register('description', basicFormRules.description());
  const onSubmit = handleSubmit(({ title, description }) => {
    console.log('Title:', title);
    console.log('Description:', description);
  });
  return (
    <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
      <Field>
        <FieldLabel htmlFor="title">Title</FieldLabel>
        <Input id="title" placeholder="Title of Todo" {...titleProps} />
        {errors.title && <FieldError>{errors.title.message}</FieldError>}
      </Field>
      <Field>
        <FieldLabel htmlFor="description">Description</FieldLabel>
        <Input id="description" placeholder="Description of todo" {...descriptionProps} />
        {errors.description && <FieldError>{errors.description.message}</FieldError>}
      </Field>
      <div aria-label="button-group" className="w-full flex items-center gap-2">
        <Button type="reset" variant="outline" className="w-1/2" onClick={() => reset()}>
          Reset Field
        </Button>
        <Button type="submit" className="w-1/2">
          Submit
        </Button>
      </div>
    </form>
  );
}

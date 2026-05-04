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

export default function BasicFormZod() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<BasicFormSchema>({
    defaultValues,
    resolver: zodResolver(basicFormSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });
  const titleProps = register('title');
  const descriptionProps = register('description');
  const onSubmit = handleSubmit(({ title, description }) => {
    console.log('Title:', title);
    console.log('Description:', description);
  });
  const valueTitle = watch('title');
  const valueDescription = watch('description');
  return (
    <form id="basic-form-with-zod" className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
      <Field>
        <FieldLabel htmlFor="title">Title</FieldLabel>
        <div className="relative">
          <Input
            id="title"
            placeholder="Title of Todo"
            maxLength={basicFormLength.title.max}
            {...titleProps}
          />
          <div className="absolute z-10 top-0 right-0 mr-2 mt-2 opacity-50">
            {valueTitle?.length || 0}/{basicFormLength.title.max}
          </div>
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
            {...descriptionProps}
          />
          <div className="absolute z-10 top-0 right-0 mr-2 mt-2 opacity-50">
            {valueDescription?.length || 0}/{basicFormLength.description.max}
          </div>
        </div>
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

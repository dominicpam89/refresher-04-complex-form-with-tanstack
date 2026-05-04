import { Field, FieldLabel, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import type { BasicFormType } from '@/types/form-type';
import { basicFormRules } from '@/features/basic-form/hook-form-rules';

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
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
  const valueTitle = watch('title');
  const valueDescription = watch('description');
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
          />
          <div className="absolute z-10 top-0 right-0 mr-2 mt-2 opacity-50">
            {valueTitle?.length || 0}/{basicFormRules.attribute.title.max}
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
            maxLength={basicFormRules.attribute.description.max}
            {...descriptionProps}
          />
          <div className="absolute z-10 top-0 right-0 mr-2 mt-2 opacity-50">
            {valueDescription?.length || 0}/{basicFormRules.attribute.description.max}
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

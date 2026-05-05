import Container from './Container';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useForm, type SubmitHandler } from 'react-hook-form';
import {
  titleRules,
  descriptionRules,
  rules,
  type FormWithoutZodType,
} from '@/features/semi-complex-form/hook-form.util';

export default function FormWithoutZod() {
  const formProps = useForm<FormWithoutZodType>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });
  const { register, handleSubmit, formState, reset } = formProps;
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormWithoutZodType> = (data) => {
    console.log(data);
  };

  return (
    <Container
      cards={{
        title: 'Semi Complex Form',
        description: 'Without zod',
      }}
    >
      <FormWithoutZodComp
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        reset={reset}
      />
    </Container>
  );
}

/** Controlled Component
 * Form sub-component that receives form handling props
 *
 *
 *
 *
 */
interface FormWithoutZodCompProps {
  register: ReturnType<typeof useForm<FormWithoutZodType>>['register'];
  errors: ReturnType<typeof useForm<FormWithoutZodType>>['formState']['errors'];
  handleSubmit: ReturnType<typeof useForm<FormWithoutZodType>>['handleSubmit'];
  onSubmit: SubmitHandler<FormWithoutZodType>;
  reset: () => void;
}

function FormWithoutZodComp({
  register,
  errors,
  handleSubmit,
  onSubmit,
  reset,
}: FormWithoutZodCompProps) {
  const titleProps = register('title', titleRules);
  const descriptionProps = register('description', descriptionRules);

  return (
    <form
      id="form-semi-complex"
      className="w-full flex flex-col gap-4 items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Field>
        <Input
          id="title"
          autoComplete="off"
          placeholder="Todo Title"
          maxLength={rules.title.max}
          {...titleProps}
        />
        <FieldDescription>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </FieldDescription>
        {errors.title && <FieldError>{errors.title.message}</FieldError>}
      </Field>
      <Field>
        <Input
          id="description"
          autoComplete="off"
          placeholder="Todo Description"
          maxLength={rules.description.max}
          {...descriptionProps}
        />
        <FieldDescription>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </FieldDescription>
        {errors.description && <FieldError>{errors.description.message}</FieldError>}
      </Field>
      <div aria-label="button-group" className="flex gap-2 w-full">
        <Button
          variant="outline"
          type="button"
          className="w-1/2 rounded-xs"
          onClick={() => reset()}
        >
          Reset
        </Button>
        <Button type="submit" className="w-1/2 rounded-xs">
          Submit
        </Button>
      </div>
    </form>
  );
}

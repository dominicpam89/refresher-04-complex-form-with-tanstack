import { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import type { Todo } from '@/types/todo.type';
import { type TodoCreateSchema } from '@/features/forms/schemas/todo.schema';
import { useForm } from '@tanstack/react-form';
import FormContainer from './FormContainer';

interface FormLevelProps {
  onSuccess?: (todo: Todo) => void;
  onCancel?: () => void;
}

export default function FormLevel1({ onCancel }: FormLevelProps) {
  const defaultValues: TodoCreateSchema = {
    title: '',
    detail: '',
  };
  const form = useForm({
    defaultValues,
    async onSubmit({ value }) {
      console.log(value);
    },
  });

  return (
    <FormContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <CardHeader>
          <CardTitle>Create New Todo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Title Field */}
          <form.Field name="title">
            {(field) => {
              return (
                <Field>
                  <FieldLabel htmlFor="title">Title</FieldLabel>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Enter todo title"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldDescription>A short, descriptive title for your task.</FieldDescription>
                  <FieldError>Some Errors</FieldError>
                </Field>
              );
            }}
          </form.Field>

          {/* Detail Field */}
          <form.Field name="detail">
            {(field) => (
              <Field>
                <FieldLabel htmlFor="detail">Detail</FieldLabel>
                <Textarea
                  id="detail"
                  placeholder="Enter todo details"
                  rows={4}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <FieldDescription>
                  Provide a detailed description of what needs to be done.
                </FieldDescription>
                <FieldError>Some errors</FieldError>
              </Field>
            )}
          </form.Field>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          {onCancel ? (
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          ) : (
            <Button type="button" variant="outline" onClick={() => {}}>
              Reset
            </Button>
          )}
          <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => {
              return (
                <Button type="submit" disabled={!canSubmit}>
                  {isSubmitting ? 'is creating...' : 'Create'}
                </Button>
              );
            }}
          </form.Subscribe>
        </CardFooter>
      </form>
    </FormContainer>
  );
}

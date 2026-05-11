import { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import type { Todo } from '@/types/todo.type';
import { type TodoCreateSchema } from '@/features/forms/schemas/todo.schema';
import FormContainer from './FormContainer';
import { useForm } from '@tanstack/react-form';
import { todoCreateSchema } from '@/features/forms/schemas/todo.schema';

interface FormLevelProps {
  onSuccess?: (todo: Todo) => void;
  onCancel?: () => void;
}

export default function FormLevel2({ onCancel }: FormLevelProps) {
  const defaultValues: TodoCreateSchema = {
    title: '',
    detail: '',
  };

  const form = useForm({
    defaultValues,
    validators: { onChange: todoCreateSchema },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  return (
    <FormContainer>
      <form
        id="form-level-2"
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
          <form.Field
            name="title"
            children={(field) => (
              <Field>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <Input
                  id="title"
                  type="text"
                  placeholder="Enter todo title"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
                <FieldDescription>A short, descriptive title for your task.</FieldDescription>
                <FieldError errors={field.state.meta.errors} />
              </Field>
            )}
          />

          {/* Detail Field */}
          <form.Field
            name="detail"
            children={(field) => (
              <Field>
                <FieldLabel htmlFor="detail">Detail</FieldLabel>
                <Textarea
                  id="detail"
                  placeholder="Enter todo details"
                  rows={5}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
                <FieldDescription>
                  Provide a detailed description of what needs to be done.
                </FieldDescription>
                <FieldError errors={field.state.meta.errors} />
              </Field>
            )}
          />
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => {
              return (
                <>
                  {onCancel ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onCancel}
                      disabled={!isSubmitting}
                    >
                      Cancel
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {}}
                      disabled={!canSubmit}
                    >
                      Reset
                    </Button>
                  )}
                  <Button type="submit" disabled={!canSubmit}>
                    Create
                  </Button>
                  ;
                </>
              );
            }}
          </form.Subscribe>
        </CardFooter>
      </form>
    </FormContainer>
  );
}

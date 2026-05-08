import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import type { Todo } from '@/types/todo.type';
import type { TodoCreateSchema } from '@/features/forms/schemas/todo.schema';
import { useForm } from '@tanstack/react-form';

interface TodoCreateCardProps {
  onSuccess?: (todo: Todo) => void;
  onCancel?: () => void;
}

export default function TodoCreateCard({ onCancel }: TodoCreateCardProps) {
  const defaultValues: TodoCreateSchema = {
    title: '',
    detail: '',
  };
  const form = useForm({
    defaultValues,
    onSubmit({ value }) {
      console.log(value);
    },
  });

  const { fields: errors } = form.getAllErrors();
  const isError = {
    title: errors.title.errors.length > 0,
    detail: errors.detail.errors.length > 0,
  };

  return (
    <Card className="w-full shadow-md">
      <form>
        <CardHeader>
          <CardTitle>Create New Todo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Title Field */}
          <form.Field name="title">
            {(field) => (
              <Field data-invalid={isError.title}>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <Input
                  id="title"
                  type="text"
                  placeholder="Enter todo title"
                  aria-invalid={isError.title}
                />
                <FieldDescription>A short, descriptive title for your task.</FieldDescription>
                <FieldError errors={field.state.meta.errors} />
              </Field>
            )}
          </form.Field>

          {/* Detail Field */}
          <form.Field name="detail">
            {(field) => (
              <Field data-invalid={isError.detail}>
                <FieldLabel htmlFor="detail">Detail</FieldLabel>
                <Textarea
                  id="detail"
                  placeholder="Enter todo details"
                  rows={4}
                  aria-invalid={isError.detail}
                />
                <FieldDescription>
                  Provide a detailed description of what needs to be done.
                </FieldDescription>
                <FieldError errors={[{ message: 'some errors' }]} />
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
          <Button type="submit" disabled={false}>
            Create
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

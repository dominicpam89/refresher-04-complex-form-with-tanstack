import { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import type { Todo } from '@/types/todo.type';
import { type TodoCreateSchema } from '@/features/forms/schemas/todo.schema';
import FormContainer from './FormContainer';

interface FormLevelProps {
  visible: boolean;
  onSuccess?: (todo: Todo) => void;
  onCancel?: () => void;
}

export default function FormLevel2({ onCancel, visible }: FormLevelProps) {
  const defaultValues: TodoCreateSchema = {
    title: '',
    detail: '',
  };

  return (
    <FormContainer visible={visible}>
      <form>
        <CardHeader>
          <CardTitle>Create New Todo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Title Field */}

          <Field>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <Input id="title" type="text" placeholder="Enter todo title" />
            <FieldDescription>A short, descriptive title for your task.</FieldDescription>
            <FieldError>Some Errors</FieldError>
          </Field>

          {/* Detail Field */}

          <Field>
            <FieldLabel htmlFor="detail">Detail</FieldLabel>
            <Textarea id="detail" placeholder="Enter todo details" rows={4} />
            <FieldDescription>
              Provide a detailed description of what needs to be done.
            </FieldDescription>
            <FieldError>Some errors</FieldError>
          </Field>
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

          <Button type="submit">Create</Button>
        </CardFooter>
      </form>
    </FormContainer>
  );
}

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import type { Todo } from '@/types/todo.type';

interface TodoCreateCardProps {
  onSuccess?: (todo: Todo) => void;
  onCancel?: () => void;
}

export default function TodoCreateCard({ onCancel }: TodoCreateCardProps) {
  return (
    <Card className="w-full shadow-md">
      <form>
        <CardHeader>
          <CardTitle>Create New Todo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Title Field */}
          <Field data-invalid={false}>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <Input id="title" type="text" placeholder="Enter todo title" aria-invalid={false} />
            <FieldDescription>A short, descriptive title for your task.</FieldDescription>
            <FieldError errors={[{ message: 'some errors' }]} />
          </Field>

          {/* Detail Field */}
          <Field data-invalid={false}>
            <FieldLabel htmlFor="detail">Detail</FieldLabel>
            <Textarea id="detail" placeholder="Enter todo details" rows={4} aria-invalid={false} />
            <FieldDescription>
              Provide a detailed description of what needs to be done.
            </FieldDescription>
            <FieldError errors={[{ message: 'some errors' }]} />
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
          <Button type="submit" disabled={false}>
            Create
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

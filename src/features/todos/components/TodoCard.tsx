import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button'; // assuming you have a Button component
import type { Todo } from '@/types/todo.type';

interface TodoCardProps {
  todo: Todo;
  onEdit?: (todo: Todo) => void;
  onDelete?: (id: number) => void;
}

export default function TodoCard({ todo, onEdit, onDelete }: TodoCardProps) {
  const { id, title, detail, date } = todo;

  // Format ISO date strings to a readable local format
  const formatDate = (isoString: string) => {
    if (!isoString) return '—';
    return new Date(isoString).toLocaleString();
  };

  return (
    <Card className="w-full max-w-md shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="mt-4 text-xs text-gray-500 space-y-1">
          <p>Created: {formatDate(date.created)}</p>
          {date.modified && <p>Modified: {formatDate(date.modified)}</p>}
          {date.ended && <p>Ended: {formatDate(date.ended)}</p>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{detail}</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {onEdit && (
          <Button variant="outline" size="sm" onClick={() => onEdit(todo)}>
            Edit
          </Button>
        )}
        {onDelete && (
          <Button variant="destructive" size="sm" onClick={() => onDelete(id)}>
            Delete
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

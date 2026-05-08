import { ErrorDisplay } from '@/components/ErrorDisplay';
import LoadingOverlay from '@/components/Loading';
import { useGetTodos } from '@/features/todos/hooks/useGetTodos';
import TodoCard from '@/features/todos/components/TodoCard';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';

export default function PageTodos() {
  const { isLoading, isError, error, data } = useGetTodos();
  const navigate = useNavigate();
  const onEdit = useCallback(
    (id: number) => {
      navigate(`${id}/edit`, { relative: 'path' });
    },
    [navigate]
  );
  const onReadMore = useCallback(
    (id: number) => navigate(`${id}`, { relative: 'path' }),
    [navigate]
  );
  if (isLoading) return <LoadingOverlay message="Retrieving list of todos in database" />;
  if (isError || !data)
    return <ErrorDisplay errorMessage={error?.message || "Couldn't get todos data"} />;
  return (
    <div
      aria-label="todos-container"
      className="max-w-lg min-w-xs mx-auto flex flex-col gap-4 items-center"
    >
      <h2>Todos Data</h2>
      {data.map((todo) => (
        <TodoCard key={todo.id} todo={todo} onEdit={onEdit} onReadMore={onReadMore} />
      ))}
    </div>
  );
}

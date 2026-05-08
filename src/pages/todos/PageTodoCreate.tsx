import TodoCreateCard from '@/features/todos/components/TodoCreateCard';

export default function PageTodoCreate() {
  return (
    <div
      aria-label="todo-create-container"
      className="min-h-screen -translate-y-6 max-w-lg min-w-xs mx-auto flex flex-col gap-4 items-center justify-center"
    >
      <TodoCreateCard />
    </div>
  );
}

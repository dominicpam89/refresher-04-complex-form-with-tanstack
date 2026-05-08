type TodoDate = {
  created: string;
  modified: string;
  ended: string;
};

export type Todo = {
  id: number;
  title: string;
  detail: string;
} & { date: TodoDate };

export type TodoCreate = Pick<Todo, 'title' | 'detail'>;
export type TodoUpdate = Partial<TodoCreate> & { id: number };

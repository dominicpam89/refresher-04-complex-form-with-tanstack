import { delay } from '@/lib/utils';
import { fakeTodos } from './db.fake';
import type { Todo, TodoCreate, TodoUpdate } from '@/types/todo.type';

// GET all todos
export const getTodos = async (): Promise<Todo[]> => {
  await delay();
  return fakeTodos;
};

// GET single todo by id
export const getTodo = async (id: number): Promise<Todo> => {
  await delay();
  const todo = fakeTodos.find((td) => td.id === id);
  if (!todo) throw new Error('Todo not found');
  return todo;
};

// CREATE a new todo
export const createTodo = async (data: TodoCreate) => {
  await delay();
  const newTodo: Todo = {
    id: (fakeTodos.at(-1)?.id ?? 0) + 1,
    title: data.title,
    detail: data.detail,
    date: {
      created: new Date().toISOString(),
      modified: '',
      ended: '',
    },
  };
  fakeTodos.push(newTodo);
  return {
    todos: fakeTodos,
    createdTodo: newTodo,
  };
};

// UPDATE an existing todo (using TodoUpdate type)
export const updateTodo = async (data: TodoUpdate) => {
  await delay();
  const { id, ...updates } = data; // extract id, the rest are optional title/detail

  const index = fakeTodos.findIndex((todo) => todo.id === id);
  if (index === -1) throw new Error('Todo not found');

  const oldTodo = fakeTodos[index];
  const updatedTodo: Todo = {
    ...oldTodo,
    ...updates, // only title and/or detail can be updated
    date: {
      ...oldTodo.date,
      modified: new Date().toISOString(), // always update modified timestamp
      // ended remains unchanged (no "completed" flag in your types)
    },
  };
  fakeTodos[index] = updatedTodo;
  return updatedTodo;
};

// DELETE a todo
export const deleteTodo = async (id: number): Promise<Todo> => {
  await delay();
  const index = fakeTodos.findIndex((todo) => todo.id === id);
  if (index === -1) throw new Error('Todo not found');
  const deletedTodo = fakeTodos[index];
  fakeTodos.splice(index, 1);
  return deletedTodo;
};

export const queryKeys = {
  all: ['todos'],
  list: (id: number) => [...queryKeys.all, id],
};

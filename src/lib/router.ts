import LayoutCommon from '@/pages/LayoutCommon';
import PageHome from '@/pages/PageHome';
import PageTodo from '@/pages/todos/PageTodo';
import PageTodoCreate from '@/pages/todos/PageTodoCreate';
import PageTodoEdit from '@/pages/todos/PageTodoEdit';
import PageTodos from '@/pages/todos/PageTodos';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  { path: '/', Component: PageHome },
  {
    path: '/todos',
    Component: LayoutCommon,
    children: [
      { index: true, Component: PageTodos },
      { path: 'create', Component: PageTodoCreate },
      { path: ':id', Component: PageTodo },
      { path: ':id/edit', Component: PageTodoEdit },
    ],
  },
]);

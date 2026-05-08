import type { Todo } from '@/types/todo.type';

export const fakeTodos: Todo[] = [
  {
    id: 1,
    title: 'Todo 1',
    detail: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quidem, repellat
        consequatur officiis doloribus repudiandae reiciendis delectus dolorum? Molestias iure
        perferendis ab saepe ratione labore modi consectetur alias dolorem rerum.`,
    date: {
      created: new Date('2026-05-07 12:00').toISOString(),
      modified: '',
      ended: '',
    },
  },
  {
    id: 2,
    title: 'Todo 2',
    detail: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quidem, repellat
        consequatur officiis doloribus repudiandae reiciendis delectus dolorum? Molestias iure
        perferendis ab saepe ratione labore modi consectetur alias dolorem rerum.`,
    date: {
      created: new Date('2026-05-08 08:00').toISOString(),
      modified: '',
      ended: '',
    },
  },
  {
    id: 3,
    title: 'Todo 3',
    detail: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quidem, repellat
        consequatur officiis doloribus repudiandae reiciendis delectus dolorum? Molestias iure
        perferendis ab saepe ratione labore modi consectetur alias dolorem rerum.`,
    date: {
      created: new Date('2026-05-08 11:20').toISOString(),
      modified: '',
      ended: '',
    },
  },
];

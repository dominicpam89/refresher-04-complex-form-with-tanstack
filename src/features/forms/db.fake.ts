import type { Todo } from '@/types/todo.type';
import type { AuthorSchema } from '@/features/forms/schemas/author.schema';

export const fakeTodos: Todo[] = [
  {
    id: 1,
    title: 'Todo 1',
    detail: `Lorem ipsumconsequatur officiis doloribus repudiandae reiciendis delectus dolorum? Molestias iure perferendis ab saepe ratione labore modi consectetur alias dolorem rerum.`,
    date: {
      created: new Date('2026-05-07 12:00').toISOString(),
      modified: '',
      ended: '',
    },
  },
  {
    id: 2,
    title: 'Todo 2',
    detail: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quidem, repellat consequatur officiis doloribus repudiandae reiciendis delectus dolorum? Molestias iureperferendis ab saepe ratione labore modi consectetur alias dolorem rerum.`,
    date: {
      created: new Date('2026-05-08 08:00').toISOString(),
      modified: '',
      ended: '',
    },
  },
  {
    id: 3,
    title: 'Todo 3',
    detail: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quidem, repellat consequatur officiis doloribus repudiandae reiciendis delectus dolorum? Molestias iure perferendis ab saepe ratione labore modi consectetur alias dolorem rerum.`,
    date: {
      created: new Date('2026-05-08 11:20').toISOString(),
      modified: '',
      ended: '',
    },
  },
];

export const fakeAuthors: AuthorSchema[] = [
  {
    name: {
      firstName: 'First',
      middleName: 'Middle',
      lastName: 'Last',
    },
    email: 'firstmiddlelast@example.com',
    username: 'testing123',
  },
  {
    name: {
      firstName: 'John',
      middleName: 'Michael',
      lastName: 'Doe',
    },
    email: 'john.doe@example.com',
    username: 'johndoe123',
  },
  {
    name: {
      firstName: 'Jane',
      // no middleName
      lastName: 'Smith',
    },
    email: 'jane_smith@example.com',
    username: 'janesmith_dev',
  },
  {
    name: {
      firstName: 'Emilia',
      middleName: 'Rose',
      lastName: 'Johnson',
    },
    email: 'emilia.johnson@test.org',
    username: 'emilia_codes',
  },
  {
    name: {
      firstName: 'Carlos',
      // no middleName
      lastName: 'Martinez',
    },
    email: 'carlos.martinez@web.net',
    username: 'carlitos89',
  },
  {
    name: {
      firstName: 'Aisha',
      middleName: 'Fatima',
      lastName: 'Khan',
    },
    email: 'aisha.khan@company.co',
    username: 'aisha_the_dev',
  },
];

const phoneCountryCodes = {
  US: '+1',
  GB: '+44',
  DE: '+49',
  FR: '+33',
  IT: '+39',
  ES: '+34',
  JP: '+81',
  CN: '+86',
  IN: '+91',
  BR: '+55',
  AU: '+61',
  CA: '+1', // same as US
  // ... more
} as const;

export type CountryDialCode = (typeof phoneCountryCodes)[keyof typeof phoneCountryCodes];

export const validDialCodes = [...new Set(Object.values(phoneCountryCodes))];

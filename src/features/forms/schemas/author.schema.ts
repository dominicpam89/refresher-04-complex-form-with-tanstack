import { z } from 'zod';
import { fakeAuthors } from '@/features/forms/db.fake';
import { delay } from '@/lib/utils';

export const authorName = z.object({
  firstName: z
    .string()
    .min(3, 'Minimum first name is 3 characters')
    .max(30, 'Maximum first name is 30 characters'),
  middleName: z
    .string()
    .min(3, 'Minimum middle name is 3 characters')
    .max(50, 'Maximum middle name is 50 characters')
    .optional(),
  lastName: z
    .string()
    .min(3, 'Minimum last name is 3 characters')
    .max(50, 'Maximum last name is 50 characters'),
});

export const usernameSchema = z
  .string()
  .min(5, 'Username must be at least 5 characters')
  .max(30, 'Username must be at most 30 characters')
  .regex(/^[a-z0-9_]+$/, 'Username must be lowercase letters, numbers, or underscores')
  .transform((val) => val.toLowerCase());

export const isUsernameTaken = async (username: string) => {
  await delay();
  const usernames = fakeAuthors.map((author) => author.username);
  return usernames.includes(username.toLowerCase());
};

export const usernameExistSchema = z
  .string()
  .transform((val) => {
    return val.toLowerCase();
  })
  .superRefine(async (val, ctx) => {
    if (await isUsernameTaken(val)) {
      ctx.addIssue({
        code: 'custom',
        message: 'username is taken',
      });
    }
  });

export const authorSchema = z.object({
  name: authorName,
  email: z.email(),
  username: usernameSchema,
});

export type AuthorSchema = z.infer<typeof authorSchema>;

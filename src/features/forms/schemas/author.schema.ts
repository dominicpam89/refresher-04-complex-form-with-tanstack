import { z } from 'zod';

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

export const authorSchema = z.object({
  name: authorName,
  email: z.email(),
  username: z
    .string()
    .min(5, 'Username must be at least 5 characters')
    .max(30, 'Username must be at most 30 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username must be lowercase letters, numbers, or underscores')
    .transform((val) => val.toLowerCase()),
});

export type AuthorSchema = z.infer<typeof authorSchema>;

import { z } from 'zod';

export const todoCreateSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .min(5, 'Title must be minimum 5 characters')
    .max(30, 'Title must be less than 30 characters'),
  detail: z
    .string()
    .min(1, 'Detail is required')
    .min(10, 'Details must be minimum 10 characters')
    .max(120, 'Detail must be less than 120 characters'),
});

export type TodoCreateSchema = z.infer<typeof todoCreateSchema>;

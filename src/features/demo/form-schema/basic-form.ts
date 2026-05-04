import { z } from 'zod';

const titleMax = 30;
const titleMin = 3;
const descriptionMax = 50;
const descriptionMin = 10;

export const basicFormSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title is required' })
    .min(titleMin, { message: `Title must be at least ${titleMin} characters` })
    .max(titleMax, { message: `Title must be at most ${titleMax} characters` }),
  description: z
    .string()
    .min(1, { message: 'Description is required' })
    .min(descriptionMin, { message: `Description must be at least ${descriptionMin} characters` })
    .max(descriptionMax, { message: `Description must be at most ${descriptionMax} characters` }),
});

export type BasicFormSchema = z.infer<typeof basicFormSchema>;

export const defaultBasicFormValues: BasicFormSchema = {
  title: '',
  description: '',
};

export const basicFormLength = {
  title: {
    max: titleMax,
    min: titleMin,
  },
  description: {
    max: descriptionMax,
    min: descriptionMin,
  },
};

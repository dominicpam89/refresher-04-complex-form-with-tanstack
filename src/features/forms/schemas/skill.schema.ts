import { z } from 'zod';

export const nameSchema = z
  .string()
  .min(5, 'Skill minimum is 5 chars')
  .max(30, 'Skill maximum is 30 chars');

export const yearSchema = z
  .string()
  .nonempty('Years of experience must not empty')
  .refine((val) => !isNaN(Number(val)), {
    message: 'Years of experience must be a valid number',
  })
  .refine((val) => Number.isInteger(Number(val)), {
    message: 'Years of experience must be a round number (integer)',
  })
  .refine((val) => Number(val) >= 0, {
    message: 'Years of experience must be positive or zero',
  });

export const skillsSchema = z
  .array(
    z.object({
      name: nameSchema,
      yearsOfExperience: yearSchema,
    })
  )
  .nonempty('Minimal one skill')
  .max(5, 'Cannot have more than 5 skills');

export const listSkillSchema = z.object({
  skills: skillsSchema,
});

export type ListSkillSchema = z.infer<typeof listSkillSchema>;

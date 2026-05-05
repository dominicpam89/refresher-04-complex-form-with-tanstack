import type { RegisterOptions } from 'react-hook-form';

export type FormWithoutZodType = {
  title: string;
  description: string;
};

const rules = {
  title: {
    max: 20,
    min: 5,
  },
  description: {
    max: 50,
    min: 5,
  },
};

const titleRules: RegisterOptions<FormWithoutZodType, 'title'> = {
  required: {
    value: true,
    message: 'Title is required!',
  },
  maxLength: {
    value: rules.title.max,
    message: 'Maximum title is 20 chars',
  },
  minLength: {
    value: rules.title.min,
    message: 'Minimum title is 5 chars',
  },
};

const descriptionRules: RegisterOptions<FormWithoutZodType, 'description'> = {
  required: {
    value: true,
    message: 'Title is required!',
  },
  maxLength: {
    value: rules.description.max,
    message: 'Maximum title is 20 chars',
  },
  minLength: {
    value: rules.description.min,
    message: 'Minimum title is 5 chars',
  },
};

export { titleRules, descriptionRules, rules };

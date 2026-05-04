import type { RegisterOptions } from 'react-hook-form';
import type { BasicFormType } from '@/types/form-type';

const titleRules: RegisterOptions<BasicFormType, 'title'> = {
  required: { value: true, message: 'Title is required' },
  minLength: { value: 3, message: 'Minimum length is 3 characters' },
  maxLength: { value: 30, message: 'Maximum length is 30 characters' },
};

const descriptionRules: RegisterOptions<BasicFormType, 'description'> = {
  required: { value: true, message: 'Description is required' },
  minLength: { value: 10, message: 'Minimum length is 10 characters' },
  maxLength: { value: 50, message: 'Maximum length is 50 characters' },
};

export const basicFormRules = {
  title: () => titleRules,
  description: () => descriptionRules,
};

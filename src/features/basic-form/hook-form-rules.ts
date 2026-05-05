import type { RegisterOptions } from 'react-hook-form';
import type { BasicFormType } from '@/types/form-type';

const titleMax = 30;
const titleMin = 3;
const descriptionMax = 50;
const descriptionMin = 10;

const titleRules: RegisterOptions<BasicFormType, 'title'> = {
  required: { value: true, message: 'Title is required' },
  minLength: { value: titleMin, message: 'Minimum length is 3 characters' },
  maxLength: { value: titleMax, message: 'Maximum length is 30 characters' },
};

const descriptionRules: RegisterOptions<BasicFormType, 'description'> = {
  required: { value: true, message: 'Description is required' },
  minLength: { value: descriptionMin, message: 'Minimum length is 10 characters' },
  maxLength: { value: descriptionMax, message: 'Maximum length is 50 characters' },
};

export const defaultValues: BasicFormType = {
  title: '',
  description: '',
};

export const basicFormRules = {
  title: () => titleRules,
  description: () => descriptionRules,
  attribute: {
    title: {
      max: titleMax,
      min: titleMin,
    },
    description: {
      max: descriptionMax,
      min: descriptionMin,
    },
  },
};

import { z } from 'zod';
import { validDialCodes, type CountryDialCode } from '../db.fake';
import { delay } from '@/lib/utils';
import { fakeAuthors } from '@/features/forms/db.fake';

const fullName = z.object({
  firstName: z
    .string()
    .min(1, 'required')
    .min(3, 'must be more than 3 characters')
    .max(30, 'must be less than 30 characters'),
  lastName: z
    .string()
    .min(1, 'required')
    .min(3, 'must be more than 3 characters')
    .max(30, 'must be less than 30 characters')
    .optional(),
});

const credentials = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)'
    ),
});

const phoneNumber = z.object({
  countryCode: z
    .string()
    .refine((val) => validDialCodes.includes(val as CountryDialCode), 'Invalid country code'),
  phoneNumber: z
    .string()
    .min(5, 'Phone number must be at least 5 digits')
    .max(15, 'Phone number cannot exceed 15 digits')
    .regex(/^\d+$/, 'Phone number must contain only digits'),
});

const isEmailExist = async (email: string, t: number = 1800) => {
  await delay(t);
  const emailList = Object.values(fakeAuthors).map((author) => author.email);
  return emailList.includes(email);
};

const registerSchema = z.object({
  fullName,
  credentials,
  phoneNumber,
});

type RegisterSchema = z.infer<typeof registerSchema>;

export { registerSchema, isEmailExist };
export type { RegisterSchema };

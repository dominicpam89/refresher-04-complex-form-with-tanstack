import { useMutation } from '@tanstack/react-query';
import type { BasicFormSchema } from '@/features/basic-form/schema';

const fakeAPI = ({
  title,
  description,
}: BasicFormSchema): Promise<{ title: string; description: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Optionally stringify if needed, but resolve with the data
      resolve({ title, description });
    }, 2000);
  });
};

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: fakeAPI,
    onError(error) {
      console.error(error.message);
    },
    onSuccess(data) {
      console.log('created todo, data: ', data);
    },
  });
};

import { useQuery } from '@tanstack/react-query';
import { getTodos, queryKeys } from '@/features/forms/api.fake';

export const useGetTodos = () => {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: getTodos,
  });
};

import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/lib/query-client-provider';
import { createBlog } from '@/features/blog/api';
import { queryKeys } from '@/features/blog/query-keys';

export const useCreateBlog = () => {
  return useMutation({
    mutationFn: createBlog,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: queryKeys.list() });
    },
  });
};

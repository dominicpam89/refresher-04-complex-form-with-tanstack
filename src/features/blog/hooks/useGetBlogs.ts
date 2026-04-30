import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/features/blog/query-keys';
import { fetchBlogs } from '@/features/blog/api';

export const useGetBlogs = () => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: fetchBlogs,
  });
};

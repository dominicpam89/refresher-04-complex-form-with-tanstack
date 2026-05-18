import { useQuery } from '@tanstack/react-query';
import { getAuthor, queryAuthorKeys } from '../api.fake';

export const useGetAuthor = (username: string) => {
  const query = useQuery({
    queryKey: queryAuthorKeys.byUsername(username),
    queryFn: () => getAuthor(username),
  });
  return query;
};

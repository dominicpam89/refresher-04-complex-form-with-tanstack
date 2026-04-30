import {
  QueryClient,
  QueryClientProvider,
  type QueryClientProviderProps,
} from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import { createElement } from 'react';

export const queryClient = new QueryClient();

export default function QueryClientWrapper({ children }: PropsWithChildren) {
  return createElement<QueryClientProviderProps>(
    QueryClientProvider,
    { client: queryClient },
    children
  );
}

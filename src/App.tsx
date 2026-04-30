import { router } from '@/lib/router.ts';
import { RouterProvider } from 'react-router';

export default function App() {
  return <RouterProvider router={router} />;
}

import LayoutCommon from '@/pages/LayoutCommon';
import PageForms from '@/pages/PageForms';
import PageHome from '@/pages/PageHome';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  { path: '/', Component: PageHome },
  {
    path: 'forms',
    Component: LayoutCommon,
    children: [{ index: true, Component: PageForms }],
  },
]);

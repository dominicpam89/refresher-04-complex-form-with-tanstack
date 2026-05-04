import LayoutCommon from '@/pages/LayoutCommon';
import PageHome from '@/pages/PageHome';
import { createBrowserRouter } from 'react-router';
import PageForm from '@/pages/PageForm';
import PageFormBasic from '@/pages/PageFormBasic';

export const router = createBrowserRouter([
  { path: '/', Component: PageHome },
  {
    path: '/demo',
    Component: LayoutCommon,
    children: [
      { index: true, Component: PageForm },
      { path: 'basic', Component: PageFormBasic },
    ],
  },
]);

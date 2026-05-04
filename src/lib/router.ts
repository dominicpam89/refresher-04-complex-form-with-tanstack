import LayoutCommon from '@/pages/LayoutCommon';
import PageHome from '@/pages/PageHome';
import { createBrowserRouter } from 'react-router';
import PageFormBasic from '@/pages/PageFormBasic';

export const router = createBrowserRouter([
  { path: '/', Component: PageHome },
  {
    path: '/basic-form',
    Component: LayoutCommon,
    children: [{ index: true, Component: PageFormBasic }],
  },
]);

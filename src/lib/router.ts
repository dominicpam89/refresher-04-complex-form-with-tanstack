import LayoutCommon from '@/pages/LayoutCommon';
import PageFormExperimentation from '@/pages/PageFormExperimentation';
import PageHome from '@/pages/PageHome';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  { path: '/', Component: PageHome },
  {
    path: '/form-experimentation',
    Component: LayoutCommon,
    children: [{ index: true, Component: PageFormExperimentation }],
  },
]);

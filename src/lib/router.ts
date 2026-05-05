import LayoutCommon from '@/pages/LayoutCommon';
import PageHome from '@/pages/PageHome';
import { createBrowserRouter } from 'react-router';
import PageFormBasic from '@/pages/PageFormBasic';
import PageFormSemiComplex from '@/pages/PageFormSemiComplex';

export const router = createBrowserRouter([
  { path: '/', Component: PageHome },
  {
    path: '/basic-form',
    Component: LayoutCommon,
    children: [{ index: true, Component: PageFormBasic }],
  },
  {
    path: '/semi-complex-form',
    Component: LayoutCommon,
    children: [{ index: true, Component: PageFormSemiComplex }],
  },
]);

import LayoutBlog from '@/pages/LayoutBlog';
import PageBlogCreate from '@/pages/PageBlogCreate';
import PageBlogDetail from '@/pages/PageBlogDetail';
import PageBlogEdit from '@/pages/PageBlogEdit';
import PageBlogs from '@/pages/PageBlogs';
import PageHome from '@/pages/PageHome';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  { path: '/', Component: PageHome },
  {
    path: '/blogs',
    Component: LayoutBlog,
    children: [
      { index: true, Component: PageBlogs },
      { path: ':id', Component: PageBlogDetail },
      { path: ':id/edit', Component: PageBlogEdit },
      { path: 'create', Component: PageBlogCreate },
    ],
  },
]);

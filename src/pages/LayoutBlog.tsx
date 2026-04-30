import { Outlet } from 'react-router';

export default function LayoutBlog() {
  return (
    <>
      <header>Header Blog</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

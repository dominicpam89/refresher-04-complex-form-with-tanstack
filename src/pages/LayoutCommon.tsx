import { Outlet } from 'react-router';

export default function LayoutCommon() {
  return (
    <>
      <header>
        <></>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <></>
      </footer>
    </>
  );
}

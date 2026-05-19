import { Outlet } from 'react-router';
import Header from '@/features/forms/components/Header';

export default function LayoutCommon() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <></>
      </footer>
    </>
  );
}

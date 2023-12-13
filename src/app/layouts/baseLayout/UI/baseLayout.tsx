import { Outlet } from 'react-router-dom';
import Header from '../../../../features/Header';

export function BaseLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
}

import { Outlet } from 'react-router-dom';
import { Header } from '../../../../features/Header';
import { Footer } from '../../../../widgets/footer';
import styles from './baseLayout.module.scss';

export function BaseLayout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

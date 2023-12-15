import { Outlet } from 'react-router-dom';
import { Header } from '../../../../features/Header';

import styles from './baseLayout.module.scss';
import { Footer } from '../../../../widgets/footer';

export function BaseLayout() {
  return (
    <div className={styles.body}>
      <Header />
      <main className={styles.wrapper}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

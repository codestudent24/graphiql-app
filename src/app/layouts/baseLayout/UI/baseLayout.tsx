import { Outlet } from 'react-router-dom';
import Header from '../../../../features/Header';

import styles from './baseLayout.module.scss';

export function BaseLayout() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Outlet />
      </main>
      <footer className={styles.footer}>footer</footer>
    </>
  );
}

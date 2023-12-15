import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/appHooks';
import { useLogout } from '../model/logout';
import styles from './header.module.scss';
import { useState } from 'react';
import { LoginOutlined, LogoutOutlined, HomeOutlined, UserAddOutlined } from '@ant-design/icons';

export function Header() {
  const logout = useLogout();
  const { isAnonymous } = useAppSelector((state) => state.auth);
  const [sticky, setSticky] = useState(false);

  function updateSticky() {
    if (window.scrollY >= 20) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  window.addEventListener('scroll', updateSticky);

  return (
    <header className={sticky ? styles.scrolled : styles.header}>
      <div className={styles.item}>
        <Link to="/">
          <HomeOutlined />
        </Link>
      </div>
      <div className={styles.item}>
        <button className={styles.logout} onClick={() => console.log('click')}>
          EN
        </button>
        {isAnonymous ? (
          <div className={styles.links}>
            <Link to="/auth">
              <LoginOutlined />
            </Link>
            <Link to="/auth">
              <UserAddOutlined />
            </Link>
          </div>
        ) : (
          <button className={styles.logout} onClick={logout}>
            <LogoutOutlined />
          </button>
        )}
      </div>
    </header>
  );
}

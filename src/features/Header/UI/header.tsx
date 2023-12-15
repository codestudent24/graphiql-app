import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/appHooks';
import { useLogout } from '../model/logout';
import styles from './header.module.scss';
import { useState } from 'react';

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
      <Link to="/">Home</Link>
      <Link to="/main">Main</Link>
      {isAnonymous ? (
        <Link to="/auth">Sign In</Link>
      ) : (
        <button className={styles.logout} onClick={logout}>
          Sign Out
        </button>
      )}
    </header>
  );
}

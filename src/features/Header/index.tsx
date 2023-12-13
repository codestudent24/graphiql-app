import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/appHooks';
import { useLogout } from './model/logout';
import styles from './UI/header.module.scss';

export default function Header() {
  const logout = useLogout();
  const { isAnonymous } = useAppSelector((state) => state.auth);

  return (
    <header className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="/main">Main</Link>
      {isAnonymous ? <Link to="/auth">Sign In</Link> : <button onClick={logout}>Sign Out</button>}
    </header>
  );
}

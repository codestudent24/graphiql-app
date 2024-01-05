import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/appHooks';
import { useLogout } from '../model/logout';
import styles from './header.module.scss';
import { useState } from 'react';
import { LoginOutlined, LogoutOutlined, HomeOutlined, UserAddOutlined } from '@ant-design/icons';
import { useLanguage } from '../../language/use-language';
import commonStyles from '../../../shared/common.module.scss';

export function Header() {
  const logout = useLogout();
  const { language, changeLanguage } = useLanguage();
  const [sticky, setSticky] = useState(false);

  const { isAnonymous } = useAppSelector((state) => state.auth);

  function toggleLanguage() {
    const newLanguage = language === 'EN' ? 'RU' : 'EN';
    changeLanguage(newLanguage);
  }

  function updateSticky() {
    if (window.scrollY >= 20) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  window.addEventListener('scroll', updateSticky);

  return (
    <header className={`${styles.header} ${sticky && styles.headerScrolled}`}>
      <div className={`${commonStyles.wrapper} ${styles.headerWrapper} ${sticky && styles.scrolledWrapper}`}>
        <div className={styles.item}>
          <Link to="/">
            <HomeOutlined />
          </Link>
        </div>
        <div className={styles.item}>
          <button className={styles.logout} onClick={toggleLanguage}>
            {language}
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
      </div>
    </header>
  );
}

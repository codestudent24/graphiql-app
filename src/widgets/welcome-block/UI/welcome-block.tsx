import { Link } from 'react-router-dom';
import styles from './welcome-block.module.scss';
import { useAppSelector } from '../../../app/appHooks';

interface WelcomeBlockProps {
  language?: string;
}

export function WelcomeBlock({ language }: WelcomeBlockProps) {
  const isEn = language === 'EN';
  const signInBtnText = isEn ? 'Sign In' : 'Вход';
  const signUpBtnText = isEn ? 'Sign Up' : 'Регистрация';
  const mainPageBtnText = isEn ? 'Main page' : 'Главная странциа';

  const { isAnonymous } = useAppSelector((state) => state.auth);

  return (
    <div className={styles.welcome}>
      <h2 className={styles.title}>GRAPHI-QL</h2>
      {isAnonymous ? (
        <div className={styles.links}>
          <Link className={styles.btn} to="/auth">
            {signInBtnText}
          </Link>
          <Link className={styles.btn} to="/auth">
            {signUpBtnText}
          </Link>
        </div>
      ) : (
        <div className={styles.links}>
          <Link to="/main" className={styles.btn}>
            {mainPageBtnText}
          </Link>
        </div>
      )}
    </div>
  );
}

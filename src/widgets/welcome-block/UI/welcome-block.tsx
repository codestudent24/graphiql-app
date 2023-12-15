import { Link } from 'react-router-dom';
import styles from './welcome-block.module.scss';
import { useAppSelector } from '../../../app/appHooks';

export function WelcomeBlock() {
  const { isAnonymous } = useAppSelector((state) => state.auth);

  return (
    <div className={styles.welcome}>
      <h2 className={styles.title}>GRAPHI-QL EDITOR</h2>
      {isAnonymous ? (
        <div className={styles.links}>
          <Link className={styles.btn} to="/auth">
            Sign In
          </Link>
          <Link className={styles.btn} to="/auth">
            Sign Up
          </Link>
        </div>
      ) : (
        <div className={styles.links}>
          <Link to="/main" className={styles.btn}>
            Main page
          </Link>
        </div>
      )}
    </div>
  );
}

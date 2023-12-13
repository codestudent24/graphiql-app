import { Link } from 'react-router-dom';
import styles from './welcome-block.module.scss';

export function WelcomeBlock() {
  return (
    <div className={styles.welcome}>
      <h2 className={styles.title}>GRAPHI-QL EDITOR</h2>
      <h4 className={styles.subtitle}>Go ahead and test it in our special editor</h4>
      <Link to="/main" className={styles.btn}>
        START
      </Link>
    </div>
  );
}

import { Link } from 'react-router-dom';
import styles from './footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.container}>
      <Link to="https://github.com/codestudent24" className={styles.gitHub}>
        GitHub
      </Link>
      <div className={styles.year}>2023</div>
      <Link to="https://rs.school/react/" className={styles.rss}>
        RSS
      </Link>
    </footer>
  );
}

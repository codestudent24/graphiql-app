import { Link } from 'react-router-dom';
import { GithubOutlined } from '@ant-design/icons';
import globalStyles from '../../../shared/common.module.scss';
import styles from './footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={`${styles.footerWrapper} ${globalStyles.wrapper}`}>
        <Link to="https://github.com/codestudent24" className={styles.gitHub}>
          <GithubOutlined />
        </Link>
        <div className={styles.year}>2023</div>
        <Link to="https://rs.school/react/" className={styles.rss}>
          <img className={styles.img} src="/rs_school_js.svg" alt="rss" />
        </Link>
      </div>
    </footer>
  );
}

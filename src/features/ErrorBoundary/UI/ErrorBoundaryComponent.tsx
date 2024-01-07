import { useNavigate } from 'react-router-dom';
import styles from './errorBoundary.module.scss';

export default function ErrorBoundaryComponent() {
  const navigate = useNavigate();
  return (
    <div className={styles.errorPage}>
      <h1>Oops, something went wrong</h1>
      <button
        onClick={() => {
          navigate('/');
          setTimeout(() => {
            window.location.reload();
          }, 300);
        }}
      >
        Home
      </button>
    </div>
  );
}

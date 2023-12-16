import { Link } from 'react-router-dom';
import styles from './dev-card.module.scss';

interface DevCardProps {
  nick: string;
  name: string;
}

export function DevCard({ nick, name }: DevCardProps) {
  const isEn = /[a-zA-Z]/.test(name);

  return (
    <div
      style={{
        background: `url('../../../../public/${nick}.jpg')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className={styles.developer}
    >
      <div className={styles.info}>
        <Link to={`https://github.com/${nick}`} className={styles.nick}>
          {nick}
        </Link>
        <div className={styles.name} style={isEn ? { fontSize: 13 } : { fontSize: 11 }}>
          {name}
        </div>
      </div>
    </div>
  );
}

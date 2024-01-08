import { useRef, useState } from 'react';
import { login } from '../model/login';
import styles from '../../auth.module.scss';

interface LoginProps {
  language: string;
}

export function Login({ language }: LoginProps) {
  const isEn = language === 'EN';

  const [error, setError] = useState('');
  const loginMail = useRef<HTMLInputElement>(null);
  const loginPassword = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className={styles.authContainer}>
        <h3>{isEn ? 'Sign In' : 'Войти'}</h3>
        <input placeholder={isEn ? 'e-mail' : 'почта'} ref={loginMail} />
        <input placeholder={isEn ? 'password' : 'пароль'} ref={loginPassword} />
        <div className={styles.errors}>{error && <p className={styles.error}>{error}</p>}</div>
        <button
          onClick={() => {
            if (loginMail.current && loginPassword.current) {
              login(loginMail.current.value, loginPassword.current.value, setError);
            }
          }}
        >
          {isEn ? 'Sign In' : 'Войти'}
        </button>
      </div>
    </>
  );
}

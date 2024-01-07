import { useRef, useState } from 'react';
import { login } from '../model/login';
import styles from '../../auth.module.scss';

export function Login() {
  const [error, setError] = useState('');
  const loginMail = useRef<HTMLInputElement>(null);
  const loginPassword = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className={styles.authContainer}>
        <h3>Sign In</h3>
        <input placeholder="e-mail" ref={loginMail} />
        <input placeholder="password" ref={loginPassword} />
        {error && <p>{error}</p>}
        <button
          onClick={() => {
            if (loginMail.current && loginPassword.current) {
              login(loginMail.current.value, loginPassword.current.value, setError);
            }
          }}
        >
          sign in
        </button>
      </div>
    </>
  );
}

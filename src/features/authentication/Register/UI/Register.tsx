import { useRef, useState } from 'react';
import { register } from '../model/register';
import styles from '../../auth.module.scss';

export function Register() {
  const [error, setError] = useState<string>('');
  const registerMail = useRef<HTMLInputElement>(null);
  const registerPassword = useRef<HTMLInputElement>(null);

  const handleClick = async () => {
    const validationError = await register(registerMail, registerPassword);
    if (validationError) setError(validationError);
  };

  return (
    <div className={styles.authContainer}>
      <h3>Sign Up</h3>
      <input placeholder="e-mail" ref={registerMail} />
      <input placeholder="password" ref={registerPassword} />
      <div className={styles.errors}>{error && <p className={styles.error}>{error}</p>}</div>
      <button onClick={handleClick}>sign up</button>
    </div>
  );
}

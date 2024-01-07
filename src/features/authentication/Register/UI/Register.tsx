import { useRef, useState } from 'react';
import { register } from '../model/register';
import styles from '../../auth.module.scss';

interface RegisterProps {
  language: string;
}

export function Register({ language }: RegisterProps) {
  const isEn = language === 'EN';

  const [error, setError] = useState<string>('');
  const registerMail = useRef<HTMLInputElement>(null);
  const registerPassword = useRef<HTMLInputElement>(null);

  const handleClick = async () => {
    const validationError = await register(registerMail, registerPassword);
    if (validationError) setError(validationError);
  };

  return (
    <div className={styles.authContainer}>
      <h3>{isEn ? 'Sign Up' : 'Зарегистироваться'}</h3>
      <input placeholder={isEn ? 'e-mail' : 'почта'} ref={registerMail} />
      <input placeholder={isEn ? 'password' : 'пароль'} ref={registerPassword} />
      <div className={styles.errors}>{error && <p className={styles.error}>{error}</p>}</div>
      <button onClick={handleClick}>{isEn ? 'Sign Up' : 'Зарегистироваться'}</button>
    </div>
  );
}

import { useRef, useState } from 'react';
import { register } from '../model/register';

export function Register() {
  const [error, setError] = useState<string>('');
  const registerMail = useRef<HTMLInputElement>(null);
  const registerPassword = useRef<HTMLInputElement>(null);

  const handleClick = async () => {
    const validationError = await register(registerMail, registerPassword);
    if (validationError) setError(validationError);
  };

  return (
    <div className="signup">
      <h4>still has no account?</h4>
      <h3>Sign Up</h3>
      <input placeholder="e-mail" ref={registerMail} />
      <input placeholder="password" ref={registerPassword} />
      <button onClick={handleClick}>sign up</button>
      <p style={{ color: 'red' }}>{error}</p>
    </div>
  );
}

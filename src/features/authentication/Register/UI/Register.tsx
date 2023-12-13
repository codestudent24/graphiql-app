import { useRef } from 'react';
import { register } from '../model/register';

export function Register() {
  const registerMail = useRef<HTMLInputElement>(null);
  const registerPassword = useRef<HTMLInputElement>(null);

  return (
    <div className="signup">
      <h3>Sign Up</h3>
      <input placeholder="e-mail" ref={registerMail} />
      <input placeholder="password" ref={registerPassword} />
      <button
        onClick={() => {
          register(registerMail, registerPassword);
        }}
      >
        sign up
      </button>
    </div>
  );
}

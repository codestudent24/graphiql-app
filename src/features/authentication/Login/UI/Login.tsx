import { useRef } from 'react';
import { login } from '../model/login';

export function Login() {
  const loginMail = useRef<HTMLInputElement>(null);
  const loginPassword = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="signin">
        <h3>Sign In</h3>
        <input placeholder="e-mail" ref={loginMail} />
        <input placeholder="password" ref={loginPassword} />
        <button
          onClick={() => {
            login(loginMail, loginPassword);
          }}
        >
          sign in
        </button>
      </div>
    </>
  );
}

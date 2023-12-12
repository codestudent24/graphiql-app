import { useRef } from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../shared/firebase-config';

export function Login() {
  const loginMail = useRef<HTMLInputElement>(null);
  const loginPassword = useRef<HTMLInputElement>(null);

  // По хорошему вынести в model ее
  const login = async () => {
    if (loginMail.current && loginPassword.current) {
      try {
        signInWithEmailAndPassword(auth, loginMail.current.value, loginPassword.current.value);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="signin">
        <h3>Sign In</h3>
        <input placeholder="e-mail" ref={loginMail} />
        <input placeholder="password" ref={loginPassword} />
        <button onClick={login}>sign in</button>
      </div>
    </>
  );
}

import { useRef } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';

export default function Login() {
  const loginMail = useRef<HTMLInputElement>(null);
  const loginPassword = useRef<HTMLInputElement>(null);

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

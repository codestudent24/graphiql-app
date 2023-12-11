import { useRef } from 'react';
import { signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';

export default function Login() {
  const loginMail = useRef<HTMLInputElement>(null);
  const loginPassword = useRef<HTMLInputElement>(null);

  const login = async () => {
    if (loginMail.current && loginPassword.current) {
      try {
        const user = await signInWithEmailAndPassword(auth, loginMail.current.value, loginPassword.current.value);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const logout = () => {
    signOut(auth);
    if (loginMail.current) loginMail.current.value = '';
    if (loginPassword.current) loginPassword.current.value = '';
  };

  return (
    <>
      <div className="signin">
        <h3>Sign In</h3>
        <input placeholder="e-mail" ref={loginMail} />
        <input placeholder="password" ref={loginPassword} />
        <button onClick={login}>sign in</button>
      </div>

      <button onClick={logout}>logout</button>
    </>
  );
}

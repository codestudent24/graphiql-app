import { useRef } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';

export default function Register() {
  const registerMail = useRef<HTMLInputElement>(null);
  const registerPassword = useRef<HTMLInputElement>(null);

  const register = async () => {
    if (registerMail.current && registerPassword.current) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerMail.current.value,
          registerPassword.current.value,
        );
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="signup">
      <h3>Sign Up</h3>
      <input placeholder="e-mail" ref={registerMail} />
      <input placeholder="password" ref={registerPassword} />
      <button onClick={register}>sign up</button>
    </div>
  );
}

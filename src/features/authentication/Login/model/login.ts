import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../shared/firebase-config';

export const login = async (mail: React.RefObject<HTMLInputElement>, password: React.RefObject<HTMLInputElement>) => {
  if (mail.current && password.current) {
    try {
      signInWithEmailAndPassword(auth, mail.current.value, password.current.value);
    } catch (error) {
      console.log(error);
    }
  }
};

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../shared/firebase-config';

export const register = async (
  mail: React.RefObject<HTMLInputElement>,
  password: React.RefObject<HTMLInputElement>,
) => {
  if (mail.current && password.current) {
    try {
      createUserWithEmailAndPassword(auth, mail.current.value, password.current.value);
    } catch (error) {
      console.log(error);
    }
  }
};

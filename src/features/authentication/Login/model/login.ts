import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../shared/firebase-config';

export const login = async (mail: string, password: string, setError: (value: string) => void) => {
  signInWithEmailAndPassword(auth, mail, password).catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage.toLocaleLowerCase().split('_').join(' '));
  });
};

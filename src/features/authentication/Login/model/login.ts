import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../shared/firebase-config';

export const login = async (
  mailRef: React.RefObject<HTMLInputElement>,
  passwordRef: React.RefObject<HTMLInputElement>,
  setError: (value: string) => void,
) => {
  if (mailRef.current && passwordRef.current) {
    const mail = mailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(auth, mail, password).catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage.toLocaleLowerCase().split('_').join(' '));
    });
  }
};

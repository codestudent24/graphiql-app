import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../shared/firebase-config';

export const login = async (
  mailRef: React.RefObject<HTMLInputElement>,
  passwordRef: React.RefObject<HTMLInputElement>,
) => {
  if (mailRef.current && passwordRef.current) {
    const mail = mailRef.current.value;
    const password = passwordRef.current.value;
    try {
      signInWithEmailAndPassword(auth, mail, password);
    } catch (error) {
      console.log(error);
    }
  }
};

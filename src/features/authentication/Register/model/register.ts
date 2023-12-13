import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ValidationError } from 'yup';
import { auth } from '../../../../shared/firebase-config';
import { authSchema } from '../../../../shared/validation';

export const register = async (
  mailRef: React.RefObject<HTMLInputElement>,
  passwordRef: React.RefObject<HTMLInputElement>,
) => {
  if (mailRef.current && passwordRef.current) {
    const mail = mailRef.current.value;
    const password = passwordRef.current.value;
    try {
      await authSchema.validate({ mail, password });
      createUserWithEmailAndPassword(auth, mail, password);
    } catch (error) {
      if (error instanceof ValidationError) {
        return `Error: ${error.message}`;
      }
      console.log(error);
    }
  }
};

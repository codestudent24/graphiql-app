import { signOut } from 'firebase/auth';
import { auth } from '../../../shared/firebase-config';
import { useAppDispatch } from '../../../app/appHooks';
import { removeUser } from '../../../app/authSlice';

export const useLogout = () => {
  const dispatch = useAppDispatch();
  return function () {
    signOut(auth);
    localStorage.removeItem('currentUser');
    dispatch(removeUser());
  };
};

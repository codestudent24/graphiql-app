import { signOut } from 'firebase/auth';
import { auth } from '../../../shared/firebase-config';
import { useAppDispatch } from '../../../app/appHooks';
import { removeUser } from '../../../app/authSlice';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  return function () {
    signOut(auth);
    localStorage.removeItem('currentUser');
    dispatch(removeUser());
    navigation('/');
  };
};

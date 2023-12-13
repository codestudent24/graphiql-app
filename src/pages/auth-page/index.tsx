import { useNavigate } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../shared/firebase-config';

import { useAppDispatch, useAppSelector } from '../../app/appHooks';
import { addUser, removeUser } from '../../app/authSlice';

import { Register } from '../../features/authentication/Register';
import { Login } from '../../features/authentication/Login';

const CURRENT_USER = 'currentUser';

export default function AuthPage() {
  const { isAnonymous } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  if (!isAnonymous) navigate('/');

  const dispatch = useAppDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser === null) {
      localStorage.removeItem(CURRENT_USER);
      dispatch(removeUser());
    } else {
      localStorage.setItem(CURRENT_USER, JSON.stringify(currentUser));
      dispatch(
        addUser({
          email: currentUser.email,
          uid: currentUser.uid,
        }),
      );
      navigate('/');
    }
  });

  return (
    <div className="auth">
      <Register />
      <Login />
    </div>
  );
}

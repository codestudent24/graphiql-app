import { useNavigate } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../shared/firebase-config';

import { useAppDispatch, useAppSelector } from '../../app/appHooks';
import { addUser, removeUser } from '../../app/authSlice';

import { Register } from '../../features/authentication/Register';
import { Login } from '../../features/authentication/Login';
import { useEffect } from 'react';

import styles from './auth-page.module.scss';
import { useLanguage } from '../../features/language/use-language';

const CURRENT_USER = 'currentUser';

export default function AuthPage() {
  const { language } = useLanguage();

  const { isAnonymous } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAnonymous) navigate('/main');
  }, [navigate, isAnonymous]);

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
    }
  });

  return (
    <div className={styles.auth}>
      <Login language={language} />
      <Register language={language} />
    </div>
  );
}

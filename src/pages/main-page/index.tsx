import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useAppSelector } from '../../app/appHooks';
import InputURL from '../../features/graphiql/URL';
import EditorContainer from '../../features/graphiql/EditorContainer';
import styles from './main-page.module.scss';

export default function MainPage() {
  const navigate = useNavigate();
  const auth = getAuth();
  const { isAnonymous } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAnonymous) navigate('/auth');
    async function isExpired() {
      const user = auth.currentUser;
      if (user) {
        const currentDate = new Date().valueOf();
        const expirationTime = (await user.getIdTokenResult()).expirationTime;
        const expirationDate = new Date(expirationTime).valueOf();
        if (currentDate > expirationDate) navigate('/');
      }
    }
    isExpired();
  }, [navigate, isAnonymous, auth.currentUser]);

  return (
    <div className={styles.main}>
      <InputURL />
      <EditorContainer />
    </div>
  );
}

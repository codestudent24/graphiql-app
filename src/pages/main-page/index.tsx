import { lazy, Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useAppSelector } from '../../app/appHooks';
import InputURL from '../../features/graphiql/URL';
import EditorContainer from '../../features/graphiql/EditorContainer';
import styles from './main-page.module.scss';
import commonStyles from '../../shared/common.module.scss';
import { useLanguage } from '../../features/language/use-language';

const DocumentationContainer = lazy(() => import('../../features/graphiql/Documentation'));

export default function MainPage() {
  const navigate = useNavigate();
  const auth = getAuth();
  const { isAnonymous } = useAppSelector((state) => state.auth);
  const [isDocsVisible, setIsDocsVisible] = useState(false);

  const { language } = useLanguage();

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

  const handleDocsIconClick = (prop?: boolean) => {
    setIsDocsVisible((curr: boolean) => {
      return prop !== undefined ? prop : !curr;
    });
  };

  return (
    <div className={`${styles.mainWrapper} ${commonStyles.wrapper} `}>
      <InputURL language={language} handleDocsIconClick={handleDocsIconClick} />
      <div className={styles.editor}>
        {isDocsVisible && (
          <Suspense fallback={<div style={{ color: 'white' }}>Loading Documentation...</div>}>
            <DocumentationContainer />
          </Suspense>
        )}
        <EditorContainer language={language} />
      </div>
    </div>
  );
}

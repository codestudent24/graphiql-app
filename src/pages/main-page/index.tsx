import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/appHooks';
import InputURL from '../../features/graphiql/URL';
import EditorContainer from '../../features/graphiql/EditorContainer';
import DocumentationContainer from '../../features/graphiql/Documentation';

export default function MainPage() {
  const navigate = useNavigate();
  const { isAnonymous } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAnonymous) navigate('/auth');
  }, [navigate, isAnonymous]);

  return (
    <div className="main">
      <DocumentationContainer />
      <InputURL />
      <EditorContainer />
    </div>
  );
}

import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/appHooks';
import { useEffect } from 'react';

export default function MainPage() {
  const navigate = useNavigate();
  const { isAnonymous } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAnonymous) navigate('/auth');
  }, [navigate, isAnonymous]);

  return (
    <div className="main">
      <h2>MAIN-PAGE</h2>
    </div>
  );
}

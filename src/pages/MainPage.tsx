import { useNavigate, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

export default function MainPage() {
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate('/welcome');
  };

  return (
    <div className="main">
      <Link to="/auth">Go to AUTH page</Link>
      <br />
      <button onClick={logout}>logout</button>
      <br />
      <Link to="/welcome">Go to WELCOME page</Link>
    </div>
  );
}

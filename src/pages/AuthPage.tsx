import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useAppDispatch } from '../redux/hooks';
import { addUser, removeUser } from '../redux/authSlice';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';

const CURRENT_USER = 'currentUser';

export default function AuthPage() {
  const navigate = useNavigate();
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

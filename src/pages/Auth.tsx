import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';

const CURRENT_USER = 'currentUser';

export default function Auth() {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser === null) {
      localStorage.removeItem(CURRENT_USER);
    } else {
      localStorage.setItem(CURRENT_USER, JSON.stringify(currentUser));
    }
  });

  return (
    <div className="auth">
      <Register />
      <Login />
    </div>
  );
}

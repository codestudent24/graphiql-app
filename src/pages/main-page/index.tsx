import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div className="welcome">
      MAIN-PAGE
      <Link to="/">Go to MAIN page</Link>
      <br />
      <Link to="/auth">Go to AUTH page</Link>
    </div>
  );
}

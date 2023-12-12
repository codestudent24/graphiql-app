import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <div className="welcome">
      WELCOME-PAGE
      <Link to="/main">Go to MAIN page</Link>
      <br />
      <Link to="/auth">Go to AUTH page</Link>
    </div>
  );
}

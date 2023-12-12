import { Route, Routes } from 'react-router-dom';
import AuthPage from '../pages/auth-page';
import WelcomePage from '../pages/welcome-page';
import ErrorPage from '../pages/error-page';
import { BaseLayout } from './layouts/baseLayout';
import MainPage from '../pages/main-page';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthPage from './pages/AuthPage.tsx';
import WelcomePage from './pages/WelcomePage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import MainPage from './pages/MainPage.tsx';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'auth',
    element: <AuthPage />,
  },
  {
    path: 'welcome',
    element: <WelcomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

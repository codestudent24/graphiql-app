import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/appStore.ts';
import { LanguageProvider } from './features/language/language-provider.tsx';
import ErrorBoundary from './features/ErrorBoundary/ErrorBoundary.tsx';
import App from './app/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <LanguageProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </LanguageProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

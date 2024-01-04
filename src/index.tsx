import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/appStore.ts';
import App from './app/index.tsx';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './features/language/language-provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

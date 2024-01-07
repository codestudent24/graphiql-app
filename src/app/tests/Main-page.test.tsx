import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../appStore';
import { initializeApp } from 'firebase/app';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID } from '../../shared/constants';
import MainPage from '../../pages/main-page';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: 'graphi-ql.appspot.com',
  messagingSenderId: '689686768200',
  appId: '1:689686768200:web:035fb67fa79b507f49067d',
};

describe('Variables render correct', () => {
  beforeAll(() => {
    initializeApp(firebaseConfig);
  });
  it('render Variables component, handle error', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <MainPage />
        </Provider>
        ,
      </BrowserRouter>,
    );
    const submitButton = getByText('Submit');
    expect(submitButton).not.toBeNull();
  });
});

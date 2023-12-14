import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../appStore';
import App from '../';

describe('App tests', () => {
  it('displays correct component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        ,
      </Provider>,
    );
    const divText = screen.getByText(/main/i);
    expect(divText).not.toBeNull();
  });
});

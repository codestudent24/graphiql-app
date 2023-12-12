import { render, screen } from '@testing-library/react';
import App from '../';
import { BrowserRouter } from 'react-router-dom';

describe('App tests', () => {
  it('displays correct component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const divText = screen.getByText(/go to auth page/i);
    expect(divText).not.toBeNull();
  });
});

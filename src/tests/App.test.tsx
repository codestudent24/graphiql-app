import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App tests', () => {
  it('displays correct component', () => {
    render(<App />);
    const divText = screen.getByText(/App div/i);
    expect(divText).not.toBeNull();
  });
});

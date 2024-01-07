import { render } from '@testing-library/react';
import { Login } from '../../features/authentication/Login';
import { Register } from '../../features/authentication/Register';

describe('Login component tests', () => {
  it('renders Login correct', () => {
    const { getAllByRole } = render(<Login />);
    const inputs = getAllByRole('textbox');
    expect(inputs.length).toBe(2);
  });
  it('renders Register correct', () => {
    const { getAllByRole } = render(<Register />);
    const inputs = getAllByRole('textbox');
    expect(inputs.length).toBe(2);
  });
});

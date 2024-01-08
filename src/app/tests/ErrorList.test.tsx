import { render } from '@testing-library/react';
import ErrorList from '../../features/ErrorList';

describe('ErrorList', () => {
  it('renders error messages correctly', () => {
    const errors = ['Error 1', 'Error 2', 'Error 3'];

    const { container, getByText } = render(<ErrorList errors={errors} />);

    expect(container.querySelectorAll('li').length).toBe(errors.length);

    errors.forEach((error) => {
      expect(getByText(error)).toBeTruthy();
    });
  });

  it('renders nothing when errors array is empty', () => {
    const { container } = render(<ErrorList errors={[]} />);

    expect(container.querySelectorAll('li').length).toBe(0);
  });
});

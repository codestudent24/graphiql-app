import { act, render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../appStore';
import { Header } from '../../../features/Header';

jest.mock('../../../features/Header', () => {
  const originalModule = jest.requireActual('../../../features/Header');
  return {
    ...originalModule,
    defaultProps: {
      ...originalModule.defaultProps,
      changeLanguage: jest.fn(),
    },
  };
});

describe('Header functions', () => {
  it('should toggle language correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    act(() => {
      fireEvent.click(screen.getByText('EN'));
    });
  });

  it('should update sticky state correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
    const testDiv = screen.getByTestId('header');

    act(() => {
      window.dispatchEvent(new Event('scroll', { bubbles: true }));
    });

    waitFor(() => {
      expect(testDiv?.classList.contains('headerScrolled')).toBe(true);
    });

    act(() => {
      window.scrollY = 25;
      window.dispatchEvent(new Event('scroll', { bubbles: true }));
    });
    waitFor(() => {
      expect(testDiv?.classList.contains('headerScrolled')).toBe(false);
    });

    act(() => {
      window.scrollY = -1;
      window.dispatchEvent(new Event('scroll', { bubbles: true }));
    });

    waitFor(() => {
      expect(testDiv?.classList.contains('headerScrolled')).toBe(false);
    });
  });
});

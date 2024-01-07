import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../appStore';

import Toolbar from '../../../features/graphiql/EditorContainer/Toolbar';

describe('Toolbar', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Toolbar isEditable={false} setIsEditable={() => {}} language="EN" />
        </Provider>
      </BrowserRouter>,
    );

    expect(getByText('Go')).toBeTruthy();
    expect(getByText('Editor')).toBeTruthy();
  });

  it('fires the fetcher function on "Go" button click', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    const consoleLogSpy = jest.spyOn(console, 'log');
    consoleErrorSpy.mockImplementation(() => {});
    consoleLogSpy.mockImplementation(() => {});
    const fetcherMock = jest.fn();
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Toolbar isEditable={false} setIsEditable={() => {}} language="EN" />
        </Provider>
      </BrowserRouter>,
    );

    fireEvent.click(getByText('Go'));
    waitFor(() => {
      expect(fetcherMock).toHaveBeenCalledTimes(1);
    });
    consoleErrorSpy.mockRestore();
  });

  it('toggles between "Editor" and "Results" on button click', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Toolbar isEditable={false} setIsEditable={() => {}} language="EN" />
        </Provider>
      </BrowserRouter>,
    );

    const button = getByText('Editor');

    fireEvent.click(button);
    waitFor(() => {
      expect(getByText('Results')).toBeTruthy();
    });

    fireEvent.click(button);
    waitFor(() => {
      expect(getByText('Editor')).toBeTruthy();
    });
  });
});

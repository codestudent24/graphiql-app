import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../appStore';
import InputURL from '../../features/graphiql/URL';

describe('URL render correct', () => {
  it('base url is correct', () => {
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <InputURL handleDocsIconClick={() => {}} language="EN" />
      </Provider>,
    );
    const submitButton = getByText('Submit');
    expect(submitButton).not.toBeNull();

    const input = getByRole('textbox') as HTMLInputElement;
    expect(input).not.toBeNull();
    expect(input.value).toBe('https://rickandmortyapi.com/graphql');
  });
});

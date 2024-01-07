import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../appStore';
import Editor from '../../../features/graphiql/EditorContainer/Editor';

describe('Editor render correct', () => {
  it('render Editor', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    consoleErrorSpy.mockImplementation(() => {});
    const { findByText } = render(
      <Provider store={store}>
        <Editor />
      </Provider>,
    );
    const editorComponent = await findByText(/query/);
    expect(editorComponent).not.toBeNull();
    consoleErrorSpy.mockRestore();
  });
});

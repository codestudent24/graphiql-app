import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../appStore';
import Editor from '../../../features/graphiql/EditorContainer/Editor';

describe('Editor render correct', () => {
  it('render Editor', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <Editor />
      </Provider>,
    );
    const editorComponent = await findByText(/query/g);
    expect(editorComponent).not.toBeNull();
  });
});

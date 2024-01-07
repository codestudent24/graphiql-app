import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../appStore';
import Variables from '../../../features/graphiql/EditorContainer/Variables';

describe('Variables render correct', () => {
  it('render Variables component, handle error', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <Variables />
      </Provider>,
    );
    const editorComponent = await findByText(/"id" is not defined in query/);
    expect(editorComponent).not.toBeNull();
  });
});

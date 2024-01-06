import { getIntrospectionQuery } from 'graphql';
import { useSchemaFetcher } from '../../features/graphiql/Documentation/model/getShema';
import { useAppDispatch } from '../appHooks';
import { mockSchema } from './Mocks/mockSchema';

const schemaValue = mockSchema.__schema;

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: { __schema: schemaValue } }),
  }),
) as jest.Mock;

jest.mock('../appHooks', () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock('../rootSlice', () => ({
  setSchema: jest.fn(),
}));

describe('useSchemaFetcher', () => {
  it('fetches schema data and dispatches setSchema action', async () => {
    const dispatchMock = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatchMock);

    const fetcher = useSchemaFetcher();
    await fetcher('https://rickandmortyapi.com/graphql');

    expect(global.fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: getIntrospectionQuery() }),
    });

    expect(dispatchMock).toHaveBeenCalled();
  });

  it('handles error gracefully', async () => {
    global.fetch = jest.fn(() => Promise.reject('mocked error'));

    const fetcher = useSchemaFetcher();
    const result = await fetcher('https://rickandmortyapi.com/graphql');

    expect(result).toBeFalsy();
  });
});

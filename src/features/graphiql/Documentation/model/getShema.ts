import { IntrospectionQuery, getIntrospectionQuery } from 'graphql';
import { useAppDispatch } from '../../../../app/appHooks';
import { setSchema } from '../../../../app/rootSlice';

interface IIntrospectionQuery {
  data: IntrospectionQuery;
}

export function useSchemaFetcher() {
  const dispatch = useAppDispatch();
  return async function (url: string) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: getIntrospectionQuery() }),
      });

      const data: IIntrospectionQuery = await response.json();
      const result = data.data.__schema;

      dispatch(setSchema(result));
      return true;
    } catch (error) {
      console.error('Error fetching schema:', error);
      return false;
    }
  };
}

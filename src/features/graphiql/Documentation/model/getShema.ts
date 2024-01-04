import { IntrospectionQuery, IntrospectionSchema, getIntrospectionQuery } from 'graphql';

/* export function useSchemaFetcher() {
  return async function fetcher(url: string): Promise<IntrospectionQuery> {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: getIntrospectionQuery() }),
    });

    const data: IntrospectionQuery = await response.json();
    console.log('GraphQL Schema:', data);
    return data;
  };
}
 */

interface IIntrospectionQuery {
  data: IntrospectionQuery;
}

export async function schemaFetcher(url: string): Promise<IntrospectionSchema> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: getIntrospectionQuery() }),
  });

  const data: IIntrospectionQuery = await response.json();
  return data.data.__schema;
}

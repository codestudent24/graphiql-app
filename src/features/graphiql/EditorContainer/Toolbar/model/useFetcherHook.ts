import { useAppDispatch } from '../../../../../app/appHooks';
import { setResponseData } from '../../../../../app/rootSlice';

export function useFetcher() {
  const dispatch = useAppDispatch();

  return async function fetcher(value: string, headers: string, url: string) {
    const requestHeaders = new Headers();
    requestHeaders.append('Content-type', 'application/json');
    if (headers) {
      headers = JSON.parse(headers);
      for (const [key, value] of Object.entries(headers)) {
        requestHeaders.append(key, value);
      }
    }

    const request = await fetch(url, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify({
        query: value,
      }),
    });

    const data = await request.json();
    dispatch(setResponseData(JSON.stringify(data, null, 2)));
  };
}

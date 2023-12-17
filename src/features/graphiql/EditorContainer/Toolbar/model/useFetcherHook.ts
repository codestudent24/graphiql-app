import { useAppDispatch } from '../../../../../app/appHooks';
import { setResponseData } from '../../../../../app/rootSlice';

export function useFetcher() {
  const dispatch = useAppDispatch();
  return async function fetcher(value: string, url: string) {
    console.log(`input value\n${value}`);
    const request = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: value,
      }),
    });
    const data = await request.json();
    dispatch(setResponseData(JSON.stringify(data)));
  };
}

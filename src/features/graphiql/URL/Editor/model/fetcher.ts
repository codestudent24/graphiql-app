export async function fetcher(value: string, url: string) {
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
  console.log(JSON.stringify(data));
}

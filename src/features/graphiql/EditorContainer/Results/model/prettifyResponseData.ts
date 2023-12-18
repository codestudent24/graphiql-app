export default function prettifyResponseData(data: string) {
  return data.replace(/"/g, '');
}

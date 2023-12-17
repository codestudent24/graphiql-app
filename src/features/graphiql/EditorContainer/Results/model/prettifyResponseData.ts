function addNewLines(data: string) {
  let bracketsCounter = 0;
  const dataArray = data.split('');
  const tab = '  ';
  for (let i = 0; i < dataArray.length; i += 1) {
    if (dataArray[i] === '{' || dataArray[i] === '[') {
      bracketsCounter += 1;
      if (i > 0 && dataArray[i - 1] === ',') {
        dataArray[i] = '\n' + tab.repeat(bracketsCounter - 1) + dataArray[i] + '\n' + tab.repeat(bracketsCounter);
      } else {
        dataArray[i] = dataArray[i] + '\n' + tab.repeat(bracketsCounter);
      }
    } else if (dataArray[i] === '}' || dataArray[i] === ']') {
      bracketsCounter = bracketsCounter > 1 ? bracketsCounter - 1 : 0;
      dataArray[i] = '\n' + tab.repeat(bracketsCounter) + dataArray[i];
    }
  }
  return dataArray.join('');
}

export default function prettifyResponseData(data: string) {
  const prettified = data.replace(/"/g, '').replace(/:/g, ': ');
  return addNewLines(prettified);
}

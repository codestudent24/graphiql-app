function handleTabs(input: string, tabCount: number = 1) {
  const tab = '  ';
  const trimmed = input.replace(/\s*\n/g, '\n');
  const openBracketIndex = trimmed.indexOf('{') + 1;
  const closeBracketIndex = trimmed.lastIndexOf('}') - 1;
  const beforeBrackets = trimmed.slice(0, openBracketIndex);
  let betweenBrackets = trimmed
    .slice(openBracketIndex, closeBracketIndex)
    .replace(/\n\s*/g, `\n${tab.repeat(tabCount)}`)
    .replace(/(\s?\n\s*)$/, '\n ');
  const betweenOpenBracketIndex = betweenBrackets.indexOf('{');
  const betweenCloseBracketIndex = betweenBrackets.lastIndexOf('}');
  if (betweenOpenBracketIndex !== -1 && betweenCloseBracketIndex !== -1) {
    betweenBrackets = handleTabs(betweenBrackets, tabCount + 1);
  }
  const afterBrackets = trimmed.slice(closeBracketIndex);
  return beforeBrackets + betweenBrackets + afterBrackets;
}

export function prettify(input: string) {
  const result = input
    .trim()
    .replace(/ +\)/g, ')')
    .replace(/ +:/g, ':')
    .replace(/ {2,}/g, ' ')
    .replace(/ +,/g, ',')
    .replace(/\n/g, '')
    .split(' ');
  for (let i = 0; i < result.length; i += 1) {
    const subArray = result[i].split('');
    for (let j = 0; j < subArray.length; j += 1) {
      if (subArray[j] === '{') {
        if (j > 0 && subArray[j - 1] !== ' ') {
          subArray[j] = ` {\n`;
        } else {
          subArray[j] = `{\n`;
        }
      } else if (subArray[j] === '}') {
        subArray[j] = `\n}`;
      }
    }
    let subString = subArray.join('');
    if (subString.match(/^\w+,?$/)) subString = `\n${subString.trim()}`;
    result[i] = subString;
  }
  const withLines = result
    .join(' ')
    .replace(/(\n{2,}|\n\s*\n)/g, '\n')
    .replaceAll(/ {2,}/g, ' ')
    .trim();
  return handleTabs(withLines);
}

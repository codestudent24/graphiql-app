import { VariableInfoType } from '../../../../../shared/types';

export type VariablesType = {
  [key: string]: string;
};

export default function replaceVariables(string: string, variables: VariablesType) {
  // console.log(string);
  // console.log(variables);
  const matched = string.match(/\$[a-zA-z]+/gm);
  if (matched === null) return string;
  // console.log(matched);
  try {
    let result = string;
    for (let i = 0; i < matched.length; i += 1) {
      const variableName = matched[i].slice(1);
      // console.log(`variableName: ${variableName}`);
      if (variables[variableName] === undefined) throw new Error(`variable ${variableName} does not exist`);
      // console.log(`variable value: ${variables[variableName]}`);
      result = result.replace(`${matched[i]}`, variables[variableName]);
    }
    return result;
  } catch (error) {
    if (error instanceof Error) return error.message;
    return 'unexpected error';
  }
}

export function makeVariablesSet(request: string) {
  const queryString = request.match(/^query [a-zA-z]*\(\$.+\)/gm);
  const variablesSet: VariableInfoType[] = [];
  if (queryString !== null) {
    const variablesString = queryString[0].replace(/ /g, '').match(/\(\$.+\)/gm);
    if (variablesString !== null) {
      console.log(typeof variablesString[0]);
      const variablesArray = variablesString[0].slice(1, -1).split(',');
      for (let i = 0; i < variablesArray.length; i += 1) {
        const varInfo = variablesArray[i].split(':');
        variablesSet.push({
          name: varInfo[0].trim().slice(1),
          type: varInfo[1].trim().toLocaleLowerCase().split('|'),
          value: null,
        });
      }
    }
  }
  return variablesSet;
}

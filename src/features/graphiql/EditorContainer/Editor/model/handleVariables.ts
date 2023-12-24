import { VariableInfoType } from '../../../../../shared/types';
import { queryReg } from '../../../../../shared/constants';

function checkQuery(varSet: VariableInfoType[], varArray: string[]) {
  const errors: string[] = [];
  for (let i = 0; i < varArray.length; i += 1) {
    if (varArray[i].match(/\$[a-zA-Z]+:[a-zA-Z]+/)) {
      const varInfo = varArray[i].split(':');
      const name = varInfo[0].trim().slice(1);
      const varTypes = varInfo[1].trim().toLocaleLowerCase().split('|');
      for (const type of varTypes) {
        if (type !== 'string' && type !== 'number' && type !== 'boolean') {
          errors.push(`"${name}" type should be "String", "Number" or "Boolean"`);
        } else {
          varSet.push({
            name,
            type: varTypes,
            value: null,
          });
        }
      }
    }
  }
  return errors;
}

export function makeVariablesSet(request: string, setErrors: (errors: string[]) => void) {
  const queryString = request.match(queryReg);
  const variablesSet: VariableInfoType[] = [];
  if (queryString !== null) {
    const variablesString = queryString[0].replace(/ /g, '').match(/\(\$.+\)/gm);
    if (variablesString !== null) {
      const variablesArray = variablesString[0].slice(1, -1).split(',');
      const errors = checkQuery(variablesSet, variablesArray);
      setErrors(errors);
    }
  }
  return variablesSet;
}

export function makeVariables(request: string) {
  const queryString = request.match(queryReg);
  const variablesSet: VariableInfoType[] = [];
  let errors: string[] = [];
  if (queryString !== null) {
    const variablesString = queryString[0].replace(/ /g, '').match(/\(\$.+\)/gm);
    if (variablesString !== null) {
      const variablesArray = variablesString[0].slice(1, -1).split(',');
      errors = checkQuery(variablesSet, variablesArray);
    }
  }
  return {
    errors,
    variablesSet,
  };
}

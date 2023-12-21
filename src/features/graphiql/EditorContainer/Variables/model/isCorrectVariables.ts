import { useAppDispatch, useAppSelector } from '../../../../../app/appHooks';
import { setVariableValue } from '../../../../../app/rootSlice';
import { VariableInfoType } from '../../../../../shared/types';

type CorrectValueType = string | number | boolean;

function checkQueryVariables(queryVars: [string, unknown][], variables: VariableInfoType[], errors: string[]) {
  for (let i = 0; i < queryVars.length; i += 1) {
    const dataVarName = queryVars[i][0];
    const variable = variables.find((el) => el.name === dataVarName);
    if (variable === undefined) errors.push(`"${dataVarName}" is not defined in query`);
  }
}

function isCorrectValue(
  variable: [string, unknown] | undefined,
  correctName: string,
  correctTypes: string[],
  errors: string[],
) {
  if (variable === undefined) {
    errors.push(`Variable "${correctName}" not defined`);
  } else {
    if (correctTypes.indexOf(typeof variable[1]) === -1) {
      console.log(correctTypes);
      console.log(variable);
      errors.push(`"${correctName}" should be of type ${correctTypes.join(' | ')}`);
    } else {
      return variable[1] as CorrectValueType;
    }
  }
  return null;
}

export function useCheckVariablesHook() {
  const { variables } = useAppSelector((state) => state.root);
  const dispatch = useAppDispatch();

  return function (parsedInput: object) {
    const errors: string[] = [];
    const entries = Object.entries(parsedInput) as [string, unknown][];
    if (entries.length) {
      checkQueryVariables(entries, variables, errors);
      for (let i = 0; i < variables.length; i += 1) {
        const inputVariable = entries.find((el) => el[0] === variables[i].name);
        const value = isCorrectValue(inputVariable, variables[i].name, variables[i].type, errors);
        if (value) dispatch(setVariableValue({ index: i, value }));
      }
    }
    console.log('errors', errors);
    return errors;
  };
}

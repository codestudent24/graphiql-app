import { VariableInfoType } from '../../../../../shared/types';
import { queryReg } from '../../../../../shared/constants';

export default function replaceVariables(request: string, variables: VariableInfoType[]) {
  const req = request.trim();
  try {
    if (req.match(/^query/)) {
      const query = req.match(queryReg);
      if (query === null) {
        throw new Error('Invalid query');
      } else {
        let body = req.slice(query[0].length);
        const matched = body.match(/\$[a-zA-z]+/gm);
        if (matched === null) return body;

        for (let i = 0; i < matched.length; i += 1) {
          const variableName = matched[i].slice(1);
          const variable = variables.find((v) => v.name === variableName);
          if (variable === undefined) throw new Error(`"${variableName}" does not exist`);
          if (variable.value === null) {
            throw new Error(`"${variableName}" value is not defined`);
          } else {
            body = body.replace(`${matched[i]}`, `${variable.value}`);
          }
        }
        return body;
      }
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    console.error('Error occured, try to change query');
  }
}

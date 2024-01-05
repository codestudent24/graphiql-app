import { VariableInfoType } from '../../../../../shared/types';

export function parseObjFromStorage(input: VariableInfoType[]) {
  const result: { [key: string]: string | number | null | boolean } = {};

  for (const obj of input) {
    const { name, type, value } = obj;

    if (type && type.length > 0) {
      switch (type[0]) {
        case 'number':
          result[name] = parseFloat(String(value));
          break;
        case 'string':
          result[name] = String(value);
          break;
        default:
          result[name] = value;
          break;
      }
    } else {
      result[name] = '';
    }
  }

  return JSON.stringify(result);
}

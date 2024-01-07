import { VariableInfoType } from './../../../shared/types';
import { checkVariables } from '../../../features/graphiql/EditorContainer/Variables/model/isCorrectVariables';

describe('checkVariables function', () => {
  const createVariable = (name: string, type: string, value: string | number | boolean | null): VariableInfoType => ({
    name,
    type: [type],
    value,
  });

  it('handles empty input and variables', () => {
    const parsedInput = {};
    const variables: VariableInfoType[] = [];

    const result = checkVariables(parsedInput, variables);

    expect(result.variablesSet).toHaveLength(0);
    expect(result.errors).toHaveLength(0);
  });

  it('handles incorrect variable type', () => {
    const parsedInput = {
      variable1: 'value1',
      variable2: 'string',
    };

    const variables: VariableInfoType[] = [
      createVariable('variable1', 'string', 'value1'),
      createVariable('variable2', 'number', 'string'),
    ];

    const result = checkVariables(parsedInput, variables);

    expect(result.variablesSet).toHaveLength(1);
    expect(result.variablesSet[0]).toEqual({
      name: 'variable1',
      type: ['string'],
      value: 'value1',
    });

    expect(result.errors).toHaveLength(1);
    expect(result.errors).toContain('"variable2" should be of type number');
  });
});

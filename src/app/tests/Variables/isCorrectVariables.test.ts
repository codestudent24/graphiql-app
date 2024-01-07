import { VariableInfoType } from './../../../shared/types';
import { checkVariables } from '../../../features/graphiql/EditorContainer/Variables/model/isCorrectVariables';

describe('checkVariables function', () => {
  const createVariable = (name: string, type: string, value: string | number | boolean | null): VariableInfoType => ({
    name,
    type: [type],
    value,
  });

  /* it('correctly checks variables and returns variablesSet and errors', () => {
    const parsedInput = {
      variable1: 'value1',
      variable2: 123,
      variable3: true,
    };

    const variables: VariableInfoType[] = [
      createVariable('variable1', 'string', 'value1'),
      createVariable('variable2', 'number', 123),
      createVariable('variable3', 'boolean', true),
      createVariable('variable4', 'string', 'variable4'),
    ];

    const result = checkVariables(parsedInput, variables);
    console.log('result', result);

    expect(result.variablesSet).toHaveLength(3);
    expect(result.variablesSet[0]).toEqual({
      name: 'variable1',
      type: ['string'],
      value: 'value1',
    });
    expect(result.variablesSet[1]).toEqual({
      name: 'variable2',
      type: ['number'],
      value: 123,
    });
    expect(result.variablesSet[2]).toEqual({
      name: 'variable3',
      type: ['boolean'],
      value: true,
    });

    expect(result.errors).toHaveLength(2);
    expect(result.errors).toContain('"variable4" is not defined in query');
    expect(result.errors).toContain('Variable "variable4" not defined');
  }); */

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

    expect(result.variablesSet).toHaveLength(2);
    expect(result.variablesSet[0]).toEqual({
      name: 'variable1',
      type: ['string'],
      value: 'value1',
    });

    expect(result.errors).toHaveLength(1);
    expect(result.errors).toContain('"variable2" should be of type number');
  });
});

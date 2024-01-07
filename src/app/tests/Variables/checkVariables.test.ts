import { checkVariables } from '../../../features/graphiql/EditorContainer/Variables/model/isCorrectVariables';
import { VariableInfoType } from '../../../shared/types';

const parsedInput = {
  id: '1',
  isTrue: true,
};

const inputWithErrors = {
  id: '1',
  isTrue: 'true',
  firstName: 'John',
};

const variables: VariableInfoType[] = [
  {
    name: 'id',
    type: ['string'],
    value: null,
  },
  {
    name: 'isTrue',
    type: ['boolean'],
    value: null,
  },
];

describe('make variables from editor input', () => {
  it('make variables from correct input', () => {
    const result = checkVariables(parsedInput, variables);
    const correctResult = {
      errors: [],
      variablesSet: [
        { name: 'id', type: ['string'], value: '1' },
        { name: 'isTrue', type: ['boolean'], value: true },
      ],
    };
    expect(result).toEqual(correctResult);
  });
  it('handle input with undefined variable', () => {
    const result = checkVariables(inputWithErrors, variables);
    const correctResult = {
      errors: ['"firstName" is not defined in query', '"isTrue" should be of type boolean'],
      variablesSet: [
        { name: 'id', type: ['string'], value: '1' },
        { name: 'isTrue', type: ['boolean'], value: null },
      ],
    };
    expect(result).toEqual(correctResult);
  });
});

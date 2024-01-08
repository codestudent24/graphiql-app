import { makeVariables } from '../../../features/graphiql/EditorContainer/Editor/model/handleVariables';

const correctInput = `query ($id: String) {
  character(id: $id) {
    id
    name,
    status
  }
}`;

const incorrectInput = `query ($id: WrongType) {
  character(id: $id) {
    id
    name,
    status
  }
}`;

describe('make variables from editor input', () => {
  it('make variables from correct input', () => {
    const variablesSet = makeVariables(correctInput);
    const result = {
      errors: [],
      variablesSet: [{ name: 'id', type: ['string'], value: null }],
    };
    expect(variablesSet).toEqual(result);
  });
  it('make errors from incorrect input', () => {
    const variablesSet = makeVariables(incorrectInput);
    const result = {
      errors: [`"id" type should be "String", "Number" or "Boolean"`],
      variablesSet: [],
    };
    expect(variablesSet).toEqual(result);
  });
});

import { prettify } from '../../../features/graphiql/EditorContainer/PrettifyButton/model/prettify';

describe('prettify function', () => {
  it('correctly prettifies simple input', () => {
    const input = 'const example = { key: "value", otherKey: "otherValue" };';
    const expectedOutput = `const
example = {
  key: "value", otherKey: "otherValue"
};`;
    expect(prettify(input)).toBe(expectedOutput);
  });

  it('correctly prettifies nested input', () => {
    const input = 'const obj = { prop: { nested: { key: "value" } } };';
    const expectedOutput = `const
obj = {
  prop: {
    nested: {
      key: "value"
  }
  }
};`;
    expect(prettify(input)).toBe(expectedOutput);
  });

  // Add more test cases for different scenarios

  it('handles empty input', () => {
    expect(prettify('')).toBe('');
  });

  it('handles input with no spaces around brackets', () => {
    const input = 'const example={key:"value",otherKey:"otherValue"};';
    const expectedOutput = `const example= {
  key:"value",otherKey:"otherValue"
};`;
    expect(prettify(input)).toBe(expectedOutput);
  });

  it('handles input with no new lines', () => {
    const input = 'const example = { key: "value", otherKey: "otherValue" };';
    const expectedOutput = `const
example = {
  key: "value", otherKey: "otherValue"
};`;
    expect(prettify(input)).toBe(expectedOutput);
  });
});

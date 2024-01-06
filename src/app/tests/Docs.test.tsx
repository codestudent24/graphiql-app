import { render, screen, fireEvent } from '@testing-library/react';
import { IntrospectionSchema } from 'graphql';
import { mockSchema, mockLevel } from './Mocks/mockSchema';
//import DocumentationContainer from '../../features/graphiql/Documentation';

import getTypes from '../../features/graphiql/Documentation/model/getTypes';

describe('getTypes', () => {
  const schema: IntrospectionSchema = mockSchema.__schema;

  const mockOnButtonClick = jest.fn();

  it('renders correctly for queryType', () => {
    const { getByText } = render(getTypes(schema, schema, schema, mockOnButtonClick));

    expect(getByText('A GraphQL schema provides a root type for each kind of operation.')).toBeTruthy();

    expect(screen.getByText('All Schema Types')).toBeTruthy();

    const queryLink = screen.getByText('Query');
    expect(screen.getByRole('button', { name: 'Query' })).toBeTruthy();
    expect(queryLink).toBeTruthy();

    fireEvent.click(queryLink);
    expect(mockOnButtonClick).toHaveBeenCalled();

    const characterBtn = screen.getByRole('button', { name: 'Character' });
    expect(characterBtn).toBeTruthy();
    fireEvent.click(characterBtn);

    const queryType = schema.types.find((f) => f.name === 'Character');

    expect(mockOnButtonClick).toHaveBeenCalledWith(queryType, 'add', schema);
  });

  it('renders correctly for given level', () => {
    render(getTypes(schema, schema, mockLevel, mockOnButtonClick));

    const character = mockLevel && 'fields' in mockLevel && mockLevel?.fields[0];

    const characterLink = screen.getByText('character');
    expect(characterLink).toBeTruthy();

    fireEvent.click(characterLink);
    expect(mockOnButtonClick).toHaveBeenCalledTimes(3);
    expect(mockOnButtonClick).toHaveBeenCalledWith(character, 'add', mockLevel);
  });

  it('back button rendered and called with proper parametrs', () => {
    render(getTypes(schema, schema, mockLevel, mockOnButtonClick));

    const backBtn = screen.getByRole('button', { name: '⟵ Docs' });
    expect(backBtn).toBeTruthy();

    fireEvent.click(backBtn);
    expect(mockOnButtonClick).toHaveBeenCalledWith(mockLevel, 'delete', undefined);
  });

  it('render type in level', () => {
    const queryType = schema.types.find((f) => f.name === 'Query');
    const characterField = (queryType && 'fields' in queryType && queryType.fields[0]) || null;

    render(getTypes(schema, mockLevel, characterField, mockOnButtonClick));

    const backBtn = screen.getByRole('button', { name: '⟵ Query' });
    screen.debug();
    expect(backBtn).toBeTruthy();

    fireEvent.click(backBtn);
    expect(mockOnButtonClick).toHaveBeenCalledWith(queryType, 'add', schema);
  });
});

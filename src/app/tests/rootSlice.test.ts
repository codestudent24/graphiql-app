import {
  initialState,
  initialRequestData,
  setURL,
  removeURL,
  setRequestData,
  removeRequestData,
  setResponseData,
  removeResponseData,
  setVariables,
  setVariableValue,
  removeVariables,
  setHeaders,
  removeHeaders,
  setSchema,
  rootSlice,
} from './../rootSlice';
import configureMockStore from 'redux-mock-store';

import { mockSchema } from './Mocks/mockSchema';

const schema = mockSchema.__schema;

const mockStore = configureMockStore();

describe('rootSlice', () => {
  it('should handle setURL', () => {
    const store = mockStore(initialState);

    const newURL = 'https://new-api.com';
    store.dispatch(setURL(newURL));

    const expectedActions = [{ type: setURL.type, payload: newURL }];
    expect(store.getActions()).toEqual(expectedActions);

    const nextState = rootSlice.reducer(initialState, setURL(newURL));
    expect(nextState).toEqual({
      url: newURL,
      requestData: initialRequestData,
      responseData: '',
      variables: [],
      headers: '',
      schema: null,
    });
  });

  it('should handle setRequestData', () => {
    const newRequestData = 'query{}';
    const nextState = rootSlice.reducer(initialState, setRequestData(newRequestData));
    expect(nextState).toEqual({
      url: 'https://rickandmortyapi.com/graphql',
      requestData: newRequestData,
      responseData: '',
      variables: [],
      headers: '',
      schema: null,
    });
  });

  it('should handle removeURL', () => {
    const store = mockStore({ root: initialState });

    store.dispatch(removeURL());

    const expectedActions = [{ type: removeURL.type, payload: undefined }];
    expect(store.getActions()).toEqual(expectedActions);

    const nextState = rootSlice.reducer(initialState, removeURL());
    expect(nextState).toEqual({
      url: '',
      requestData: initialRequestData,
      responseData: '',
      variables: [],
      headers: '',
      schema: null,
    });
  });
  it('should handle removeRequestData', () => {
    const store = mockStore({ root: initialState });

    store.dispatch(removeRequestData());

    const expectedActions = [{ type: removeRequestData.type, payload: undefined }];
    expect(store.getActions()).toEqual(expectedActions);

    const nextState = rootSlice.reducer(initialState, removeRequestData());
    expect(nextState).toEqual({
      url: 'https://rickandmortyapi.com/graphql',
      requestData: '',
      responseData: '',
      variables: [],
      headers: '',
      schema: null,
    });
  });
  it('should handle setResponseData', () => {
    const store = mockStore({ root: initialState });
    const newResponseData = 'query{}';
    store.dispatch(setResponseData(newResponseData));

    const expectedActions = [{ type: setResponseData.type, payload: newResponseData }];
    expect(store.getActions()).toEqual(expectedActions);

    const nextState = rootSlice.reducer(initialState, setResponseData(newResponseData));
    expect(nextState).toEqual({
      url: 'https://rickandmortyapi.com/graphql',
      requestData: initialRequestData,
      responseData: newResponseData,
      variables: [],
      headers: '',
      schema: null,
    });
  });

  it('should handle removeResponseData', () => {
    const store = mockStore({ root: initialState });

    store.dispatch(removeResponseData());

    const expectedActions = [{ type: removeResponseData.type, payload: undefined }];
    expect(store.getActions()).toEqual(expectedActions);

    const currState = {
      url: 'https://rickandmortyapi.com/graphql',
      requestData: initialRequestData,
      responseData: 'someResponseData',
      variables: [],
      headers: '',
      schema: null,
    };
    const nextState = rootSlice.reducer(currState, removeResponseData());
    expect(nextState).toEqual({
      url: 'https://rickandmortyapi.com/graphql',
      requestData: initialRequestData,
      responseData: '',
      variables: [],
      headers: '',
      schema: null,
    });
  });

  it('should handle setVariables and removeVariables', () => {
    const store = mockStore({ root: initialState });
    const newVariables = [{ name: 'newVariable', type: ['newVariable'], value: 'newVariable' }];
    store.dispatch(setVariables(newVariables));

    const expectedActions = [{ type: setVariables.type, payload: newVariables }];
    expect(store.getActions()).toEqual(expectedActions);

    const nextStateAdd = rootSlice.reducer(initialState, setVariables(newVariables));
    expect(nextStateAdd).toEqual({
      url: 'https://rickandmortyapi.com/graphql',
      requestData: initialRequestData,
      responseData: '',
      variables: newVariables,
      headers: '',
      schema: null,
    });
    const nextStateRemove = rootSlice.reducer(initialState, removeVariables());
    expect(nextStateRemove).toEqual({
      url: 'https://rickandmortyapi.com/graphql',
      requestData: initialRequestData,
      responseData: '',
      variables: [],
      headers: '',
      schema: null,
    });
  });

  it('should handle setHeaders and removeHeaders', () => {
    const store = mockStore({ root: initialState });
    const newHeaders = 'newHeaders';
    store.dispatch(setHeaders(newHeaders));

    const expectedActions = [{ type: setHeaders.type, payload: newHeaders }];
    expect(store.getActions()).toEqual(expectedActions);

    const nextStateAdd = rootSlice.reducer(initialState, setHeaders(newHeaders));
    expect(nextStateAdd).toEqual({
      url: 'https://rickandmortyapi.com/graphql',
      requestData: initialRequestData,
      responseData: '',
      variables: [],
      headers: newHeaders,
      schema: null,
    });
    const nextStateRemove = rootSlice.reducer(initialState, removeHeaders());
    expect(nextStateRemove).toEqual({
      url: 'https://rickandmortyapi.com/graphql',
      requestData: initialRequestData,
      responseData: '',
      variables: [],
      headers: '',
      schema: null,
    });
  });

  it('should handle setVariableValue', () => {
    const initialState = {
      url: 'https://rickandmortyapi.com/graphql',
      requestData: initialRequestData,
      responseData: '',
      variables: [{ name: 'newVariable', type: ['newVariable'], value: 'newVariable' }],
      headers: '',
      schema: null,
    };
    const store = mockStore({ root: initialState });

    const variableValuePayload = { index: 0, value: 'some-value' };
    store.dispatch(setVariableValue(variableValuePayload));

    const expectedActions = [{ type: setVariableValue.type, payload: variableValuePayload }];
    expect(store.getActions()).toEqual(expectedActions);

    const nextState = rootSlice.reducer(initialState, setVariableValue(variableValuePayload));
    expect(nextState.variables[variableValuePayload.index].value).toEqual(variableValuePayload.value);
  });

  it('should handle setSchema', () => {
    const store = mockStore({ root: initialState });

    const newSchema = schema;
    store.dispatch(setSchema(newSchema));

    const expectedActions = [{ type: setSchema.type, payload: newSchema }];
    expect(store.getActions()).toEqual(expectedActions);

    const nextStateAdd = rootSlice.reducer(initialState, setSchema(newSchema));
    expect(nextStateAdd).toEqual({
      url: 'https://rickandmortyapi.com/graphql',
      requestData: initialRequestData,
      responseData: '',
      variables: [],
      headers: '',
      schema: newSchema,
    });
    const nextStateDelete = rootSlice.reducer(initialState, setSchema(null));
    expect(nextStateDelete).toEqual({
      url: 'https://rickandmortyapi.com/graphql',
      requestData: initialRequestData,
      responseData: '',
      variables: [],
      headers: '',
      schema: null,
    });
  });
});

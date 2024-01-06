import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IntrospectionSchema } from 'graphql';
import { VariableInfoType } from '../shared/types';
import { Draft } from 'immer';

interface authState {
  url: string;
  requestData: string;
  responseData: string;
  variables: VariableInfoType[];
  headers: string;
  schema: IntrospectionSchema | null;
}

interface ISetVariableValue {
  index: number;
  value: string | number | boolean | null;
}

const initialRequestData = `query ($id: String) {
  character(id: $id) {
    id
    name,
    status
  }
}`;

const initialState: authState = {
  url: 'https://rickandmortyapi.com/graphql',
  requestData: initialRequestData,
  responseData: '',
  variables: [],
  headers: '',
  schema: null,
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setURL: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    removeURL: (state) => {
      state.url = '';
    },
    setRequestData: (state, action: PayloadAction<string>) => {
      state.requestData = action.payload;
    },
    removeRequestData: (state) => {
      state.requestData = '';
    },
    setResponseData: (state, action: PayloadAction<string>) => {
      state.responseData = action.payload;
    },
    removeResponseData: (state) => {
      state.responseData = '';
    },
    setVariables: (state, action: PayloadAction<VariableInfoType[]>) => {
      state.variables = action.payload;
    },
    setVariableValue: (state, action: PayloadAction<ISetVariableValue>) => {
      const { index, value } = action.payload;
      state.variables[index].value = value;
    },
    removeVariables: (state) => {
      state.variables = [];
    },
    setHeaders: (state, action: PayloadAction<string>) => {
      state.headers = action.payload;
    },
    removeHeaders: (state) => {
      state.headers = '';
    },
    setSchema: (state, action: PayloadAction<IntrospectionSchema | null>) => {
      state.schema = action.payload ? createWritableDraft(action.payload) : null;
    },
  },
});

export const {
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
} = rootSlice.actions;

export default rootSlice.reducer;

function createWritableDraft<T>(draft: T): Draft<T> {
  return draft as Draft<T>;
}

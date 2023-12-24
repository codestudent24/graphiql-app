import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VariableInfoType } from '../shared/types';

interface authState {
  url: string;
  requestData: string;
  responseData: string;
  variables: VariableInfoType[];
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
      console.log('set variables:');
      console.log(action.payload);
      state.variables = action.payload;
    },
    setVariableValue: (state, action: PayloadAction<ISetVariableValue>) => {
      const { index, value } = action.payload;
      state.variables[index].value = value;
    },
    removeVariables: (state) => {
      state.variables = [];
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
} = rootSlice.actions;

export default rootSlice.reducer;

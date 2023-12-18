import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface authState {
  url: string;
  requestData: string;
  responseData: string;
  variables: object;
}

const initialRequestData = `{
  characters {
    results {
      name
    }
  }
}`;

const initialState: authState = {
  url: 'https://rickandmortyapi.com/graphql',
  requestData: initialRequestData,
  responseData: '',
  variables: {},
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
    setVariables: (state, action: PayloadAction<object>) => {
      state.variables = action.payload;
    },
    removeVariables: (state) => {
      state.variables = {};
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
  removeVariables,
} = rootSlice.actions;

export default rootSlice.reducer;

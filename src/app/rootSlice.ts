import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface authState {
  url: string;
}

const initialState: authState = {
  url: 'https://rickandmortyapi.com/graphql',
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    changeURL: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    removeURL: (state) => {
      state.url = '';
    },
  },
});

export const { changeURL, removeURL } = rootSlice.actions;

export default rootSlice.reducer;

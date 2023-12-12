import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface authState {
  email: string | null;
  uid: string | null;
}

const initialState: authState = {
  email: null,
  uid: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<authState>) => {
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
    removeUser: (state) => {
      state.email = null;
      state.uid = null;
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;

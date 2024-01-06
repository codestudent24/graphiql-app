import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAuthState {
  email: string | null;
  uid: string | null;
  isAnonymous: boolean;
}

const initialState: IAuthState = {
  email: null,
  uid: null,
  isAnonymous: true,
};

type AddUserPayloadType = {
  email: string | null;
  uid: string;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<AddUserPayloadType>) => {
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.isAnonymous = false;
    },
    removeUser: (state) => {
      state.email = null;
      state.uid = null;
      state.isAnonymous = true;
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;

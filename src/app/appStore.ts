import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import rootReducer from './rootSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    root: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

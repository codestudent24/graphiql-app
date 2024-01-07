import configureMockStore from 'redux-mock-store';
import { addUser, removeUser, authSlice } from '../authSlice';

const mockStore = configureMockStore();

describe('authSlice', () => {
  it('should handle addUser', () => {
    const store = mockStore({ auth: { email: null, uid: null, isAnonymous: true } });

    const userPayload = { email: 'test@example.com', uid: '123' };
    store.dispatch(addUser(userPayload));

    const expectedActions = [{ type: addUser.type, payload: userPayload }];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should handle removeUser', () => {
    const store = mockStore({ auth: { email: 'test@example.com', uid: '123', isAnonymous: false } });

    store.dispatch(removeUser());

    const expectedActions = [{ type: removeUser.type }];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should have the correct initial state', () => {
    const initialState = authSlice.reducer(undefined, {
      PayloadAction: addUser,
      type: '',
    });
    expect(initialState).toEqual({ email: null, uid: null, isAnonymous: true });
  });

  it('should handle addUser and update state correctly', () => {
    const initialState = { email: null, uid: null, isAnonymous: true };
    const userPayload = { email: 'test@example.com', uid: '123' };

    const nextState = authSlice.reducer(initialState, addUser(userPayload));
    expect(nextState).toEqual({ email: 'test@example.com', uid: '123', isAnonymous: false });
  });

  it('should handle removeUser and update state correctly', () => {
    const initialState = { email: 'test@example.com', uid: '123', isAnonymous: false };

    const nextState = authSlice.reducer(initialState, removeUser());
    expect(nextState).toEqual({ email: null, uid: null, isAnonymous: true });
  });
});

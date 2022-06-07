import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { User } from 'models/user';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, actions: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, actions: PayloadAction<User>) {
      state.logging = false;
    },
    loginFailed(state, actions: PayloadAction<string>) {
      state.logging = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

// Actions

export const authActions = authSlice.actions;

// Selector

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
// Reducer

const authReducer = authSlice.reducer;

export default authReducer;

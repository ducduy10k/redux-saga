import { PayloadAction } from '@reduxjs/toolkit';
import { call, fork, put, take } from 'redux-saga/effects';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    localStorage.setItem('access_token', 'abc');
    yield put(
      authActions.loginSuccess({
        id: '1',
        name: 'duy',
      })
    );
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message));
  }
}
function* handleLogout() {
  try {
    localStorage.removeItem('access_token');
    yield put(authActions.logout());
  } catch (error: any) {}
}

function* watchLoginFlow() {
  while (true) {
    const isLoggginIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggginIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type
      );
      yield fork(handleLogin, action.payload);
    }
    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export function* authSaga() {
  console.log('authSaga');
  yield fork(watchLoginFlow);
}

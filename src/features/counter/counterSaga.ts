import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery } from 'redux-saga/effects';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';
function* handleIncrementSaga(action: PayloadAction<number>) {
  //wait 1s
  console.log('waiting 1s');
  yield delay(1000);
  // dispatch
  console.log('waiting done, dispatch action');
  yield put(incrementSagaSuccess(action.payload));
}

// Counter saga chạy 1 lần ở root saga
export default function* counterSaga() {
  console.log('counter saga');
  // Bất cứ hành động nào đc dispacth nó sẽ nắng nghe
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
}

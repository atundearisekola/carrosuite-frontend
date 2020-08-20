import {
  takeEvery,
  call,
  put,
  takeLatest,
  all,
  fork,
} from 'redux-saga/effects';

import {
  FETCH_LOGISTICS_ORDER,
  fetchLogisticsOrderResult,
} from '../actions/logistics';

import { loadLogisticsOrderApi } from '../api/logistics';

function* loadLogisticsOrderSync() {
  yield put({ type: 'LOADING' });
  const data = yield call(loadLogisticsOrderApi);
  yield put(fetchLogisticsOrderResult(data));
}

export function* loadLogisticsWatcher() {
  yield takeLatest(FETCH_LOGISTICS_ORDER, loadLogisticsOrderSync);
}

export default function* logisticsSaga() {
  yield all([fork(loadLogisticsWatcher)]);
}

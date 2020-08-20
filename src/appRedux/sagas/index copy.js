import { fork, all } from 'redux-saga/effects';
import authSagas from './auth';
import staffsSagas from './staff';
import logisticsSagas from './logistics';
import propertySagas from './property';
import assetsSagas from './assets';

export default function* rootSaga() {
  yield all([
    authSagas(),
    staffsSagas(),
    logisticsSagas(),
    propertySagas(),
    assetsSagas(),
  ]);
}

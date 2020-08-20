import {
  takeEvery,
  call,
  put,
  takeLatest,
  all,
  fork,
} from 'redux-saga/effects';

import {
  ADD_ASSET,
  ADD_ASSET_CATEGORY,
  FETCH_ASSET,
  addAssetResult,
  fetchAssetResult,
  addAssetCategoryResult,
} from '../actions/AssetAction';

import { addAssetsApi, fetchAssetsApi } from '../api/AssetAction';

function* addAssetSync({ payload }) {
  const data = yield call(addAssetsApi, payload);
  yield put(addAssetResult(data));
}

function* loadAssetSync() {
  //yield put({ type: "LOADING" });
  const data = yield call(fetchAssetsApi);
  yield put(fetchAssetResult(data));
}

export function* addAssetWatcher() {
  yield takeLatest(ADD_ASSET, addAssetSync);
}
export function* loadAssetWatcher() {
  yield takeLatest(FETCH_ASSET, loadAssetSync);
}

export default function* assetsSaga() {
  yield all([fork(addAssetWatcher), fork(loadAssetWatcher)]);
}

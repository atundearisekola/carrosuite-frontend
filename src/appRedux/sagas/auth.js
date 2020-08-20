import {
  takeEvery,
  call,
  put,
  takeLatest,
  all,
  fork,
} from "redux-saga/effects";

import {
  loginUserApi,
  logoutApi,
  registerUserApi,
  loadUserApi,
} from "../api/auth";

import {
  REGISTER,
  LOGIN,
  LOAD_USER,
  LOG_OUT,
  ON_SHOW_LOADER,
  ON_HIDE_LOADER,
  SHOW_MESSAGE,
  HIDE_MESSAGE,
  INIT_URL,
  setInitUrlResult,
  receiveAuth,
  receiveLogout,
  showMessageResult,
  hideMessageResult,
  showAuthLoaderResult,
  hideAuthLoaderResult,
} from "../actions/auth";

function* loginAsync({ payload }) {
  const data = yield call(loginUserApi, payload);
  yield put(receiveAuth(data));
}
function* logoutAsync() {
  const data = yield call(logoutApi);
  yield put(receiveLogout(data));
}
function* registerAsync({ payload }) {
  const data = yield call(registerUserApi, payload);
  yield put(receiveAuth(data));
}

function* loadUserAsync({ payload }) {
  const data = yield call(loadUserApi, payload);
  yield put(receiveAuth(data));
}

function* showAuthLoaderAsync() {
  yield put(showAuthLoaderResult());
}
function* hideAuthLoaderAsync() {
  yield put(hideAuthLoaderResult());
}
function* showMessageAsync() {
  yield put(showMessageResult());
}
function* hideMessageAsync() {
  yield put(hideMessageResult());
}

function* setInitiaUriAsync({ payload }) {
  yield put(setInitUrlResult(payload));
}

export function* setInitiaUriWatcher() {
  yield takeLatest(INIT_URL, setInitiaUriAsync);
}
export function* showAuthLoaderWatcher() {
  yield takeLatest(ON_SHOW_LOADER, showAuthLoaderAsync);
}
export function* hideAuthLoaderWatcher() {
  yield takeLatest(ON_HIDE_LOADER, hideAuthLoaderAsync);
}

export function* showMessageWatcher() {
  yield takeLatest(SHOW_MESSAGE, showMessageAsync);
}
export function* hideMessageWatcher() {
  yield takeLatest(HIDE_MESSAGE, hideMessageAsync);
}

export function* registerWatcher() {
  yield takeLatest(REGISTER, registerAsync);
}
export function* loginWatcher() {
  yield takeLatest(LOGIN, loginAsync);
}
export function* logoutWatcher() {
  yield takeLatest(LOG_OUT, logoutAsync);
}
export function* loadUserWatcher() {
  yield takeLatest(LOAD_USER, loadUserAsync);
}

export default function* authSaga() {
  yield all([
    fork(registerWatcher),
    fork(logoutWatcher),
    fork(loginWatcher),
    fork(loadUserWatcher),

    fork(showMessageWatcher),
    fork(hideMessageWatcher),
    fork(showAuthLoaderWatcher),
    fork(hideAuthLoaderWatcher),
    fork(setInitiaUriWatcher),
  ]);
}

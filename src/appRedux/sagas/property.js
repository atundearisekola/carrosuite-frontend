import {
  takeEvery,
  takeLatest,
  call,
  put,
  takeLatestfork,
  all,
  fork,
} from "redux-saga/effects";

import {
  ADD_PROPERTY,
  FETCH_PROPERTIES,
  ADD_VENDOR,
  FETCH_VENDORS,
  ADD_COUNTRY,
  FETCH_COUNTRYS,
  ADD_STATE,
  FETCH_STATES,
  ADD_CITY,
  FETCH_CITIES,
  ADD_OPERATING_ACCOUNT,
  FETCH_OPERATING_ACCOUNTS,
  ADD_INVENTORY_ACCOUNT,
  FETCH_INVENTORY_ACCOUNTS,
  addPropertyResult,
  fetchPropertiesResult,
  addVendorResult,
  fetchVendorsResult,
  addCountryResult,
  fetchCountrysResult,
  addStateResult,
  fetchStatesResult,
  addCityResult,
  fetchCitiesResult,
  addOperatingAccountResult,
  fetchOperatingAccountsResult,
  addInventoryAccountResult,
  fetchInventoryAccountsResult,
} from "../actions/property";
import {
  addPropertyApi,
  fetchpropertiesApi,
  addCityApi,
  addVendorApi,
  addStateApi,
  fetchVendorsApi,
  fetchStatesApi,
  fetchCitiesApi,
  addInventoryAccountApi,
  addOperatingAccountApi,
  fetchInventoryAccountApi,
  fetchOperatingAccountApi,
} from "../api/property";

function* addPropertySync() {
  yield put({ type: "LOADING" });
  const data = yield call(addPropertyApi);
  yield put(addPropertyResult(data));
}

function* fetchPropertySync() {
  yield put({ type: "LOADING" });
  const data = yield call(fetchpropertiesApi);
  yield put(fetchPropertiesResult(data));
}
function* addVendorSync() {
  yield put({ type: "LOADING" });
  const data = yield call(addVendorApi);
  yield put(addVendorResult(data));
}

function* fetchVendorSync() {
  yield put({ type: "LOADING" });
  const data = yield call(fetchVendorsApi);
  yield put(fetchVendorsResult(data));
}

function* addStateSync() {
  yield put({ type: "LOADING" });
  const data = yield call(addStateApi);
  yield put(addStateResult(data));
}

function* fetchStateSync() {
  yield put({ type: "LOADING" });
  const data = yield call(fetchStatesApi);
  yield put(fetchStatesResult(data));
}

function* addCitySync() {
  yield put({ type: "LOADING" });
  const data = yield call(addCityApi);
  yield put(addCityResult(data));
}

function* fetchCitySync() {
  yield put({ type: "LOADING" });
  const data = yield call(fetchCitiesApi);
  yield put(fetchCitiesResult(data));
}

function* addOperatingAccountSync() {
  yield put({ type: "LOADING" });
  const data = yield call(addOperatingAccountApi);
  yield put(addOperatingAccountResult(data));
}

function* fetchOperatingAccountSync() {
  yield put({ type: "LOADING" });
  const data = yield call(fetchOperatingAccountApi);
  yield put(fetchOperatingAccountsResult(data));
}

function* addInventoryAccountSync() {
  yield put({ type: "LOADING" });
  const data = yield call(addInventoryAccountApi);
  yield put(addInventoryAccountResult(data));
}

function* fetchInventoryAccountSync() {
  yield put({ type: "LOADING" });
  const data = yield call(fetchInventoryAccountApi);
  yield put(fetchInventoryAccountsResult(data));
}

export function* addPropertyWatcher() {
  yield takeLatest(ADD_PROPERTY, addPropertySync);
}

export function* fetchPropertyWatcher() {
  yield takeLatest(FETCH_PROPERTIES, fetchPropertySync);
}
export function* addVendorWatcher() {
  yield takeLatest(ADD_VENDOR, addVendorSync);
}

export function* fetchVendorWatcher() {
  yield takeLatest(FETCH_VENDORS, fetchVendorSync);
}

export function* addStateWatcher() {
  yield takeLatest(ADD_STATE, addStateSync);
}

export function* fetchStateWatcher() {
  yield takeLatest(FETCH_STATES, fetchStateSync);
}

export function* addCityWatcher() {
  yield takeLatest(ADD_CITY, addCitySync);
}

export function* fetchCityWatcher() {
  yield takeLatest(FETCH_CITIES, fetchCitySync);
}

export function* addOperatingAccountWatcher() {
  yield takeLatest(ADD_OPERATING_ACCOUNT, addOperatingAccountSync);
}

export function* fetchOperatingAccountWatcher() {
  yield takeLatest(FETCH_OPERATING_ACCOUNTS, fetchOperatingAccountSync);
}

export function* addInventoryAccountWatcher() {
  yield takeLatest(ADD_INVENTORY_ACCOUNT, addInventoryAccountSync);
}

export function* fetchInventoryAccountWatcher() {
  yield takeLatest(FETCH_INVENTORY_ACCOUNTS, fetchInventoryAccountSync);
}

export default function* propertySaga() {
  yield all([
    fork(addPropertyWatcher),
    fork(fetchPropertyWatcher),
    fork(addVendorWatcher),
    fork(fetchVendorWatcher),
    fork(addStateWatcher),
    fork(fetchStateWatcher),
    fork(addCityWatcher),
    fork(fetchCityWatcher),
    fork(addOperatingAccountWatcher),
    fork(fetchOperatingAccountWatcher),
    fork(addInventoryAccountWatcher),
    fork(fetchInventoryAccountWatcher),
  ]);
}

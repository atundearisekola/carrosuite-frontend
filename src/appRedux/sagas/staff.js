import {
  takeEvery,
  call,
  put,
  takeLatest,
  all,
  fork,
} from "redux-saga/effects";

import {
  ADD_STAFF,
  FETCH_STAFFS,
  FETCH_DEPARTMENTS,
  FETCH_DESIGNATIONS,
  EDIT_STAFF,
  DELETE_STAFF,
  ADD_DEPARTMENT,
  ADD_DESIGNATION,
  DELETE_DEPARTMENT,
  DELETE_DESIGNATION,
  GET_STAFF,
  FETCH_LEAVE_POLICIES,
  CREATE_LEAVE_POLICY,
  APPLY_LEAVE_POLICY,
  ASSIGN_LEAVE_POLICY,
  EDIT_LEAVE_POLICY,
  SHOW_MESSAGE,
  HIDE_MESSAGE,
  ADD_EARNING,
  FETCH_EARNINGS,
  ADD_PRE_TAX_DEDUCTION,
  FETCH_PRE_TAX_DEDUCTIONS,
  ADD_POST_TAX_DEDUCTION,
  FETCH_POST_TAX_DEDUCTIONS,
  FETCH_PAYROLL,
  FETCH_PAYROLL_ITEM,
  CREATE_PAYROLL_ITEM,
  ADD_BASIC_PAYMENT,
  CHANGE_BASIC_PAYMENT,
  FILTER_BASIC_PAYMENT_BY_STATUS,
  FILTER_BASIC_PAYMENT_BY_EMPLOYEE,
  addStaffResult,
  fetchStaffsResult,
  fetchDepartmentsResult,
  fetchDesignationsResult,
  fetchDepartmentResult,
  editStaffResult,
  deleteStaffResult,
  deleteDepartmentsResult,
  deleteDesignationsResult,
  getStaffResult,
  addDepartmentResult,
  addDesignationResult,
  deleteDesignationResult,
  deleteDepartmentResult,
  FETCH_CELEBRANTS,
  SET_LOADER,
  createLeavePolicyResult,
  applyLeavePolicyResult,
  fetchLeavePoliciesResult,
  assignLeavePolicyResult,
  editLeavePolicyResult,
  showMessageResult,
  hideMessageResult,
  removeLeaveResult,
  approveLeaveResult,
  fetchLeavePlansResult,
  setLoader,
  FETCH_LEAVE_PLANS,
  APPROVE_LEAVE,
  DELETE_LEAVE,
  fetchPayRollResult,
  fetchPayRollItemResult,
  createPayRollItemResult,
  addBasicPaymentResult,
  changeBasicPaymentResult,
  addEarningResult,
  fetchEarningsResult,
  addPreTaxResult,
  fetchPreTaxsResult,
  addPostTaxResult,
  fetchPostTaxsResult,
} from "../actions/staff";

import {
  addStaffApi,
  loadStaffsApi,
  loadDesignationsApi,
  loadDepartmentsApi,
  editStaffApi,
  getStaffsApi,
  deleteDepartmentApi,
  deleteDesignationApi,
  addDepartmentApi,
  addDesignationApi,
  getStaffApi,
  deleteStaffApi,
  fetchCelebrantsApi,
  fetchLeavePlanApi,
  removeLeavePlanApi,
  approveLeavePlanApi,
  fetchPayrollItemApi,
  createPayrollItemApi,
  assignLeavePolicyApi,
  fetchPayrollApi,
  applyLeavePolicyApi,
  editLeavePolicyApi,
  createLeavePolicyApi,
  fetchLeavePoliciesApi,
  addBasicPaymentApi,
  changeBasicPaymentApi,
  filterBasicPaymentByStatusApi,
  filterBasicPaymentByEmployeeApi,
  addEarningApi,
  fetchEarningsApi,
  addPreTaxApi,
  fetchPreTaxsApi,
  addPostTaxApi,
  fetchPostTaxsApi,
} from "../api/staff";

function* addStaffAsync({ payload }) {
  const data = yield call(addStaffApi, payload);
  yield put(addStaffResult(data));
}
function* editStaffAsync({ payload }) {
  const data = yield call(editStaffApi, payload);
  yield put(editStaffResult(data));
}
function* deleteStaffAsync({ payload }) {
  const data = yield call(deleteStaffApi, payload);
  yield put(deleteStaffResult(data));
}
function* getStaffAsync({ payload }) {
  const data = yield call(getStaffApi, payload);
  yield put(getStaffResult(data));
}
function* loadStaffsAsync() {
  const data = yield call(loadStaffsApi);
  yield put(fetchStaffsResult(data));
}

function* loadDepartmentssAsync() {
  const data = yield call(loadDepartmentsApi);
  yield put(fetchDepartmentsResult(data));
}
function* loadDesignationsAsync() {
  const data = yield call(loadDesignationsApi);
  yield put(fetchDesignationsResult(data));
}

function* addDepartmentAsync() {
  const data = yield call(addDepartmentApi);
  yield put(addDepartmentResult(data));
}
function* addDesignationAsync() {
  const data = yield call(addDesignationApi);
  yield put(addDesignationResult(data));
}

function* deleteDepartmentAsync() {
  const data = yield call(deleteDepartmentApi);
  yield put(deleteDepartmentResult(data));
}
function* deleteDesignationAsync() {
  const data = yield call(deleteDesignationApi);
  yield put(deleteDesignationResult(data));
}

function* fetchCelebrantAsync() {
  const data = yield call(fetchCelebrantsApi);
  yield put(deleteDepartmentResult(data));
}

function* fetchLeavePlanAsync() {
  const data = yield call(fetchLeavePlanApi);
  yield put(fetchLeavePlansResult(data));
}

function* removeLeavePlanAsync() {
  const data = yield call(removeLeavePlanApi);
  yield put(removeLeaveResult(data));
}

function* approveLeavePlanAsync() {
  const data = yield call(approveLeavePlanApi);
  yield put(approveLeaveResult(data));
}

function* setLoaderAsync({ payload }) {
  yield put(setLoader(payload));
}

function* showMessageAsync() {
  yield put(showMessageResult());
}
function* hideMessageAsync() {
  yield put(showMessageResult());
}

function* fetchLeavePoliciesAsync() {
  const data = yield call(fetchLeavePoliciesApi);
  yield put(fetchLeavePoliciesResult(data));
}
function* createLeavePolicyAsync() {
  const data = yield call(createLeavePolicyApi);
  yield put(createLeavePolicyResult(data));
}

function* editLeavePolicyAsync() {
  const data = yield call(editLeavePolicyApi);
  yield put(editLeavePolicyResult(data));
}

function* applyLeavePolicyAsync() {
  const data = yield call(applyLeavePolicyApi);
  yield put(applyLeavePolicyResult(data));
}

function* assignLeavePolicyAsync() {
  const data = yield call(assignLeavePolicyApi);
  yield put(assignLeavePolicyResult(data));
}

function* fetchPayrollAsync() {
  const data = yield call(fetchPayrollApi);
  yield put(fetchPayRollResult(data));
}

function* fetchPayrollItemAsync() {
  const data = yield call(fetchPayrollItemApi);
  yield put(fetchPayRollItemResult(data));
}

function* createPayrollItemAsync() {
  const data = yield call(createPayrollItemApi);
  yield put(createPayRollItemResult(data));
}

function* addBasicPaymentAsync() {
  const data = yield call(addBasicPaymentApi);
  yield put(addBasicPaymentResult(data));
}

function* changeBasicPaymentAsync() {
  const data = yield call(changeBasicPaymentApi);
  yield put(changeBasicPaymentResult(data));
}

function* filterBasicPaymentStatusAsync() {
  const data = yield call(filterBasicPaymentByStatusApi);
  yield put(fetchStaffsResult(data));
}

function* filterBasicPaymentEmployeeAsync() {
  const data = yield call(filterBasicPaymentByEmployeeApi);
  yield put(fetchStaffsResult(data));
}

function* addEarningAsync() {
  const data = yield call(addEarningApi);
  yield put(addEarningResult(data));
}

function* fetchEarningsAsync() {
  const data = yield call(fetchEarningsApi);
  yield put(fetchEarningsResult(data));
}

function* addPreTaxAsync() {
  const data = yield call(addPreTaxApi);
  yield put(addPreTaxResult(data));
}

function* fetchPreTaxsAsync() {
  const data = yield call(fetchPreTaxsApi);
  yield put(fetchPreTaxsResult(data));
}

function* addPostTaxAsync() {
  const data = yield call(addPostTaxApi);
  yield put(addPostTaxResult(data));
}

function* fetchPostTaxsAsync() {
  const data = yield call(fetchPostTaxsApi);
  yield put(fetchPostTaxsResult(data));
}

export function* addStaffsWatcher() {
  yield takeLatest(ADD_STAFF, addStaffAsync);
}
export function* editStaffsWatcher() {
  yield takeLatest(EDIT_STAFF, editStaffAsync);
}
export function* getStaffWatcher() {
  yield takeLatest(GET_STAFF, getStaffAsync);
}
export function* deleteStaffWatcher() {
  yield takeLatest(DELETE_STAFF, deleteStaffAsync);
}
export function* loadStaffsWatcher() {
  yield takeLatest(FETCH_STAFFS, loadStaffsAsync);
}

export function* loadDepartmentsWatcher() {
  yield takeLatest(FETCH_DEPARTMENTS, loadDepartmentssAsync);
}

export function* loadDesignationsWatcher() {
  yield takeLatest(FETCH_DESIGNATIONS, loadDesignationsAsync);
}

export function* addDepartmentWatcher() {
  yield takeLatest(ADD_DEPARTMENT, addDepartmentAsync);
}

export function* addDesignationWatcher() {
  yield takeLatest(ADD_DESIGNATION, addDesignationAsync);
}

export function* deleteDepartmentWatcher() {
  yield takeLatest(DELETE_DEPARTMENT, deleteDepartmentAsync);
}

export function* deleteDesignationWatcher() {
  yield takeLatest(DELETE_DESIGNATION, deleteDesignationAsync);
}

export function* fetchCelebrantsWatcher() {
  yield takeLatest(FETCH_CELEBRANTS, fetchCelebrantAsync);
}

export function* setLoaderWatcher() {
  yield takeLatest(SET_LOADER, setLoaderAsync);
}
export function* showMessageWatcher() {
  yield takeLatest(SHOW_MESSAGE, showMessageAsync);
}
export function* hideMessageWatcher() {
  yield takeLatest(HIDE_MESSAGE, hideMessageAsync);
}
export function* fetchLeavePoliesWatcher() {
  yield takeLatest(FETCH_LEAVE_POLICIES, fetchLeavePoliciesAsync);
}

export function* createLeavePolicyWatcher() {
  yield takeLatest(CREATE_LEAVE_POLICY, createLeavePolicyAsync);
}
export function* assignLeavePolicyWatcher() {
  yield takeLatest(ASSIGN_LEAVE_POLICY, assignLeavePolicyAsync);
}

export function* applyLeavePolicyWatcher() {
  yield takeLatest(APPLY_LEAVE_POLICY, applyLeavePolicyAsync);
}

export function* editLeavePolicyWatcher() {
  yield takeLatest(EDIT_LEAVE_POLICY, editLeavePolicyAsync);
}

export function* fetchLeavePlansWatcher() {
  yield takeLatest(FETCH_LEAVE_PLANS, fetchLeavePlanAsync);
}

export function* approveLeavePlanWatcher() {
  yield takeLatest(APPROVE_LEAVE, approveLeavePlanAsync);
}

export function* removeLeavePlanWatcher() {
  yield takeLatest(DELETE_LEAVE, removeLeavePlanAsync);
}

export function* createPayrollItemWatcher() {
  yield takeLatest(CREATE_PAYROLL_ITEM, createPayrollItemAsync);
}

export function* fetchPayrollWatcher() {
  yield takeLatest(FETCH_PAYROLL, fetchPayrollAsync);
}

export function* fetchPayrollItemWatcher() {
  yield takeLatest(FETCH_PAYROLL_ITEM, fetchPayrollItemAsync);
}

export function* addBasicPaymentWatcher() {
  yield takeLatest(ADD_BASIC_PAYMENT, addBasicPaymentAsync);
}

export function* changeBasicPaymentWatcher() {
  yield takeLatest(CHANGE_BASIC_PAYMENT, changeBasicPaymentAsync);
}

export function* filterBasicPaymentStatusWatcher() {
  yield takeLatest(
    FILTER_BASIC_PAYMENT_BY_STATUS,
    filterBasicPaymentStatusAsync
  );
}
export function* filterBasicPaymentEmployeeWatcher() {
  yield takeLatest(
    FILTER_BASIC_PAYMENT_BY_EMPLOYEE,
    filterBasicPaymentEmployeeAsync
  );
}

export function* addEarningWatcher() {
  yield takeLatest(ADD_EARNING, addEarningAsync);
}

export function* fetchEarningsWatcher() {
  yield takeLatest(FETCH_EARNINGS, fetchEarningsAsync);
}

export function* addPreTaxWatcher() {
  yield takeLatest(ADD_PRE_TAX_DEDUCTION, addPreTaxAsync);
}

export function* fetchPreTaxsWatcher() {
  yield takeLatest(FETCH_PRE_TAX_DEDUCTIONS, fetchPreTaxsAsync);
}

export function* addPostTaxWatcher() {
  yield takeLatest(ADD_POST_TAX_DEDUCTION, addPostTaxAsync);
}

export function* fetchPostTaxsWatcher() {
  yield takeLatest(FETCH_POST_TAX_DEDUCTIONS, fetchPostTaxsAsync);
}

export default function* staffsSaga() {
  yield all([
    fork(addStaffsWatcher),
    fork(editStaffsWatcher),
    fork(getStaffWatcher),
    fork(deleteStaffWatcher),
    fork(loadStaffsWatcher),
    fork(loadDepartmentsWatcher),
    fork(loadDesignationsWatcher),
    fork(addDepartmentWatcher),
    fork(addDesignationWatcher),
    fork(deleteDepartmentWatcher),
    fork(deleteDesignationWatcher),
    fork(fetchCelebrantsWatcher),
    fork(setLoaderWatcher),
    fork(showMessageWatcher),
    fork(hideMessageWatcher),
    fork(fetchLeavePoliesWatcher),
    fork(createLeavePolicyWatcher),
    fork(assignLeavePolicyWatcher),
    fork(applyLeavePolicyWatcher),
    fork(editLeavePolicyWatcher),
    fork(fetchLeavePlansWatcher),
    fork(approveLeavePlanWatcher),
    fork(removeLeavePlanWatcher),
    fork(createPayrollItemWatcher),
    fork(fetchPayrollWatcher),
    fork(fetchPayrollItemWatcher),
    fork(addBasicPaymentWatcher),
    fork(changeBasicPaymentWatcher),
    fork(filterBasicPaymentStatusWatcher),
    fork(filterBasicPaymentEmployeeWatcher),
    fork(fetchPostTaxsWatcher),
    fork(addPostTaxWatcher),
    fork(fetchPreTaxsWatcher),
    fork(addPreTaxWatcher),
    fork(fetchEarningsWatcher),
    fork(addEarningWatcher),
  ]);
}

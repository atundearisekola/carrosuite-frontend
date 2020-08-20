import { createAction } from "redux-actions";
export const SAVE_STAFF = "SAVE_STAFF";
export const SAVE_STAFF_RESULT = "SAVE_STAFF_RESULT";
export const EDIT_STAFF = "EDIT_STAFF";
export const EDIT_STAFF_RESULT = "EDIT_STAFF_RESULT";
export const FETCH_STAFFS_RESULT = "FETCH_STAFFS_RESULT";
export const FETCH_STAFFS = "FETCH_STAFFS";
export const GET_STAFF_RESULT = "GET_STAFF_RESULT";
export const GET_STAFF = "GET_STAFF";
export const ADD_STAFF = "ADD_STAFF";
export const ADD_STAFF_RESULT = "ADD_STAFF_RESULT";
export const DELETE_STAFF_RESULT = "DELETE_STAFF_RESULT";
export const DELETE_STAFF = "DELETE_STAFF";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCH_DEPARTMENTS = "FETCH_DEPARTMENTS";
export const FETCH_DEPARTMENTS_RESULT = "FETCH_DEPARTMENTS_RESULT";
export const FETCH_DEPARTMENT = "FETCH_DEPARTMENT";
export const FETCH_DEPARTMENT_RESULT = "FETCH_DEPARTMENT_RESULT";
export const ADD_DEPARTMENT = "ADD_DEPARTMENT";
export const ADD_DEPARTMENT_RESULT = "ADD_DEPARTMENT_RESULT";
export const DELETE_DEPARTMENT = "DELETE_DEPARTMENT";
export const DELETE_DEPARTMENT_RESULT = "DELETE_DEPARTMENT_RESULT";
export const FETCH_DESIGNATIONS = "FETCH_DESIGNATIONS";
export const FETCH_DESIGNATION = "FETCH_DESIGNATION";
export const FETCH_DESIGNATIONS_RESULT = "FETCH_DESIGNATIONS_RESULT";
export const FETCH_DESIGNATION_RESULT = "FETCH_DESIGNATION_RESULT";
export const ADD_DESIGNATION = "ADD_DESIGNATION";
export const ADD_DESIGNATION_RESULT = "ADD_DESIGNATION_RESULT";
export const DELETE_DESIGNATION = "DELETE_DESIGNATION";
export const DELETE_DESIGNATION_RESULT = "DELETE_DESIGNATION_RESULT";
export const FETCH_LEAVE_PLANS = "FETCH_LEAVE_PLANS";
export const FETCH_LEAVE_PLANS_RESULT = "FETCH_LEAVE_PLANS_RESULT";
export const APPROVE_LEAVE = "APPROVE_LEAVE";
export const APPROVE_LEAVE_RESULT = "APPROVE_LEAVE_RESULT";
export const DELETE_LEAVE = "APPROVE_LEAVE";
export const DELETE_LEAVE_RESULT = "APPROVE_LEAVE_RESULT";
export const FETCH_CELEBRANTS = "FETCH_CELEBRANTS";
export const FETCH_CELEBRANTS_RESULT = "FETCH_CELEBRANTS_RESULT";
export const SET_LOADER = "SET_LOADER";
export const SET_LOADER_RESULT = "SET_LOADER_RESULT";
export const SHOW_MESSAGE = "SHOW_MESSAGE";
export const SHOW_MESSAGE_RESULT = "SHOW_MESSAGE_RESULT";
export const HIDE_MESSAGE = "HIDE_MESSAGE";
export const HIDE_MESSAGE_RESULT = "HIDE_MESSAGE_RESULT";

export const FETCH_LEAVE_POLICIES = "FETCH_LEAVE_POLICIES";
export const FETCH_LEAVE_POLICIES_RESULT = "FETCH_LEAVE_POLICIES_RESULT";
export const CREATE_LEAVE_POLICY = "CREATE_LEAVE_POLICY";
export const CREATE_LEAVE_POLICY_RESULT = "CREATE_LEAVE_POLICY_RESULT";
export const APPLY_LEAVE_POLICY = "APPLY_LEAVE_POLICY";
export const APPLY_LEAVE_POLICY_RESULT = "APPLY_LEAVE_POLICY_RESULT";
export const ASSIGN_LEAVE_POLICY = "ASSIGN_LEAVE_POLICY";
export const ASSIGN_LEAVE_POLICY_RESULT = "ASSIGN_LEAVE_POLICY_RESULT";
export const EDIT_LEAVE_POLICY = "EDIT_LEAVE_POLICY";
export const EDIT_LEAVE_POLICY_RESULT = "EDIT_LEAVE_POLICY_RESULT";

export const CREATE_PAYROLL_ITEM = "CREATE_PAYROLL_ITEM";
export const CREATE_PAYROLL_ITEM_RESULT = "CREATE_PAYROLL_ITEM_RESULT";
export const FETCH_PAYROLL_ITEM = "FETCH_PAYROLL_ITEM";
export const FETCH_PAYROLL_ITEM_RESULT = "FETCH_PAYROLL_ITEM_RESULT";
export const FETCH_PAYROLL = "FETCH_PAYROLL";
export const FETCH_PAYROLL_RESULT = "FETCH_PAYROLL_RESULT";

export const ADD_BASIC_PAYMENT = "ADD_BASIC_PAYMENT";
export const ADD_BASIC_PAYMENT_RESULT = "ADD_BASIC_PAYMENT_RESULT";

export const CHANGE_BASIC_PAYMENT = "CHANGE_BASIC_PAYMENT";
export const CHANGE_BASIC_PAYMENT_RESULT = "CHANGE_BASIC_PAYMENT_RESULT";
export const FILTER_BASIC_PAYMENT_BY_STATUS = "FILTER_BASIC_PAYMENT_BY_STATUS";
export const FILTER_BASIC_PAYMENT_BY_EMPLOYEE =
  "FILTER_BASIC_PAYMENT_BY_EMPLOYEE";

export const ADD_EARNING = "ADD_EARNING";
export const ADD_EARNING_RESULT = "ADD_EARNING_RESULT";
export const FETCH_EARNINGS = "FETCH_EARNINGS";
export const FETCH_EARNINGS_RESULT = "FETCH_EARNINGS_RESULT";

export const ADD_PRE_TAX_DEDUCTION = "ADD_PRE_TAX_DEDUCTION";
export const ADD_PRE_TAX_DEDUCTION_RESULT = "ADD_PRE_TAX_DEDUCTION_RESULT";
export const FETCH_PRE_TAX_DEDUCTIONS = "FETCH_PRE_TAX_DEDUCTIONS";
export const FETCH_PRE_TAX_DEDUCTIONS_RESULT =
  "FETCH_PRE_TAX_DEDUCTIONS_RESULT";

export const ADD_POST_TAX_DEDUCTION = "ADD_POST_TAX_DEDUCTION";
export const ADD_POST_TAX_DEDUCTION_RESULT = "ADD_POST_TAX_DEDUCTION_RESULT";
export const FETCH_POST_TAX_DEDUCTIONS = "FETCH_POST_TAX_DEDUCTIONS";
export const FETCH_POST_TAX_DEDUCTIONS_RESULT =
  "FETCH_POST_TAX_DEDUCTIONS_RESULT";

export const ADD_REIMBURSEMENT = "ADD_REIMBURSEMENT";
export const ADD_REIMBURSEMENT_RESULT = "ADD_REIMBURSEMENT_RESULT";
export const FETCH_REIMBURSEMENTS = "FETCH_REIMBURSEMENTS";
export const FETCH_REIMBURSEMENTS_RESULT = "FETCH_REIMBURSEMENTS_RESULT";

export const addStaff = createAction(ADD_STAFF);
export const addStaffResult = createAction(ADD_STAFF_RESULT);
export const editStaff = createAction(EDIT_STAFF);
export const editStaffResult = createAction(EDIT_STAFF_RESULT);
export const getStaff = createAction(GET_STAFF);
export const getStaffResult = createAction(GET_STAFF_RESULT);
export const deleteStaff = createAction(DELETE_STAFF);
export const deleteStaffResult = createAction(DELETE_STAFF_RESULT);
export const fetchStaffs = createAction(FETCH_STAFFS);
export const fetchStaffsResult = createAction(FETCH_STAFFS_RESULT);
export const fetchDesignation = createAction(FETCH_DESIGNATION);
export const fetchDepartment = createAction(FETCH_DEPARTMENT);
export const fetchDesignations = createAction(FETCH_DESIGNATIONS);
export const fetchDepartments = createAction(FETCH_DEPARTMENTS);

export const fetchDesignationResult = createAction(FETCH_DESIGNATION_RESULT);
export const fetchDepartmentResult = createAction(FETCH_DEPARTMENT_RESULT);
export const fetchDesignationsResult = createAction(FETCH_DESIGNATIONS_RESULT);
export const fetchDepartmentsResult = createAction(FETCH_DEPARTMENTS_RESULT);

export const addDesignation = createAction(ADD_DESIGNATION);
export const addDepartment = createAction(ADD_DEPARTMENT);
export const deleteDesignation = createAction(DELETE_DESIGNATION);
export const deleteDepartment = createAction(DELETE_DEPARTMENT);

export const addDesignationResult = createAction(ADD_DESIGNATION_RESULT);
export const addDepartmentResult = createAction(ADD_DEPARTMENT_RESULT);
export const deleteDesignationResult = createAction(DELETE_DESIGNATION_RESULT);
export const deleteDepartmentResult = createAction(DELETE_DEPARTMENT_RESULT);

export const fetchLeavePlans = createAction(FETCH_LEAVE_PLANS);
export const fetchLeavePlansResult = createAction(FETCH_LEAVE_PLANS_RESULT);
export const approveLeave = createAction(APPROVE_LEAVE);
export const removeLeave = createAction(DELETE_LEAVE);
export const approveLeaveResult = createAction(APPROVE_LEAVE_RESULT);
export const removeLeaveResult = createAction(DELETE_LEAVE_RESULT);

export const fetchCelebrants = createAction(FETCH_CELEBRANTS);
export const fetchCelebrantsResult = createAction(FETCH_CELEBRANTS_RESULT);
export const setLoader = createAction(SET_LOADER);
export const setLoaderResult = createAction(SET_LOADER_RESULT);
export const showMessage = createAction(SHOW_MESSAGE);
export const showMessageResult = createAction(SHOW_MESSAGE_RESULT);
export const hideMessage = createAction(HIDE_MESSAGE);
export const hideMessageResult = createAction(HIDE_MESSAGE_RESULT);

export const createLeavePolicy = createAction(CREATE_LEAVE_POLICY);
export const createLeavePolicyResult = createAction(CREATE_LEAVE_POLICY_RESULT);
export const applyLeavePolicy = createAction(APPLY_LEAVE_POLICY);
export const applyLeavePolicyResult = createAction(APPLY_LEAVE_POLICY_RESULT);
export const fetchLeavePolicies = createAction(FETCH_LEAVE_POLICIES);
export const fetchLeavePoliciesResult = createAction(
  FETCH_LEAVE_POLICIES_RESULT
);
export const assignLeavePolicy = createAction(ASSIGN_LEAVE_POLICY);
export const assignLeavePolicyResult = createAction(ASSIGN_LEAVE_POLICY_RESULT);
export const editLeavePolicy = createAction(EDIT_LEAVE_POLICY);
export const editLeavePolicyResult = createAction(EDIT_LEAVE_POLICY_RESULT);

export const createPayRollItem = createAction(CREATE_PAYROLL_ITEM);
export const createPayRollItemResult = createAction(CREATE_PAYROLL_ITEM_RESULT);
export const fetchPayRollItem = createAction(FETCH_PAYROLL_ITEM);
export const fetchPayRollItemResult = createAction(FETCH_PAYROLL_ITEM_RESULT);
export const fetchPayRoll = createAction(FETCH_PAYROLL);
export const fetchPayRollResult = createAction(FETCH_PAYROLL_RESULT);

export const addBasicPayment = createAction(ADD_BASIC_PAYMENT);
export const addBasicPaymentResult = createAction(ADD_BASIC_PAYMENT_RESULT);

export const changeBasicPayment = createAction(CHANGE_BASIC_PAYMENT);
export const changeBasicPaymentResult = createAction(
  CHANGE_BASIC_PAYMENT_RESULT
);
export const filterBasicPaymentByEmployee = createAction(
  FILTER_BASIC_PAYMENT_BY_EMPLOYEE
);
export const filterBasicPaymentByStatus = createAction(
  FILTER_BASIC_PAYMENT_BY_STATUS
);

export const addEarning = createAction(ADD_EARNING);
export const addEarningResult = createAction(ADD_EARNING_RESULT);
export const fetchEarnings = createAction(FETCH_EARNINGS);
export const fetchEarningsResult = createAction(FETCH_EARNINGS_RESULT);

export const addPreTax = createAction(ADD_PRE_TAX_DEDUCTION);
export const addPreTaxResult = createAction(ADD_PRE_TAX_DEDUCTION_RESULT);
export const fetchPreTaxs = createAction(FETCH_PRE_TAX_DEDUCTIONS);
export const fetchPreTaxsResult = createAction(FETCH_PRE_TAX_DEDUCTIONS_RESULT);

export const addPostTax = createAction(ADD_POST_TAX_DEDUCTION);
export const addPostTaxResult = createAction(ADD_POST_TAX_DEDUCTION_RESULT);
export const fetchPostTaxs = createAction(FETCH_POST_TAX_DEDUCTIONS);
export const fetchPostTaxsResult = createAction(
  FETCH_POST_TAX_DEDUCTIONS_RESULT
);

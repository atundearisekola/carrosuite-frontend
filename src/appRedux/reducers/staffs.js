import { handleAction, combineActions } from "redux-actions";
import {
  FETCH_STAFFS_RESULT,
  GET_STAFF_RESULT,
  ADD_STAFF_RESULT,
  DELETE_STAFF_RESULT,
  FETCH_DEPARTMENTS_RESULT,
  FETCH_DEPARTMENT_RESULT,
  ADD_DEPARTMENT_RESULT,
  DELETE_DEPARTMENT_RESULT,
  FETCH_DESIGNATIONS_RESULT,
  FETCH_DESIGNATION_RESULT,
  ADD_DESIGNATION_RESULT,
  DELETE_DESIGNATION_RESULT,
  SAVE_STAFF_RESULT,
  EDIT_STAFF_RESULT,
  SET_LOADER_RESULT,
  SHOW_MESSAGE_RESULT,
  HIDE_MESSAGE_RESULT,
  FETCH_CELEBRANTS_RESULT,
  FETCH_LEAVE_POLICIES_RESULT,
  CREATE_LEAVE_POLICY_RESULT,
  APPLY_LEAVE_POLICY_RESULT,
  ASSIGN_LEAVE_POLICY_RESULT,
  EDIT_LEAVE_POLICY_RESULT,
  FETCH_LEAVE_PLANS_RESULT,
  APPROVE_LEAVE_RESULT,
  DELETE_LEAVE_RESULT,
  CREATE_PAYROLL_ITEM_RESULT,
  FETCH_PAYROLL_ITEM_RESULT,
  FETCH_PAYROLL_RESULT,
  ADD_EARNING_RESULT,
  FETCH_EARNINGS_RESULT,
  ADD_PRE_TAX_DEDUCTION_RESULT,
  FETCH_PRE_TAX_DEDUCTIONS_RESULT,
  ADD_POST_TAX_DEDUCTION_RESULT,
  FETCH_POST_TAX_DEDUCTIONS_RESULT,
  addStaffResult,
  fetchStaffsResult,
  getStaffResult,
  fetchDepartmentResult,
  fetchDepartmentsResult,
  fetchDesignationResult,
  fetchDesignationsResult,
  editStaffResult,
  deleteStaffResult,
  deleteDepartmentResult,
  deleteDesignationResult,
  fetchCelebrantsResult,
  setLoaderResult,
  showMessageResult,
  hideMessageResult,
  createLeavePolicyResult,
  applyLeavePolicyResult,
  fetchLeavePoliciesResult,
  assignLeavePolicyResult,
  editLeavePolicyResult,
  fetchLeavePlansResult,
  approveLeaveResult,
  removeLeaveResult,
  createPayRollItemResult,
  fetchPayRollItemResult,
  fetchPayRollResult,
  APPROVE_LEAVE,
  CREATE_PAYROLL_ITEM,
  ADD_BASIC_PAYMENT_RESULT,
  changeBasicPaymentResult,
  CHANGE_BASIC_PAYMENT_RESULT,
  addEarningResult,
  fetchEarningsResult,
  addPreTaxResult,
  fetchPreTaxsResult,
  addPostTaxResult,
  fetchPostTaxsResult,
} from "../actions/staff";

const initialState = {
  loader: false,
  alertMessage: "",
  showMessage: false,
  staffs: [],
  newStaff: {},
  currentStaff: {},
  departments: [],
  designations: [],
  leavepolicies: [
    { id: "1", name: "Casual Leave", date: "25" },
    { id: "2", name: "Health Leave", date: "30" },
  ],
  leaveplans: [
    {
      id: "1",
      staff_name: "adegbenga adesina ray",
      startDate: "04/02/2020",
      ending: "04/02/2020",
      review: "In Progress",
    },
    {
      id: "2",
      staff_name: "ANDREW Wommack",
      date: "04/02/2020",
      ending: "04/02/2020",
      review: "In Progress",
    },
  ],

  payrollitems: [
    { id: "1", name: "Housing", type: "Allowances", default_rate: "20000.00" },
    { id: "1", name: "Leave", type: "Allowances", default_rate: "20000.00" },
  ],
  payrolls: [
    {
      id: "1",
      payroll: "10001",
      date: "04/02/2020",
      employee: "1",
      employee_payments: "N 74,400.00",
      other_payments: "N 600.00",
      total: "N 75,000.00",
    },
    {
      id: "4",
      payroll: "100003",
      date: "05/06/2020",
      employee: "1",
      employee_payments: "N 74,400.00",
      other_payments: "N 600.00",
      total: "N 75,000.00",
    },
  ],
  celebrants: [],
  postTaxDeductions: [],
  preTaxDeductions: [],
  earning: [],
  salaryStructures: [],
};

const staffReducer = handleAction(
  combineActions(
    addStaffResult,
    fetchStaffsResult,
    getStaffResult,
    fetchDepartmentResult,
    fetchDepartmentsResult,
    fetchDesignationResult,
    fetchDesignationsResult,
    editStaffResult,
    deleteStaffResult,
    deleteDepartmentResult,
    deleteDesignationResult,
    fetchCelebrantsResult,
    setLoaderResult,
    showMessageResult,
    hideMessageResult,
    createLeavePolicyResult,
    applyLeavePolicyResult,
    fetchLeavePoliciesResult,
    assignLeavePolicyResult,
    editLeavePolicyResult,
    fetchLeavePlansResult,
    approveLeaveResult,
    removeLeaveResult,
    createPayRollItemResult,
    fetchPayRollItemResult,
    fetchPayRollResult,
    changeBasicPaymentResult,
    addEarningResult,
    fetchEarningsResult,
    addPreTaxResult,
    fetchPreTaxsResult,
    addPostTaxResult,
    fetchPostTaxsResult
  ),

  {
    next(state, action) {
      switch (action.type) {
        case SAVE_STAFF_RESULT:
          return {
            ...state,
            newStaff: {
              ...state.newStaff,
              payload: action.payload,
            },
          };
          break;
        case SET_LOADER_RESULT:
          return {
            ...state,
            loader: action.payload,
          };
          break;
        case SHOW_MESSAGE_RESULT:
          return {
            ...state,
            alertMessage: action.payload,
            showMessage: true,
            loader: false,
          };
          break;
        case HIDE_MESSAGE_RESULT:
          return {
            ...state,
            alertMessage: "",
            showMessage: false,
            loader: false,
          };
          break;

        case FETCH_CELEBRANTS_RESULT:
          return {
            ...state,
            celebrants: action.payload,
          };
          break;
        case ADD_STAFF_RESULT:
          return {
            ...state,
            staffs: [...state.staffs, action.payload.data],
          };

        case GET_STAFF_RESULT:
          return {
            ...state,
            currentStaff: action.payload,
          };
        case EDIT_STAFF_RESULT:
          return {
            ...state,
            currentStaff: action.payload,
          };
        case FETCH_STAFFS_RESULT:
          return {
            ...state,
            staffs: action.payload,
          };

        case DELETE_STAFF_RESULT:
          return {
            ...state,
            staffs: action.payload,
          };

        // DepartmentS
        case ADD_DEPARTMENT_RESULT:
          return {
            ...state,
            departments: [...state.departments, action.payload],
          };

        case FETCH_DEPARTMENT_RESULT:
          return {
            ...state,
            currentDeparment: action.payload,
          };

        case FETCH_DEPARTMENTS_RESULT:
          return {
            ...state,
            departments: action.payload,
          };

        case DELETE_DEPARTMENT_RESULT:
          return {
            ...state,
          };

        // DeSIGNATION
        case ADD_DESIGNATION_RESULT:
          return {
            ...state,
            designations: [...state.designations, action.payload],
          };

        case FETCH_DESIGNATION_RESULT:
          return {
            ...state,
            currentDesignation: action.payload,
          };

        case FETCH_DESIGNATIONS_RESULT:
          return {
            ...state,
            designations: action.payload,
          };

        case DELETE_DESIGNATION_RESULT:
          return {
            ...state,
          };
          break;
        case CREATE_LEAVE_POLICY_RESULT:
          return {
            ...state,
            alertMessage: "New Policy has been added",
            showMessage: true,
            leavepolicies: [...state.leavepolicies, action.payload],
            loader: false,
          };
          break;
        case EDIT_LEAVE_POLICY_RESULT:
          return {
            ...state,
            alertMessage: "Policy Updated Successfully",
            showMessage: true,
            leavepolicies: action.payload,
            loader: false,
          };
          break;
        case APPLY_LEAVE_POLICY_RESULT:
          return {
            ...state,
            alertMessage: "Leave Applied Successfully",
            showMessage: true,
            leavepolicies: [...state.leavepolicies, action.payload],
          };
          break;

        case ASSIGN_LEAVE_POLICY_RESULT:
          return {
            ...state,
            alertMessage: "Leave Assigned Successfully",
            showMessage: true,
            leavepolicies: [...state.leavepolicies, action.payload],
          };
          break;

        case FETCH_LEAVE_POLICIES_RESULT:
          return {
            ...state,
            leavepolicies: [...state.leavepolicies, action.payload],
          };
          break;

        case FETCH_LEAVE_PLANS_RESULT:
          return {
            ...state,
            leaveplans: [...state.leaveplans, action.payload],
          };
          break;
        case APPROVE_LEAVE_RESULT:
          return {
            ...state,
            leaveplans: action.payload,
          };
          break;

        case DELETE_LEAVE_RESULT:
          return {
            ...state,
            leaveplans: action.payload,
          };
          break;

        case CREATE_PAYROLL_ITEM_RESULT:
          return {
            ...state,
            payrollitems: [...state.payrollitems, action.payload],
            alertMessage: action.payload,
            showMessage: false,
            loader: action.payload,
          };
          break;

        case FETCH_PAYROLL_ITEM_RESULT:
          return {
            ...state,
            payrollitems: [...state.payrollitems, action.payload],
            payrollitems: [...state.payrollitems, action.payload],
            alertMessage: action.payload,
            showMessage: false,
            loader: action.payload,
          };
          break;

        case FETCH_PAYROLL_RESULT:
          return {
            ...state,
            payrolls: [...state.payrolls, action.payload],
          };
          break;

        case ADD_BASIC_PAYMENT_RESULT:
          return {
            ...state,
            staffs: [...state.staffs, action.payload],
          };
          break;

        case CHANGE_BASIC_PAYMENT_RESULT:
          return {
            ...state,
            staffs: [...state.staffs, action.payload],
          };
          break;

        case ADD_EARNING_RESULT:
          return {
            ...state,
            earnings: [...state.earnings, action.payload],
          };
          break;

        case FETCH_EARNINGS_RESULT:
          return {
            ...state,
            earnings: [...state.earnings, action.payload],
          };
          break;

        case ADD_PRE_TAX_DEDUCTION_RESULT:
          return {
            ...state,
            preTaxsDeductions: [...state.preTaxsDeductions, action.payload],
          };
          break;

        case FETCH_PRE_TAX_DEDUCTIONS_RESULT:
          return {
            ...state,
            preTaxsDeductions: [...state.preTaxsDeductions, action.payload],
          };
          break;

        case ADD_POST_TAX_DEDUCTION_RESULT:
          return {
            ...state,
            postTaxsDeductions: [...state.postTaxsDeductions, action.payload],
          };
          break;

        case FETCH_POST_TAX_DEDUCTIONS_RESULT:
          return {
            ...state,
            postTaxsDeductions: [...state.postTaxsDeductions, action.payload],
          };
          break;

        default:
          return state;
          break;
      }
    },
    throw(state, action) {
      switch (action.type) {
        case SAVE_STAFF_RESULT:
          return {
            ...state,
            errors: action.payload,
          };
          break;
        case SET_LOADER_RESULT:
          return {
            ...state,
            error: action.payload,
          };
          break;
        case FETCH_CELEBRANTS_RESULT:
          return {
            ...state,
            error: action.payload,
          };
          break;
        case ADD_STAFF_RESULT:
          return {
            ...state,
            errors: action.payload,
          };
          break;
        case GET_STAFF_RESULT:
          return {
            ...state,
            errors: action.payload,
          };
          break;
        case EDIT_STAFF_RESULT:
          return {
            ...state,
            errors: action.payload,
          };
          break;
        case FETCH_STAFFS_RESULT:
          return {
            ...state,
            errors: action.payload,
          };
          break;
        case DELETE_STAFF_RESULT:
          return {
            ...state,
            errors: action.payload,
          };
          break;
        // DepartmentS
        case ADD_DEPARTMENT_RESULT:
          return {
            ...state,
            errors: action.payload,
          };
          break;
        case FETCH_DEPARTMENT_RESULT:
          return {
            ...state,
            errors: action.payload,
          };
          break;
        case FETCH_DEPARTMENTS_RESULT:
          return {
            ...state,
            errors: action.payload,
          };
          break;
        case DELETE_DEPARTMENT_RESULT:
          return {
            ...state,
            errors: action.payload,
          };
          break;
        // DeSIGNATION
        case ADD_DESIGNATION_RESULT:
          return {
            ...state,
            errors: action.payload,
          };
          break;

        case FETCH_DESIGNATION_RESULT:
          return {
            ...state,
            errors: action.payload,
          };
          break;
        case FETCH_DESIGNATIONS_RESULT:
          return {
            ...state,
            errors: action.payload,
          };
          break;
        case DELETE_DESIGNATION_RESULT:
          return {
            ...state,
            errors: action.payload,
          };
          break;

        case CREATE_LEAVE_POLICY_RESULT:
          return {
            ...state,
            alertMessage: action.payload,
            errors: action.payload,
            loader: false,
          };
          break;
        case EDIT_LEAVE_POLICY_RESULT:
          return {
            ...state,
            alertMessage: action.payload,
            showMessage: true,
            errors: action.payload,
            loader: false,
          };
          break;
        case APPLY_LEAVE_POLICY_RESULT:
          return {
            ...state,
            alertMessage: action.payload,
            showMessage: true,
            errors: action.payload,
          };
          break;

        case ASSIGN_LEAVE_POLICY_RESULT:
          return {
            ...state,
            alertMessage: action.payload,
            showMessage: true,
            errors: action.payload,
          };
          break;

        case FETCH_LEAVE_POLICIES_RESULT:
          return {
            ...state,
            alertMessage: action.payload,
            showMessage: true,
            errors: action.payload,
          };
          break;
        case FETCH_LEAVE_PLANS_RESULT:
          return {
            ...state,
            alertMessage: action.payload,
            showMessage: true,
            errors: action.payload,
          };
          break;
        case APPROVE_LEAVE_RESULT:
          return {
            ...state,
            alertMessage: action.payload,
            showMessage: true,
            errors: action.payload,
          };
          break;

        case DELETE_LEAVE_RESULT:
          return {
            ...state,

            alertMessage: action.payload,
            showMessage: true,
            errors: action.payload,
          };
          break;

        case CREATE_PAYROLL_ITEM_RESULT:
          return {
            ...state,
            alertMessage: action.payload,
            showMessage: true,
            errors: action.payload,
          };
          break;

        case FETCH_PAYROLL_ITEM_RESULT:
          return {
            ...state,
            alertMessage: action.payload,
            showMessage: true,
            errors: action.payload,
          };
          break;

        case FETCH_PAYROLL_RESULT:
          return {
            ...state,
            alertMessage: action.payload,
            showMessage: true,
            errors: action.payload,
          };
          break;

        case ADD_BASIC_PAYMENT_RESULT:
          return {
            ...state,
            alertMessage: action.payload,
            showMessage: true,
            errors: action.payload,
          };
          break;

        case CHANGE_BASIC_PAYMENT_RESULT:
          return {
            ...state,
            alertMessage: action.payload,
            showMessage: true,
            errors: action.payload,
          };
          break;
        case ADD_PRE_TAX_DEDUCTION_RESULT:
          return {
            ...state,
            alertMessage: action.payload,
            showMessage: true,
            errors: action.payload,
          };
          break;

        case FETCH_PRE_TAX_DEDUCTIONS_RESULT:
          return {
            ...state,
            alertMessage: action.payload,
            showMessage: true,
            errors: action.payload,
          };
          break;

        case ADD_POST_TAX_DEDUCTION_RESULT:
          return {
            ...state,
            alertMessage: action.payload,
            showMessage: true,
            errors: action.payload,
          };
          break;

        case FETCH_POST_TAX_DEDUCTIONS_RESULT:
          return {
            ...state,
            alertMessage: action.payload,
            showMessage: true,
            errors: action.payload,
          };
          break;

        default:
          return state;
          break;
      }
    },
  },
  initialState
);

export default staffReducer;

import axios from "axios";

import setAuthToken from "../utils/setAuthToken";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://propertycloud-node.herokuapp.com/"
    : "http://localhost:5000/";

// Set Token to header
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const addStaffApi = async (data) => {
  console.log("ADD STAFF DATA", data);
  data.employment_type = data["employment_type"][0];
  data.addition = data.addition ? data.addition : "hello";
  data.compensation = data.compensation ? data.compensation : "hello";
  data.department = data.department ? data.department : "hello";
  data.dob = data.dob._d.toString();
  data.startDate = data.startDate._d.toString();
  delete data.nationality;
  const body = JSON.stringify(data);
  try {
    const res = await axios.post(BASE_URL + "api/v1/staff", body, config);
    console.log("STAFF RESPONSE", res);
    return res;
  } catch (error) {
    console.log("Error FromStaff:", error);
    return error;
  }
};

export const editStaffApi = async (data) => {
  console.log("Edit STAFF DATA", data);
  data.employment_type = data["employment_type"][0];
  data.addition = data.addition ? data.addition : "hello";
  data.compensation = data.compensation ? data.compensation : "hello";
  data.department = data.department ? data.department : "hello";
  data.dob = data.dob._d.toString();
  data.startDate = data.startDate._d.toString();
  delete data.nationality;
  const body = JSON.stringify(data);
  try {
    const res = await axios.post(BASE_URL + "api/v1/staff", body, config);
    console.log("STAFF RESPONSE", res);
    return res;
  } catch (error) {
    console.log("Error FromStaff:", error);
    return error;
  }
};

export const loadStaffsApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/staff", body, config);
    console.log("STAFF RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const fetchCelebrantsApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/staff", body, config);
    console.log("STAFF RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const fetchLeavePoliciesApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/staff", body, config);
    console.log("STAFF RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const getStaffApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/department", body, config);
    console.log("Staff RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const deleteStaffApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/department", body, config);
    console.log("Staff RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const loadDesignationsApi = async () => {
  try {
    const res = await axios.get(BASE_URL + "api/v1/positions");
    console.log("DESIGNATION RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const loadDepartmentsApi = async () => {
  try {
    const res = await axios.get(BASE_URL + "api/v1/department");
    console.log("DEPARTMENT RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const createLeavePolicyApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/positions", body, config);
    console.log("DESIGNATION RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const editLeavePolicyApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/positions", body, config);
    console.log("DESIGNATION RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const applyLeavePolicyApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/positions", body, config);
    console.log("DESIGNATION RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const assignLeavePolicyApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/positions", body, config);
    console.log("DESIGNATION RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const addDesignationApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/positions", body, config);
    console.log("DESIGNATION RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const addDepartmentApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/department", body, config);
    console.log("DEPARTMENT RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const deleteDepartmentApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/department", body, config);
    console.log("DEPARTMENT RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const deleteDesignationApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/designation", body, config);
    console.log("DEPARTMENT RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const approveLeavePlanApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/positions", body, config);
    console.log("DESIGNATION RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const removeLeavePlanApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/positions", body, config);
    console.log("DESIGNATION RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const fetchLeavePlanApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/positions", body, config);
    console.log("DESIGNATION RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const fetchPayrollApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/positions", body, config);
    console.log("DESIGNATION RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const fetchPayrollItemApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/positions", body, config);
    console.log("DESIGNATION RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const createPayrollItemApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/positions", body, config);
    console.log("DESIGNATION RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const addBasicPaymentApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/department", body, config);
    console.log("DEPARTMENT RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const changeBasicPaymentApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/department", body, config);
    console.log("DEPARTMENT RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const filterBasicPaymentByStatusApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/department", body, config);
    console.log("DEPARTMENT RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const filterBasicPaymentByEmployeeApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/department", body, config);
    console.log("DEPARTMENT RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const addEarningApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/department", body, config);
    console.log("DEPARTMENT RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const fetchEarningsApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/department", body, config);
    console.log("DEPARTMENT RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const addPreTaxApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/department", body, config);
    console.log("DEPARTMENT RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const fetchPreTaxsApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/department", body, config);
    console.log("DEPARTMENT RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const addPostTaxApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/department", body, config);
    console.log("DEPARTMENT RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

export const fetchPostTaxsApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.get(BASE_URL + "api/v1/department", body, config);
    console.log("DEPARTMENT RESPONSE", res);

    return res;
  } catch (error) {
    return error;
  }
};

import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

//////////////////////////////////////////
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

/////////////////////////////////////////////////

export const addPropertyApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.post(BASE_URL + "api/v1/property", body, config);
    console.log("STAFF RESPONSE", res);
    return res;
  } catch (error) {
    console.log("Error FromStaff:", error);
    return error;
  }
};

export const fetchpropertiesApi = async () => {
  try {
    const res = await axios.get(BASE_URL + "api/v1/properties");
    console.log("LOGISTICS RESPONSE", res.data);

    return res.data;
  } catch (error) {
    return error.message;
  }
};

/////////////////////////////////////////////////

export const addVendorApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.post(BASE_URL + "api/v1/property", body, config);
    console.log("STAFF RESPONSE", res.data);
    return res.data;
  } catch (error) {
    console.log("Error FromStaff:", error);
    return error.message;
  }
};

export const fetchVendorsApi = async () => {
  try {
    const res = await axios.get(BASE_URL + "api/v1/properties");
    console.log("LOGISTICS RESPONSE", res.data);

    return res.data;
  } catch (error) {
    return error.message;
  }
};

/////////////////////////////////////////////////

export const addStateApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.post(BASE_URL + "api/v1/property", body, config);
    console.log("STAFF RESPONSE", res.data);
    return res.data;
  } catch (error) {
    console.log("Error FromStaff:", error);
    return error.message;
  }
};

export const fetchStatesApi = async () => {
  try {
    const res = await axios.get(BASE_URL + "api/v1/properties");
    console.log("LOGISTICS RESPONSE", res.data);

    return res.data;
  } catch (error) {
    return error.message;
  }
};

/////////////////////////////////////////////////

export const addCityApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.post(BASE_URL + "api/v1/property", body, config);
    console.log("STAFF RESPONSE", res.data);
    return res.data;
  } catch (error) {
    console.log("Error FromStaff:", error);
    return error.message;
  }
};

export const fetchCitiesApi = async () => {
  try {
    const res = await axios.get(BASE_URL + "api/v1/properties");
    console.log("LOGISTICS RESPONSE", res.data);

    return res.data;
  } catch (error) {
    return error.message;
  }
};

/////////////////////////////////////////////////

export const addOperatingAccountApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.post(BASE_URL + "api/v1/property", body, config);
    console.log("STAFF RESPONSE", res.data);
    return res.data;
  } catch (error) {
    console.log("Error FromStaff:", error);
    return error.message;
  }
};

export const fetchOperatingAccountApi = async () => {
  try {
    const res = await axios.get(BASE_URL + "api/v1/properties");
    console.log("LOGISTICS RESPONSE", res.data);

    return res.data;
  } catch (error) {
    return error.message;
  }
};

/////////////////////////////////////////////////

export const addInventoryAccountApi = async (data) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.post(BASE_URL + "api/v1/property", body, config);
    console.log("STAFF RESPONSE", res.data);
    return res.data;
  } catch (error) {
    console.log("Error FromStaff:", error);
    return error.message;
  }
};

export const fetchInventoryAccountApi = async () => {
  try {
    const res = await axios.get(BASE_URL + "api/v1/properties");
    console.log("LOGISTICS RESPONSE", res.data);

    return res.data;
  } catch (error) {
    return error.message;
  }
};

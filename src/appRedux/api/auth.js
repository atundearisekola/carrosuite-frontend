import axios from "axios";
import { BASE_URL, config } from "../baseUrl";
import jwt_decode from "jwt-decode";

import { setAlert } from "./alerts";
import setAuthToken from "../utils/setAuthToken";

// Load authenticated User To Store
export const loadUserApi = (decoded) => {
  console.log("DECODED VALUE: ", decoded);
  if (decoded !== "" && Date.now() >= decoded.exp) {
    return decoded;
  } else {
    return "";
  }
};

export async function registerUserApi(credentials) {
  const body = JSON.stringify(credentials);
  return await axios
    .post(`${BASE_URL}api/v1/users`, body, config)
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
}

export const registerUserApi2 = async (credentials) => {
  const body = JSON.stringify(credentials);
  const res = await axios
    .post(`${BASE_URL}api/v1/users`, body, config)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  console.log("res", res);
  return res;
};

export const logoutApi = () => {
  localStorage.removeItem("state");
  return true;
};

export const loginUserApi1 = async (credentials) => {
  const body = JSON.stringify(credentials);
  await axios
    .post(BASE_URL + "api/v1/users/login", body, config)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export async function loginUserApi(credentials) {
  const body = JSON.stringify(credentials);
  return await axios
    .post(BASE_URL + "api/v1/users/login", body, config)
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
}

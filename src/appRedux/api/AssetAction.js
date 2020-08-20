import axios from 'axios';

import setAuthToken from '../utils/setAuthToken';

// Set Token to header
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://propertycloud-node.herokuapp.com/'
    : 'http://localhost:5000/';

export const fetchAssetsApi = async () => {
  try {
    const res = await axios.get(
      BASE_URL + 'api/v1/assets/view-all_assigned_asset'
    );
    return res.data;
  } catch (error) {
    alert(error);
    return error.message;
  }
};

export const addAssetsApi = async (credentials) => {
  try {
    const res = await axios.post(
      BASE_URL + 'api/v1/assets/create',
      credentials,
      config
    );
    alert(JSON.stringify(res.data));
    return res.data;
  } catch (err) {
    alert(err.message);
    return err;
  }
};

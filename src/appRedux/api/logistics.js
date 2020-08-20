import axios from 'axios';

import setAuthToken from '../utils/setAuthToken';

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://propertycloud-node.herokuapp.com/'
    : 'http://localhost:5000/';

// Set Token to header
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const loadLogisticsOrderApi = async () => {
  try {
    const res = await axios.get(BASE_URL + 'api/v1/logistics/orders');
    console.log('LOGISTICS RESPONSE', res.data);

    return res.data;
  } catch (error) {
    return error.message;
  }
};

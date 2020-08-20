import { BASE_URL } from '../baseUrl';
import axios from 'axios';
import {
    SHOW_LOGISTICS_MESSAGE,
    HIDE_LOGISTICS_MESSAGE,
    FETCH_LOGISTICS_START,
    FETCH_LOGISTICS_SUCCESS,
} from 'constants/ActionTypes'

export const fetch_logistics_start = () => {
    return {
        type: FETCH_LOGISTICS_START,
    }
};

export const fetch_logistics_success = (orders) => {
    return {
        type: FETCH_LOGISTICS_SUCCESS,
        payload: orders
    }
}


export const show_logistics_message = (message) => {
    return {
        type: SHOW_LOGISTICS_MESSAGE,
        payload: message
    }
}

export const hide_logistics_message = () => {
    return {
        type: HIDE_LOGISTICS_MESSAGE,
    }
}


export const update_logistics_order_status = (values) => dispatch => {
    const data = JSON.stringify(values);
    return axios.post(BASE_URL + "api/v1/logistics/orders/status/update", data)
        .then(res => Promise.resolve())
        .catch(err => err);
};

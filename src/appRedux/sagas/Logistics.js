import { all, call, fork, put, takeEvery, takeLatest } from "redux-saga/effects";
import { BASE_URL } from '../baseUrl';
import axios from 'axios';
import { FETCH_ORDERS } from "constants/ActionTypes";
import { show_logistics_message, fetch_logistics_success } from '../actions/Logistics';


export const loadLogisticsOrder = async () => {
    const res = await axios.get(BASE_URL + "api/v1/logistics/orders")
        .then(res => ({ data: res.data, status: 200 }))
        .catch(err => ({ err: err.message, status: 500 }));
    console.log("LOGITICS ORDER RES ::", res);
    return res;
};

function* fetch_logistics_order() {
    try {
        const logistics_order = yield call(loadLogisticsOrder);
        if (logistics_order.status === 500) {
            yield put(show_logistics_message("Oppss An Error Occured Trying To Fetch Orders"));
        } else {
            yield put(fetch_logistics_success(logistics_order.data))
        }
    } catch (err) {
        yield put(show_logistics_message("Oppss An Error Occured Trying To Fetch Orders"))
    }
}







export function* getOrders() {
    yield takeLatest(FETCH_ORDERS, fetch_logistics_order);
}


export default function* rootSaga() {
    yield all([
        fork(getOrders)
    ]);

}
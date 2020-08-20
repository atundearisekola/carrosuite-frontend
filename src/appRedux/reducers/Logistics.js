import { SHOW_LOGISTICS_ORDER_STATUS_MESSAGE, FETCH_LOGISTICS_START, FETCH_LOGISTICS_SUCCESS, SHOW_LOGISTICS_MESSAGE, FETCH_LOGISTICS_ERROR, HIDE_LOGISTICS_MESSAGE } from 'constants/ActionTypes'

const INIT_STATE = {
    alertMessage: "",
    showMessage: false,
    loading: false,
    orders: [],
    status_message: "",
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_LOGISTICS_START: {
            return { ...state, loading: true };
        }
        case FETCH_LOGISTICS_SUCCESS: {
            return { ...state, orders: action.payload, loading: false };
        }
        case SHOW_LOGISTICS_MESSAGE: {
            return { ...state, alertMessage: action.payload, loading: false, showMessage: true };
        }

        case HIDE_LOGISTICS_MESSAGE: {
            return { ...state, loading: false, alertMessage: '', showMessage: false };
        }


        case SHOW_LOGISTICS_ORDER_STATUS_MESSAGE: {
            return { ...state, status_message: action.payload };
        }
        default:
            return state;
    }
}

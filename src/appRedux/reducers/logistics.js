import { handleAction, combineActions } from 'redux-actions';
import {
  FETCH_LOGISTICS_ORDER_RESULT,
  fetchLogisticsOrderResult,
} from '../actions/logistics';

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const logisticsReducers = handleAction(
  combineActions(fetchLogisticsOrderResult),

  {
    next(state, action) {
      switch (action.type) {
        case FETCH_LOGISTICS_ORDER_RESULT:
          localStorage.setItem('token', action.payload.token);
          return {
            ...state,
            orders: action.payload,
            loading: false,
          };

          break;

        case 'LOADING':
          return {
            ...state,
            loading: true,
          };

        default:
          return state;
          break;
      }
    },
    throw(state, action) {
      switch (action.type) {
        case FETCH_LOGISTICS_ORDER_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: false,
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

export default logisticsReducers;

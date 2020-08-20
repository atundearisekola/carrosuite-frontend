import { createAction } from 'redux-actions';
export const FETCH_LOGISTICS_ORDER = 'FETCH_LOGISTICS_ORDER';
export const FETCH_LOGISTICS_ORDER_RESULT = 'FETCH_LOGISTICS_ORDER_RESULT';

export const fetchLogisticsOrder = createAction(FETCH_LOGISTICS_ORDER);
export const fetchLogisticsOrderResult = createAction(
  FETCH_LOGISTICS_ORDER_RESULT
);

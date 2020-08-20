import { SET_ALERT, REMOVE_ALERT } from "../actions/types";
const initialstate = {
  message: null,
  type: null
};
export default function(state = initialstate, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return { message: payload.message, type: payload.type };
    case REMOVE_ALERT:
      return {};

    default:
      return state;
  }
}

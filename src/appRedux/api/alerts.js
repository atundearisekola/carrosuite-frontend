import { SET_ALERT } from "./types";
export const setAlert = (message = null, type = null) => {
  return {
    type: SET_ALERT,
    payload: { message, type }
  };
};

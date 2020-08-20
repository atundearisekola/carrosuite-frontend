import { SORT_DATA } from "../actions/types";
const sortedData = {};

export default (state = sortedData, action) => {
  const { payload, type } = action;

  switch (type) {
    case SAVE_STAFF:
      return {
        ...state,
        newStaff: {
          ...state.newStaff,
          ...payload
        }
      };
    default:
      return state;
  }
};

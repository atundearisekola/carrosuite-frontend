import {
  ADD_COLUMNS,
  GET_COLUMNS_SUCCESS
} from "../actions/types";

const tableColumns = {
  columns: {},
  newColumns: []
};

export default (state = tableColumns, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_COLUMNS:
      return {
        ...state,
        newColumns: [...state.newColumns, payload]
      };
    case GET_COLUMNS_SUCCESS:
      return {
        ...state,
        columns: { ...state.columns }
      };
    default:
      return state;
  }
};

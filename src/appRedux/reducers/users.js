const userDefault = {
  user: {},
  error: "",
  isAuthenticated: false
};

export default (state = userDefault, action) => {
  const { payload, type } = action;

  switch (type) {
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      localStorage.setItem("token", JSON.stringify(payload));
      return {
        ...state,
        token: payload,
        isAuthenticated: true,
        error: null,

        user: {
          ...payload.user
        }
      };

    case "LOGIN_FAILED":
    case "REGISTER_FAILED":
    case "AUTH_ERROR":
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        error: payload,
        user: null,
        token: null
      };
    case "RESET_ERROR":
      return {
        ...state,
        error: null
      };
    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        user: {
          ...payload
        }
      };
    case "SET_ERROR":
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

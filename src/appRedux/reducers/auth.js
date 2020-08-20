import { handleAction, combineActions } from "redux-actions";
import {
  RECEIVE_AUTH,
  LOAD_USER_RESULT,
  RECEIVE_LOGOUT,
  ON_SHOW_LOADER_RESULT,
  ON_HIDE_LOADER_RESULT,
  SHOW_MESSAGE_RESULT,
  HIDE_MESSAGE_RESULT,
  LOAD_USER,
  INIT_URL_RESULT,
  receiveAuth,
  receiveLoadUserResult,
  setInitUrlResult,
  receiveLogout,
  showMessageResult,
  hideMessageResult,
  showAuthLoaderResult,
  hideAuthLoaderResult,
} from "../actions/auth";
// import { setAlert } from "../actions/alerts";

const initialState = {
  token: "",
  loader: false,
  isAuthenticated: false,
  user: null,
  alertMessage: "",
  showMessage: false,
  initURL: "",
};

const auth = handleAction(
  combineActions(
    receiveAuth,
    receiveLogout,
    receiveLoadUserResult,
    showMessageResult,
    hideMessageResult,
    showAuthLoaderResult,
    hideAuthLoaderResult,
    setInitUrlResult
  ),

  {
    next(state, action) {
      switch (action.type) {
        case RECEIVE_AUTH:
          console.log(action.payload);
          return {
            ...state,
            payload: action.payload,
            isAuthenticated: true,
            alertMessage: "",
            loader: false,

            showMessage: false,
          };
          break;

        case INIT_URL_RESULT:
          return {
            ...state,
            initURL: action.payload,
          };
          break;
        case SHOW_MESSAGE_RESULT:
          return {
            ...state,
            alertMessage: action.payload,
            showMessage: true,
            loader: false,
          };
          break;
        case HIDE_MESSAGE_RESULT:
          return {
            ...state,
            showMessage: false,
            alertMessage: "",

            loader: false,
          };
          break;

        case ON_SHOW_LOADER_RESULT:
          return {
            ...state,
            loader: false,
          };
          break;
        case ON_HIDE_LOADER_RESULT:
          return {
            ...state,
            loader: false,
          };
          break;

        case RECEIVE_LOGOUT:
          localStorage.removeItem("auth");
          return {
            ...state,
            token: "",
            isAuthenticated: false,
            loader: false,
          };
          break;
        case LOAD_USER_RESULT:
          localStorage.setItem("auth", action.payload);
          return {
            ...state,
            token: action.payload,
            isAuthenticated: false,
            loader: false,
          };
          break;

        default:
          return state;
          break;
      }
    },
    throw(state, action) {
      switch (action.type) {
        case RECEIVE_AUTH:
          console.log(action.payload);
          localStorage.removeItem("auth");
          return {
            ...state,

            token: "",
            isAuthenticated: true,
            loader: false,
            alertMessage: action.payload,
            showMessage: true,
          };

          break;
        case RECEIVE_LOGOUT:
          localStorage.removeItem("auth");
          return {
            ...state,
            token: "",
            isAuthenticated: false,
            loader: false,
            alertMessage: action.payload,
            showMessage: true,
          };
          break;
        case LOAD_USER_RESULT:
          localStorage.removeItem("auth");
          return {
            ...state,
            token: "",
            isAuthenticated: false,
            loader: false,
            showMessage: true,
            alertMessage: action.payload,
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

export default auth;

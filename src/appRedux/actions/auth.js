import { createAction } from "redux-actions";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const LOG_OUT = "LOG_OUT";
export const RECEIVE_LOGOUT = "RECEIVE_LOG_OUT";
export const LOAD_USER = "LOAD_USER";
export const LOAD_USER_RESULT = "LOAD_USER_RESULT";
export const RECEIVE_AUTH = "RECEIVE_AUTH";
export const ON_SHOW_LOADER_RESULT = "ON_SHOW_LOADER_RESULT";
export const ON_SHOW_LOADER = "ON_SHOW_LOADER";
export const ON_HIDE_LOADER_RESULT = "ON_HIDE_LOADER_RESULT";
export const ON_HIDE_LOADER = "ON_HIDE_LOADER";

export const SHOW_MESSAGE = "SHOW_MESSAGE";
export const SHOW_MESSAGE_RESULT = "SHOW_MESSAGE_RESULT";
export const HIDE_MESSAGE = "HIDE_MESSAGE";
export const HIDE_MESSAGE_RESULT = "HIDE_MESSAGE_RESULT";
export const INIT_URL = "INIT_URL";
export const INIT_URL_RESULT = "INIT_URL_RESULT";

export const showMessage = createAction(SHOW_MESSAGE);
export const showMessageResult = createAction(SHOW_MESSAGE_RESULT);
export const hideMessage = createAction(HIDE_MESSAGE);
export const hideMessageResult = createAction(HIDE_MESSAGE_RESULT);
export const setInitUrl = createAction(INIT_URL);
export const setInitUrlResult = createAction(INIT_URL_RESULT);

export const showAuthLoader = createAction(ON_SHOW_LOADER);
export const showAuthLoaderResult = createAction(ON_SHOW_LOADER_RESULT);
export const hideAuthLoader = createAction(ON_HIDE_LOADER);
export const hideAuthLoaderResult = createAction(ON_HIDE_LOADER_RESULT);
export const loginUser = createAction(LOGIN);
export const registerUser = createAction(REGISTER);
export const loadUser = createAction(LOAD_USER);
export const receiveAuth = createAction(RECEIVE_AUTH);
export const receiveLoadUserResult = createAction(LOAD_USER_RESULT);
export const logout = createAction(LOG_OUT);
export const receiveLogout = createAction(RECEIVE_LOGOUT);

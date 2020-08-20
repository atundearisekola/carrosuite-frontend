import { all, call, fork, put, takeEvery } from "redux-saga/effects";
// import {
//   auth,
//   facebookAuthProvider,
//   githubAuthProvider,
//   googleAuthProvider,
//   twitterAuthProvider
// } from "../../firebase/firebase";
import {
  // SIGNIN_FACEBOOK_USER,
  // SIGNIN_GITHUB_USER,
  // SIGNIN_GOOGLE_USER,
  // SIGNIN_TWITTER_USER,
  SIGNIN_USER,
  SIGNOUT_USER,
  SIGNUP_USER
} from "constants/ActionTypes";
import { BASE_URL, config } from '../baseUrl';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { showAuthMessage, userSignInSuccess, userSignOutSuccess, userSignUpSuccess } from "../../appRedux/actions/Auth";

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token
  }
  else {
    delete axios.defaults.headers.common['Authorization']
  }
}



export const registerUser = async (credentials) => {
  const body = JSON.stringify(credentials);
  const res = await axios.post(`${BASE_URL}api/v1/users`, body, config)
    .then(res => res)
    .catch(err => err);
  console.log("res", res);
  return res;
};


export const loginUser = async (credentials) => {
  const body = JSON.stringify(credentials);
  const res = await axios.post(BASE_URL + "api/v1/users/login", body, config)
    .then(res => res)
    .catch(err => err);
  console.log("res", res);
  return res;
};


function* createNewUserAccount({ payload }) {
  try {
    const signUpUser = yield call(registerUser, payload);
    console.log("USER", signUpUser);
    if (signUpUser.message) {
      yield put(showAuthMessage(signUpUser.message));
    } else {
      setAuthToken(signUpUser.data.token);
      let decoded = jwt_decode(signUpUser.data.token);
      localStorage.setItem('token', signUpUser.data.token);
      yield put(userSignUpSuccess(decoded));
    }
  } catch (error) {
    yield put(showAuthMessage(error.message));
  }


}



function* signInUserWithEmailPassword({ payload }) {
  try {
    const signInUser = yield call(loginUser, payload);
    console.log("USER ", signInUser);
    if (signInUser.message) {

      yield put(showAuthMessage(signInUser.message));
    } else {
      setAuthToken(signInUser.data.token);
      let decoded = jwt_decode(signInUser.data.token);
      localStorage.setItem('token', signInUser.data.token);
      yield put(userSignInSuccess(decoded));
    }
  } catch (error) {
    yield put(showAuthMessage(error.message));
  }

}




function* signOut() {
  const signOutUser = yield call(userSignOutSuccess);
  console.log("LOGGOTOUT :", signOutUser);
  localStorage.removeItem('token');
  yield put(signOutUser);
  yield put(userSignOutSuccess("You are logged out !"));

}

export function* createUserAccount() {
  yield takeEvery(SIGNUP_USER, createNewUserAccount);
}



export function* signInUser() {
  yield takeEvery(SIGNIN_USER, signInUserWithEmailPassword);
}

export function* signOutUser() {
  yield takeEvery(SIGNOUT_USER, signOut);
}

export default function* rootSaga() {
  yield all([fork(signInUser),
  fork(createUserAccount),
  fork(signOutUser)]);
  // fork(signInWithGoogle),
  // fork(signInWithFacebook),
  // fork(signInWithTwitter),
  // fork(signInWithGithub),

}




























// import {
//   userFacebookSignInSuccess,
//   userGithubSignInSuccess,
//   userGoogleSignInSuccess,
//   userTwitterSignInSuccess
// } from "../actions/Auth";

// const createUser = async (email, password) =>
//   await auth.createUserAccount(email, password)
//     .then(authUser => authUser)
//     .catch(error => error);

// const signInUser= async (email, password) =>
//   await auth.signInWithEmailAndPassword(email, password)
//     .then(authUser => authUser)
//     .catch(error => error);

// const signOutRequest = async () =>
//   await auth.signOut()
//     .then(authUser => authUser)
//     .catch(error => error);


// const signInUserWithGoogleRequest = async () =>
//   await  auth.signInWithPopup(googleAuthProvider)
//     .then(authUser => authUser)
//     .catch(error => error);

// const signInUserWithFacebookRequest = async () =>
//   await  auth.signInWithPopup(facebookAuthProvider)
//     .then(authUser => authUser)
//     .catch(error => error);

// const signInUserWithGithubRequest = async () =>
//   await  auth.signInWithPopup(githubAuthProvider)
//     .then(authUser => authUser)
//     .catch(error => error);

// const signInUserWithTwitterRequest = async () =>
//   await  auth.signInWithPopup(twitterAuthProvider)
//     .then(authUser => authUser)
//     .catch(error => error);


// function* signInUserWithGoogle() {
//   try {
//     const signUpUser = yield call(signInUserWithGoogleRequest);
//     if (signUpUser.message) {
//       yield put(showAuthMessage(signUpUser.message));
//     } else {
//       localStorage.setItem('user_id', signUpUser.user.uid);
//       yield put(userGoogleSignInSuccess(signUpUser.user.uid));
//     }
//   } catch (error) {
//     yield put(showAuthMessage(error));
//   }
// }


// function* signInUserWithFacebook() {
//   try {
//     const signUpUser = yield call(signInUserWithFacebookRequest);
//     if (signUpUser.message) {
//       yield put(showAuthMessage(signUpUser.message));
//     } else {
//       localStorage.setItem('user_id', signUpUser.user.uid);
//       yield put(userFacebookSignInSuccess(signUpUser.user.uid));
//     }
//   } catch (error) {
//     yield put(showAuthMessage(error));
//   }
// }


// function* signInUserWithGithub() {
//   try {
//     const signUpUser = yield call(signInUserWithGithubRequest);
//     if (signUpUser.message) {
//       yield put(showAuthMessage(signUpUser.message));
//     } else {
//       localStorage.setItem('user_id', signUpUser.user.uid);
//       yield put(userGithubSignInSuccess(signUpUser.user.uid));
//     }
//   } catch (error) {
//     yield put(showAuthMessage(error));
//   }
// }


// function* signInUserWithTwitter() {
//   try {
//     const signUpUser = yield call(signInUserWithTwitterRequest);
//     if (signUpUser.message) {
//       if (signUpUser.message.length > 100) {
//         yield put(showAuthMessage('Your request has been canceled.'));
//       } else {
//         yield put(showAuthMessage(signUpUser.message));
//       }
//     } else {
//       localStorage.setItem('user_id', signUpUser.user.uid);
//       yield put(userTwitterSignInSuccess(signUpUser.user.uid));
//     }
//   } catch (error) {
//     yield put(showAuthMessage(error));
//   }
// }

// export function* signInWithGoogle() {
//   yield takeEvery(SIGNIN_GOOGLE_USER, signInUserWithGoogle);
// }

// export function* signInWithFacebook() {
//   yield takeEvery(SIGNIN_FACEBOOK_USER, signInUserWithFacebook);
// }

// export function* signInWithTwitter() {
//   yield takeEvery(SIGNIN_TWITTER_USER, signInUserWithTwitter);
// }

// export function* signInWithGithub() {
//   yield takeEvery(SIGNIN_GITHUB_USER, signInUserWithGithub);
//}
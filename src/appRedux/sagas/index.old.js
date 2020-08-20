import { all } from "redux-saga/effects";
import authSagas from "./Auth";
import logisticsSagas from './Logistics';


export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    logisticsSagas(),
  ]);
}

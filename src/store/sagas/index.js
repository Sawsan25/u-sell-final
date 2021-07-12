import { all, fork } from "redux-saga/effects";
import homepageSaga from "./homepageSaga";

export default function* sagas() {
  yield all([fork(homepageSaga)]);
}

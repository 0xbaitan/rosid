import { all } from "redux-saga/effects";
import cameraSaga from "./camera-saga";
import scannerModalSaga from "./scannerModalSaga";

export default function* receiptScanningSaga() {
  yield all([cameraSaga(), scannerModalSaga()]);
}

import { all } from "redux-saga/effects";
import usersSaga from "./users-saga";
import receiptScanningSaga from "@/features/receipt-scanning/sagas";

export default function* rootSaga() {
  yield all([usersSaga(), receiptScanningSaga()]);
}

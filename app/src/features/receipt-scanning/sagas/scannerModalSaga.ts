import { call, put, takeEvery } from 'redux-saga/effects';
import { scannerModalActions } from '../reducers/scannerModalSlice';
import ReceiptScanner from '../util/receipt-scanner';
import { PossiblyNull } from '@/types';
import { Receipt } from '../types';

function* scanImageSagaSideEffect(
  action: ReturnType<typeof scannerModalActions.scanImage>
) {
  const imageSrc = action.payload;
  const receipt: PossiblyNull<Receipt> = yield call(
    ReceiptScanner.scanImage,
    imageSrc
  );
  yield put(scannerModalActions.scanImageSuccess(receipt));
}

export default function* scannerModalSaga() {
  yield takeEvery(scannerModalActions.scanImage.type, scanImageSagaSideEffect);
}

import { put, takeEvery } from 'redux-saga/effects';
import { cameraActions } from '../reducers/camera-reducer';

function* setImageSideEffect() {
  yield put(cameraActions.enableCamera(false));
}

export default function* cameraSaga() {
  yield takeEvery(cameraActions.setImage.type, setImageSideEffect);
}

import { combineReducers } from '@reduxjs/toolkit';
import scannerModalReducer from './scannerModalSlice';
import cameraReducer from './camera-reducer';
import currentReceiptEntryReducer from './currentReceiptEntryReducer';

const receiptScanningReducer = combineReducers({
  'scanner-modal': scannerModalReducer,
  camera: cameraReducer,
  currentReceiptEntry: currentReceiptEntryReducer,
});

export default receiptScanningReducer;

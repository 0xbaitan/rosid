import { PossiblyNull } from "@/types";
import { ScannerModalState } from "../types/state";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Receipt } from "../types";

const initialState: ScannerModalState = {
  receipt: null,
  showModalStatus: false,
};
const scannerModalSlice = createSlice({
  name: "scanner-modal",
  initialState,
  reducers: {
    scanImage: (_state, _action: PayloadAction<string>) => {},
    scanImageSuccess(state, action: PayloadAction<PossiblyNull<Receipt>>) {
      state.receipt = action.payload;
    },

    displayModal: (state, action: PayloadAction<boolean>) => {
      const show = action.payload;
      state.showModalStatus = show;
    },
  },
});

export const scannerModalActions = scannerModalSlice.actions;
export default scannerModalSlice.reducer;

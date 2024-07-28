import { ReduxAction } from "@/types";
import { CameraState } from "../types/state";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CameraState = {
  enableCamera: true,
  imageCaptured: null,
};
const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    setImage: (state, action: ReduxAction<string | null>) => {
      state.imageCaptured = action.payload;
    },
    enableCamera: (state, action: ReduxAction<boolean>) => {
      state.enableCamera = action.payload;
    },
  },
});

export const cameraActions = cameraSlice.actions;
export default cameraSlice.reducer;

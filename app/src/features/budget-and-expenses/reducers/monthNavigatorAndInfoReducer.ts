import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MonthNavigatorAndInfoState } from "../types/state";

const initialState: MonthNavigatorAndInfoState = (() => {
  const currentDate = new Date();
  return {
    currentYear: currentDate.getFullYear(),
    currentMonth: currentDate.getMonth(),
    amtBudgeted: 0,
    amtExpended: 0,
    currency: "",
  };
})();

const monthNavigatorAndInfoSlice = createSlice({
  initialState,
  name: "monthNavigatorAndInfo",
  reducers: {
    setCurrentYear(state, action: PayloadAction<number>) {
      state.currentYear = action.payload;
    },

    setCurrentMonth(state, action: PayloadAction<number>) {
      state.currentMonth = action.payload;
    },
    setAmtBudgeted(state, action: PayloadAction<number>) {
      state.amtBudgeted = action.payload;
    },
    setAmtExpended(state, action: PayloadAction<number>) {
      state.amtExpended = action.payload;
    },
    setCurrency(state, action: PayloadAction<string>) {
      state.currency = action.payload;
    },
  },
});

const monthNavigatorAndInfoActions = monthNavigatorAndInfoSlice.actions;
const monthNavigatorAndInfoReducer = monthNavigatorAndInfoSlice.reducer;
export { monthNavigatorAndInfoActions };
export default monthNavigatorAndInfoReducer;

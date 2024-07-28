import { combineReducers } from "@reduxjs/toolkit";
import monthNavigatorAndInfoReducer from "./monthNavigatorAndInfoReducer";

const budgetAndExpensesReducer = combineReducers({
  monthNavigatorAndInfo: monthNavigatorAndInfoReducer,
});

export default budgetAndExpensesReducer;

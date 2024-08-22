import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './users-reducer';
import receiptScanningReducer from '@/features/receipt-scanning/reducers';
import budgetAndExpensesReducer from '@/features/budget-and-expenses/reducers';

const rootReducer = combineReducers({
  budgetAndExpenses: budgetAndExpensesReducer,
  users: usersReducer,
  'receipt-scanning': receiptScanningReducer,
});

export default rootReducer;

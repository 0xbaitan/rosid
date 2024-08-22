import { EMPTY_STRING } from '@/constants';
import { CurrentReceiptEntryState } from '../types/state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, Receipt } from '../types';

const initialState: CurrentReceiptEntryState = (() => {
  const initialCurrencyCode =
    Intl.NumberFormat().resolvedOptions().currency ?? 'GBP';
  const currentDate = new Date();
  return {
    receipt: {
      currency: initialCurrencyCode,
      items: [],
      purchaseDate: currentDate.getTime(),
      savings: 0,
      subtotal: 0,
      total: 0,
      vendor: EMPTY_STRING,
    },
  };
})();

const currentReceiptEntrySlice = createSlice({
  initialState,
  name: 'currentReceiptEntry',
  reducers: {
    setCurrency(state, action: PayloadAction<string>) {
      state.receipt.currency = action.payload;
    },

    setPurchaseDate(state, action: PayloadAction<Date>) {
      state.receipt.purchaseDate = action.payload.getTime();
    },

    setSavings(state, action: PayloadAction<number>) {
      state.receipt.savings = action.payload;
    },

    setSubtotal(state, action: PayloadAction<number>) {
      state.receipt.subtotal = action.payload;
    },

    setTotal(state, action: PayloadAction<number>) {
      state.receipt.total = action.payload;
    },

    setVendor(state, action: PayloadAction<string>) {
      state.receipt.vendor = action.payload;
    },

    setItems(state, action: PayloadAction<Item[]>) {
      state.receipt.items = action.payload;
    },

    setReceipt(state, action: PayloadAction<Receipt>) {
      state.receipt = action.payload;
    },
  },
});

const currentReceiptEntryActions = currentReceiptEntrySlice.actions;
const currentReceiptEntryReducer = currentReceiptEntrySlice.reducer;
export { currentReceiptEntryActions };
export default currentReceiptEntryReducer;

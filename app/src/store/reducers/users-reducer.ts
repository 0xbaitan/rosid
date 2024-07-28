import { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export type UserState = {
  users: User[] | null;
  loading: boolean;
  error: Error | null;
};
const initialState: UserState = {
  users: null,
  loading: true,
  error: null,
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    requestFetchUsers: (state) => {
      state.loading = true;
    },
    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },

    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { requestFetchUsers, fetchUsersFailure, fetchUsersSuccess } =
  usersSlice.actions;
export default usersSlice.reducer;

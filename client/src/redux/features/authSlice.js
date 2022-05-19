import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state, action) => {
      console.log("auth successful!");
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      state.authData = action.payload;
    },
    logout: (state) => {
      console.log("logout successful!");
      localStorage.clear();
      state.authData = null;
    },
  },
  extraReducers: {},
});

export const { auth, logout } = authSlice.actions;

export default authSlice.reducer;

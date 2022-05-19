import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/index";

const initialState = {
  authData: null,
  loading: false,
};

export const asyncSignup = createAsyncThunk(
  "auth/asyncSignup",
  async (formData) => {
    const { data } = await BASE_URL.post("/user/signup", formData);
    return data;
  }
);
export const asyncSignin = createAsyncThunk(
  "auth/asyncSignin",
  async (formData) => {
    const { data } = await BASE_URL.post("/user/signin", formData);
    return data;
  }
);

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
  extraReducers: {
    [asyncSignin.fulfilled]: (state, action) => {
      console.log("signin succesfully!!");
      localStorage.clear();
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.payload };
    },
    [asyncSignup.fulfilled]: (state, action) => {
      console.log("signup succesfully!!");
      localStorage.clear();
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.payload };
    },
  },
});

export const { auth, logout } = authSlice.actions;

export default authSlice.reducer;

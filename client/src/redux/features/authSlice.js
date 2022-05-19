import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/index";

const initialState = {
  authData: null,
};

export const asyncSignup = createAsyncThunk(
  "auth/asyncSignup",
  async (formData, navigate) => {
    const res = await BASE_URL.post("/auth/signup");
    console.log(res);
    navigate("/");
  }
);
export const asyncSignin = createAsyncThunk(
  "auth/asyncSignin",
  async (formData, navigate) => {
    const res = await BASE_URL.post("/auth/signin");
    console.log(res);
    navigate("/");
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
  extraReducers: {},
});

export const { auth, logout, signin, signup } = authSlice.actions;

export default authSlice.reducer;

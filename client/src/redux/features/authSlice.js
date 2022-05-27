import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signin, signup } from "../../api";

let user = JSON.parse(localStorage.getItem("profile"));
const initialState = user
  ? { isLoading: false, error: null, authData: { ...user } }
  : { isLoading: true, error: null, authData: null };

export const asyncSignup = createAsyncThunk(
  "auth/asyncSignup",
  async (formData, thunkAPI) => {
    try {
      const { data } = await signup(formData);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
export const asyncSignin = createAsyncThunk(
  "auth/asyncSignin",
  async (formData, thunkAPI) => {
    try {
      const { data } = await signin(formData);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
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
      console.log(state);
      localStorage.clear();
      state.authData = null;
    },
  },
  extraReducers: {
    [asyncSignin.pending]: (state) => {
      console.log("signin pending!!");
      state.isLoading = true;
    },
    [asyncSignin.fulfilled]: (state, action) => {
      console.log("signin succesfully!!");
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      state.authData = action.payload;
      state.isLoading = false;
    },
    [asyncSignin.rejected]: (state, action) => {
      console.log("signin rejected!!");
      state.error = action.payload;
    },
    [asyncSignup.pending]: (state) => {
      console.log("signup pending!!");
      state.isLoading = true;
    },
    [asyncSignup.fulfilled]: (state, action) => {
      console.log("signup succesfully!!");
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      state.authData = action.payload;
    },
    [asyncSignup.rejected]: (state, action) => {
      console.log("signup rejected!!");
      state.error = action.payload;
    },
  },
});

export const { auth, logout } = authSlice.actions;

export default authSlice.reducer;

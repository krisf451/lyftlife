import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api";

const initialState = {
  authData: {},
};

export const signin = createAsyncThunk("auth/signin", async (data) => {
  console.log(data);
  localStorage.setItem("profile", JSON.stringify({ ...data }));
  return data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [signin.fulfilled]: (state, action) => {
      console.log("sign in successfull!");
      return { ...state, authData: action.payload };
    },
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;

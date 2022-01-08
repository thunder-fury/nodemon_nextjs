import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import Router from "next/router";

import { FIXME } from "../../../types/Any";
import { addSesstion, getSesstion, removeSesstion } from "../../../utils/Sesstion";
import { FetchPost } from "../../../utils/Api";

export const fetchAsyncSignup = createAsyncThunk(
  "signup/post",
  async (data: FIXME) => {
    const res = await FetchPost(`/api/sign_up`, data);
    return res;
  }
);

const signupSlice = createSlice({
  name: `signup`,
  initialState: {
    loading: false,
    status: false,
    role: ``,
    userName: ``,
    res: {} as FIXME,
    error: ``
  },
  reducers: {
    setVal: (state: FIXME, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncSignup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAsyncSignup.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchAsyncSignup.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.status === 200) {
        if (state.error) {
          state.error = "";
        }
      } else if (action.payload.status === 500) {
        state.error = action.payload.messge;
      } else {
        state.error = action.payload.messge;
      }
    });
  },
});

export const { setVal } = signupSlice.actions;

export const signupMaster = (state: RootState) => state.login;
export const signupRes = (state: RootState) => state.signup.res;
export const signupLoading = (state: RootState) => state.signup.loading;
export const signupError = (state: RootState) => state.signup.error;

export default signupSlice.reducer;

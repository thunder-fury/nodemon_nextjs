import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import Router from "next/router";

import { FIXME } from "../../../types/Any";
import { addSesstion, getSesstion, removeSesstion } from "../../../utils/Sesstion";
import { FetchPost } from "../../../utils/Api";

export const fetchAsyncLogin = createAsyncThunk(
  "login/post",
  async (data: FIXME) => {
    console.log(data)
    const res = await FetchPost(`/api/sign_up`, data);
    return res;
  }
);

export const fetchAsyncLogOut = createAsyncThunk(
  "logout/post",
  async (data: FIXME) => {
    const res = await FetchPost(`/api/logout`, {}, data.token);
    return res;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    status: false,
    role: ``,
    userName: ``,
    res: {} as FIXME,
    errorMsg: "" as FIXME,
  },
  reducers: {
    setVal: (state: FIXME, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAsyncLogin.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.status === 200) {
        // addSesstion(`token`, action.payload.token);
        // addSesstion(`userName`, action.payload.name);
        // addSesstion(`role`, action.payload.role);
        if (state.errorMsg) {
          state.errorMsg = "";
        }
      } else if (action.payload.status === 500) {
        state.errorMsg = action.payload.error_messege;
      } else {
        console.log(`その他例外`);
      }
    });

    builder.addCase(fetchAsyncLogOut.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAsyncLogOut.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchAsyncLogOut.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.status === 200) {
        state.res = {};
        removeSesstion("token");
        removeSesstion(`userName`);
        removeSesstion(`role`);
        state.status = false;
        state.userName = ``;
        Router.push(`/login`);
      } else if (action.payload.status === 500) {
        console.log(`エラー`);
      } else {
        console.log(`その他例外`);
      }
    });
  },
});

export const { setVal } = loginSlice.actions;

export const loginMaster = (state: RootState) => state.login;
export const loginRes = (state: RootState) => state.login.res;
export const loginLoading = (state: RootState) => state.login.loading;

export default loginSlice.reducer;

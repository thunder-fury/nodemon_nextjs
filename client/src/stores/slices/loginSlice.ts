import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import Router from 'next/router'

import { FIXME } from '../../types/Any'
import { addSesstion, getSesstion, removeSesstion } from '../../utils/Sesstion'
import { FetchPost } from '../../utils/Api'
export const fetchAsyncLogin = createAsyncThunk(
  'login/post',
  async (data: FIXME) => {
    const res = await FetchPost({ endPoint: `/api/login`, data })
    return res
  }
)

export const fetchAsyncLogOut = createAsyncThunk('logOut/post', async () => {
  const res = await FetchPost({
    endPoint: `/api/logout`,
    token: getSesstion(`token`),
  })
  return res
})

const loginSlice = createSlice({
  name: `login`,
  initialState: {
    loading: false,
    status: false,
    role: ``,
    userName: ``,
    res: {} as FIXME,
  },
  reducers: {
    setVal: (state: FIXME, action) => {
      console.log(action)
      state[action.payload.key] = action.payload.value
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncLogin.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAsyncLogin.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        const { token, role } = action.payload
        addSesstion(`token`, token)
        addSesstion(`role`, role)
        Router.push(`/my_page`)
      } else if (action.payload.status === 500) {
        state.res = action.payload
      } else {
        state.res = action.payload
      }
      state.loading = false
    })
    builder.addCase(fetchAsyncLogOut.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAsyncLogOut.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(fetchAsyncLogOut.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        removeSesstion(`token`)
        removeSesstion(`role`)
        Router.push(`/login`)
      } else if (action.payload.status === 500) {
        state.res = action.payload
      } else {
        state.res = action.payload
      }
      state.loading = false
    })
  },
})

export const { setVal } = loginSlice.actions

export const loginMaster = (state: RootState) => state.login
export const loginRes = (state: RootState) => state.login.res
export const loginLoading = (state: RootState) => state.login.loading

export default loginSlice.reducer

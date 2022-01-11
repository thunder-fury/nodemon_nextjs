import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import Router from 'next/router'

import { FIXME } from '../../types/Any'
import { addSesstion, getSesstion, removeSesstion } from '../../utils/Sesstion'
import { FetchPost } from '../../utils/Api'

export const fetchAsyncSignup = createAsyncThunk(
  'signup/post',
  async (data: FIXME) => {
    const res = await FetchPost({ endPoint: `/api/sing_up`, data })
    return res
  }
)

const signupSlice = createSlice({
  name: `signup`,
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
    builder.addCase(fetchAsyncSignup.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAsyncSignup.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(fetchAsyncSignup.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.res = action.payload
        // Router.push(`/login`)
      } else if (action.payload.status === 500) {
        state.res = action.payload
      } else {
        state.res = action.payload
      }
      state.loading = false
    })
  },
})

export const { setVal } = signupSlice.actions

export const signupMaster = (state: RootState) => state.login
export const signupRes = (state: RootState) => state.signup.res
export const signupLoading = (state: RootState) => state.signup.loading

export default signupSlice.reducer

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import Router from 'next/router'

import { FIXME } from '../../types/Any'
import { addSesstion, getSesstion, removeSesstion } from '../../utils/Sesstion'
import { FetchGet, FetchPost } from '../../utils/Api'

export const fetchAsyncPunchGet = createAsyncThunk('punch/get', async () => {
  const res = await FetchGet({ endPoint: `/api/punch_get` })
  return res
})
export const fetchAsyncPunchPost = createAsyncThunk(
  'punch/post',
  async (data: FIXME) => {
    const res = await FetchPost({
      endPoint: `/api/punch`,
      data,
      token: getSesstion(`token`),
    })
    return res
  }
)

const punchSlice = createSlice({
  name: `punch`,
  initialState: {
    loading: false,
    res: {} as FIXME,
  },
  reducers: {
    setVal: (state: FIXME, action) => {
      state[action.payload.key] = action.payload.value
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncPunchGet.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAsyncPunchGet.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(fetchAsyncPunchGet.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.res = action.payload
      } else {
        state.res = ''
      }
      state.loading = false
    })
    builder.addCase(fetchAsyncPunchPost.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAsyncPunchPost.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(fetchAsyncPunchPost.fulfilled, (state, action) => {
      console.log(action)
      if (action.payload.status === 200) {
        state.res = action.payload
      } else if (action.payload.status === 500) {
        state.res = action.payload
      } else {
        state.res = action.payload
      }
      state.loading = false
    })
  },
})

export const { setVal } = punchSlice.actions

export const punchMaster = (state: RootState) => state.punch
export const punchRes = (state: RootState) => state.punch.res
export const punchLoading = (state: RootState) => state.punch.loading

export default punchSlice.reducer

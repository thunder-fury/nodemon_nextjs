import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import Router from 'next/router'

import { FIXME } from '../../types/Any'
import { addSesstion, getSesstion, removeSesstion } from '../../utils/Sesstion'
import { FetchGet, FetchPost } from '../../utils/Api'

export const fetchAsyncCurrentUserGet = createAsyncThunk(
  'current/user_get',
  async (member_id?: string | null) => {
    const res = await FetchGet({ endPoint: `/api/user_get/${member_id}` })
    return res
  }
)

export const fetchAsyncUserInpoPost = createAsyncThunk(
  'current/user_info_edit',
  async (data: FIXME) => {
    const res = await FetchPost({
      endPoint: `/api/punch`,
      data,
      token: getSesstion(`token`),
    })
    return res
  }
)

const masterSlice = createSlice({
  name: `master`,
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
    builder.addCase(fetchAsyncCurrentUserGet.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAsyncCurrentUserGet.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(fetchAsyncCurrentUserGet.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.res = action.payload
      } else {
        state.res = ''
      }
      state.loading = false
    })

    builder.addCase(fetchAsyncUserInpoPost.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAsyncUserInpoPost.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(fetchAsyncUserInpoPost.fulfilled, (state, action) => {
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

export const { setVal } = masterSlice.actions

export const master = (state: RootState) => state.master
export const masterRes = (state: RootState) => state.master.res
export const punchLoading = (state: RootState) => state.master.loading

export default masterSlice.reducer

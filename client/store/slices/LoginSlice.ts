import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getFetch } from '../../utils/Api'

// 初期レンダリング時
export const fetcUpdateData = createAsyncThunk('master/get', async () => {
  const res = await getFetch(`/api/company/master`)
  return res
})

const initialState = {
  loading: false,
}

const searchSlice = createSlice({
  name: 'master',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetcUpdateData.pending, state => {
      state.loading = true
    })
    builder.addCase(fetcUpdateData.rejected, (state, action) => {
      console.log(action)
      state.loading = false
    })
    builder.addCase(fetcUpdateData.fulfilled, (state, action) => {
      console.log(action)
      state.loading = false
    })
  },
})

export const getDataParams = (state: any) => state.master.params
export const getDataLoading = (state: any) => state.master.loading

export default searchSlice.reducer
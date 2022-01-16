import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import loginReducer from './slices/loginSlice'
import signUpReducer from './slices/signupSlice'
import punchReducer from './slices/punchSlice'
import masterReducer from './slices/masterSlice'

const middleware = getDefaultMiddleware({ serializableCheck: false })

const store = configureStore({
  reducer: {
    master: masterReducer,
    login: loginReducer,
    signup: signUpReducer,
    punch: punchReducer,
  },
  middleware,
})

export type RootState = ReturnType<typeof store.getState>

export default store

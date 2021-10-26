import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({})

export type RooState = ReturnType<typeof rootReducer>

export default rootReducer

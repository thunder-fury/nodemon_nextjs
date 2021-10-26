import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import userSlice from './slices/UserSlice'
import articleSlice from './slices/ArticleSlice'
import newsSlice from './slices/NewsSlice'
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
const middleware:any = getDefaultMiddleware({ serializableCheck: false })

export default configureStore({
  reducer: {
    // 識別する名前: importしてきたReducer名
    user: userSlice,
    article: articleSlice,
    news: newsSlice
  },
  middleware
})



// if(process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./rootRed', () => {
//     const newRootReducer = require('./rootReducer').default
//     store.replaceReducer(newRootReducer)
//   }))
// }

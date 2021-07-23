import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactSlice from './slices/contactSlice'
import loginSlice from './slices/UserSystem'
import userSlice from './slices/UserSlice'
import articleSlice from './slices/ArticleSlice'
const middleware:any = getDefaultMiddleware({ serializableCheck: false })

export default configureStore({
  reducer: {
    // 識別する名前: importしてきたReducer名
    contact: contactSlice,
    login: loginSlice,
    user: userSlice,
    article: articleSlice

  },
  middleware
})

// if(process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./rootRed', () => {
//     const newRootReducer = require('./rootReducer').default
//     store.replaceReducer(newRootReducer)
//   }))
// }
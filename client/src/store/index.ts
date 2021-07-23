import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactSlice from './slices/contactSlice'
import articleAddSlice from './slices/articleAddSlice'
const middleware:any = getDefaultMiddleware({ serializableCheck: false })

export default configureStore({
  reducer: {
    // 識別する名前: importしてきたReducer名
    contact: contactSlice,
    articleAdd: articleAddSlice
  },
  middleware
})

// if(process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./rootRed', () => {
//     const newRootReducer = require('./rootReducer').default
//     store.replaceReducer(newRootReducer)
//   }))
// }
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducers/user'
import CatReducer from './reducers/cats'

const store = configureStore({
  reducer: {
    user: UserReducer,
    cats: CatReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
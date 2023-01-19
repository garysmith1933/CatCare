import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './reducers/user';
import CatReducer from './reducers/cats';
const store = configureStore({
    reducer: {
        user: UserReducer,
        cats: CatReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});
export default store;

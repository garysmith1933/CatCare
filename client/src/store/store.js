import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './reducers/user';
const store = configureStore({
    reducer: {
        User: UserReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});
export default store;

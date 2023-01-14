import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './reducers/user';
const store = configureStore({
    reducer: {
        User: UserReducer
    }
});
export default store;

//import at top bug
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// interface InitialState {
//   user?: UserData
//   authToken?: string
// }
export const login = createAsyncThunk('user/login', async (userData) => {
    window.localStorage.setItem("token", userData.token);
    return {
        authToken: userData.token,
        user: userData
    };
});
const initialState = {
    user: null,
    token: ''
};
export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        logout: (state) => {
            return {
                ...state,
                token: null
            };
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.authToken
            };
        });
    }
});
export const { logout } = UserSlice.actions;
export const User = (state) => state.user;
export default UserSlice.reducer;

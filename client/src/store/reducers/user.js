//import at top bug
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// interface CatData {
//   name: string
//   age: string
//   breed: string
//   weight: string
//   owner: string
//  }
// interface InitialState {
//   user?: UserData
//   authToken?: string
// }
export const login = createAsyncThunk('user/login', async (userData) => {
    window.localStorage.setItem("token", userData.token);
    return {
        user: userData
    };
});
export const registerNewCat = createAsyncThunk('user/registerCat', async (userWithRegisteredCat) => {
    console.log('hi', userWithRegisteredCat);
    return {
        user: userWithRegisteredCat,
        // cat: userWithRegisteredCat.cats
    };
});
const initialState = {
    user: null
};
export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        logout: (state) => {
            window.localStorage.removeItem("token");
            return {
                ...state,
                user: null
            };
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user
            };
        })
            .addCase(registerNewCat.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user
            };
        });
    }
});
export const { logout } = UserSlice.actions;
export const user = (state) => state.user;
export default UserSlice.reducer;

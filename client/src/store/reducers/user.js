var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//import at top bug
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// interface InitialState {
//   user?: UserData
//   authToken?: string
// }
export const login = createAsyncThunk('user/login', (userData) => __awaiter(void 0, void 0, void 0, function* () {
    //apollo client mutate with the object containing the form data. 
    console.log('you called?');
    //the data returned will be set in action.payload
    return {
        authToken: userData.token,
        user: userData
    };
}));
const initialState = {
    user: null,
    token: ''
};
export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        logout: (state) => {
            return Object.assign(Object.assign({}, state), { token: null });
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
            return Object.assign(Object.assign({}, state), { user: action.payload.user, token: action.payload.authToken });
        });
    }
});
export const { logout } = UserSlice.actions;
export default UserSlice.reducer;

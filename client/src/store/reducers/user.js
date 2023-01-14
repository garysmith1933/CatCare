var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const login = createAsyncThunk('user/login', () => __awaiter(void 0, void 0, void 0, function* () {
    //apollo client mutate with the object containing the form data. 
    //the data returned will be set in action.payload
}));
export const UserSlice = createSlice({
    name: 'User',
    initialState: {
        user: null,
        cats: [],
        token: null
    },
    reducers: {
        logout: (state) => {
            return Object.assign(Object.assign({}, state), { token: null });
        }
    }
});
export const { logout } = UserSlice.actions;
export default UserSlice.reducer;

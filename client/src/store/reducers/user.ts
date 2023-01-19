//import at top bug
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import userEvent from '@testing-library/user-event';

interface UserData {
  username: string
  email: string
  password: string
  token: string
}

interface UserPayload {
  user: UserData
}

// interface InitialState {
//   user?: UserData
//   authToken?: string
// }

export const login = createAsyncThunk('user/login', async (userData: UserData) => {
  window.localStorage.setItem("token", userData.token);
  return {
    user: userData
  }
})

// export const newCat = createAsyncThunk('user/newCat', async (catData: CatData) => {
//   return {
//     user: userData
//   }
// })

const initialState: any = {
    user: null
}

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    logout: (state) => {
      window.localStorage.removeItem("token")
      return {
        ...state,
        user: null
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action: PayloadAction<UserPayload>) => {
        return {
          ...state,
          user: action.payload.user
        }
      })
  }

});

export const { logout } = UserSlice.actions;
export const user = (state: RootState) => state.user
export default UserSlice.reducer;
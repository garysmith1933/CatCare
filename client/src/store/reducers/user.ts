//import at top bug
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserData {
    username: string
    email: string
    password: string
    token: string
}

interface UserPayload {
  user: UserData
  authToken: string
}

// interface InitialState {
//   user?: UserData
//   authToken?: string
// }

export const login = createAsyncThunk('user/login', async (userData: UserData) => {
  //apollo client mutate with the object containing the form data. 
  console.log('you called?')
  //the data returned will be set in action.payload
  return {
    authToken: userData.token,
    user: userData
  }
})

const initialState: any = {
    user: null,
    token: ''
}

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    logout: (state) => {
      return {
        ...state,
        token: null
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action: PayloadAction<UserPayload>) => {
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.authToken
        }
      })
  }

});

export const { logout } = UserSlice.actions;
export default UserSlice.reducer;
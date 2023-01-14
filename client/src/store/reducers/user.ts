import client from '../../graphql/apolloClient';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('user/login', async () => {
  //apollo client mutate with the object containing the form data. 

  //the data returned will be set in action.payload
})

export const UserSlice = createSlice({
  name: 'User',
  initialState: {
    user: null,
    cats: [],
    token: null
  },
  reducers: {
  
    logout: (state) => {
      return {
        ...state,
        token: null
      }
    }
  }
});

export const { logout } = UserSlice.actions;
export default UserSlice.reducer;
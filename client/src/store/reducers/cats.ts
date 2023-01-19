//import at top bug
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CatData {
 name: string
 age: string
 breed: string
 weight: string
 owner: string
}

interface CatPayload {
  cat: CatData
}

export const registerNewCat = createAsyncThunk('cat/registerCat', async (catData: CatData) => {
  console.log(catData)
  return {
    cat: catData
  }
})

const initialState: any = {
    cats: []
}

export const CatSlice = createSlice({
  name: 'Cat',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerNewCat.fulfilled, (state, action: PayloadAction<CatPayload>) => {
        return {
          ...state,
          cats: [action.payload.cat]
        }
      })
  }

});

export const Cats = (state: RootState) => state.cats
export default CatSlice.reducer;
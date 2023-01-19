//import at top bug
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const registerNewCat = createAsyncThunk('cat/registerCat', async (catData) => {
    console.log(catData);
    return {
        cat: catData
    };
});
const initialState = {
    cats: []
};
export const CatSlice = createSlice({
    name: 'Cat',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(registerNewCat.fulfilled, (state, action) => {
            return {
                ...state,
                cats: [action.payload.cat]
            };
        });
    }
});
export const Cats = (state) => state.cats;
export default CatSlice.reducer;

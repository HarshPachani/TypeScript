import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: StateType = {
    loading: false,
    words: [],
    result: [],
}

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        getWordsReqeust: (state) => {
            state.loading = true;
        },
        getWordsSuccess: (state, action: PayloadAction<Array<WordType>>) => {
            state.loading = false;
            state.words = action.payload;
        },
        getWordsFail: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        saveResult: (state, action: PayloadAction<Array<string>>) => {
            state.loading = false;
            state.result = action.payload;
        },
        clearState: (state) => {
            state.loading = false;
            state.result = [];
            state.words = [];
            state.error = undefined;
        },
    }
});

export const { 
    getWordsReqeust,
    getWordsSuccess,
    getWordsFail,
    saveResult,
    clearState,
} = rootSlice.actions; 
export default rootSlice.reducer;
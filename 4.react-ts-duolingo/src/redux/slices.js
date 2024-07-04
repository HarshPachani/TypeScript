"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearState = exports.saveResult = exports.getWordsFail = exports.getWordsSuccess = exports.getWordsReqeust = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    loading: false,
    words: [],
    result: [],
};
const rootSlice = (0, toolkit_1.createSlice)({
    name: 'root',
    initialState,
    reducers: {
        getWordsReqeust: (state) => {
            state.loading = true;
        },
        getWordsSuccess: (state, action) => {
            state.loading = false;
            state.words = action.payload;
        },
        getWordsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        saveResult: (state, action) => {
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
_a = rootSlice.actions, exports.getWordsReqeust = _a.getWordsReqeust, exports.getWordsSuccess = _a.getWordsSuccess, exports.getWordsFail = _a.getWordsFail, exports.saveResult = _a.saveResult, exports.clearState = _a.clearState;
exports.default = rootSlice.reducer;

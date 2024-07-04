"use strict";
/*
//-------------------------USING REDUCER AND ACTION----------------------------------
import { configureStore, createReducer, createAction } from "@reduxjs/toolkit";

interface StateType {
    count: number;
}

//To avoid spelling mistakes.
const increment = createAction('increment');
const decrement = createAction('decrement');

const initialState: StateType = { count: 0 };

const rootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state) => {state.count += 1})
        .addCase(decrement, (state) => {state.count -= 1})
});

export const store = configureStore({ reducer: rootReducer });
//-----------------OR----------------------
// export const store = configureStore({
//     reducer: {
//         root: rootReducer,
//     }
// });
*/
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.incrementByValue = exports.decrement = exports.increment = void 0;
//---------------------------USING CREATESLICE-----------------------------------------------------
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = { count: 0 };
const rootSlice = (0, toolkit_1.createSlice)({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByValue: (state, action) => {
            state.count += action.payload;
        }
    },
});
_a = rootSlice.actions, exports.increment = _a.increment, exports.decrement = _a.decrement, exports.incrementByValue = _a.incrementByValue;
exports.store = (0, toolkit_1.configureStore)({ reducer: rootSlice.reducer });
//-----------------OR----------------------
// export const store = configureStore({
//     reducer: {
//         root: rootSlice,
//     }
// });

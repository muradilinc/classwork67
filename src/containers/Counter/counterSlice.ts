import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCounter} from "./counterThunk.ts";

interface CounterState {
    value: number;
    isLoading: boolean;
    iseError: boolean;
}

const initialState: CounterState = {
    value: 0,
    isLoading: false,
    iseError: false,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value--;
        },
        add: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        subtract: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCounter.pending, (state) => {
            state.isLoading = true;
            state.iseError = false;
        });
        builder.addCase(fetchCounter.fulfilled, (state, action) => {
            state.value = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchCounter.rejected, (state) => {
            state.isLoading = false;
            state.iseError = true;
        });
    }
});

export const counterReducer = counterSlice.reducer;
export const {
    increment,
    decrement,
    add,
    subtract,
} = counterSlice.actions;
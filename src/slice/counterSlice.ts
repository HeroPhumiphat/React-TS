import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'couter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1;
            }
        },
        addValue: (state, action: { payload: number }) => {
            state.value = action.payload;
        },
        clearValue: (state) => {
            state.value = 0;
        }
    }
})

export const { increment, decrement, addValue, clearValue } = counterSlice.actions
export default counterSlice.reducer
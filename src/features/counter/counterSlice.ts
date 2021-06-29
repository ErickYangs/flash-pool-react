import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCount } from "../../api/counterApi";
import { AppThunk, RootState } from "../../redux/store";

export interface CounterState {
    value: number,
    status: 'dashed' | 'loading' | 'failed'
}

const initialState: CounterState = {
    value: 0,
    status: "dashed"
}

export const incrementAsync = createAsyncThunk('counter/fetchCount', async (amount: number) => {
    const response = await fetchCount(amount)
    return response.data
})

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(incrementAsync.pending, state => {
            state.status = 'loading';
        }).addCase(incrementAsync.fulfilled, (state, action) => {
            state.status = 'dashed';
            state.value += action.payload
        })
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value
export const countStatus = (state: RootState) => state.counter.status

export const incrementIfOdd = (amount: number): AppThunk => (dispatch, getState) => {
    const currentValue = selectCount(getState())
    if (currentValue % 2 === 1) {
        dispatch(incrementByAmount(amount))
    }
}

export default counterSlice.reducer
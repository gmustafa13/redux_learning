import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter_new',
    initialState: { counter: 0 },
    reducers: {
        incrementFn: (state, action) => {
            state.counter++
        },

        decrementFn: (state, action) => {
            state.counter > 0 ? (state.counter--) : (state.counter= 0)
        },
        addByFn: (state, action) => {
            state.counter += action.payload.value
        },
        reset: (state, action) => {
            state.counter = 0
        }

    }
})
export const actions = counterSlice.actions // here actions if default in counter slice
const store = configureStore({
    reducer: counterSlice.reducer
})

export default store
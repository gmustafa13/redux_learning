// import { configureStore} from '@reduxjs/toolkit'
import { createStore } from 'redux'

// const store = createStore();
// console.log('initial state', store.getState());
// in line reducer

const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DEC':
            return {
                ...state,
                counter: state.counter <= 0 ? state.counter : state.counter -1
            }
        case 'ADD_BY':
            return {
                ...state,
                counter: state.counter + action.value
            }
        default:
            return state

    }
}

const store = createStore(reducer);

export default store;

// store.subscribe();

import { createStore } from 'redux';
import reducer from './reducers';



let store = createStore(reducer);

// Optional - you can pass `initialState` as a second arg
//let store = createStore(counter, { value: 0 })


export default store;

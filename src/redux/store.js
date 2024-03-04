import { configureStore } from '@reduxjs/toolkit';


// reducerları import ediyoruz

import counterReducer from './slices/counterSlice';
import crudReducer from './slices/crudSlice';


export default configureStore({
    reducer: { counterReducer, crudReducer },
});

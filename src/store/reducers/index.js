import { combineReducers } from 'redux';

import reducerGlobal from './reducerGlobal';
import reducerShoppingCart from './reducerShoppingCart';

export const reducers = combineReducers({
    reducerGlobal,
    reducerShoppingCart
})
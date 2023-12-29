import { combineReducers } from 'redux';

import reducerGlobal from './reducerGlobal';
import reducerUser from './reducerUser'
import reducerShoppingCart from './reducerShoppingCart';

export const reducers = combineReducers({
    reducerGlobal,
    reducerUser,
    reducerShoppingCart
})
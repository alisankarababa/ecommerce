import { combineReducers } from 'redux';

import reducerGlobal from './reducerGlobal';
import reducerUser from './reducerUser'
import reducerShoppingCart from './reducerShoppingCart';
import reducerProduct from './reducerProduct';

export const reducers = combineReducers({
    reducerGlobal,
    reducerUser,
    reducerShoppingCart,
    reducerProduct,
})
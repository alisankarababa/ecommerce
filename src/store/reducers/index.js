import { combineReducers } from 'redux';

import reducerGlobal from './reducerGlobal';
import reducerUser from './reducerUser'
import reducerShoppingCart from './reducerShoppingCart';
import reducerStore from './storeReducer';
import reducerProduct from './reducerProduct';

export const reducers = combineReducers({
    reducerGlobal,
    reducerUser,
    reducerShoppingCart,
    reducerStore,
    reducerProduct,
    // reducerStore
})
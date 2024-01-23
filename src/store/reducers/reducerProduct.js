import { eActionsProduct } from "../actions/actionsProduct";

const initialState = {
    
    productList: [],
    totalProductCount: 0,
    pageCount: 0,
    productPerPage: 25,
    activePage: 0,
    areProductsLoading: false,
    error: null,
}


export default function reducerProduct(state=initialState, action) {

    switch (action.type) {
        
        case eActionsProduct.FETCHING_PRODUCTS:
            return { ...state, error: null, areProductsLoading: true };

        case eActionsProduct.FETCHING_PRODUCTS_SUCCESS:

            return  {
                ...state, 
                productList: action.payload.products,
                totalProductCount: action.payload.total,
                pageCount: ( Math.ceil(action.payload.total / state.productPerPage) )
            };

        case eActionsProduct.FETCHING_PRODUCTS_FAIL:
            
            return state;

        case eActionsProduct.FETCHING_PRODUCTS_ENDED:
            return { ...state, areProductsLoading: false };

        case eActionsProduct.SET_ACTIVE_PAGE: 

            return { ...state, activePage: action.payload };

        default:
            return state;
    }

}
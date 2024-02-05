import { eActionsProduct } from "../actions/actionsProduct";

const initialState = {
    
    productList: [],
    totalProductCount: 0,
    pageCount: 0,
    productPerPage: 25,
    activePage: 0,
    areProductsLoading: false,
    error: null,
    queryParams: {
        category: 0,
        filter: "",
        sort: "",
        offset: 0,
        limit: 25,
    }
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
            
            const queryParamsBeforeActivePageSet = { ...state.queryParams };
            queryParamsBeforeActivePageSet.offset = action.payload * state.productPerPage;

            return { ...state, activePage: action.payload, queryParams: { ...queryParamsBeforeActivePageSet } };

        case eActionsProduct.SET_QUERY_PARAM_CATEGORY:

            const categoryQueryParam = { ...state.queryParams };
            categoryQueryParam.category = action.payload;
            return { ...state, queryParams: categoryQueryParam };

        case eActionsProduct.SET_QUERY_PARAM_SORT:

            const sortQueryParam = { ...state.queryParams };
            sortQueryParam.sort = action.payload;
            return { ...state, queryParams: sortQueryParam };
        
        case eActionsProduct.SET_QUERY_PARAM_FILTER:

            const filterQueryParam = { ...state.queryParams };
            filterQueryParam.filter = action.payload;
            return { ...state, queryParams: filterQueryParam };

        case eActionsProduct.SET_QUERY_PARAMS_TO_DEFAULT: 
            return { ...state, queryParams: { ...initialState.queryParams}, activePage: 0 };
            
        case eActionsProduct.SET_QUERY_PARAMS:
            return { ...state, queryParams: action.payload, activePage: 0 };
        
        default:
            return state;
    }

}
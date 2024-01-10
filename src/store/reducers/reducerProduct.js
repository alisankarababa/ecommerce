import { eActionsProduct } from "../actions/actionsProduct";

const initialState = {
    
    productList: [],
    totalProductCount: 0,
    pageCount: 0,
    activePage: 0,
    
    // - fetch state: {String} “NOT_FETCHED” | “FETCHING” | “FETCHED” | “FAILED”
}


export default function reducerProduct(state=initialState, action) {

    switch (action.type) {
        
        default:
            return state;
    }

}
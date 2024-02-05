import { api } from "../../api/api";

export const eActionsProduct = Object.freeze({
    FETCHING_PRODUCTS: "actionsProduct/ fetching products",
    FETCHING_PRODUCTS_SUCCESS: "actionsProduct/ fetched products successfully",
    FETCHING_PRODUCTS_FAIL: "actionsProduct/ fetching products failed",
    FETCHING_PRODUCTS_ENDED: "actionsProduct/ fetching products request ended",

    SET_ACTIVE_PAGE: "actionsProduct/ set active page",

    SET_QUERY_PARAM_CATEGORY: "actionsProduct/ set query param category",
    SET_QUERY_PARAM_FILTER: "actionsProduct/ set query param filter",
    SET_QUERY_PARAM_SORT: "actionsProduct/ set query param sort",
    SET_QUERY_PARAMS_TO_DEFAULT: "actionsProduct/ set query params to default",
    SET_QUERY_PARAMS: "actionsProduct/ set query params"

});

export function actionCreatorProductSetActivePage(pageNumber) {

    return { type: eActionsProduct.SET_ACTIVE_PAGE, payload: pageNumber }
}

export function actionCreatorFetchProducts(queryParams) {

    const copyParams = { ...queryParams };

    for(const key in copyParams) {

        if(!copyParams[key])
            delete copyParams[key];
    }

    

    return function thunkFunc(dispatch) {

        dispatch(actionCreatorFetchingProducts());

        api.get("/products", {
            params: copyParams
        })
        .then((response) => {
            dispatch(actionCreatorFetchingProductsSuccessfull(response.data));
        })
        .catch((error) => {
            dispatch(actionCreatorFetchingProductsFailed(error));
        })
        .finally(() => {
            dispatch(actionCreatorFetchingProductsEnded());
        })
    }

}

function actionCreatorFetchingProducts() {
    return { type: eActionsProduct.FETCHING_PRODUCTS };
}

function actionCreatorFetchingProductsSuccessfull(productsResponseData) {
    return { type: eActionsProduct.FETCHING_PRODUCTS_SUCCESS, payload: productsResponseData };
}

function actionCreatorFetchingProductsFailed(error) {
    return { type: eActionsProduct.FETCHING_PRODUCTS_FAIL, payload: error };
}

function actionCreatorFetchingProductsEnded() {
    return { type: eActionsProduct.FETCHING_PRODUCTS_ENDED };
}

export function actionCreatorProductSetQueryParameterSort(paramSort) {
    return { type: eActionsProduct.SET_QUERY_PARAM_SORT, payload: paramSort };
}

export function actionCreatorProductSetQueryParameterCategory(paramCategory) {
    return { type: eActionsProduct.SET_QUERY_PARAM_CATEGORY, payload: paramCategory };
}

export function actionCreatorProductSetQueryParameterFilter(paramFiter) {
    return { type: eActionsProduct.SET_QUERY_PARAM_FILTER, payload: paramFiter };
}

export function actionCreatorProductSetQueryParametersToDefault() {
    return { type: eActionsProduct.SET_QUERY_PARAMS_TO_DEFAULT };
}

export function actionCreatorProductSetQueryParameters(queryParams) {
    return { type: eActionsProduct.SET_QUERY_PARAMS, payload: queryParams };
}
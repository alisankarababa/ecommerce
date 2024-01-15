import { api } from "../../api/api";

export const eActionsProduct = Object.freeze({
    FETCHING_PRODUCTS: "actionsProduct/ fetching products",
    FETCHING_PRODUCTS_SUCCESS: "actionsProduct/ fetched products successfully",
    FETCHING_PRODUCTS_FAIL: "actionsProduct/ fetching products failed",
    FETCHING_PRODUCTS_ENDED: "actionsProduct/ fetching products request ended",
});


export function actionCreatorFetchProducts(categoryId, displayOrder) {

    return function thunkFunc(dispatch) {

        dispatch(actionCreatorFetchingProducts());

        api.get("/products", {
            params: {
                ...(categoryId !== "" ? { category: categoryId } : {}),
                ...(displayOrder !== "" ? { sort: displayOrder } : {}),
            }
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
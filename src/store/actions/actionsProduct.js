import { api } from "../../api/api";

export const eActionsProduct = Object.freeze({
    FETCHING_PRODUCTS: "actionsProduct/ fetching products",
    FETCHING_PRODUCTS_SUCCESS: "actionsProduct/ fetched products successfully",
    FETCHING_PRODUCTS_FAIL: "actionsProduct/ fetching products failed",
    FETCHING_PRODUCTS_ENDED: "actionsProduct/ fetching products request ended",

    SET_ACTIVE_PAGE: "actionsProduct/ set active page"
});

export function actionCreatorProductSetActivePage(pageNumber) {

    return { type: eActionsProduct.SET_ACTIVE_PAGE, payload: pageNumber }
}

export function actionCreatorFetchProducts(categoryId, displayOrder, filterText, itemOffset) {

    return function thunkFunc(dispatch) {

        dispatch(actionCreatorFetchingProducts());

        api.get("/products", {
            params: {
                ...(categoryId !== "" ? { category: categoryId } : {}),
                ...(displayOrder !== "" ? { sort: displayOrder } : {}),
                ...(filterText !== "" ? { filter: filterText } : {}),
                ...(itemOffset !== 0 ? { offset: itemOffset } : {}),
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
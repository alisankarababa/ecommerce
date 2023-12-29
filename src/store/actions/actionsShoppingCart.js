export const eActionsShoppingCart = Object.freeze({

    SET_PAYMENT: "actionShoppingCart/ set payment",
    SET_ADDRESS: "actionShoppingCart/ set address",
    ADD_PRODUCT: "actionShoppingCart/ adding product",
    REMOVE_PRODUCT: "actionShoppingCart/ removing product",
    INCREMENT_CNT_PRODUCT: "actionShoppingCart/ increment product count",
    DECREMENT_CNT_PRODUCT: "actionShoppingCart/ decrement product count"
});

export function actionCreatorShoppingCartSetPayment(payment) {
    
    return { type: eActionsShoppingCart.DECREMENT_CNT_PRODUCT, payload: payment };
}

export function actionCreatorShoppingCartSetAddress(payment) {
    
    return { type: eActionsShoppingCart.DECREMENT_CNT_PRODUCT, payload: payment };
}

export function actionCreatorShoppingCartAddProduct(product) {

    return { type: eActionsShoppingCart.ADD_PRODUCT, payload: product };
}

export function actionCreatorShoppingCartRemoveProduct(productId) {
    
    return { type: eActionsShoppingCart.REMOVE_PRODUCT, payload: productId };
}

export function actionCreatorShoppingCartIncrementProductCount(productId) {
    
    return { type: eActionsShoppingCart.INCREMENT_CNT_PRODUCT, payload: productId };
}

export function actionCreatorShoppingCartDecrementProductCount(productId) {
    
    return { type: eActionsShoppingCart.DECREMENT_CNT_PRODUCT, payload: productId };
}
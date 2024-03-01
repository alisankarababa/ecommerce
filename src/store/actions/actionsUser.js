import { api } from "../../api/api";

export const eActionsUser = Object.freeze({
    LOGIN_SENDING_REQUEST: "actionsUser/ login request in progress",
    LOGIN_REQUEST_SUCCESSFUL: "actionsUser/ logged in successfully",
    LOGIN_REQUEST_FAILED: "actionsUser/ login failed",
    LOGIN_REQUEST_ENDED: "actionsUser/ login request finalized",
    
    AUTOLOGIN_SENDING_REQUEST: "actionsUser/ auto login request in progress",

    ADDRESS_FETCHING_STARTED: "actionsUser/ fetching address started",
    ADDRESS_FETCHING_SUCCESS: "actionsUser/ fetched address successfully",
    ADDRESS_FETCHING_FAILED: "actionsUser/  fetching address failed",
    ADDRESS_FETCHING_ENDED: "actionsUser/ fetching address ended",
    
    ADDRESS_SAVING_STARTED: "actionsUser/  saving address started",
    ADDRESS_SAVING_SUCCESS: "actionsUser/ saved address successfully",
    ADDRESS_SAVING_FAILED: "actionsUser/ saving address failed",
    ADDRESS_SAVING_ENDED: "actionsUser/ saving address ended",

});

export function  actionCreatorUserLogin(loginRequestBody, isLoginSuccessFullCallBack) {
    
    return function funcDispatch(dispatch) {
        
        dispatch(actionCreatorLogin());

        api.post("/login", loginRequestBody)
            .then(response => {
                dispatch(actionCreatorLoginSuccess(response.data));
                isLoginSuccessFullCallBack(true);
            })
            .catch(error => {
                dispatch(actionCreatorLoginFailed(error.message));
                isLoginSuccessFullCallBack(false);
            })
            .finally(() => {
                dispatch(actionCreatorLoginEnded());
            })
    }
}

function actionCreatorLogin() {
    return { type: eActionsUser.LOGIN_SENDING_REQUEST };
}

function actionCreatorLoginSuccess(data) {
    return {type: eActionsUser.LOGIN_REQUEST_SUCCESSFUL, payload: data}
}

function actionCreatorLoginFailed(error) {
    return {type: eActionsUser.LOGIN_REQUEST_FAILED, payload: error}
}

function actionCreatorLoginEnded() {
    return { type: eActionsUser.LOGIN_REQUEST_ENDED }
}

export function actionCreatorAutoLogin() {

    return function funcThunk(dispatch) {

        dispatch(actionCreatorLogin());

        api.get("/verify")
        .then(( response ) => {
            dispatch(actionCreatorLoginSuccess(response.data));
        })
        .catch(( error ) => {
            dispatch(actionCreatorLoginFailed(error.message));
        })
        .finally(( ) => {
            dispatch(actionCreatorLoginEnded());
        })
    }
}

export function actionCreatorFetchAddresses() {

    return function funcThunk(dispatch) {

        dispatch(actionCreatorFetchAddress());

        api.get("/user/address")
        .then((response) =>{
            dispatch(actionCreatorFetchingAddressSuccess(response.data));
        })
        .catch((error) =>{
            dispatch(actionCreatorFetchingAddressFail(error));
        })
        .finally(() => {
            dispatch(actionCreatorFetchAddressEnded())
        })
    }
}

function actionCreatorFetchAddress() {
    return { type: eActionsUser.ADDRESS_FETCHING_STARTED };
}

function actionCreatorFetchingAddressSuccess(addressList) {
    return { type: eActionsUser.ADDRESS_FETCHING_SUCCESS, payload: addressList };
}

function actionCreatorFetchingAddressFail(error) {
    return { type: eActionsUser.ADDRESS_FETCHING_FAILED, payload: error };
}

function actionCreatorFetchAddressEnded() {
    return { type: eActionsUser.ADDRESS_FETCHING_ENDED };
}

export function actionCreatorSaveAddress(address, cbIsSuccess) {

    return function funcThunk(dispatch) {

        dispatch(actionCreatorSavingAddressStarted());

        api.post("/user/address", address)
        .then((response) =>{
            dispatch(actionCreatorSavingAddressSuccess());
            cbIsSuccess(true);
        })
        .catch((error) =>{
            dispatch(actionCreatorSavingAddressFail(error));
            cbIsSuccess(false);
        })
        .finally(() => {
            dispatch(actionCreatorSavingAddressEnded())
        })
    }
}

function actionCreatorSavingAddressStarted() {
    return { type: eActionsUser.ADDRESS_SAVING_STARTED };
}

function actionCreatorSavingAddressSuccess() {
    return { type: eActionsUser.ADDRESS_SAVING_SUCCESS };
}

function actionCreatorSavingAddressFail(error) {
    return { type: eActionsUser.ADDRESS_FETCHING_FAILED, payload: error };
}

function actionCreatorSavingAddressEnded() {
    return { type: eActionsUser.ADDRESS_SAVING_ENDED };
}
}
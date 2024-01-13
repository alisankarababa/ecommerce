import { api } from "../../api/api";

export const eActionsUser = Object.freeze({
    LOGIN_SENDING_REQUEST: "actionsUser/ login request in progress",
    LOGIN_REQUEST_SUCCESSFUL: "actionsUser/ logged in successfully",
    LOGIN_REQUEST_FAILED: "actionsUser/ login failed",
    LOGIN_REQUEST_ENDED: "actionsUser/ login request finalized",
    
    AUTOLOGIN_SENDING_REQUEST: "actionsUser/ auto login request in progress",
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

        dispatch(actionCreatorAutoLoginStart());

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

function actionCreatorAutoLoginStart() {
    return { type: eActionsUser.AUTOLOGIN_SENDING_REQUEST };
}
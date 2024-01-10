import { api } from "../../api/api";

export const eActionsGlobal = Object.freeze({
    SET_THEME: "actionsGlobal/ got set theme order",
    SET_CATEGORIES: "actionsGlobal/ got set categories order",
    SET_LANGUAGE: "actionsGlobal/ got set language order",
    FETCHING_ROLES: "actionsGlobal/ fetching roles",
    FETCHED_ROLES_SUCCESSFUL: "actionsGlobal/ fetced roles successfully",
    FETCHING_ROLES_FAILED: "actionsGlobal/ fetching roles failed",
    FETCHING_ROLES_ENDED: "actionsGlobal/ fetching roles ended"
});

export function actionCreatorGlobalSetRoles(roles) {
    return { type: eActionsGlobal.SET_ROLES, payload: roles};
}

export function actionCreatorGlobalSetCategories(categories) {
    return { type: eActionsGlobal.SET_CATEGORIES, payload: categories };
}

export function actionCreatorGlobalSetLanguage(language) {
    return { type: eActionsGlobal.SET_LANGUAGE, payload: language };
}

export function actionCreatorGlobalSetTheme(theme) {
    return { type: eActionsGlobal.SET_THEME, payload: theme };
}

export function  actionCreatorGlobalFetchRoles() {
    
    return function funcDispatch(dispatch) {
        
        dispatch(actionCreatorGlobalFetchingRoles());

        api.get("/roles")
            .then(response => {
                dispatch(actionCreatorGlobalFethedRolesSuccessfully(response.data));
            })
            .catch(error => {
                dispatch(actionCreatorGlobalFetchingRolesFailed(error.message));
            })
            .finally(() => {
                dispatch(actionCreatorGlobalFetchingRolesEnded());
            })
    }
}

function actionCreatorGlobalFetchingRoles() {
    return { type: eActionsGlobal.FETCHING_ROLES };
}

function actionCreatorGlobalFethedRolesSuccessfully(data) {
    return {type: eActionsGlobal.FETCHED_ROLES_SUCCESSFUL, payload: data}
}

function actionCreatorGlobalFetchingRolesFailed(error) {
    return {type: eActionsGlobal.FETCHING_ROLES_FAILED, payload: error}
}

function actionCreatorGlobalFetchingRolesEnded() {
    return { type: eActionsGlobal.FETCHING_ROLES_ENDED }
}
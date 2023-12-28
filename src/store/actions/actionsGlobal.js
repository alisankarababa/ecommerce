export const eActionsGlobal = Object.freeze({
    SET_THEME: "actionsGlobal/ got set theme order",
    SET_CATEGORIES: "actionsGlobal/ got set categories order",
    SET_LANGUAGE: "actionsGlobal/ got set language order",
    SET_ROLES: "actionsGlobal/ got set roles order",
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
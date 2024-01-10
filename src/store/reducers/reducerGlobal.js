import { eActionsGlobal } from "../actions/actionsGlobal";

const initialState = {
    roles: [],
    categories: [],
    theme: "",
    language: "",
    errorRoles: "",
    areRolesLoading: false,
}

export default function reducerGlobal(state=initialState, action) {

    switch (action.type) {

        case eActionsGlobal.SET_THEME:
        
            return { ...state, theme: action.payload };

        case eActionsGlobal.SET_CATEGORIES:
            
            return { ...state, categories: action.payload };

        case eActionsGlobal.SET_LANGUAGE:

            return { ...state, language: action.payload };

        case eActionsGlobal.FETCHING_ROLES:

            return { ...state, errorRoles: "", areRolesLoading: true};
        
        case eActionsGlobal.FETCHED_ROLES_SUCCESSFUL:

            return { ...state, roles: action.payload };

        case eActionsGlobal.FETCHING_ROLES_FAILED:

            return { ...state, errorRoles: action.payload };

        case eActionsGlobal.FETCHING_ROLES_ENDED:

            return { ...state, areRolesLoading: false };
        
        default:
            return state;
    }
}
import { eActionsGlobal } from "../actions/actionsGlobal";

const initialState = {
    roles: [],
    categories: [],
    theme: "",
    language: "",
    errorRoles: "",
    areRolesLoading: false,
    errorCategories: null,
    areCategoriesLoading: false,
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
        
        case eActionsGlobal.FETCHING_CATEGORIES:

            return { ...state, errorCategories: null, areCategoriesLoading: true};;
        
        case eActionsGlobal.FETCHED_CATEGORIES_SUCCESSFUL:

            return { ...state, categories: action.payload };

        case eActionsGlobal.FETCHING_CATEGORIES_FAILED:

            return { ...state, errorCategories: action.payload };

        case eActionsGlobal.FETCHING_CATEGORIES_ENDED:

            return { ...state, areCategoriesLoading: false };

        default:
            return state;
    }
}
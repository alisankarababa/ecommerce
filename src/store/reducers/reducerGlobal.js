import { eActionsGlobal } from "../actions/actionsGlobal";

const initialState = {
    roles: [],
    categories: [],
    theme: "",
    language: "",
}

export default function reducerGlobal(state=initialState, action) {

    switch (action.type) {

        case eActionsGlobal.SET_THEME:
        
            return { ...state, theme: action.payload };

        case eActionsGlobal.SET_CATEGORIES:
            
            return { ...state, categories: action.payload };

        case eActionsGlobal.SET_LANGUAGE:

            return { ...state, language: action.payload };

        case eActionsGlobal.SET_ROLES:

            return { ...state, roles: action.payload }

        default:
            return state;
    }
}
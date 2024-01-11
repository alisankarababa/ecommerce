import {eActionsUser} from "../actions/actionsUser"


const initialState = {
    loggedInUser: null,
    errorLoggingIn: null,
    isLoggingInInProgress: false,
}

export default function reducerUser(state=initialState, action) {

    switch (action.type) {
        case eActionsUser.LOGIN_SENDING_REQUEST:
            return { ...state, errorLoggingIn: null, isLoggingInInProgress: true};

        case eActionsUser.LOGIN_REQUEST_SUCCESSFUL:
            return { ...state, loggedInUser: action.payload };

        case eActionsUser.LOGIN_REQUEST_FAILED:
            return { ...state, errorLoggingIn: action.payload };

        case eActionsUser.LOGIN_REQUEST_ENDED:
            return { ...state, isLoggingInInProgress: false };

        default:
            return state;
    }
}
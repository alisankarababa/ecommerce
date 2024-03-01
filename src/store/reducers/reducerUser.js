import {eActionsUser} from "../actions/actionsUser"
export const keyToken = "token";

const initialState = {
    loggedInUser: null,
    addressList: [],
    errorLoggingIn: null,
    isLoggingInInProgress: false,
    isFetchingAddress: false,
}

export default function reducerUser(state=initialState, action) {

    switch (action.type) {
        case eActionsUser.LOGIN_SENDING_REQUEST:
            return { ...state, errorLoggingIn: null, isLoggingInInProgress: true};

        case eActionsUser.LOGIN_REQUEST_SUCCESSFUL:
            return { ...state, loggedInUser: action.payload, token: action.payload.token };

        case eActionsUser.LOGIN_REQUEST_FAILED:
            return { ...state, errorLoggingIn: action.payload };

        case eActionsUser.LOGIN_REQUEST_ENDED:
            return { ...state, isLoggingInInProgress: false };

        case eActionsUser.AUTOLOGIN_SENDING_REQUEST:
            return { ...state, isLoggingInInProgress: true };

        case eActionsUser.ADDRESS_FETCHING_STARTED:
            return { ...state, isFetchingAddress: true };
        
        case eActionsUser.ADDRESS_FETCHING_SUCCESS:
            return { ...state, addressList: action.payload };

        case eActionsUser.ADDRESS_FETCHING_FAILED:
            console.log(action.payload);
            return state;

        case eActionsUser.ADDRESS_FETCHING_ENDED:
            return { ...state, isFetchingAddress: false };

        default:
            return state;
    }
}
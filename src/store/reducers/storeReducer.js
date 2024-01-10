import { eActionsStore } from "../actions/actionsStore";

const initialState = {};


export default function reducerStore(state=initialState, action) {

    switch (action.type) {

        case eActionsStore.SET_STORE:

            return action.payload;
            
        default:
            return state;
    }
}
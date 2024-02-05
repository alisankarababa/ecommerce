import { eActionsShoppingCart } from "../actions/actionsShoppingCart";


const initialState = {
    cart: [],
    payment: {},
    address: {}
};

export default function reducerShoppingCart(state=initialState, action) {

    switch (action.type) {

        case eActionsShoppingCart.SET_PAYMENT: 

            return { ...state, payment: action.payload };
            
        case eActionsShoppingCart.SET_ADDRESS: 

            return { ...state, address: action.payload };

        case eActionsShoppingCart.ADD_PRODUCT:
            
            const cartCopy = [ ...state.cart ];

            const foundCartItem = cartCopy.find( cartItem => cartItem.product.id === action.payload.id );
            if(foundCartItem) {
                ++foundCartItem.count;
                return { ...state, cart: cartCopy };
            }
            
            const cartAfterAddition = [ ...state.cart, { count: 1, product: action.payload } ];
            return { ...state, cart: cartAfterAddition};

        case eActionsShoppingCart.REMOVE_PRODUCT:

            const  cartAfterRemoval = [ ...state.cart ].filter( cartItem => cartItem.product.id !== action.payload );
            return { ...state, cart: cartAfterRemoval };

        case eActionsShoppingCart.INCREMENT_CNT_PRODUCT:
        
            const cartAfterIncrement =  [ ...state.cart ].map( cartItem => {

                if( cartItem.product.id === action.payload ) {

                    return { ...cartItem, count: cartItem.count + 1};
                }

                return cartItem;
            })

            return { ...state, cart: cartAfterIncrement };

        case eActionsShoppingCart.DECREMENT_CNT_PRODUCT:

            const cartAfterDecrement =  [ ...state.cart ].map( cartItem => {

                if( cartItem.product.id === action.payload ) {

                    return { ...cartItem, count: cartItem.count - 1 };
                }

                return cartItem;
            })

            return { ...state, cart: cartAfterDecrement };
    
        default:
            return state;
    }
}
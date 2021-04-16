
import { ACTION } from "../actionType/index"

let initialState = {
    cart: [],
    totalCartItem: 0,
    totalAmount: 0,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION.ADD_CART:
            return { ...state, cart: payload.cart, totalAmount: payload.total, totalCartItem: payload.totalCartItem };
        case ACTION.UPDATE_PRODUCT:
            return { ...state, productList: state.productList.map(pd => pd.id === payload.id ? payload : pd) }
        case ACTION.DELETE_CART:
            return { ...state, cart: payload.cart, totalAmount: payload.total, totalCartItem: payload.totalCartItem }
        case ACTION.INCREASE_PRODUCT:
            return { ...state, cart: payload.cart, totalAmount: payload.total, totalCartItem: payload.totalCartItem }
        case ACTION.DECREASE_PRODUCT:
            return { ...state, cart: payload.cart, totalAmount: payload.total, totalCartItem: payload.totalCartItem }
        default:
            return state;
    }
};

export default reducer;
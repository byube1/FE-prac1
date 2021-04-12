import {ACTION} from "../actionType/index"

let initialState = {
    productList: [],
  };

  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ACTION.SET_PRODUCT:
        return { ...state, productList: payload };
      case ACTION.CREATE_PRODUCT:
        return { ...state, productList: [...state.productList,payload] };
      default:
        return state;
    }
  };

  export default reducer;
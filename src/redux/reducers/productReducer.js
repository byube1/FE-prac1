import {SET_PRODUCT} from "../actionType/index"

let initialState = {
    productList: [],
  };

  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SET_PRODUCT:
        return { ...state, productList: payload };
      default:
        return state;
    }
  };

  export default reducer;